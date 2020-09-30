# 1 ODE systems
Soo... $x$ is a vector of unknown functions of time - $x=\begin{bmatrix} x_1 \cr x_2 \cr \vdots \cr x_N \end{bmatrix}$

## 1.1 Explicit ODE system

$$
\dot{x}=f(x,t) \\
f:\mathbb R^N\times \mathbb R\rightarrow \mathbb R^N \\
x(t_0) = x_0 = \text{constant}
$$

## 1.2 Implicit ODE system

$$
f(x,\dot{x},t)=0\\
f:\mathbb R^N\times \mathbb R^N \times \mathbb R\rightarrow \mathbb R^N \\
\text{rank}(\frac{\partial f}{\partial \dot{x}})=N \\
x(t_0)=x_0 = \text{constant}
$$

# 2 Numerical methods

Numerical methods usually produce a solution as a finite series of points $\{x_1, x_2, ... x_i\}$ and $\{t_1, t_2, ... t_i\}$,
$t_i>t_{i-1}$, starting with $x_1 = \text{constant}$. Methods use previous points to compute a new value.

$h$ - current step size.

## 2.1 Single-step methods

General form of single-step methods: 

$$
x_{n+1} = x_{n} + \Phi (x_{n},x_{n+1},t_{n},t_{n+1})
$$

### 2.1.1 Explicit Euler method

##### Explicit ODE

$$
x_{n+1} = x_{n} + hf(x_{n},t_{n})
$$

##### Implicit ODE

$$
\begin{align}
&\text{solve }f(x_n,\frac{x_{n+1}-x_{n}}{h},t_n) = 0\text{ for } x_{n+1}\\
&\hspace{2em}\frac{\partial f}{\partial x_{n+1}} =\frac{\partial f}{\partial \dot{x}} \frac{1}{h} \\
\end{align}
$$

### 2.1.2 Explicit RK methods

$S \text{ - number of stages}$

##### Explicit ODE
$$
\begin{align}
1.& \hspace{1em} k_l = f(x_{n} + h\sum_{m=1}^{l-1}a_{lm} k_m,t_{n}+h c_l),\hspace{1em}  l = 1,S \\
2.& \hspace{1em} x_{n+1} = x_{n}+h\sum_{l=1}^{S}b_l k_l
\end{align} \\
A \in \mathbb R^S \times \mathbb R^S \\
B,C \in \mathbb R^S
$$
##### Implicit ODE
$$
\begin{align}
1.& \hspace{1em} \text{for } l=1,S\\
&\hspace{2em}\text{solve}\\
 &\hspace{2em}F_l:\hspace{1em}f(x_{n} + h\sum_{m=1}^{l-1}a_{lm} k_m, k_l, t_n+h c_l) = 0\\
  &\hspace{4em} \frac{\partial F_l}{\partial k_l} =\frac{\partial f}{\partial \dot{x}}\\
&\hspace{2em}\text{for } k_l \\
2.& \hspace{1em} x_{n+1} = x_{n}+h\sum_{l=1}^{S}b_l k_l
\end{align}
$$

#### 2.1.3 Implicit Euler method

##### Explicit ODE
$$
x_{n+1} = x_{n} + hf(x_{n+1},t_{n+1})
$$
##### Implicit ODE
$$
\text{solve } f(x_{n+1},\frac{x_{n+1}-x_n}{h},t_{n+1}) = 0 \text{ for } x_{n+1}
$$


#### 2.1.4 Implicit Trapezoid
##### Explicit ODE
$$
\begin{align}
&\text{solve}\\
&F:\hspace{1em}x_{n+1} = x_{n} + h\frac{(f(x_{n},t_{n})+f(x_{n+1},t_{n+1}))}{2}\\
&\hspace{2em} \frac{\partial F}{\partial x_{n+1}}=I - \frac{h}{2}\frac{\partial f}{\partial x}\\
&\text{for }x_{n+1}
\end{align}
$$
##### Implicit ODE
$$
\begin{align}
&\text{solve}\\
&\begin{cases}
f(x_{n+1},\frac{x_{n+1}-x_n}{h}-\dot{x}_n,t_{n+1}) = 0 \\ 
f(x_n,\dot{x}_n,t_n) = 0 
\end{cases} \\
&\text{for } \dot{x}_n,x_{n+1} 
\end{align}
$$

#### 2.1.5 Implicit RK methods
$$
A \in \mathbb R^S \times \mathbb R^S \\
B,C \in \mathbb R^S
$$
##### Explicit ODE
$$
\begin{align}
1.&\hspace{1em}\text{solve}\\
&\hspace{2em}l=1,S\\
&\hspace{2em}F_l:\hspace{1em}k_l = f(x_{n} + h\sum_{m=1}^{S}a_{lm} k_m,t_{n}+h c_l)\\
&\hspace{4em} \frac{\partial F_i}{\partial k_j}=\delta_{ij}-ha_{ij}\frac{\partial f}{\partial x}\\
&\hspace{1em} \text{for } k_l\\
2.& \hspace{1em} x_{n+1} = x_{n}+h\sum_{l=1}^{S}b_l k_l \\
\end{align}
$$
##### Implicit ODE
$$
\begin{align}
1.& \hspace{1em} \text{solve} \\
&\hspace{2em}l=1,S\\
&\hspace{2em}F_l:\hspace{1em}f(x_n + h\sum_{l=1}^{S}a_{lm} k_m,k_l,t_n + h c_l) \\
&\hspace{4em}\frac{\partial F_i}{\partial x_j}=\delta_{ij}\frac{\partial f}{\partial \dot{x}}+ha_{ij}\frac{\partial f}{\partial x}\\
&\hspace{1em}\text{for }k_l\\
2.& \hspace{1em} x_{n+1} = x_{n}+h\sum_{l=1}^{S}b_l k_l
\end{align}
$$
