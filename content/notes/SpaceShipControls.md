# Control System

Equation of motion of rigid body with center $\vec{r_c} = (p_x,p_y)$ in 2d in global coordinates :

$$
\dot{p_x} = v_x\\
\dot{p_y} = v_y\\
\dot{\theta} = \omega\\
\dot{v_x} = \frac{F_x}{M}\\
\dot{v_y} = \frac{F_y}{M}\\
\dot{\omega} = I^{-1}\tau
$$

where $M$ - full mass of body, $I$ - inertia tensor(scalar in 2D), $\vec{F}$ - sum of all forces acting on a body, $\tau$ - torque  $\tau = \sum (\vec{r_i} - \vec{r_c}) \times \vec{F_i}$

## Position control

Reference Input $x^{set}$:

Desired position $p^{set}_{x},p^{set}_{y}$.

Desired velocity $v^{set}_{x},v^{set}_{y}$.

Desired angle $\theta^{set}$.

Desired angular velocity $\omega^{set}$.

$$x^{set} = \begin{bmatrix}
p^{set}_x\\
p^{set}_{y}\\
v^{set}_{x}\\
v^{set}_{y}\\
\theta^{set}\\
\omega^{set} 
\end{bmatrix}$$

We will use state-space representation of equations:

$$
\dot{x} = Ax + Bu
$$

where $x$ - vector of state variables $x=\begin{bmatrix}p_x\\p_y\\ \theta\\v_x\\v_y \\ \omega \end{bmatrix}$, $u$ - vector representing the input $u = \begin{bmatrix} F_x\\F_y\\ \tau\end{bmatrix}$.


$$
A = \begin{bmatrix} 
0&0&0&1&0&0\\
0&0&0&0&1&0\\
0&0&0&0&0&1\\
0&0&0&0&0&0\\
0&0&0&0&0&0\\
0&0&0&0&0&0
\end{bmatrix}\\
B = \begin{bmatrix} 
0&0&0\\
0&0&0\\
0&0&0\\
M^{-1}&0&0\\
0&M^{-1}&0\\
0&0&\tau^{-1}
\end{bmatrix}
$$

![piecewise1D](https://drive.google.com/uc?id=1WQZY7b5hzCLlDidaaVFScnZcVi3rte1p "piecewise 1D")

[figure]
**Fig. 1** Control system
[/figure]

We gonna use the following formula to decide input vector:

$$
u = - K (x - x^{set})
$$

Values in $K$ affect the effectivenes of control system (speed/fuel consumption).

They can be tuned manually or with [lqr](https://www.mathworks.com/help/control/ref/lqr.html) method.



## Velocity control

$$
x = \begin{bmatrix}v_x\\v_y\\\omega\end{bmatrix}
$$

$$
x^{set} = \begin{bmatrix}\\v^{set}_{x} \\v^{set}_{y}\\\omega^{set} \end{bmatrix}
$$

$$
u = \begin{bmatrix} F_x\\F_y\\ \tau\end{bmatrix}
$$

# Thrust control

Now we know how much force and torque we should apply to our system. But we also need to decide how we gonna use engines.

Engine thrust force: $0\le T_i\le T_i^{max}\hspace{4em} T\in \mathbb{R}^{N} , N>3$.

Engine position: $P_{xi},P_{yi}$

Engine thrust direction: $D_{xi},D_{yi}\hspace{4em} D_{xi}^2 + D_{yi}^2 = 1$

Required force/torque for movement and rotation $F_r = \begin{bmatrix}F_x\\F_y\\\tau \end{bmatrix}$ 

Undetermined system of equations:

$$
F_r = A T\\
A\in \mathbb{R}^{3\times N}
$$

$$
\begin{align}
&F_x = A_{x1} T_1 + A_{x2} T_2 + ... A_{xN} T_N \\
&F_y = A_{y1} T_1 + A_{y2} T_2 + ... A_{yN} T_N\\
&\tau = A_{\tau 1} T_1 + A_{\tau 2} T_2 + ... A_{\tau 3} T_3 \\
\end{align}
$$

Matrix $A$ consists of elements:

$$
A_{xi} = D_{xi}\\
A_{yi} = D_{yi}\\
A_{\tau i} = \sqrt{P_{xi}^2 + P_{yi}^2}
$$

This sytem has either infine number of solutions or none.
We can solve it by transforming it to optimization problem:

$$
F_r = AT\\
G(T) \rightarrow min
$$

where $G(T)$ some function of $T$.

It would be really great to choose $G(T) = \sum |T_i|$, value of this function should be proportional to fuel consumption, so optimization problem would include minimization of fuel consumption which actually would be logical and useful. Unfortunately it isn't easy to solve such problem, so we will use $G(T) = \sum T_i^2$.

Solution of this problem:

$$
T = A^T(AA^T)^{-1}F_r
$$

We should clamp $T$ in some way to prevent $T_i\ge T_{max}$ and $T_i\le 0$

Check this simple [demo](https://musseffect.github.io/spaceship-control-system-2d/).








