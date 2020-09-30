Осциллографы - устройства, использующиеся для отображения одномерных сигналов и двухмерных кривых.
В аналоговом CRT осциллографе происходит обстрел люминисцентного экрана пушкой, излучающей электроны. Электроны отклоняются магнитным или электрическим полем в соответствии с входным сигналом по X И Y координатам.
Для того, чтобы нарисовать изображение, похожее на картинку с экрана аналогового осциллографа нужно использовать немного маг, тьфу,  математики.
Каждая кривая является результатом непрерывного движения точки $\vec{p}(t)$ в каком-то промежутке времени. 
Каждое мгновение эта точка освещает поверхность экрана и образует пятно в соответствии с каким-то распределением мгновенной интенсивности.
Это распределение должно зависить только от расстояния между точкой на поверхности экрана $\vec{p}_{scr}=\text{vec}_2(x,y)$ и двигающейся точкой $\vec{p}(t)$.

Выражение для интенсивности можно упростить, рассматривая только линейное движение $\vec{p}(t) = \vec{p}_0 + (t-t_0) \frac{\vec{p}_1 - \vec{p}_0}{\Delta t}$ для интервала $[t_0,t_0 + \Delta t]$ в локальной системе координат с центром $\vec{p}_0$ и направлениями $\vec{l}$ в качестве оси $\vec{x}$ и $\vec{n}$ в качестве оси $\vec{y}$, где:

$$
\vec{l}=\text{normalize}(\vec{p}_1-\vec{p}_0)\\
\vec{n}=\text{normalize}(\text{vec}_2(-\vec{p}_1.y+\vec{p}_0.y,\vec{p}_1.x-\vec{p}_0.x))
$$

$\vec{l}$ - вектор направления линии $(\vec{p_0},\vec{p_1})$, $\vec{n}$ - вектор нормали.

Знак координаты $y$ не имеет значения, поскольку в формуле расстояния используется $y^2$.

В локальной системе координат выражение для расстояния:

$$
\vec{p}_{scr} = \text{vec}_2(\text{dot}(\vec{p}_{loc}-\vec{p}_0,\vec{l}),\text{dot}(\vec{p}_{loc}-\vec{p}_0,\vec{n})) = \text{vec}_2(x_{loc},y_{loc}) \\
r(t,\vec{p}_{loc})=\sqrt{(\frac{t-t_0}{\Delta t}d - x_{loc})^2+y_{loc}^2}\\
d = \|\vec{p}_1-\vec{p}_0\|
$$

Таким образом интенсивность в момент времени $t$ для $\vec{p}_{scr}$ и $\vec{p}(t)$:

$$
i(t)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r(t,\vec{p}_{loc})^2}{2\sigma^2}}
$$ 

Изображение на экране должно постепенно затухать.

Самый простой способ это реализовать - экспоненциальное затухание.

Интенсивность изображения $i$ в момент времени $T + \Delta T$:

$$
i(T+\Delta T) = i(T)e^{-f\Delta T},
$$

  где $f$ - коэффициент затухания. Чем $f$ больше, тем быстрее затухает изображение, если его перестать подсвечивать.

Этот способ затухания удобен, поскольку выполняется $S(T+\Delta T_1 + \Delta T_2) = S(t)e^{-f(\Delta T_1 - \Delta T_2)}$.

Допустим мы знаем изображение $S_j(\vec{p}_{scr})$ в прошлый момент времени $t_j$ и хотим получить изображение  $S_{j+1}(\vec{p}_{scr})$ в момент времени $t_{j+1}$. Поскольку на компьютере мы работаем с растровыми изображениями, то будем считать значения только для отдельных дискретных точек.
Формула для расчёта цвета экрана с учётом затухания изображения и линий, нарисованных за последний кадр:

$$
I(\vec{p}_{scr}) = \int_{T}^{T+\Delta T} i(t) e^{-f (T + \Delta T - t)} dt\\
S_{j+1}(\vec{p}_{scr})=S_{j}(\vec{p}_{scr})e^{-f \Delta T}+I(\vec{p}_{scr})
$$

Можно использовать упрощённую формулу, моделирующую мгновенную отрисовку линий ровно в момент $t_j$:

$$
I(\vec{p}_{scr}) = \int_{T}^{T+\Delta T} i(t) dt\\
S_{j+1}(\vec{p}_{scr})=S_{j}(\vec{p}_{scr})e^{-f \Delta T} + I(\vec{p}_{scr})
$$

