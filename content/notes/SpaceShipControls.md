# Control System

Equation of motion of rigid body in 2d for fixed body point in global coordinates $\vec{r_c} = (p_x,p_y)$:

$$
\dot{p_x} = v_x\\
\dot{p_y} = v_y\\
\dot{v_x} = \frac{F_x}{M}\\
\dot{v_y} = \frac{F_y}{M}\\
\dot{\theta} = \omega\\
\dot{\omega} = I^{-1}\Tau
$$

where $M$ - full mass of body, I - inertia tensor(scalar in 2D), $\vec{F}$ - sum of all forces acting on a body, $Tau$ - torque $\sum (\vec{r_i} - \vec{r_c})\cross \vec{F_i}$

## Position control

Reference Input:

Desired position $x_{sp},y_{sp}$.

Desired velocity $[0,0]$

Desired angle $\theta_{sp}$

Desired angular velocity $0$

We will use state-space representation of equations:

$\dot{x} = Ax + Bu$

where $x$ - vector of state variables, u - vector representing the input.

$$
A = []\\
B = []
$$

Figure - control system

$u = - K x$

Values in K define the effectivenes of control system.

They can be tuned manually or with lqr method.




## Velocity control

$x = []^T$


# Thrust control

Engines thrust force: $0<=T_i<=T_i^{max}$ T\in \mathbb{R}^{N} N>3$.

Engines position: $P_{xi},P_{yi}$

Engines thrust direction: $D_{xi},D_{yi}$ $D_{xi}^2 + D_{yi}^2 = 1$

Required force/torque for movement and rotation $F_r = [F_x,F_y,\Tau]^T$ 

Undetermined system of equations:

$$
F_r = A T\\
A\in \mathbb{R}^{3\cross N}
$$

$$
\begin{align}
&F_x = A_{x1} T_1 + A_{x2} T_2 + ... A_{xN} T_N \\
&F_y = A_{y1} T_1 + A_{y2} T_2 + ... A_{yN} T_N\\
&\Tau = A_{\tau 1} T_1 + A_{\tau 2} T_2 + ... A_{\tau 3} T_3 \\
\end{align}
$$

Matrix A:

$$
A_{xi} = D_{xi}\\
A_{yi} = D_{yi}\\
A_{\tau i} = \sqrt{P_{xi}^2 + P_{yi}^2}
$$

This sytem has either infine number of solutions or none.











