# 1 DAE systems

Soo... $x$ is a vector of differential variables and $z$ is a vector of algebraic variables

### 1.1 Explicit DAE system with index 1

$$
\dot{x} = f(x,z,t)\\
z = g(x,t)\\
f: \mathbb R^{N_x}\times \mathbb R^{N_z} \times \mathbb R\rightarrow \mathbb R^{N_x} \\
g: \mathbb R^{N_x} \times \mathbb R\rightarrow \mathbb R^{N_z} \\
x(t_0)=x_0\\
z(t_0) = g(x(t_0),t_0)
$$

### 1.2 Semi-explicit DAE system with index 1

$$
\dot{x} = f(x,z,t)\\
g(x,z,t) = 0\\
\text{f}: \mathbb R^{N_x}\times \mathbb R^{N_z} \times \mathbb R\rightarrow \mathbb R^{N_x} \\
\text{det}(\frac{\partial \text{g}}{\partial z}) \neq 0 \\
x(t_0) = x_0 \\
g(x(t_0),z(t_0),t_0)
$$

### 1.3 Implicit DAE system with index 1

$$
\begin{align}
f(x,z,\dot{x},t)&=0\\
g(x,z,t)&=0
\end{align} \\
f: \mathbb R^{N_x}\times \mathbb R^{N_z} \times \mathbb R^{N_x} \times \mathbb R\rightarrow \mathbb R^{N_x} \\
g: \mathbb R^{N_x}\times \mathbb R^{N_z} \times \mathbb R\rightarrow \mathbb R^{N_z} \\
\text{rank}(\frac{\partial f}{\partial \dot{x}})=N_x \\
\text{det}(\frac{\partial g}{\partial z}) \neq 0 \\
x(t_0) = x_0 \\
g(x(t_0),z(t_0),t_0)
$$

# 2 Numerical methods

## 2.1 Single step methods

### 2.1.1 Explicit Euler method

##### Explicit DAE index 1

$$
\begin{align}
1.& \hspace{1em} x_{n+1} = x_n + hf(x_n,z_n,t_n) \\
2.& \hspace{1em} z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$

##### Semi-Explicit DAE index 1

$$
\begin{align}
1.& \hspace{1em} x_{n+1} = x_n + hf(x_n,z_n,t_n) \\
2.& \hspace{1em} \text{solve } g(x_{n+1},z_{n+1},t_{n+1}) = 0 \text{ for } z_{n+1}
\end{align}
$$

##### Implicit DAE index 1

$$
\begin{align}
1.& \hspace{1em} \text{solve } f(\frac{x_{n+1}-x_n}{h},x_n,z_n,t_n) = 0 \text{ for } x_{n+1} \\
2.& \hspace{1em} \text{solve } g(x_{n+1},z_{n+1},t_{n+1}) = 0 \text{ for } z_{n+1}
\end{align}
$$

### 2.1.2 Explicit RK

##### Explicit DAE index 1
$$
\begin{align}
1.& \hspace{1em} k_l = f(x_n + h\sum_{m=1}^{l-1} a_{lm} k_m, g(x_n + \sum_{m=1}^{l-1} a_{lm} k_m, t_n + h c_l), t_n + h c_l)\\
2.& \hspace{1em} x_{n+1} = x_{n}+h\sum_{l=1}^{S}b_l k_l\\
3.& \hspace{1em} z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$
##### Semi-Explicit DAE index 1
$$
\begin{align}
  1.& \hspace{1em} \text{for } l=1,S\\\
  &\hspace{2em} \text{solve } g(x_n + h\sum_{m=1}^{l-1} a_{lm} k_m, z_n^l, t_n + c_lh  ) = 0\text{ for } z_n^l\\
  &\hspace{4em}  J\Delta z_n^l = -g\\
  &\hspace{4em}  J_{ij} = \frac{\partial g}{\partial z}\\
  &\hspace{2em} k_l = f(x_n + h\sum_{m=1}^{l-1} a_{lm} k_m, z_n^l, t_n + c_lh )\\
  2.& \hspace{1em} x_{n+1} = x_n + h\sum_{l=1}^{S} b_l k_l\\
  3.& \hspace{1em} \text{solve }g(x_{n+1},z_{n+1},t_{n+1}) = 0\text{ for } z_{n+1}
