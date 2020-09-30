General approach:

$
  \begin{align}
  &I = I_in * T\\
  &T = exp(-D)\\
  &D = \int_0^L d(t)dt, D>0, L - \text{distance}, d - \text{density distribution}
  \end{align}
$

Sin:

$
  \begin{align}
  &d(\vec{ro} + t \cdot \vec{rd}) = \frac{(cos(a \cdot t + b) + 1)}{2}\\
  &D = \frac{sin(a\cdot L + b) - sin(b) + a L}{2a}
  \end{align}
$

$
  \begin{align}
  &d(\vec{ro} + t \cdot \vec{rd}) = \frac{(cos(a \cdot t + b) + 1) t}{2}\\
  &D = \frac{sin(a \cdot L + b) - sin(b) - a L cos(a \cdot L + b)}{2a^2}
  \end{align}
$

Exponential:

$
  \begin{align}
  &d(\vec{ro} + t \cdot \vec{rd}) = a \cdot exp(b \cdot t \cdot rd_y + ro_y)\\
  &D = \frac{a \cdot exp(ro_y)}{b \cdot rd_y} (exp(b \cdot L \cdot rd_y) - 1)
  \end{align}
$

Gaussian blob at (0,0,0):

$
  \begin{align}
  &d(\vec{ro} + t \cdot \vec{rd}) = a \cdot exp(-b \cdot ((ro_x+t\cdot rd_x)^2+(ro_y+t\cdot rd_y)^2+(ro_z+t\cdot rd_z)^2)) \\
  &D  = \frac{a\sqrt{\pi}\cdot exp(b\cdot((\vec{ro}\cdot \vec{rd})^2-\vec{ro}\cdot\vec{ro}))}{2\sqrt{b}}(erf(\sqrt{b}\cdot(\vec{ro}\cdot\vec{rd} + L)) - erf(\sqrt{b}\cdot\vec{ro}\cdot\vec{rd}))
  \end{align}
$