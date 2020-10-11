# Transient modeling

$i(t)$ - instantenuous current

$v(t)$ - instantenuous voltage relative to zero

Sum of $i(t)$ at each node equal to zero

# AC/DC steady state modeling

$V$ - phasor voltage, $V = |V|e^{\omega t + atan(im(V)/re(V))}$

$I$ - phasor current, $I = |I|e^{\omega t + atan(im(I)/re(I))}$

$\omega$ - AC source frequency

For circuit with AC sources of different frequencies full voltages and currents are:

$v(t) = |V_{\omega_1}|e^{\omega_1 t + arg(V_{\omega_1})} + |V_{\omega_2}|e^{\omega_2 t + arg(V_{\omega_2})} + \cdots$

$i(t) = |I_{\omega_1}|e^{\omega_1 t + arg(I_{\omega_1})} + |I_{\omega_2}|e^{\omega_2 t + arg(I_{\omega_2})} + \cdots$

# Elements

## Resistor

![Resistor](https://drive.google.com/uc?id=1FliKI1E-oGInJxL_5IWvtafyIldcvzUY "Resistor")

Parameters: $R$ - resistance

### Transient model

$
\begin{align}
i_R &= \frac{v_1 - v_2}{R}\\
i_1 &= - i_R\\
i_2 &= i_R
\end{align}
$

or

$
\begin{align}
R\cdot i_R &= v_1 - v_2\\
i_1 &= - i_R\\
i_2 &= i_R
\end{align}
$

### Steady state model

$
\begin{align}
re(I_R) &= \frac{re(V_1) - re(V_2)}{R}\\
im(I_R) &= \frac{im(V_1) - im(V_2)}{R}\\
re(I_1) &= - re(I_R)\\
im(I_1) &= - im(I_R)\\
re(I_2) &= re(I_R)\\
im(I_2) &= im(I_R)
\end{align}
$

or

$
\begin{align}
R\cdot re(I_R) &= re(V_1) - re(V_2)\\
R\cdot im(I_R) &= im(V_1) - im(V_2)\\
re(I_1) &= - re(I_R)\\
im(I_1) &= - im(I_R)\\
re(I_2) &= re(I_R)\\
im(I_2) &= om(I_R)
\end{align}
$

## Short circuit

![Short circuit](https://drive.google.com/uc?id=1Kw0snBWtzhs-i7rHzLD5l0nkHuxqGBuV "Short circuit")

### Transient model

$
\begin{align}
0 &= v_1 - v_2\\
i_1 &= - i_{SC}\\
i_2 &= i_{SC}
\end{align}
$

### Steady state model

$
\begin{align}
0 &= re(V_1) - re(V_2)\\
0 &= im(V_1) - im(V_2)\\
re(I_1) &= - re(I_R)\\
im(I_1) &= - im(I_R)\\
re(I_2) &= re(I_R)\\
im(I_2) &= im(I_R)
\end{align}
$

## Inductor

![Inductor](https://drive.google.com/uc?id=1PjFgY9Vh4R9PYIFhfKy8GFguKqRXKtDB "Inductor")

Parameters: $L$ - inductance

### Transient model

$
\begin{align}
L\cdot\frac{di_L}{dt} &= v_1 - v_2\\
i_1 &= - i_L\\
i_2 &= i_L
\end{align}
$

### Steady state model

$
\begin{align}
\omega L\cdot im(I_L)  &= re(V_1) - re(V_2)\\
\omega L \cdot re(I_L) &= im(V_1) - im(V_2)\\
re(I_1) &= - re(I_L)\\
im(I_1) &= - im(I_L)\\
re(I_2) &= re(I_L)\\
im(I_2) &= im(I_L)
\end{align}
$

## Capacitor

![Capacitor](https://drive.google.com/uc?id=11_iUTLcQRmbDXa4bwsZ1wMAfaQtQ0exc "Capacitor")

Parameters: $C$ - capacitance

### Transient model

$
\begin{align}
i_C &= C\cdot(\frac{dv_1}{dt} - \frac{dv_2}{dt})\\
i_1 &= - i_C\\
i_2 &= i_C
\end{align}
$

### Steady state model

$
\begin{align}
re(I_C) &= - \omega C(im(V_1) - im(V_2))\\
im(I_C) &= \omega C(re(V_1) - re(V_2))\\
re(I_1) &= - re(I_C)\\
im(I_1) &= - im(I_C)\\
re(I_2) &= re(I_C)\\
im(I_2) &= im(I_C)
\end{align}
$

## Real transformer with 2 windings

![Real transformer](https://drive.google.com/uc?id=1J-prFmJ80cbVJY7r9w0Nt000mMgPIL0g "Real transformer")

Parameters: $R_p$ - primary winding resistance, $L_p$ - primary winding inductance, $R_c$ - core resistance, $L_m$ - magnetizing inductance, $R_s$ - secondary winding resistance, $L_s$ - secondary winding inductance, $K$ - transformation ratio.

### Transient model

$
\begin{align}
v_1 - v_2 &= i_p R_p + L_p \frac{di_p}{dt} + i_c R_c\\
v_3 - v_4 &= i_s R_s + L_s \frac{di_s}{dt} K\cdot i_c R_c\\
i_c R_c &= L_m \frac{di_m}{dt}\\
K\cdot i_s &= i_p - i_m - i_c\\
i_1 &= - i_p\\
i_2 &= i_p\\
i_3 &= - i_s\\
i_4 &= i_s
\end{align}
$

### Steady state model

$
\begin{align}
re(V_1) - re(V_2) &= re(I_p) R_p - \omega L_p im(I_p) + re(I_c) R_c\\
im(V_1) - im(V_2) &= im(I_p) R_p + \omega L_p re(I_p) + im(I_c) R_c\\
re(V_3) - re(V_4) &= re(I_s) R_s - \omega L_s im(I_s) K\cdot re(I_c) R_c\\
im(V_3) - im(V_4) &= im(I_s) R_s + \omega L_s re(I_s) K\cdot im(I_c) R_c\\
re(I_c) R_c &= - \omega L_m im(I_m)\\
im(I_c) R_c &= \omega L_m re(I_m)\\
K\cdot re(I_s) &= re(I_p) - re(I_m) - re(I_c)\\
K\cdot im(I_s) &= im(I_p) - im(I_m) - im(I_c)\\
re(i_1) &= - re(I_p)\\
im(i_1) &= - im(I_p)\\
re(I_2) &= re(I_p)\\
im(I_2) &= im(I_p)\\
re(I_3) &= - re(I_s)\\
im(I_3) &= - im(I_s)\\
re(I_4) &= re(I_s)\\
im(I_4) &= im(I_s)
\end{align}
$

## Ideal transformer with 2 windings

![Ideal transformer with 2 windings](https://drive.google.com/uc?id=1Eh2jxFfy1ShOJW5hIBJlC2e97uu3IV4E "Ideal transformer with 2 windings")

Parameters: $K$ - transformation ratio

### Transient model

$
\begin{align}
K\cdot (v_2 - v_1) &= v_4 - v_3\\
i_p &= K i_s\\
i_1 &= - i_p\\
i_2 &= i_p\\
i_3 &= - i_s\\
i_4 &= i_s
\end{align}
$

### Steady state model

$
\begin{align}
K\cdot (re(V_2) - re(V_1)) &= re(V_4) - re(V_3)\\
K\cdot (im(V_2) - im(V_1)) &= im(V_4) - im(V_3)\\
re(I_p) &= K re(I_s)\\
im(I_p) &= K im(i_s)\\
re(I_1) &= - re(I_p)\\
im(I_1) &= - im(I_p)\\
re(I_2) &= re(I_p)\\
im(I_2) &= im(I_p)\\
re(I_3) &= - re(I_s)\\
im(I_3) &= - im(I_s)\\
re(I_4) &= re(I_s)\\
im(I_4) &= im(I_s)
\end{align}
$


## Ideal autotransformer

![Ideal autotransformer](https://drive.google.com/uc?id=1tuMhhZDapS2G1KzaNCgO1GwMG67aFRwb "Ideal autotransformer")

Parameters: $K$ - transformation ratio

### Transient model

$
\begin{align}
K\cdot (v_3 - v_1) &= v_3 - v_2\\
i_{12} &= K \cdot i_{12} + K\cdot i_{32}\\
i_1 &= - i_{12}\\
i_2 &= i_{12} + i_{32}\\
i_3 &= - i_{32}
\end{align}
$

### Steady state model

$
\begin{align}
K\cdot (re(V_3) - re(V_1)) &= re(V_3) - re(V_2)\\
K\cdot (im(V_3) - im(V_1)) &= im(V_3) - im(V_2)\\
re(I_{12}) &= K \cdot re(I_{12}) + K\cdot re(I_{32})\\
im(I_{12}) &= K \cdot im(I_{12}) + K\cdot im(I_{32})\\
re(I_1) &= - re(I_{12})\\
im(I_1) &= - im(I_{12})\\
re(I_2) &= re(I_{12}) + re(I_{32})\\
im(I_2) &= im(I_{12}) + im(I_{32})\\
re(I_3) &= - re(i_{32})\\
im(I_3) &= - im(I_{32})
\end{align}
$

## Ideal transformer with 3 windings

![Ideal transformer with 3 windings](https://drive.google.com/uc?id=1ioG5JiSWuykSUqPZx4z1OMlRIfX8DEMw "Ideal transformer with 3 windings")

Parameters: $K1$, $K2$ - transformation ratios

### Transient model

$
\begin{align}
K_1\cdot (v_2 - v_1) &= v_4 - v_3\\
K_2\cdot (v_2 - v_1) &= v_6 - v_5\\
i_p = K_1\cdot i_{s1} + K_2\cdot i_{s2}\\
i_1 = - i_p\\
i_2 = i_p\\
i_3 = -i_{s1}\\
i_4 = i_{s1}\\
i_5 = - i_{s2}\\
i_6 = i_{s2}
\end{align}
$

### Steady state model

$
\begin{align}
K_1\cdot (re(V_2) - re(V_1)) &= re(V_4) - re(V_3)\\
K_1\cdot (im(V_2) - im(V_1)) &= im(V_4) - im(V_3)\\
K_2\cdot (re(V_2) - re(V_1)) &= re(V_6) - re(V_5)\\
K_2\cdot (im(V_2) - im(V_1)) &= im(V_6) - im(V_5)\\
re(I_p) = K_1\cdot re(I_{s1}) + K_2\cdot re(I_{s2})\\
im(I_p) = K_1\cdot im(I_{s1}) + K_2\cdot im(I_{s2})\\
re(I_1) = - re(I_p)\\
im(I_1) = - im(I_p)\\
re(I_2) = re(I_p)\\
im(I_2) = im(I_p)\\
re(I_3) = -re(I_{s1})\\
im(I_3) = -im(I_{s1})\\
re(I_4) = re(I_{s1})\\
im(I_4) = im(I_{s1})\\
re(I_5) = - re(I_{s2})\\
im(I_5) = - im(I_{s2})\\
re(I_6) = re(I_{s2})\\
im(I_6) = im(I_{s2})
\end{align}
$

## Current Source

![Current Source](https://drive.google.com/uc?id=1Z8Rod--1Gdd8HSLyYC8dSzK1FJtwEdSP "Current Source")

Parameters: $j(t)$ - current

### Transient model

$
\begin{align}
i_1 &= - j(t)\\
i_2 &= j(t)
\end{align}
$

### Steady state model

$j(t) = |J|cos(\omega_e \cdot t + arg(J))$

$
\begin{align}
re(I_1) &= - re(J)\\
im(I_1) &= - im(J)\\
re(I_2) &= re(J)\\
im(I_2) &= im(J)
\end{align}
$

## Voltage Source

![Voltage Source](https://drive.google.com/uc?id=1k7Rpn-YP7Fw7-UVI108QOW9_zc5Iwykp "Voltage Source")

Parameters: $e(t)$ - emf

### Transient model

$
\begin{align}
e(t) &= v_2 - v_1 \\
i_1 &= i_V\\
i_2 &= - i_V
\end{align}
$

### Steady state model

$e(t) = |E|cos(\omega_e \cdot t + arg(E))$

$
\begin{align}
re(E) &= re(V_2) - re(V_1) \\
im(E) &= im(V_2) - im(V_1) \\
re(I_1) &= re(I_V)\\
im(I_1) &= im(I_V)\\
re(I_2) &= - re(I_V)\\
im(I_2) &= - im(I_V)
\end{align}
$

## On-off switch

![On-off switch](https://drive.google.com/uc?id=1DBReRfovVsNdB68zYnOA5RLcEBb5JJKI "On-off switch")

Parameters: $p$ - state, $p \in {0,1}$

### Transient model

$
\begin{align}
0 &= p\cdot (v_2 - v_1) -  (1-p)\cdot i_S\\
i_1 &= - i_S\\
i_2 &= i_S
\end{align}
$

### Steady state model

$
\begin{align}
0 &= p\cdot (re(V_2) - re(V_1)) -  (1-p)\cdot re(I_S)\\
0 &= p\cdot (im(V_2) - im(V_1)) -  (1-p)\cdot im(I_S)\\
re(I_1) &= - re(I_S)\\
im(I_1) &= - im(I_S)\\
re(I_2) &= re(I_S)\\
im(I_2) &= im(I_S)
\end{align}
$

## Two way switch

![Two way switch](https://drive.google.com/uc?id=1ZWyFjEGrxuNdHVMJ-O0b6OVkeTtYaSzT "Two way switch")

Parameters: $p$ - state, $p \in {0,1}$

### Transient model

$
\begin{align}
0 &= (1-p)\cdot(v_2 - v_1) + p\cdot i_{12}\\
0 &= p\cdot(v_3 - v_1) + (1-p)\cdot i_{13}\\
i_1 &= - i_{12} - i_{13}\\
i_2 &= i_{12}\\
i_3 &= i_{13}
\end{align}
$

### Steady state model

$
\begin{align}
0 &= (1-p)\cdot(re(V_2) - re(V_1)) + p\cdot re(I_{12})\\
0 &= (1-p)\cdot(im(V_2) - im(V_1)) + p\cdot im(I_{12})\\
0 &= p\cdot(re(V_3) - re(V_1)) + (1-p)\cdot re(I_{13})\\
0 &= p\cdot(im(V_3) - im(V_1)) + (1-p)\cdot im(I_{13})\\
im(I_1) &= - im(I_{12}) - im(I_{13})\\
re(I_1) &= - re(I_{12}) - re(I_{13})\\
re(I_2) &= re(I_{12})\\
im(I_2) &= im(I_{12})\\
re(I_3) &= re(I_{13})\\
im(I_3) &= im(I_{13})
\end{align}
$

## Two way switch with off state

Parameters: $p$ - state, $p \in {0,1,2}$

### Transient model

$
\begin{align}
0 &= min(|1-p|,1)\cdot i_{12}  + (1-min(|1-p|,1))\cdot(v_2 - v_1)\\
0 &= min(|2-p|,1)\cdot i_{13}  + (1-min(|2-p|,1))\cdot(v_3 - v_1)\\
i_1 &= - i_{12} - i_{13}\\
i_2 &= i_{12}\\
i_3 &= i_{13}
\end{align}
$

### Steady state model

$
\begin{align}
0 &= min(|1-p|,1)\cdot re(I_{12})  + (1-min(|1-p|,1))\cdot(re(V_2) - re(V_1))\\
0 &= min(|1-p|,1)\cdot im(I_{12})  + (1-min(|1-p|,1))\cdot(im(V_2) - im(V_1))\\
0 &= min(|2-p|,1)\cdot re(I_{13})  + (1-min(|2-p|,1))\cdot(re(V_3) - re(V_1))\\
0 &= min(|2-p|,1)\cdot im(I_{13})  + (1-min(|2-p|,1))\cdot(im(V_3) - im(V_1))\\
re(I_1) &= - re(I_{12}) - re(I_{13})\\
im(I_1) &= - im(I_{12}) - im(I_{13)}\\
re(I_2) &= re(I_{12})\\
im(I_2) &= im(I_{12})\\
re(I_3) &= re(I_{13})\\
im(I_3) &= im(I_{13})
\end{align}
$

## Ground

![Ground](https://drive.google.com/uc?id=1MfBIrO8WQvSRwlPqOuYDj1pF-8x6qYG6 "Ground")

### Transient model

$
\begin{align}
v_g &= 0\\
i_1 &= i_G
\end{align}
$

### Steady state model

$
\begin{align}
re(V_g) &= 0\\
im(V_g) &= 0\\
re(I_1) &= re(I_G)\\
im(I_1) &= im(I_G)
\end{align}
$