\end{align}
$$
##### Implicit DAE index 1
$$
\begin{align}
  1.&\hspace{1em}\text{for } l=1,S\\
  &\hspace{4em}\text{solve}\\
  &\hspace{2em}\begin{cases}f(k_l, x_n + h\sum_{l=1}^{S} a_{lm} k_m,z_n^l,t_n + h c_l) = 0\\
  g(x_n + h\sum_{l=1}^{S} a_{lm} k_m, z_n^l,t_n + h c_l) = 0
\end{cases}\\
&\hspace{4em}\text{ for } k_l,z_n^l\\
  2.&\hspace{1em}x_{n+1} = x_n + h\sum_{l=1}^{S} b_l k_l\\
  3.&\hspace{1em}\text{solve }g(x_{n+1},z_{n+1},t_{n+1}) = 0\text{ for } z_{n+1}
\end{align}
$$

### 2.1.3 Implicit Euler method

##### Explicit DAE index 1
$$
\text{solve} \\
\begin{cases}
\begin{align}
x_{n+1}&=x_n + hf(x_{n+1},z_{n+1},t_{n+1}) \\ 
z_{n+1}&=g(x_{n+1},t_{n+1}) 
\end{align}
\end{cases} \\
\text{for } x_{n+1}, z_{n+1}
$$
##### Semi-Explicit DAE index 1
$$
\text{solve} \\
\begin{cases}
\begin{align}
x_{n+1}&=x_n + hf(x_{n+1},z_{n+1},t_{n+1}) \\ 
0&=g(x_{n+1},z_{n+1},t_{n+1}) 
\end{align}
\end{cases} \\
\text{for } x_{n+1}, z_{n+1}
$$
##### Implicit DAE index 1
$$
\text{solve} \\
\begin{cases}
\begin{align}
0&=f(x_{n+1},z_{n+1},\frac{x_{n+1}-x_{n}}{h},t_{n+1}) \\ 
0&=g(x_{n+1},z_{n+1},t_{n+1}) 
\end{align}
\end{cases} \\
\text{for } x_{n+1}, z_{n+1}
$$

### 2.1.4 Implicit Trapezoidal

##### Explicit DAE index 1
$$
\begin{align}
1.&\hspace{1em} \text{solve } \\
&\hspace{2em}x_{n+1} = x_n + h (f(x_n,z_n,t_n) + f(x_{n+1},g(x_{n+1},t_{n+1}),t_{n+1}))\\
&\hspace{1em} \text{for } x_{n+1}
2.&\hspace{1em} z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$
##### Semi-Explicit DAE index 1
$$
\text{solve }\\
\begin{cases}
\begin{align}
&x_{n+1} = x_n + h (f(x_n,z_n,t_n) + f(x_{n+1},z_{n+1},t_{n+1}))\\
&g(x_{n+1},z_{n+1},t_{n+1}) = 0
\end{align}
\end{cases}\\
\text{for }x_{n+1},z_{n+1}
$$
##### Implicit DAE index 1
$$
\begin{align}
1.&\hspace{1em}\text{solve}\\
&\hspace{2em}\begin{cases}
f(x_{n+1},\frac{x_{n+1}-x_n}{h}-\dot{x}_n,z_{n+1},t_{n+1}) = 0 \\ 
f(x_n,\dot{x}_n,z_n,t_n) = 0 
\end{cases} \\
&\hspace{1em} \text{for } \dot{x}_n,x_{n+1}\\
2.&\hspace{1em}\text{solve }g(x_{n+1},z_{n+1},t_{n+1}) = 0\text{ for }z_{n+1}\\
\end{align}
$$

