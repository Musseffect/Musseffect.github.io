# Traditional approach

Lets sum squares of difference between each point $(x_i,y_i)$ and value of some function $f(x_i,\theta)$, where $\theta \in \mathbb R^N$ is a vector of unknown parameters. This sum is an error that we want to minimize:
$$
E(\theta)=\frac{1}{2}\sum_{i=1}^{N}(f(x_i,\theta)-y_i)^2 \rightarrow min
$$

Now this is an optimization problem. To solve this we could use some simple 1st and second order [methods](https://musseffect.github.io/notes/optimization-methods) for optimization problems.

$$
f_i = f(x_i,\theta)
$$

$$
\frac{\partial E}{\partial \theta_l}=\sum_{i=1}^{N}(f_i-y_i)\frac{\partial f_i}{\partial \theta_l}
$$

$$
\frac{\partial^2 E}{\partial \theta_l\partial\theta_k}=\sum_{i=1}^{N}\frac{\partial f_i}{\partial\theta_l}\frac{\partial f_i}{\partial\theta_k}+(f_i-y_i)\frac{\partial^2f_i}{\partial\theta_l \partial\theta_k}
$$

# Distance to function approximation

When i was reading about some [shadertoy](www.shadertoy.com) stuff i found this [article](https://www.iquilezles.org/www/articles/distance/distance.htm). The article presents the following approximation for a distance from an arbitary 2D point $(x,y)$ to a 1D function $f(x)$:

$$
d(x,y)\approx \frac{|f(x)-y|}{\sqrt{(\frac{d}{dx}f(x))^2+1}}
$$

Sum of squares of distance approximations could be used as an error for leastsquares-like minimization problem:

$$
E(\theta) = \frac{1}{2}\sum_{i=1}^{N} \frac{(f(x_i,\theta)-y_i)^2}{(\frac{\partial}{\partial x}f(x_i,\theta))^2+1} \rightarrow min
$$


$$
\frac{\partial E}{\partial \theta_l}=\sum_{i=1}^{N}\frac{f_i-y_i}{(\frac{\partial f_i}{\partial x})^2+1}\frac{\partial f_i}{\partial \theta_l} - \frac{(f_i-y_i)^2}{((\frac{\partial f_i}{\partial x})^2+1)^2}\frac{\partial f_i}{\partial x}\frac{\partial^2 f_i}{\partial x \partial \theta_l}
$$


$$
\frac{\partial^2 E}{\partial \theta_l \partial \theta_k} = \sum_{i=1}^{N}\frac{\partial f_i}{\partial \theta_l}\frac{\partial f_i}{\partial \theta_k}\frac{1}{(\frac{\partial f_i}{\partial x})^2+1} \\ 
+\frac{\partial^2 f_i}{\partial \theta_l\partial\theta_k} \frac{f_i-y_i}{(\frac{\partial f_i}{\partial x})^2+1} \\
-2\frac{\partial f_i}{\partial\theta_l} \frac{\partial f_i}{\partial x} \frac{\partial^2 f_i}{\partial x\partial\theta_k} \frac{f_i-y_i}{((\frac{\partial f_i}{\partial x})^2+1)^2} \\
-2\frac{\partial f_i}{\partial\theta_k} \frac{\partial f_i}{\partial x} \frac{\partial^2 f_i}{\partial x\partial\theta_l} \frac{f_i-y_i}{((\frac{\partial f_i}{\partial x})^2+1)^2} \\
-\frac{\partial^2f_i}{\partial x\partial\theta_l}\frac{\partial^2f_i}{\partial x\partial\theta_k}\frac{(f_i-y_i)^2}{((\frac{\partial f_i}{\partial x})^2+1)^2} \\
-\frac{\partial f_i}{\partial x}\frac{\partial^3 f_i}{\partial x\partial\theta_l\partial\theta_k}\frac{(f_i-y_i)^2}{((\frac{\partial f_i}{\partial x})^2+1)^2} \\
+4\frac{\partial f_i}{\partial x}\frac{\partial f_i}{\partial x}\frac{\partial^2f_i}{\partial x\partial\theta_l}\frac{\partial^2f_i}{\partial x\partial\theta_k}\frac{(f_i-y_i)^2}{((\frac{\partial f_i}{\partial x})^2+1)^3}
$$

# Linear piecewise 1D

Lets consider an array of values in an interval $[x_{min},x_{max}]$. We want to create a one dimensional grid that will optimally represent those values with smallest possible error. For $x$ values between grid cells we will use linear interpolation. Illustration:

![piecewise1D](https://drive.google.com/uc?id=1ZCXS04bCe6oZLdOTILOg6yUFZhZ5CObN "piecewise 1D")

[figure]
**Fig. 1** Illustration of idea
[/figure]

Linear interpolation for point in i-th grid cell:

$$
f_i(x) = b_i \frac{a_{i+1}-x}{a_{i+1}-a_i} + b_{i+1} \frac{x - a_i}{a_{i+1} - a_i} 
$$

Error expression:

$$
\begin{align}
E(a,b) &= \frac{1}{2}\sum_{i=1}^{M} \sum_{j=1}^{N_{i}}(f_i(x_{ij}) - y_{ij})^2 \rightarrow min\\
a, b &\in R^M\\
x_{ij}, y_{ij} &\in R^{N_1} \times R^{N_2} \times ...\times R^{N_{M}}
\end{align}
$$

Derivative:

$$
\begin{align}
\frac{\partial E}{\partial b_j}:& \\
&b_{j-1} \sum_{i=1}^{N_{j-1}} \frac{(a_j - x_{ij-1})(x_{ij-1} - a_{j-1})}{(a_j - a_{j-1})^2}\\
 & + b_j \sum_{i=1}^{N_{j-1}} (\frac{x_{ij-1} - a_{j-1}}{a_j - a_{j-1}})^2\\
 & + b_j \sum_{i=1}^{N_j} (\frac{a_{j+1} - x_{ij}}{a_{j+1} - a_j})^2\\
 & + b_{j+1} \sum_{i=1}^{N_j} \frac{(x_{ij} - a_j)(a_{j+1} - x_{ij})}{(a_{j+1} - a_j)^2}\\
 &= \sum_{i=1}^{N_{j-1}} y_{ij-1} \frac{x_{ij-1} - a_{j-1}}{a_j - a_{j-1}}\\
 & + \sum_{i=1}^{N_j} y_{ij} \frac{a_{j+1} - x_{ij}}{a_{j+1} - a_{j}}
 \end{align}
$$

It's a linear system with tridiagonal matrix and it can be easily solved for unknown values $b$.

$$
\begin{align}
A b &= c\\
 a_{ij}  &= 
 \begin{cases}
\sum_{l=1}^{N_{i-1}} \frac{(a_j - x_{li-1})(x_{li-1} - a_{i-1})}{(a_i - a_{i-1})^2} &  \text{if }j = i-1\\
  \sum_{l=1}^{N_{i-1}} (\frac{x_{li-1} - a_{i-1}}{a_j - a_{i-1}})^2
 + \sum_{l=1}^{N_i} (\frac{a_{i+1} - x_{li}}{a_{i+1} - a_i})^2& \text{if }j = i \\
  \sum_{l=1}^{N_i} \frac{(x_{li} - a_i)(a_{i+1} - x_{li})}{(a_{i+1} - a_i)^2}& \text{if }j = i+1\\
 0& \text{otherwise}
 \end{cases}\\
c_i &= \sum_{l=1}^{N_{i-1}} y_{li-1}\frac{x_{li-1} - a_{i-1}}{a_i-a_{i-1}} +
\sum_{l=1}^{N_i}y_{li}\frac{a_{i+1}-x_{li}}{a_{i+1}-a_i}
\end{align}
$$

# Linear piecewise 3D

![piecewise3D](https://drive.google.com/uc?id=1wFVfUV5uNNiXGfB3pkkqjSr8G-cT0ipo "piecewise 3D")

[figure]
**Fig. 2** Illustration of idea
[/figure]
Same idea, but for 3 dimensional function. For example, RGB look up table can be written like three functions:

$$
\begin{align}
r_{out} &= f_r(r_{in},g_{in},b_{in}),\\
g_{out} &= f_g(r_{in},g_{in},b_{in}),\\
b_{out} &= f_b(r_{in},g_{in},b_{in})
\end{align}
$$

Now we must work with 3D cells and trilinear interpolation, so expression for value in cell with indicies $ijk$ is:

$$
\begin{align}
f_{ijk}(x,y,z) &= d_{ijk} \frac{a_{i+1}-x}{a_{i+1}-a_i} \frac{b_{j+1} - y}{b_{j+1} - b_j} \frac{c_{k+1} - z}{c_{k+1} - c_k}\\
&+ d_{i+1jk} \frac{x - a_i}{a_{i+1}-a_i} \frac{b_{j+1} - y}{b_{j+1} - b_j} \frac{c_{k+1} - z}{c_{k+1} - c_k} \\
&+ d_{ij+1k} \frac{a_{i+1}-x}{a_{i+1}-a_i} \frac{y - b_j}{b_{j+1} - b_j} \frac{c_{k+1} - z}{c_{k+1} - c_k}\\
&+ d_{ijk+1} \frac{a_{i+1}-x}{a_{i+1}-a_i} \frac{b_{j+1} - y}{b_{j+1} - b_j} \frac{z - c_k}{c_{k+1} - c_k}\\
&+ d_{i+1j+1k} \frac{x - a_i}{a_{i+1}-a_i} \frac{y - b_j}{b_{j+1} - b_j} \frac{c_{k+1} - z}{c_{k+1} - c_k}\\
&+ d_{i+1jk+1} \frac{x - a_i}{a_{i+1}-a_i} \frac{b_{j+1} - y}{b_{j+1} - b_j} \frac{z - c_k}{c_{k+1} - c_k}\\
&+ d_{ij+1k+1} \frac{a_{i+1}-x}{a_{i+1}-a_i} \frac{y - b_j}{b_{j+1} - b_j} \frac{z - c_k}{c_{k+1} - c_k}\\
&+ d_{i+1j+1k+1} \frac{x - a_i}{a_{i+1}-a_i} \frac{y - b_j}{b_{j+1} - b_j} \frac{z - c_k}{c_{k+1} - c_k}\\
\end{align}
$$

Error:

$$
\begin{align}
E(a,b,c,d) &= \frac{1}{2} \sum_i^{M_x} \sum_j^{M_y} \sum_k^{M_z}
\sum_{l=1}^{N_{ijk}} (f_{ijk}(x_{ijkl},y_{ijkl},z_{ijkl}) - w_{ijkl})^2 \rightarrow min \\
a&\in R^{M_x}\\
b&\in R^{M_y}\\
c&\in R^{M_z}\\
d&\in R^{M_x + M_y + M_z}\\
x_{ijkl}, y_{ijkl}, z_{ijkl} &\in R^{N_{111}} \times R^{N_{112}} \times ...\times R^{N_{M_x M_y M_z}}
\end{align}
$$

It looks scary but...

$$
\begin{align}
\frac{\partial E}{\partial d_{ijk}}:& \\
&\sum_{p=i-1}^i\sum_{r=j-1}^j\sum_{s=k-1}^k 
\sum_{m=p}^{p+1}\sum_{n=r}^{r+1}\sum_{o=s}^{s+1} 
(\sum_{l=1}^{N_{mno}} 
d_{mno} \frac{\partial f_{prs}}{\partial d_{mno}}(x_{l},y_{l},z_{l}) 
\frac{\partial f_{prs}}{\partial d_{ijk}}(x_{l},y_{l},z_{l})) \\
&= \sum_{p=i-1}^i\sum_{r=j-1}^j\sum_{s=k-1}^k 
\sum_{m=p}^{p+1}\sum_{n=r}^{r+1}\sum_{o=s}^{s+1} 
(\sum_{l=1}^{N_{mno}} 
w_{l} \frac{\partial f_{prs}}{\partial d_{ijk}}(x_{l},y_{l},z_{l}))
\end{align}
$$

It should result in a linear system and i'm too lazy to write it down. Just solve it.


# Fourier series

Approximate series of points with sum of cosines with unknown phases and amplitudes.

Error:

$$
\begin{align}
f(x,a,b) &= a_0 + \sum_{k=1}^{M} a_j cos(\frac{2 \pi k  x}{T}) + b_j sin(\frac{2 \pi k  x}{T})\\
E(a,b) &= \frac{1}{2} \sum_{i=0}^{N} (f(x_i,a,b) - y_i)^2
\end{align}
$$

where $T$ - period.

Derivatives:

$$
\begin{align}
\frac{\partial E}{\partial a_0} &= \sum_{i=0}^{N} (f(x_i,a,b) - y_i) = 0\\
\frac{\partial E}{\partial a_k} &= \sum_{i=0}^{N} cos(\frac{2 \pi k  x_i}{T}) (f(x_i,a,b) - y_i) = 0\\
\frac{\partial E}{\partial b_k} &= \sum_{i=0}^{N} sin(\frac{2 \pi k  x_i}{T}) (f(x_i,a,b) - y_i) = 0
\end{align}
$$

Matrix form:

$$
\begin{align}
&\text{solve }M \begin{bmatrix}a \\b \end{bmatrix} = f\\
&M = A^T A\\
&f = A^T y\\
&A = \begin{bmatrix} 1 & cos(\omega_1 x_1) & \dots & cos(\omega_M x_1) & sin(\omega_1 x_1) & \dots & sin(\omega_M x_1)\\
\vdots & \vdots& \ddots& \vdots& \vdots& \ddots& \vdots\\
1 & cos(\omega_1 x_N) &\dots & cos(\omega_M x_N) & sin(\omega_1 x_N) & \dots & sin(\omega_M x_N)
\end{bmatrix}\\
&\omega_k= \frac{2\pi k}{T}
\end{align}
$$