Metric: $ds^2 = g_{\alpha\beta}dx^{\alpha}dx^{\beta}$

Metric tensor: $g^{\alpha\beta}$

Geodesic:  $\ddot{x}^{\gamma} = - \Gamma^{\gamma}_{\alpha\beta}\dot{x}^{\alpha}\dot{x}^{\beta}$

Inverse metric tensor: $g^{\alpha\beta}, \hspace{1em} g_{\mu\alpha}g^{\mu\beta} = \delta_{\alpha}^{\beta}$

Christoffel symbols of the first kind: $\Gamma_{\alpha\beta\gamma}  = \frac{1}{2}(g_{\alpha\beta,\gamma} + g_{\alpha\gamma,\beta} - g_{\beta\gamma,\alpha})$

$g_{\alpha\beta\gamma} = \frac{\partial g_{\alpha\beta}}{\partial x^{\gamma}}$

Christoffel symbols of the second kind: $\Gamma^{\alpha}_{\beta\gamma} = g^{\alpha\mu}\Gamma_{\mu\beta\gamma}$

# Scwarzchild
$$
\begin{align}
x^0 &= t \\ x^1 &= r \\ x^2 &= \theta \\ x^3 &= \phi \\
ds^2 &= -c^2(1-\frac{r_s}{r}) dt^2 + \frac{r}{r-r_s} dr^2 + r^2 d\theta^2 + r^2 \text{sin}^2(\theta)d\phi^2\\
g &= \begin{bmatrix} 
-c^2(1-\frac{r_s}{r}) & 0 & 0 & 0 \\
 0 & \frac{r}{r-r_s} & 0 & 0 \\
 0 & 0 & r^2 & 0 \\
 0 & 0 & 0 & r^2 \text{sin}^2(\theta)
\end{bmatrix} \\
r_s &= \frac{2GM}{c^2}
\end{align}
$$

Inverse metric tensor: 

$$
\begin{bmatrix} 
-\frac{r}{c^2(r-r_s)} & 0 & 0 & 0 \\
 0 & 1-\frac{r_s}{r} & 0 & 0 \\
 0 & 0 & r^{-2} & 0 \\
 0 & 0 & 0 & r^{-2} \text{sin}^{-2}(\theta)
\end{bmatrix}
$$

Derivatives:

$$
\begin{align}
g_{tt,r} &= -\frac{r_s}{r^2}c^2\\
g_{rr,r} &= -\frac{r_s}{r-r_s}\\
g_{\theta\theta,r} &= 2r\\
g_{\phi\phi,r} &= 2r \text{sin}(\theta)\\
g_{\phi\phi,\theta} &= 2r^2 \text{sin}(\theta)\text{cos}(\theta)
\end{align}
$$

Non-zero Christoffel symbols of the first kind:

$$
\begin{align}
\Gamma_{trt} &= \Gamma_{ttr} = -\frac{r_s}{2r^2} c^2\\
\Gamma_{rtt} &= \frac{r_s}{2r^2} c^2\\
\Gamma_{rrr} &= -0.5r_s(1-\frac{r_s}{r})^{-2}r^{-2}\\
\Gamma_{r\theta\theta} &= -r\\
\Gamma_{r\phi\phi} &= -r \text{sin}^2(\theta)\\
\Gamma_{\theta\theta r} &=\Gamma_{\theta r\theta} = r\\
\Gamma_{\theta\phi\phi} &= -r^\text{sin}(\theta)\text{cos}(\theta)\\
\Gamma_{\phi\phi\theta} &= \Gamma_{\phi\theta\phi} = r^2 \text{sin}(\theta)\text{cos}(\theta)\\
\Gamma_{\phi\phi r} &= \Gamma_{\phi r\phi} = r \text{sin}^2(\theta)
\end{align}
$$

Non-zero Christoffel symbols of the second kind

$$
\begin{align}
\Gamma_{rt}^{t} &= \Gamma_{tr}^{t} = \frac{r_s}{2r(r-r_s)}\\
\Gamma_{rr}^{r} &= -\frac{r_s}{2r(r-r_s)}\\
\Gamma_{tt}^{r} &= \frac{r_s(r-r_s)c^2}{2r^3}\\
\Gamma_{\phi\phi}^{r} &= (r_s - r)\text{sin}^2(\theta)\\
\Gamma_{\theta\theta}^{r} &= r_s - r \\
\Gamma_{\theta r}^{\theta} &= \Gamma_{r \theta}^{\theta} = \frac{1}{r}\\
\Gamma_{\phi\phi}^{\theta} &= -\text{sin}(\theta)\text{cos}(\theta)\\
\Gamma_{\phi \theta}^{\phi} &= \Gamma_{\theta \phi}^{\phi} = \text{cot}(\theta)\\
\Gamma_{\phi r}^{\phi} &= \Gamma_{r \phi}^{\phi} = \frac{1}{r}
\end{align}
$$

