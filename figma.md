# Tamasha Bhawan - Design Specifications

## Global Styles

### Colors

- Primary Blue: `#2563eb` (blue-600)
- Secondary Blue: `#3b82f6` (blue-500)
- Dark Blue: `#1e40af` (blue-800)
- White: `#ffffff`
- Gold: `#f0c141`
- Text Gray: `#1f2937` (gray-900)
- Light Gray: `#f9fafb` (gray-50)

### Typography

- Headings: Inter, sans-serif
- Body: Inter, sans-serif
- Font Sizes:
  - Hero: 48px/60px (3xl-5xl)
  - H1: 36px/48px (3xl-4xl)
  - H2: 30px/40px (2xl-3xl)
  - H3: 24px/32px (xl-2xl)
  - Body: 16px/24px (base)
  - Small: 14px/20px (sm)

### Spacing

- Container Max Width: 1280px (max-w-7xl)
- Padding:
  - Desktop: 32px (px-8)
  - Tablet: 24px (px-6)
  - Mobile: 16px (px-4)
- Gap: 32px (gap-8)

### Effects

- Shadows:
  - Card: `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
  - Hover: `box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.25)`
- Border Radius:
  - Large: 12px (rounded-xl)
  - Medium: 8px (rounded-lg)
  - Small: 6px (rounded-md)
- Gradients:
  - Page Background: `linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(59, 130, 246, 0.92))`
  - Text Gradient: `linear-gradient(to right, #60a5fa, #93c5fd)`

### Animations

- Transitions:
  - Duration: 300ms
  - Timing: ease-in-out
- Hover Effects:
  - Scale: 1.05
  - Shadow Increase
  - Color Shift

## Page-Specific Layouts

### Home Page

- Hero Section:
  - Height: 100vh
  - Background: Page gradient + Music pattern overlay
  - Logo Size: 80px × 80px
  - Heading: 48px, gradient text
  - Subheading: 20px, white/90%
- Feature Cards:
  - Grid: 3 columns
  - Size: 320px × 240px
  - Padding: 32px
  - Icon Size: 48px × 48px
- Featured Image:
  - Height: 400px
  - Width: 100%
  - Object Fit: cover

### Courses Page

- Course Cards:
  - Grid: 3 columns
  - Size: 380px × auto
  - Padding: 32px
  - Icon Size: 48px × 48px
  - Image Height: 200px
- Pricing:
  - Font Size: 24px
  - Color: blue-600
- Button:
  - Width: 100%
  - Height: 48px
  - Border Radius: 6px

### Notes Page

- Category Cards:
  - Grid: 3 columns
  - Size: 360px × 240px
  - Icon Container: 64px × 64px
  - Icon Size: 32px × 32px
- Hover Effect:
  - Scale: 1.05
  - Shadow: Large
  - Duration: 300ms

### Note Category Page

- Note Cards:
  - Grid: 2 columns
  - Padding: 32px
  - Border Radius: 12px
  - Gap: 32px
- Level Badge:
  - Height: 24px
  - Padding: 8px 12px
  - Border Radius: 9999px

### Students Page

- Stats Section:
  - Grid: 4 columns
  - Number Size: 36px
  - Label Size: 16px
- Student Cards:
  - Grid: 3 columns
  - Image Height: 256px
  - Padding: 24px
  - Icon Size: 16px × 16px

### Performances Page

- Event Cards:
  - Grid: 2 columns (upcoming)
  - Grid: 3 columns (past)
  - Image Height: 256px (upcoming)
  - Image Height: 192px (past)
  - Padding: 24px
  - Icon Size: 20px × 20px

### Testimonials Page

- Testimonial Cards:
  - Grid: 2 columns
  - Padding: 32px
  - Avatar Size: 64px × 64px
  - Quote Icon Size: 32px × 32px
  - Star Size: 20px × 20px

### Contact Page

- Form Section:
  - Width: 50%
  - Input Height: 40px
  - Textarea Height: 160px
  - Gap: 24px
- Info Section:
  - Icon Size: 24px × 24px
  - Icon Background: 48px × 48px
  - Gap: 16px
- Map:
  - Height: 400px
  - Border Radius: 12px

### Navigation

- Header Height: 64px
- Logo Size: 32px × 32px
- Nav Links:
  - Gap: 32px
  - Padding: 8px 12px
- Mobile Menu:
  - Hamburger Size: 24px × 24px
  - Menu Item Height: 48px

### Footer

- Padding: 64px 32px 32px
- Logo Size: 32px × 32px
- Grid: 4 columns
- Social Icons:
  - Size: 24px × 24px
  - Gap: 16px

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Component States

#### Buttons

- Default:
  - Background: blue-600
  - Text: white
- Hover:
  - Background: blue-700
  - Scale: 1.05
  - Shadow: blue-500/30
- Active:
  - Background: blue-800
  - Scale: 0.98

#### Form Inputs

- Default:
  - Border: gray-300
  - Background: white
- Focus:
  - Border: blue-500
  - Ring: blue-200
  - Ring Width: 4px
- Error:
  - Border: red-500
  - Background: red-50

#### Cards

- Default:
  - Background: white
  - Shadow: sm
- Hover:
  - Shadow: xl
  - Transform: translateY(-8px)
- Active:
  - Shadow: md
  - Transform: translateY(-4px)

### Animation Specifications

#### MusicNote Component

- Initial:
  - Scale: 0
  - Opacity: 0
- Animate:
  - Scale: [0, 1, 0]
  - Opacity: [0, 1, 0]
  - Rotate: [0, 360]
- Duration: 20s
- Ease: [0.43, 0.13, 0.23, 0.96]

#### Page Transitions

- Initial:
  - Opacity: 0
  - Y: 20px
- Animate:
  - Opacity: 1
  - Y: 0
- Duration: 800ms
- Stagger: 200ms per item

#### Hover Animations

- Cards:
  - Transform: translateY(-8px)
  - Shadow: xl
  - Duration: 300ms
- Buttons:
  - Scale: 1.05
  - Background: Darken 10%
  - Duration: 200ms
- Icons:
  - Rotate: 5deg
  - Scale: 1.1
  - Duration: 300ms
