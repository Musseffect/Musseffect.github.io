Oscilloscope - device, that displays 1d signals and 2d curves.
Analogue CRT oscilloscope uses electron gun that shoots electrons at screen and creates image. Electrons are deflected by magnetic or electric field according to input signal for X and Y coordinates.
To create an image similar to image from a screen of CRT oscilloscope we need to use some math.
Each curve is a result of continuous movement of point $\vec{p}(t)$ in time.
At each time instance this point illuminates a part of a screen and creates a bright spot according to some distribution of instantaneous intensity.
This distribution is radially symmetrical and is a function of distance from point on a screen $\vec{p}_{scr}=\text{vec2}(x,y)$ to point $\vec{p}(t)$.

Good example of realistic distribution is normal distribution with zero mean:

$$
i_{radial}(r)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r^2}{2\sigma^2}}\\
r(\vec{p}(t),\vec{p}_{scr})=\sqrt{({(\vec{p}(t).x-x)}^2+{(\vec{p}(t).y-y)}^2}
$$

Parameter $\sigma$ (dispersion) changes size of a spot.

![gaussian](https://drive.google.com/uc?id=1WVYCcr10coVR0wyPx6NfsaYvC2F5j5IG "gaussian")

[figure]
**Fig. 1** - Gaussian distribution with unit dispersion
[/figure]

Expression for intensity could be simplified in case of a linear motion $\vec{p}(t) = \vec{p}_0 + (t-t_0) \frac{\vec{p}_1 - \vec{p}_0}{\Delta t}$ in interval $[t_0,t_0 + \Delta t]$
in local coordinate system with center $\vec{p}_0$ and axes $\vec{l}$ as $\vec{x}$ and $\vec{n}$ as $\vec{y}$ where:

$$
\vec{l}=\text{normalize}(\vec{p}_1-\vec{p}_0)\\
\vec{n}=\text{normalize}(\text{vec2}(-\vec{p}_1.y+\vec{p}_0.y,\vec{p}_1.x-\vec{p}_0.x))
$$

$\vec{l}$ - tangent vector for line $(\vec{p_0},\vec{p_1})$, $\vec{n}$ - normal vector.

Also we dont care about which of two possible directions is used for normal $\vec{n}$ because we use $y^2$.

Expression for distance in local coordinate system:

$$
\vec{p}_{scr} = \text{vec2}(\text{dot}(\vec{p}_{loc}-\vec{p}_0,\vec{l}),\text{dot}(\vec{p}_{loc}-\vec{p}_0,\vec{n})) = \text{vec2}(x_{loc},y_{loc}) \\
r(t,\vec{p}_{loc})=\sqrt{(\frac{t-t_0}{\Delta t}d - x_{loc})^2+y_{loc}^2}\\
d = \|\vec{p}_1-\vec{p}_0\|
$$

Expression for intensity at time $t$ for $\vec{p}_{scr}$ and $\vec{p}(t)$:

$$
i(t)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r(t,\vec{p}_{loc})^2}{2\sigma^2}}
$$ 

Image should gradually fade with time.

The simplest way to model it - exponential fading.

Intensity of image $S$ at time $T + \Delta T$ with fading:

$$
S(T+\Delta T) = S(T)e^{-f\Delta T},
$$

  where $f$ - fading coefficient. Big value of $f$ makes image fade faster.

This model of fading is very good and it can be used easily for values of $S$ available only at descrete moments of time.

Let say that we have image $S_j(\vec{p}_{scr})$ and we want to compute image $S_{j+1}(\vec{p}_{scr})$. We work with raster image, so we only will calculate values for descrete point in 2d space of the screen.
Formula for image at next frame $j+1$ that also considers fading:

$$
I_{full}(\vec{p}_{scr}) = \int_{T}^{T+\Delta T} i(t) e^{-f (T + \Delta T - t)} dt\\
S_{j+1}(\vec{p}_{scr})=S_{j}(\vec{p}_{scr})e^{-f \Delta T}+I_{full}(\vec{p}_scr)
$$

Analytical solution of integral:

$$
I_{full}(\vec{p}_{scr}) = \frac{1}{2d} e^{\frac{(f \Delta t \sigma)^2}{2d^2}} e^{\frac{f \Delta t (x_{loc}-d)}{d}} e^{-\frac{y_{loc}^2}{2 \sigma^2}} (\text{erf}(\frac{d x_{loc}+ f \Delta t \sigma^2}{\sqrt{2} d \sigma})-\text{erf}(\frac{f \Delta t \sigma^2+d (x_{loc}-d)}{\sqrt{2} d \sigma}))
$$

$\text{erf}(x)$ - error function, could be approximated with really good precision.

![errorfunc](https://drive.google.com/uc?id=1oTHhVXYVBDweXrQM0zz9cfy8cXQYagqt "error function")

[figure]
**Fig. 2** - Error function
[/figure]

We could use simplified formula that doesn't consider fading of lines produced during last frame:

$$
I_{simple}(\vec{p}_{scr}) = \int_{T}^{T+\Delta T} i(t) dt\\
S_{j+1}(\vec{p}_{scr})=S_{j}(\vec{p}_{scr})e^{-f \Delta T} + I_{simple}(\vec{p}_{scr})
$$

Analytical solution of integral:

$$
I_{simple}(\vec{p}_{scr}) = \frac{1}{2d} e^{-\frac{y_{loc}^2}{2 \sigma^2}} (erf(\frac{x_{loc}}{\sqrt{2}\sigma})-erf(\frac{x_{loc}-d}{\sqrt{2}\sigma})
$$

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
//Full formula with fading
float intensityFading(float d,vec2 p,float sigma,float dt,float fadeRate)
{
    float f = 1.0/(sqrt(2.)*d*sigma);
    float fd = fadeRate*dt;
	return (erf((p.x*d+fd*sigma*sigma)*f)-erf(((p.x-d)*d+fd*sigma*sigma)*f))
	*exp(-p.y*p.y/(2.*sigma*sigma))
        *exp(fd*(fd*sigma*sigma*0.5/d+(p.x-d))/d)/(2.*d);
}
```
![example](https://drive.google.com/uc?id=106uizvMSI3K5duplAgYUSyJwmAeVXSBi "example")

[figure]
**Fig. 3** - Example in Shadertoy
[/figure]

The brightness of a line segment depends on a speed of the moving point. The differences between simplified and full formulas at certain speeds are unnoticable.

# Intensity distributions

## Exponential distribution

$$
i(t)=\frac{1}{\sigma \sqrt{2\pi}}e^{-\frac{r(t,\vec{p}_{loc})^2}{2\sigma^2}}
$$


## Inverted square

$$
i(t)=\frac{k}{\pi (k^2\cdot r(t,\vec{p}_{loc})^2+1)}\\
I_{simple}(\vec{p}_{scr}) = \frac{1}{d\cdot\pi \sqrt{y_{loc}^2\cdot k^2 + 1}}(\text{atan}(\frac{k\cdot x_{loc}}{\sqrt{y_{loc}^2\cdot k^2 + 1}})-\text{atan}(\frac{k\cdot (x_{loc}-d)}{\sqrt{y_{loc}^2\cdot k^2 + 1}}))
$$