### 2.1.5 Implicit RK
##### Explicit DAE index 1
$$
\begin{align}
1.&\hspace{1em}\text{solve}\\
&\hspace{2em}l=1,S\\
&\hspace{2em}F_l: k_l = f(x_n + h\sum_{l=1}^{S}a_{lm} k_m,g(x_n + h\sum_{l=1}^{S}a_{lm} k_m,t_n + h c_l),t_n + h c_l)\\
&\hspace{4em} \frac{\partial F_i}{\partial k_j} = \delta_{ij} - h a_{ij} (\frac{\partial f}{\partial x} - \frac{\partial f}{\partial z} \frac{\partial g}{\partial x})  \\
&\hspace{1em}\text{for }k_l\\
2.&\hspace{1em}x_{n+1} = x_n + h \sum_{l=1}^{S} b_l k_l  \\
3.&\hspace{1em}z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$
##### Semi-Explicit DAE index 1
$$
\begin{align}
&\text{solve}\\
&\hspace{1em}l=1,S\\
&\hspace{1em}\begin{cases}
k_l = f(x_n + h\sum_{l=1}^{S}a_{lm} k_m,z_n^l,t_n + h c_l)\\
g(x_n + h\sum_{l=1}^{S}a_{lm} k_m,z_n^l,t_n + h c_l)=0
\end{cases}\\
&\text{for } k_l,z_n^l
\end{align}
$$
##### Implicit DAE index 1
$$
\begin{align}
&\text{solve}\\
&\hspace{1em}l=1,S\\
&\hspace{1em}\begin{cases}
f(x_n + h\sum_{l=1}^{S}a_{lm} k_m,k_l,z_n^l,t_n + h c_l)=0\\
g(x_n + h\sum_{l=1}^{S}a_{lm} k_m,z_n^l,t_n + h c_l)=0
\end{cases}\\
&\text{for } k_l,z_n^l
\end{align}
$$

## 2.2 Multistep methods
General form of multistep methods: 
$$
x_{n+1} = \sum_{k=1}^{s} a_k x_{n+1-k} + h\sum_{k=0}^{p}b_k f(x_{n+1-k},t_{n+1-k})
$$

### 2.2.1 Explicit Adams–Bashforth methods
Table of coefficients for Adams-Bashforth methods:

| Order   | $b_1$ | $b_2$ | $b_3$ | $b_4$ | $b_5$ | $b_6$ | $a_1$ |
| --------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 1 | 1 |  |  |  |  |  | 1 |
| 2 | 3/2 | -1/2 |  |  |  |  | 1 |
| 3 | 23/12 | -4//3 | 5/12 |  |  |  | 1 |
| 4 | 55/24 | -59/24 | 37/24 | -3/8 |  |  | 1 |
| 5 | 1901/720 | -1387/360 | 109/30 | -637/360 | 251/720 |  | 1 |
| 6 | 4277/1444 | -2641/480 | 4991/720 | −3649/720 | 959/480 | −95/288 | 1 |

$$
x_{n+1} = x_n + h \sum_{j=0}^{s}b_j f(x_{n-j},t_{n-j})
$$
#### Explicit DAE
$$
\begin{align}
1.& \hspace{1em} x_{n+1} = x_n + h \sum_{j=0}^{s}b_j f(x_{n-j},z_{n-j},t_{n-j})\\
2.& \hspace{1em} z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$

#### Implicit DAE
$$
\begin{align}
1.& \hspace{1em} \text{solve}\\
&\hspace{2em} f(x_{n},z_{n},\frac{x_{n+1} - x_n}{h b_0} - \sum_{j=1}^{s} \frac{b_j}{b_0} f(x_{n-j},z_{n-h},t_{n-j}),t_n) = 0\\
&\hspace{4em}\frac{\partial f}{\partial x_{n+1}} = \frac{1}{h b_0}\frac{\partial f}{\partial \dot{x}}\\
&\hspace{1em}\text{for }x_{n+1}\\
2.& \hspace{1em}\text{solve }g(x_{n+1},z_{n+1},t_{n+1}) = 0\text{ for } z_{n+1}
\end{align}
$$

### 2.2.2 Implicit Adams–Moulton methods
Table of coefficients for Adams-Moulton methods:

| Order   | $b_0$ | $b_1$ | $b_2$ | $b_3$ | $b_4$ | $b_5$ | $a_1$ |
| --------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 1 | 1 |  |  |  |  |  | 1 |
| 2 | 1/2 | -1/2 |  |  |  |  | 1 |
| 3 | 5/12 | 2//3 | -1/12 |  |  |  | 1 |
| 4 | 3/8 | 19/24 | -5/24 | 1/24 |  |  | 1 |
| 5 | 251/720 | 323/360 | -11/30 | 53/160 | -19/720 |  | 1 |
| 6 | 95/288 | 1427/1440 | -133/240 | 241/720 | -173/1440 | 3/160 | 1 |