![example](https://drive.google.com/uc?id=106uizvMSI3K5duplAgYUSyJwmAeVXSBi "example")

[figure]
**Fig. 1** - Изображение меандра с использованием нормального распределения интенсивности
[/figure]

Яркость сегмента линии зависит от скорости движения точки, то есть от отношения $||\vec{p}_1 - \vec{p}_0||$ к $\Delta T$.

# Распределения интенсивности

## Нормальное распределение

Интенсивность точки:

$
i(t)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r(t,\vec{p}_{loc})^2}{2\sigma^2}}
$

Параметр $\sigma$ (дисперсия) регулирует размер пятна.

![gaussian](https://drive.google.com/uc?id=1WlhUhLsVh0TmKWuZEL6V8XtXvFXu8QHB "gaussian")

[figure]
**Рис. 1** - Гауссиана с различными значениями дисперсии
[/figure]

Формула с затуханием:

$
I(\vec{p}_{scr}) = \frac{1}{2d} e^{\frac{(f \Delta t \sigma)^2}{2d^2}} e^{\frac{f \Delta t (x_{loc}-d)}{d}} e^{-\frac{y_{loc}^2}{2 \sigma^2}} (\text{erf}(\frac{d x_{loc}+ f \Delta t \sigma^2}{\sqrt{2} d \sigma})-\text{erf}(\frac{f \Delta t \sigma^2+d (x_{loc}-d)}{\sqrt{2} d \sigma}))
$

$\text{erf}(x)$ - функция ошибки, её можно вычислить приближённо с хорошей точностью.

![error function](https://drive.google.com/uc?id=1oTHhVXYVBDweXrQM0zz9cfy8cXQYagqt "error function")

[figure]
**Fig. 3** - Функция ошибки
[/figure]

Упрощённая формула:

$
I(\vec{p}_{scr}) = \frac{1}{2d} e^{-\frac{y_{loc}^2}{2 \sigma^2}} (\text{erf}(\frac{x_{loc}}{\sqrt{2}\sigma})-\text{erf}(\frac{x_{loc}-d}{\sqrt{2}\sigma})
$

![chua's circuit](https://drive.google.com/uc?id=1kWLQ5kbfnAwU8UMJVAdSrOJgwr-J7Xse "chua's circuit")

[figure]
**Fig. 4** - Изображение аттрактора, полученное с использованием нормального распределения интенсивности
[/figure]

Код в *glsl*:

```glsl
//Функция ошибки
float erf(float x)
{
    float s = sign(x), a = abs(x);
    x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
    x *= x;
    return s - s / (x * x);
}
//Упрощённая формула
float intensity(float d,vec2 p,float sigma)
{
    float f = 1.0/(sqrt(2.)*sigma);
    return (erf(p.x*f)-erf((p.x-d)*f))
    *exp(-p.y*p.y/(2.*sigma*sigma))/(2.*d);
}
//Полная формула
float intensityFading(float d,vec2 p,float sigma,float dt,float fadeRate)
{
    float f = 1.0/(sqrt(2.)*d*sigma);
    float fd = fadeRate*dt;
    return (erf((p.x*d+fd*sigma*sigma)*f)-erf(((p.x-d)*d+fd*sigma*sigma)*f))
	*exp(-p.y*p.y/(2.*sigma*sigma))
        *exp(fd*(fd*sigma*sigma*0.5/d+(p.x-d))/d)/(2.*d);
}
```

## Распределение Коши

Интенсивность точки:

$
i(t)=\frac{k}{\pi (k^2\cdot r(t,\vec{p}_{loc})^2+1)}
$

Параметр $k$ контролирует форму распределения.

![inverse square](https://drive.google.com/uc?id=1FLMOEhV3otUAeyYj6FUprhZhD0GzAob_ "inverse square")

[figure]
**Fig. 5** - Вид распределения при различных значениях параметра
[/figure]

Упрощённая формула:

$
I(\vec{p}_{scr}) = \frac{1}{d\cdot\pi \sqrt{y_{loc}^2\cdot k^2 + 1}}(\text{atan}(\frac{k\cdot x_{loc}}{\sqrt{y_{loc}^2\cdot k^2 + 1}})-\text{atan}(\frac{k\cdot (x_{loc}-d)}{\sqrt{y_{loc}^2\cdot k^2 + 1}}))
$

![chua's circuit](https://drive.google.com/uc?id=1FmPlAdFkaPXtuBebJpo2KykUb1HgQD9k "chua's circuit")

[figure]
**Fig. 6** - Изображение аттрактора
[/figure]

Код в *glsl*:

```glsl
float intensity(float d,vec2 p,float k)
{
    float s = 1./sqrt(pow(p.y*k,2.)+1.);
    return s*(atan(k*p.x*s)-atan(k*(p.x-d)*s))/(PI * d);
}
```