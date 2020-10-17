Oscilloscope - device, that displays 1d signals and 2d curves.
Analogue CRT oscilloscope uses electron gun that shoots electrons at screen and creates image. Electrons are deflected by magnetic or electric field according to input signal for X and Y coordinates.
To create an image similar to image from a screen of CRT oscilloscope we need to use some math.
Each curve is a result of continuous movement of point $\vec{p}(t)$ in time.
At each time instance this point illuminates a part of a screen and creates a bright spot according to some distribution of instantaneous intensity $i(t)$.
This distribution is radially symmetrical and is a function of distance from point on a screen $\vec{p}_{scr}=\text{vec}_2(x,y)$ to point $\vec{p}(t)$.

Expression for intensity could be simplified in case of a linear motion $\vec{p}(t) = \vec{p}_0 + (t-t_0) \frac{\vec{p}_1 - \vec{p}_0}{\Delta t}$ in interval $[t_0,t_0 + \Delta t]$
in local coordinate system with center $\vec{p}_0$ and axes $\vec{l}$ as $\vec{x}$ and $\vec{n}$ as $\vec{y}$ where:

$$
\vec{l}=\text{normalize}(\vec{p}_1-\vec{p}_0)\\
\vec{n}=\text{normalize}(\text{vec}_2(-\vec{p}_1.y+\vec{p}_0.y,\vec{p}_1.x-\vec{p}_0.x))
$$

$\vec{l}$ - tangent vector for line $(\vec{p_0},\vec{p_1})$, $\vec{n}$ - normal vector.

Also we dont care about which of two possible directions is used for normal $\vec{n}$ because we use $y^2$.

Expression for distance in local coordinate system:

$$
\vec{p}_{scr} = \text{vec}_2(\text{dot}(\vec{p}_{loc}-\vec{p}_0,\vec{l}),\text{dot}(\vec{p}_{loc}-\vec{p}_0,\vec{n})) = \text{vec}_2(x_{loc},y_{loc}) \\
r(t,\vec{p}_{loc})=\sqrt{(\frac{t-t_0}{\Delta t}d - x_{loc})^2+y_{loc}^2}\\
d = \|\vec{p}_1-\vec{p}_0\|
$$

Expression for intensity at time $t$ for $\vec{p}_{scr}$ and $\vec{p}(t)$:

$$
i(t)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r(t,\vec{p}_{loc})^2}{2\sigma^2}}
$$ 

Image should gradually fade with time.

The simplest way to model it - exponential fade.

Intensity of image $S$ at time $T + \Delta T$ with fade:

$$
S(T+\Delta T) = S(T)e^{-f\Delta T},
$$

  where $f$ - fade coefficient. Big value of $f$ makes image fade faster.

This model of fade is very good and it can be used easily for values of $S$ available only at descrete moments of time.

Let say that we have image $S_j(\vec{p}_{scr})$ and we want to compute image $S_{j+1}(\vec{p}_{scr})$. We work with raster image, so we only will calculate values for descrete point in 2d space of the screen.
Formula for image at next frame $j+1$ that also considers fade:

$$
I(\vec{p}_{scr}) = \int_{T}^{T+\Delta T} i(t) e^{-f (T + \Delta T - t)} dt\\
S_{j+1}(\vec{p}_{scr})=S_{j}(\vec{p}_{scr})e^{-f \Delta T}+I(\vec{p}_{scr})
$$

We could also use simplified formula that doesn't consider fade of lines produced during last frame:

$$
I(\vec{p}_{scr}) = \int_{T}^{T+\Delta T} i(t) dt\\
S_{j+1}(\vec{p}_{scr})=S_{j}(\vec{p}_{scr})e^{-f \Delta T} + I(\vec{p}_{scr})
$$


![example](https://drive.google.com/uc?id=106uizvMSI3K5duplAgYUSyJwmAeVXSBi "example")

[figure]
**Fig. 1** - Render of square wave with exponential intensity in Shadertoy
[/figure]

The brightness of a line segment depends on a speed of the moving point. The differences between simplified and full formulas at certain speeds are unnoticable.

# Intensity distributions

## Exponential distribution

Point intensity:

$
i(t)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r(t,\vec{p}_{loc})^2}{2\sigma^2}}
$