$$
x_{n+1} = x_n + h \sum_{j=0}^{s}b_j f(x_{n+1-j},t_{n+1-j})
$$
#### Explicit DAE
$$
\begin{align}
1.&\hspace{1em} \text{solve}\\
&\hspace{2em}F:\hspace{1em} x_{n+1} = x_n + h \sum_{j=0}^{s} b_j f(x_{n+1-j},g(x_{n+1-j},t_{n+1-j}),t_{n+1-j})\\
&\hspace{4em}\frac{\partial F}{\partial x_{n+1}} = \delta - h b_0 (\frac{\partial f}{\partial x} + \frac{\partial f}{\partial z} \frac{\partial g}{\partial x})\\
&\hspace{1em} \text{for } x_{n+1}\\
2.&\hspace{1em}z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$

#### Implicit DAE
$$
\begin{align}
&\text{solve }\\
&\hspace{1em}F_x: \hspace{1em} f(x_{n+1},z_{n+1},\frac{x_{n+1} - \sum_{j=1}^{s} a_j x_{n+1-j}}{h b_0},t_{n+1}) = 0\\
&\hspace{1em}F_z: \hspace{1em} g(x_{n+1},z_{n+1},t_{n+1}) = 0\\
&\hspace{3em}\frac{\partial F_x}{x_{n+1}} = \frac{\partial f}{\partial x} + \frac{1}{h b_0} \frac{\partial f}{\partial \dot{x}}\\
&\hspace{3em}\frac{\partial F_x}{z_{n+1}} = \frac{\partial f}{\partial z}\\
&\hspace{3em}\frac{\partial F_z}{x_{n+1}} = \frac{\partial g}{\partial x}\\
&\hspace{3em}\frac{\partial F_z}{z_{n+1}} = \frac{\partial g}{\partial z}\\
&\text{for }x_{n+1},z_{n+1}
\end{align}
$$

### 2.2.3 BDF methods
Table of coefficients for BDF methods:

| Order   | $a_1$ | $a_2$ | $a_3$ | $a_4$ | $a_5$ | $a_6$ | $b_0$ |
| --------- | ------- | ------- | ------- | ------- | ------- | ------- | ------- |
| 1 | 1 |  |  |  |  |  | 1 |
| 2 | 4/3 | -1/3 |  |  |  |  | 2/3 |
| 3 | 18/11 | -9//11 | 2/11 |  |  |  | 6/11 |
| 4 | 48/25 | -36/25 | 16/25 | -3/25 |  |  | 12/25 |
| 5 | 300/137 | -300/137 | 200/137 | -75/137 | 12/137 |  | 60/137 |
| 6 | 360/147 | -450/147 | 400/147 | −225/147 | 72/147 | −10/147 | 60/147 |

$$
x_{n+1} = \sum_{j=1}^{s}a_j x_{n+1-j} + b_0 h f(x_{n+1},t_{n+1})
$$
#### Explicit DAE
$$
\begin{align}
1.&\hspace{1em} \text{solve}\\
&\hspace{2em}F: \hspace{1em} x_{n+1} = \sum_{j=1}^{s}a_j x_{n+1-j} + b_0 h f(x_{n+1},g(x_{n+1},t_{n+1}),t_{n+1})\\
&\hspace{4em}\frac{\partial F}{\partial x_{n+1}} = I - b_0 h (\frac{\partial f}{\partial x} + \frac{\partial f}{\partial z}\frac{\partial g}{\partial x})\\
&\hspace{1em}\text{for } x_{n+1}\\
2.&\hspace{1em} z_{n+1} = g(x_{n+1},t_{n+1})
\end{align}
$$
#### Implicit DAE
$$
\begin{align}
&F_x: \hspace{1em} f(x_{n+1},z_{n+1},\frac{x_{n+1} - \sum_{j=1}^{s} a_j x_{n+1-j}}{h b_0},t_{n+1}) = 0\\
&F_z: \hspace{1em} g(x_{n+1},z_{n+1},t_{n+1}) = 0\\
&\frac{\partial Fx}{x_{n+1}} = \frac{\partial f}{\partial x} + \frac{1}{h b_0} \frac{\partial f}{\partial \dot{x}}\\
&\frac{\partial Fx}{z_{n+1}} = \frac{\partial f}{\partial z}\\
&\frac{\partial Fz}{x_{n+1}} = \frac{\partial g}{\partial x}\\
&\frac{\partial Fz}{z_{n+1}} = \frac{\partial g}{\partial z}
\end{align}
$$