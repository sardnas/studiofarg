# TODO

- Define my own mui theme and color palette. Guide: https://mui.com/material-ui/customization/palette/#custom-colors
- Add my own favicon

# Claude:

What's better now:
Single source of truth - Your MUI theme in App.jsx is now the only place you define colors, fonts, and spacing
Automatic sync - When you update theme in App.jsx:6-37, all global styles update automatically
No manual duplication - The GlobalStyles component on App.jsx:61-124 reads directly from your theme
How to use it:
Option 1: Use MUI components with sx prop (recommended)
<Typography sx={{ color: 'primary.main', p: 2 }}>Text</Typography>
Option 2: Use the global CSS classes

<div className="Typography-h1">Heading</div>
<p className="text-primary">Primary colored text</p>
Option 3: Use CSS custom properties in your own CSS files
.myCustomClass {
  color: var(--color-primary-main);
  padding: var(--spacing-2);
}
Now when you change your theme colors or typography, everything updates automatically!
