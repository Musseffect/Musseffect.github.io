Hybrid systems combine discrete and continuous behaviour. 

![Jumping ball](https://drive.google.com/uc?id=1ETGtiuYoQsYSqXzSEIl4FnmSJCcIdVG5 "Jumping ball")

[figure]
**Fig. 1** - Jumping ball position plot
[/figure]

I choose to use the following representation for hybrid systems with implicit dae of index 1:

$$
\text{local behaviour:} \\
\begin{aligned}
f_i(x,z,\dot{x},t) &= 0 \\
g_i(x,z,t) &= 0 \\
det(\frac{\partial f_i}{\partial \dot{x}}) & \neq 0 \\
det(\frac{\partial g_i}{\partial z})& \neq 0
\end{aligned} \\
i \text{ - state index} \\
t^*_i \text{ - end of } i\text{-th state} \\
\text{initial conditions for each state:} \\
\begin{aligned}
x_i(t^*_{i-1})&=\phi(x_{i-1},z_{i-1},t^*_{i-1}) \\
0 &=g_i(x_i(t^*_{i-1}),z_i(t^*_{i-1}),t^*_{i-1})
\end{aligned} \\
\text{state changes when function p becomes positive:} \\
p_k(x,z,t) \geq 0 \\
\text{initial state:} \\
\begin{aligned}
x(t_0)&=x_{init}\\
0 &= g_{init}(x(t_0),z(t_0),t_0)
\end{aligned}
$$

![hybridGraph](https://drive.google.com/uc?id=1K1ZWsiMyO6JJU_G935Vbk-D8_OmY2cPU "hybridGraph")

[figure]
**Fig. 2** - Graph diagram of hybrid system with explicit dae
[/figure]

# Event detection

## Adaptive step

Adaptive step for event: 

$$
h_{event} = - \gamma \frac{p(x_n,z_n,t_n)}{\frac{\partial p}{\partial x} \frac{dx}{dt} + \frac{\partial p}{\partial z}\frac{\partial z}{\partial t}  +  \frac{\partial p}{\partial t}} = \\ 
- \gamma \frac{p(x_n,z_n,t_n)}{\frac{\partial p}{\partial x} f(x_n,z_n,t_n) + \frac{\partial p}{\partial z}\frac{\partial z}{\partial t} + \frac{\partial p}{\partial t}} \\
\gamma \in (0,1]
$$

Final time step for current iteration:

$$
h = \text{max}(h_{min},\text{min}(h_{event},h_{err}))
$$

where $h_{err}$ - adaptive step based on local error estimation.

## Root finding

Now when we made a step and find $x_{n+1}$ and $z_{n+1}$ values we need to check for events in interval $[t_n,t_{n+1}]$ assuming that x and z values change linearly.

Event detection is a root finding problem. We need to find such $t_e$ that $p(x_e,z_e,t_e) = 0$, where $x_e = x_{n+1} t_e + x_n (1 - t_e)$ and $z_e = z_{n+1} t_e + z_n (1 - t_e)$.

![Example of event function](https://drive.google.com/uc?id=1UffgmwQ2dzEXGX71WBA4dcaVngPqoiNi "Event function")

[figure]
**Fig. 3** - Example of function p
[/figure]

### Newton's method

![Newton's method](https://drive.google.com/uc?id=1yDTGMO6MMe3PbnJ5lgV0g717wMERqE3n "Newton's method")

[figure]
**Fig. 4** - Root finding with newton's method
[/figure]

### Bisection method

![Bisection method](https://drive.google.com/uc?id=1G9L-dL1SZK3YGa0qJKqJytrb_bJBHg0f "Bisection method")

[figure]
**Fig. 5** - Root finding with bisection
[/figure]

### False position method

![False position method](https://drive.google.com/uc?id=1y3KmtJ6C_9TfTcxtPsLeIHWQsRbtR1JO "False position method")

[figure]
**Fig. 6** - Root finding with false position method
[/figure]

# Jumping ball

## Analytical solution

$$
\begin{align}
&k \in (0,1]\\
&t_0 = 0\\
&x(t_0) = x_0\\
&v(t_0) = v_0\\
&g \approx 9.8\\
&v_1 = k\sqrt{v_0^2 + 2x_0g}\\
&\Delta t_0 = \frac{v_0 + \sqrt{v_0^2 +2x_0g}}{g}\\
&v_i = -k(v_{i-1} - g\Delta t_{i-1}) = k^i\sqrt{v_0^2+2x_0g}\\
&\Delta t_i = \frac{v_i + \sqrt{v_i^2 + 2x_ig}}{g} = \frac{2v_i}{g} = \frac{2k^i\sqrt{v_0^2+2x_0g}}{g}, i\geq1\\
\end{align}
$$

![Jumping ball position](https://drive.google.com/uc?id=1ETGtiuYoQsYSqXzSEIl4FnmSJCcIdVG5 "Jumping ball position")

![Jumping ball velocity](https://drive.google.com/uc?id=1cU5HVLv1HJGvYTvDemgJfIviuNzH7hkn "Jumping ball velocity")

[figure]
**Fig. 7** - Jumping ball position and velocity
[/figure]

Event function: $max(-x,-v)$

![Jumping ball event function](https://drive.google.com/uc?id=1QVKMzVYXG-kVuq16fKjDUFFd-GuM4I0w "Jumping ball event function")

[figure]
**Fig. 8** - Jumping ball event function
[/figure]
