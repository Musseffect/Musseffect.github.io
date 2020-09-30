### TODO


# Linear perspective

## Point projection

$
i_{xy} = \frac{p_{xy}}{p_z \cdot tan(\frac{fov}{2})}
$

## Ray generation

$
\vec{ro} = \vec{eye}\\
\vec{rd} = normalize(\vec{dir} + tan(\frac{fov}{2})(i_x \cdot \vec{right} + i_y \cdot \vec{up}))
$

# Linear reverse perspective

## Point projection

$
i_{xy} = \frac{p_{xy}}{|focus - p_z| \cdot tan(\frac{fov}{2})}
$

## Ray generation

$
\vec{ro} = \vec{eye} + tan(\frac{fov}{2})(i_x \cdot \vec{right} + i_y \cdot \vec{up})\\
\vec{rd} = normalize(\vec{eye} + focus \cdot \vec{dir} - \vec{ro})
$

# Fisheye

## Point projection

$
\theta = atan(\frac{p_z}{p_x})\\
r = \sqrt{p_x^2+p_y^2}\\
R = \frac{2}{fov} \cdot f(atan(\frac{r}{p_z}))\\
i_{xy} = vec2(cos(\theta),sin(\theta)) \cdot R
$

## Ray generation

$
\theta = atan(\frac{i_y}{i_x})\\
R = \sqrt{i_x^2 + i_y^2}\\
\phi = \cdot f^-1(R \cdot \frac{fov}{2})\\
\vec{ro} = \vec{eye}\\
\vec{rd} = \vec{dir} \cdot cos(\phi) + \vec{up} \cdot sin(\phi)sin(\theta) + \vec{right} \cdot sin(\phi)cos(\theta)
$

# Reverse Fisheye

## Ray generation

$
\theta = atan(\frac{i_y}{i_x})\\
R = \sqrt{i_x^2 + i_y^2}\\
\phi = \cdot f^-1(R \cdot \frac{fov}{2})\\
\vec{ro} = \vec{eye} - \vec{dir} \cdot cos(\phi) - \vec{up} \cdot sin(\phi)sin(\theta) - \vec{right} \cdot sin(\phi)cos(\theta)\\
\vec{rd} = \vec{dir} \cdot cos(\phi) + \vec{up} \cdot sin(\phi)sin(\theta) + \vec{right} \cdot sin(\phi)cos(\theta)
$

# Spherical projection

## Point projection

$
\theta = \frac{\pi}{2} - atan(\frac{p_z}{p_x})\\
\phi = \frac{\pi}{2} - atan(\frac{p_z}{p_y})\\
i_{xy} = \frac{2}{fov} vec2(\theta,\phi)
$

## Ray generation

$
\theta = \frac{fov}{2} \cdot i_y\\
\phi = \frac{fov}{2}\cdot i_x\\
\vec{ro} = \vec{eye}\\
\vec{rd} = \vec{dir} \cdot cos(\phi)cos(\theta) + \vec{up} \cdot sin(\theta) + \vec{right} \cdot sin(\phi)cos(\theta)
$

# Orthogonal projection

## Point projection

$
i_{xy} = vec2(\frac{p_x}{width},\frac{p_y}{height}) 
$

## Ray generation

$
\vec{ro} = \vec{eye} + \vec{up} \cdot i_y \cdot height + \vec{right} \cdot i_x \cdot width\\
\vec{rd} = \vec{dir}
$

# Cylindrical projection

## Point projection

$
i_{xy} = \frac{2}{fov}vec2(\frac{\pi}{2} - atan(\frac{p_z}{p_x}),\frac{p_y}{\sqrt{p_x^2 + p_z^2}})
$

## Ray generation

$
\phi = \frac{fov}{2} \cdot i_x\\
\vec{ro} = \vec{eye}\\
\vec{rd} = normalize(\vec{dir} \cdot cos(\phi) + \vec{up} \cdot i_y \cdot tan(\frac{fov}{2}) + \vec{right} \cdot sin(\phi))
$