Parameter $\sigma$ (dispersion) changes size of a spot.

![gaussian](https://drive.google.com/uc?id=1WlhUhLsVh0TmKWuZEL6V8XtXvFXu8QHB "gaussian")

[figure]
**Fig. 2** - Gaussian distribution with different values of parameter
[/figure]

Formula with fade:

$
I(\vec{p}_{scr}) = \frac{1}{2d} e^{\frac{(f \Delta t \sigma)^2}{2d^2}} e^{\frac{f \Delta t (x_{loc}-d)}{d}} e^{-\frac{y_{loc}^2}{2 \sigma^2}} (\text{erf}(\frac{d x_{loc}+ f \Delta t \sigma^2}{\sqrt{2} d \sigma})-\text{erf}(\frac{f \Delta t \sigma^2+d (x_{loc}-d)}{\sqrt{2} d \sigma}))
$

$\text{erf}(x)$ - error function, could be approximated with really good precision.

![error function](https://drive.google.com/uc?id=1oTHhVXYVBDweXrQM0zz9cfy8cXQYagqt "error function")

[figure]
**Fig. 3** - Error function
[/figure]

Simplified formula:

$
I(\vec{p}_{scr}) = \frac{1}{2d} e^{-\frac{y_{loc}^2}{2 \sigma^2}} (\text{erf}(\frac{x_{loc}}{\sqrt{2}\sigma})-\text{erf}(\frac{x_{loc}-d}{\sqrt{2}\sigma})
$

![chua's circuit](https://drive.google.com/uc?id=1kWLQ5kbfnAwU8UMJVAdSrOJgwr-J7Xse "chua's circuit")

[figure]
**Fig. 4** - Render of chua's circuit dif. equation with exponential intensity
[/figure]

Code in *glsl*:

```glsl
//Error function
float erf(float x)
{
    float s = sign(x), a = abs(x);
    x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
    x *= x;
    return s - s / (x * x);
}
//Simplified formula
float intensity(float d,vec2 p,float sigma)
{
    float f = 1.0/(sqrt(2.)*sigma);
    return (erf(p.x*f)-erf((p.x-d)*f))
    *exp(-p.y*p.y/(2.*sigma*sigma))/(2.*d);
}
//Full formula with fade
float intensityFade(float d,vec2 p,float sigma,float dt,float fadeRate)
{
    float f = 1.0/(sqrt(2.)*d*sigma);
    float fd = fadeRate*dt;
    return (erf((p.x*d+fd*sigma*sigma)*f)-erf(((p.x-d)*d+fd*sigma*sigma)*f))
	*exp(-p.y*p.y/(2.*sigma*sigma))
        *exp(fd*(fd*sigma*sigma*0.5/d+(p.x-d))/d)/(2.*d);
}
```

## Cauchy distribution

Point intensity:

$
i(t)=\frac{k}{\pi (k^2\cdot r(t,\vec{p}_{loc})^2+1)}
$

Parameter $k$ changes shape of a spot.

![inverse square](https://drive.google.com/uc?id=1FLMOEhV3otUAeyYj6FUprhZhD0GzAob_ "inverse square")

[figure]
**Fig. 5** - Cauchy distribution with different values of parameter
[/figure]

Simplified formula:

$
I(\vec{p}_{scr}) = \frac{1}{d\cdot\pi \sqrt{y_{loc}^2\cdot k^2 + 1}}(\text{atan}(\frac{k\cdot x_{loc}}{\sqrt{y_{loc}^2\cdot k^2 + 1}})-\text{atan}(\frac{k\cdot (x_{loc}-d)}{\sqrt{y_{loc}^2\cdot k^2 + 1}}))
$

![chua's circuit](https://drive.google.com/uc?id=1FmPlAdFkaPXtuBebJpo2KykUb1HgQD9k "chua's circuit")

[figure]
**Fig. 6** - Render of chua's circuit dif. equation with Cauchy distribution intensity
[/figure]

Code in *glsl*:

```glsl
//Simplified formula
float intensity(float d,vec2 p,float k)
{
    float s = 1./sqrt(pow(p.y*k,2.)+1.);
    return s*(atan(k*p.x*s)-atan(k*(p.x-d)*s))/(PI * d);
}
```


# Fade functions

$$
x_i = f(x_{i-1},\Delta t_i) = f(x_{i-2},\Delta t_i + \Delta t_{i-1}) = f(x_{i-j},\sum_{k=0}^{j-1}\Delta t_{i-k})
$$

$$
\begin{align}
&\frac{dx}{dt} = f(x)\\
&\int{\frac{dx}{f(x)}} = \int{dt}\\
&F(x) = t + C\\
&x = F^{-1}(t+C)\\
&C = F(x_0)\\
&x = F^{-1}(t + F(x_0))\\
&x_i = F^{-1}(\Delta t_i + F(x_{i-1}))
\end{align}
$$

## Exponential

$$
\begin{align}
&f(x) = a\cdot x, a<0\\
&F(x) = \frac{1}{a}\text{ln}(x)\\
&x = x_0\cdot e^{a\cdot t}\\
&x_i = x_{i-1}\cdot e^{a\cdot \Delta t_i}
\end{align}
$$

## Reciprocal

$$
\begin{align}
&f(x) = a\cdot x^2, a<0\\
&F(x) = -\frac{1}{a\cdot x}\\
&x = \frac{x_0}{1 - a\cdot t\cdot x_0}\\
&x_i = \frac{x_{i-1}}{1 - a\cdot \Delta t_i\cdot x_{i-1}}\\
\end{align}
$$

## Square root of reciprocal

$$
\begin{align}
&f(x) = a\cdot x^3\\
&F(x) = -\frac{1}{2a\cdot x^2}\\
&x = \sqrt{\frac{x_0}{1-2a \cdot t\cdot x_0^2}}\\
&x_i = \sqrt{\frac{x_{i-1}}{1-2a \cdot \Delta t_i\cdot x_{i-1}^2}}
\end{align}
$$


## Square function

$$
\begin{align}
&f(x) = a\sqrt{x}, a<0\\
&F(x) = \frac{2}{a}\sqrt{x}\\
&x = 
\begin{cases}\frac{(a\cdot t + 2 \sqrt{x_0})^2}{4}, t\le-\frac{2}{a}\sqrt{x_0})\\
0
\end{cases}\\
&x_i = 
\begin{cases}\frac{(a\cdot \Delta t_i + 2 \sqrt{x_{i-1}})^2}{4}, \Delta t_i\le-\frac{2}{a}\sqrt{x_{i-1}})\\
0
\end{cases}
\end{align}
$$

## Exponential squared

$$
\begin{align}
&f(x) = a\cdot x \sqrt{-\text{ln}(x)},a<0,x\le1\\
&F(x) = -\frac{2}{a}\sqrt{-\text{ln}(x)}\\
&x = e^{-(\frac{a\cdot t}{2} - \sqrt{-\text{ln}(x_0)})^2}\\
&x_i = e^{-(\frac{a\cdot \Delta t_i}{2} - \sqrt{-\text{ln}(x_{i-1})})^2}
\end{align}
$$

## Log-exponential

$$
\begin{align}
&f(x) = e^{-a\cdot x} - 1\\
&F(x) = -\frac{1}{a}\text{ln}(1-e^{a\cdot x})\\
&x = \frac{1}{a}\text{ln}(1 - e^{-a\cdot t}\cdot(1-e^{a\cdot x_0}))\\
&x_i = \frac{1}{a}\text{ln}(1 - e^{-a\cdot \Delta t_i}\cdot(1-e^{a\cdot x_{i-1}}))
\end{align}
$$

## Linear and square root

$$
\begin{align}
&f(x) = a \frac{x^2}{x^2 + 1}\\
&F(x) = \frac{x^2 - 1}{a\cdot x}\\
&x = \frac{1}{2}((a\cdot t + \frac{x_0^2 - 1}{x_0}) - \sqrt{(a\cdot t + \frac{x_0^2 - 1}{x_0})^2 + 4})\\
&x_i = \frac{1}{2}((a\cdot \Delta t_i + \frac{x_{i-1}^2 - 1}{x_{i-1}}) - \sqrt{(a\cdot t_i + \frac{x_{i-1}^2 - 1}{x_{i-1}})^2 + 4})
\end{align}
$$