Geodesic:

$$
\begin{align}
\ddot{t} &= -\frac{r_s}{r(r-r_s)}\dot{r}\dot{t}\\
\ddot{r} &= \frac{r_s}{2r(r-r_s)}\dot{r}^2 - \frac{r_s(r-r_s)c^2}{2r^3}\dot{t}^2 - (r_s - r)\text{sin}^2(\theta)\dot{\phi}^2 - (r_s - r)\dot{\theta}^2\\
\ddot{\theta} &= -\frac{2}{r}\dot{\theta}\dot{r} + \text{sin}(\theta)\text{cos}(\theta)\dot{\phi}^2\\
\ddot{\phi} &= -\frac{2}{r}\dot{\phi}\dot{r} - 2\text{cot}(\theta)\dot{\phi}\dot{\theta}
\end{align}
$$

# Alcubierre warp drive
$$
\begin{align}
x^0 &= t \\ x^0 &= x \\ x^0 &= y \\ x^0 &= z \\
ds^2 &= (v_s^2 f(r_s(t))^2 - 1)dt^2 - 2v_s f(r_s(t))dxdt + dx^2 + dy^2 + dt^2\\
g &= \begin{bmatrix}
v_s^2 f(r_s(t))^2 - 1 & - v_s f(r_s(t)) & 0 & 0\\
- v_s f(r_s(t)) & 1 & 0 & 0\\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} \\
v_s &= \frac{dx_s}{dt}\\
r_s(t) &= \sqrt{(x-x_s(t))^2 + y^2 + z^2}\\
f(r) &= \frac{\text{tanh}(\sigma(r + R)) - \text{tanh}(\sigma(r-R))}{2\text{tanh}(\sigma R)}
\end{align}
$$

$v_s$ - velocity, $R$ - radius, $\sigma$ - thickness

Inverse metric tensor: 

$$
\begin{bmatrix}
-1 & - v_s f(r_s(t)) & 0 & 0\\
- v_s f(r_s(t)) & -(v_s^2 f(r_s(t))^2 - 1) & 0 & 0\\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

Derivatives:

$$
\begin{align}
g_{tt,t} &= 2v_s^2 f f_t'\\
g_{tt,x} &= 2v_s^2 f f_x'\\
g_{tt,y} &= 2v_s^2 f f_y'\\
g_{tt,z} &= 2v_s^2 f f_z'\\
g_{tx,t} &= g_{xt,t} = -v_s f_t'\\
g_{tx,x} &= g_{xt,x} = -v_s f_x'\\
g_{tx,y} &= g_{xt,y} = -v_s f_y'\\
g_{tx,z} &= g_{xt,z} = -v_s f_z'
\end{align}
$$

Non-zero Christoffel symbols of the first kind:

$$
\begin{align}
\Gamma_{ttt} &= \frac{1}{2}g_{tt,t}\\
\Gamma_{ttx} &= \Gamma_{txt} = \frac{1}{2}g_{tt,x}\\
\Gamma_{tty} &= \Gamma_{tyt} = \frac{1}{2}g_{tt,y}\\
\Gamma_{ttz} &= \Gamma_{tzt} = \frac{1}{2}g_{tt,z}\\
\Gamma_{txx} &= g_{tx,x}\\
\Gamma_{txy} &= \Gamma_{tyx} = \frac{1}{2}g_{tx,y}\\
\Gamma_{txz} &= \Gamma_{tzx} = \frac{1}{2}g_{tx,z}\\
\Gamma_{xtt} &= g_{tx,t} - \frac{1}{2}g_{tt,x}\\
\Gamma_{xty} &= \Gamma_{xyt} = \frac{1}{2} g_{tx,y}\\
\Gamma_{xtz} &= \Gamma_{xzt} = \frac{1}{2} g_{tx,z}\\
\Gamma_{ytt} &= -\frac{1}{2}g_{tt,y}\\
\Gamma_{ytx} &= \Gamma_{yxt} = -\frac{1}{2}g_{tx,y}\\
\Gamma_{ztt} &= -\frac{1}{2}g_{tt,z}\\
\Gamma_{ztx} &= \Gamma_{zxt} = -\frac{1}{2}g_{tx,z}
\end{align}
$$

Non-zero Christoffel symbols of the second kind

$$
\begin{align}
\Gamma_{tt}^{t} &= g^{tt}\Gamma_{ttt} + g^{tx}\Gamma_{xtt} = v_s^3f^2f_x'\\
\Gamma_{tx}^{t} &= \Gamma_{xt}^{t} = g^{tt}\Gamma_{ttx} = -v_s^2ff_x'\\
\Gamma_{ty}^{t} &= \Gamma_{yt}^{t} = g^{tt}\Gamma_{tty} + g^{tx}\Gamma_{xty} = -\frac{1}{2}v_s^2ff_y'\\
\Gamma_{tz}^{t} &= \Gamma_{zt}^{t} = g^{tt}\Gamma_{ttz} + g^{tx}\Gamma_{xtz} = -\frac{1}{2}v_s^2ff_z'\\
\Gamma_{xx}^{t} &= g^{tt}\Gamma_{txx} = v_sf_x'\\
\Gamma_{xy}^{t} &= \Gamma_{yx}^{t} = g^{tt}\Gamma_{txy} = \frac{1}{2}v_sf_y'\\
\Gamma_{xz}^{t} &= \Gamma_{zx}^{t} = g^{tt}\Gamma_{txz} = \frac{1}{2}v_sf_z'\\
\Gamma_{tt}^{x} &= g^{xt}\Gamma_{ttt}+g^{xx}\Gamma_{xtt} = v_s^2ff_x'(v_s^2f^2-1)-v_sf_t'\\
\Gamma_{tx}^{x} &= \Gamma_{xt}^{x} = g^{xt}\Gamma_{ttx} = --v^3f^2f_x'\\
\Gamma_{ty}^{x} &= \Gamma_{yt}^{x} = g^{xt}\Gamma_{tty} + g^{xx}\Gamma_{xty} = -\frac{1}{2}v_sf_y'(1+v_s^2f^2)\\
\Gamma_{tz}^{x} &= \Gamma_{zt}^{x} = g^{xt}\Gamma_{ttz} + g^{xx}\Gamma_{xtz} = -\frac{1}{2}v_sf_z'(1+v_s^2f^2)\\
\Gamma_{xx}^{x} &= g^{xt} \Gamma_{txx} = v_s^2ff_x'\\
\Gamma_{xy}^{x} &= \Gamma_{yx}^{x} = g^{xt}\Gamma_{txy} = \frac{1}{2}v_s^2ff_y'\\
\Gamma_{xz}^{x} &= \Gamma_{zx}^{x} = g^{xt}\Gamma_{txz} = \frac{1}{2}v_s^2ff_z'\\
\Gamma_{tx}^{y} &= \Gamma_{xt}^{y} = g^{yy}\Gamma_{ytx} = \frac{1}{2}v_sf_y'\\
\Gamma_{tt}^{y} &= \Gamma_{yy}\Gamma_{ytt} = -v_s^2ff_y'\\
\Gamma_{tx}^{z} &= \Gamma_{xt}^{x} = g^{zz}\Gamma_{ztx} = \frac{1}{2}v_sf_z'\\
\Gamma_{tt}^{z} &= g^{zz}\Gamma_{ztt} = -v_s^2ff_z'
\end{align}
$$

Geodesic:

$$
\begin{align}
\ddot{t} &= \dot{t}^2 + \dot{t}\dot{x} + \dot{t}\dot{y} + \dot{t}\dot{z} + \dot{x}^2 + \dot{x}\dot{y} + \dot{x}\dot{z}\\
\ddot{x} &= \dot{t}^2 + \dot{t}\dot{x} + \dot{t}\dot{y} + \dot{t}\dot{z} + \dot{x}^2 + \dot{x}\dot{y} + \dot{x}\dot{z}\\
\ddot{y} &= \dot{t}^2 + \dot{t}\dot{x}\\
\ddot{z} &= \dot{t}^2 + \dot{t}\dot{x}
\end{align}
$$

Assume linear motion: $x_s(t) = x_0 + v_s \cdot t$

$$
\begin{align}
f_t' &= \sigma \frac{\text{sech}^2(\sigma(r_s(t) + R))-\text{sech}^2(\sigma (r_s{t}+R))}{2 \text{tanh}(\sigma R)}\cdot \frac{x_s(t) - x}{\sqrt{(x - x_s(t))^2 + y^2 + z^2} } \cdot v_s\\
f_x' &= \sigma\frac{\text{sech}^2(\sigma(r_s(t) + R))-\text{sech}^2(\sigma(r_s{t}+R))}{2 \text{tanh}(\sigma R)}\cdot\frac{x - x_s(t)}{\sqrt{(x - x_s(t))^2 + y^2 + z^2} } \\
f_y' &= \sigma\frac{\text{sech}^2(\sigma(r_s(t) + R))-\text{sech}^2(\sigma(r_s{t}+R))}{2 \text{tanh}(\sigma R)}\cdot\frac{y}{\sqrt{(x - x_s(t))^2 + y^2 + z^2} } \\
f_z' &= \sigma\frac{\text{sech}^2(\sigma(r_s(t) + R))-\text{sech}^2(\sigma(r_s{t}+R))}{2 \text{tanh}(\sigma R)}\cdot\frac{z}{\sqrt{(x - x_s(t))^2 + y^2 + z^2} }
\end{align}
$$