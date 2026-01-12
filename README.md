# tailwind-vw-utilities

A Tailwind CSS v4 plugin that automatically converts px values to vw units.

## Installation

```bash
npm install tailwind-vw-utilities
# or
pnpm add tailwind-vw-utilities
```

## Usage

```css
@import "tailwindcss";
@import "tailwind-vw-utilities";
```

## Basic Usage

Simply specify px values from your design comp, and they will be automatically converted to vw units.

```tsx
// Before (manual calculation)
className = "mb-[4.2667vw] md:mb-6";
// Calculate 16 ÷ 375 × 100 = 4.2667 every time...

// After (specify px values)
className = "vw-mb-16 md:mb-6";
// Specify px values directly, auto-converted to vw
```

## Changing the Base Width

The default base width is 375px. Override it with a CSS variable:

```css
@import "tailwindcss";
@import "tailwind-vw-utilities";

:root {
  --vw-base: 750; /* Retina design base */
}
```

### Using Presets

```css
@import "tailwindcss";
@import "tailwind-vw-utilities";
@import "tailwind-vw-utilities/presets/retina-750";
```

Available presets:

- `presets/sp-375` - 375px base (default)
- `presets/retina-750` - 750px base (for Retina designs)
- `presets/desktop` - Desktop variable definitions

## Available Utilities

### Margin

| Class                                          | Description                 |
| ---------------------------------------------- | --------------------------- |
| `vw-m-*`                                       | margin                      |
| `vw-mx-*`                                      | margin-inline (horizontal)  |
| `vw-my-*`                                      | margin-block (vertical)     |
| `vw-mt-*`                                      | margin-top                  |
| `vw-mr-*`                                      | margin-right                |
| `vw-mb-*`                                      | margin-bottom               |
| `vw-ml-*`                                      | margin-left                 |
| `vw-ms-*`                                      | margin-inline-start         |
| `vw-me-*`                                      | margin-inline-end           |
| `-vw-m-*`                                      | negative margin             |
| `-vw-mt-*`, `-vw-mr-*`, `-vw-mb-*`, `-vw-ml-*` | negative individual margins |

### Padding

| Class     | Description                 |
| --------- | --------------------------- |
| `vw-p-*`  | padding                     |
| `vw-px-*` | padding-inline (horizontal) |
| `vw-py-*` | padding-block (vertical)    |
| `vw-pt-*` | padding-top                 |
| `vw-pr-*` | padding-right               |
| `vw-pb-*` | padding-bottom              |
| `vw-pl-*` | padding-left                |
| `vw-ps-*` | padding-inline-start        |
| `vw-pe-*` | padding-inline-end          |

### Gap

| Class        | Description |
| ------------ | ----------- |
| `vw-gap-*`   | gap         |
| `vw-gap-x-*` | column-gap  |
| `vw-gap-y-*` | row-gap     |

### Width / Height

| Class        | Description    |
| ------------ | -------------- |
| `vw-w-*`     | width          |
| `vw-min-w-*` | min-width      |
| `vw-max-w-*` | max-width      |
| `vw-h-*`     | height         |
| `vw-min-h-*` | min-height     |
| `vw-max-h-*` | max-height     |
| `vw-size-*`  | width & height |

### Font Size

| Class          | Description |
| -------------- | ----------- |
| `vw-text-*`    | font-size   |
| `vw-leading-*` | line-height |

### Position

| Class                                                    | Description        |
| -------------------------------------------------------- | ------------------ |
| `vw-inset-*`                                             | inset (all sides)  |
| `vw-inset-x-*`                                           | left & right       |
| `vw-inset-y-*`                                           | top & bottom       |
| `vw-top-*`                                               | top                |
| `vw-right-*`                                             | right              |
| `vw-bottom-*`                                            | bottom             |
| `vw-left-*`                                              | left               |
| `vw-start-*`                                             | inset-inline-start |
| `vw-end-*`                                               | inset-inline-end   |
| `-vw-top-*`, `-vw-right-*`, `-vw-bottom-*`, `-vw-left-*` | negative values    |

### Border Radius

| Class                                                                      | Description        |
| -------------------------------------------------------------------------- | ------------------ |
| `vw-rounded-*`                                                             | border-radius      |
| `vw-rounded-t-*`                                                           | top corners        |
| `vw-rounded-r-*`                                                           | right corners      |
| `vw-rounded-b-*`                                                           | bottom corners     |
| `vw-rounded-l-*`                                                           | left corners       |
| `vw-rounded-tl-*`, `vw-rounded-tr-*`, `vw-rounded-br-*`, `vw-rounded-bl-*` | individual corners |

### Border Width

| Class                                                              | Description      |
| ------------------------------------------------------------------ | ---------------- |
| `vw-border-*`                                                      | border-width     |
| `vw-border-t-*`, `vw-border-r-*`, `vw-border-b-*`, `vw-border-l-*` | individual sides |

### Transform

| Class                                    | Description     |
| ---------------------------------------- | --------------- |
| `vw-translate-x-*`                       | translateX      |
| `vw-translate-y-*`                       | translateY      |
| `-vw-translate-x-*`, `-vw-translate-y-*` | negative values |

### Scroll Margin / Padding

| Class                                                                  | Description    |
| ---------------------------------------------------------------------- | -------------- |
| `vw-scroll-m-*`, `vw-scroll-mx-*`, `vw-scroll-my-*`                    | scroll-margin  |
| `vw-scroll-mt-*`, `vw-scroll-mr-*`, `vw-scroll-mb-*`, `vw-scroll-ml-*` | individual     |
| `vw-scroll-p-*`, `vw-scroll-px-*`, `vw-scroll-py-*`                    | scroll-padding |
| `vw-scroll-pt-*`, `vw-scroll-pr-*`, `vw-scroll-pb-*`, `vw-scroll-pl-*` | individual     |

### Space Between

| Class          | Description                        |
| -------------- | ---------------------------------- |
| `vw-space-x-*` | horizontal margin between children |
| `vw-space-y-*` | vertical margin between children   |

### Flexbox

| Class        | Description |
| ------------ | ----------- |
| `vw-basis-*` | flex-basis  |

### Typography

| Class                   | Description               |
| ----------------------- | ------------------------- |
| `vw-tracking-*`         | letter-spacing            |
| `-vw-tracking-*`        | negative letter-spacing   |
| `vw-indent-*`           | text-indent               |
| `-vw-indent-*`          | negative text-indent      |
| `vw-decoration-*`       | text-decoration-thickness |
| `vw-underline-offset-*` | text-underline-offset     |

### Outline

| Class                  | Description             |
| ---------------------- | ----------------------- |
| `vw-outline-*`         | outline-width           |
| `vw-outline-offset-*`  | outline-offset          |
| `-vw-outline-offset-*` | negative outline-offset |

### Ring

| Class              | Description             |
| ------------------ | ----------------------- |
| `vw-ring-*`        | ring-width (box-shadow) |
| `vw-ring-offset-*` | ring-offset-width       |

### Divide

| Class           | Description                        |
| --------------- | ---------------------------------- |
| `vw-divide-x-*` | vertical border between children   |
| `vw-divide-y-*` | horizontal border between children |

### Border Radius (Logical Properties)

| Class             | Description        |
| ----------------- | ------------------ |
| `vw-rounded-s-*`  | start-side corners |
| `vw-rounded-e-*`  | end-side corners   |
| `vw-rounded-ss-*` | start-start corner |
| `vw-rounded-se-*` | start-end corner   |
| `vw-rounded-ee-*` | end-end corner     |
| `vw-rounded-es-*` | end-start corner   |

### Table

| Class                   | Description               |
| ----------------------- | ------------------------- |
| `vw-border-spacing-*`   | border-spacing            |
| `vw-border-spacing-x-*` | horizontal border-spacing |
| `vw-border-spacing-y-*` | vertical border-spacing   |

### SVG

| Class         | Description  |
| ------------- | ------------ |
| `vw-stroke-*` | stroke-width |

## Examples

```tsx
// Mobile-first example
<div className="vw-p-16 vw-mb-24 md:p-6 md:mb-8">
  <h1 className="vw-text-32 md:text-2xl">Title</h1>
  <p className="vw-mt-12 md:mt-4">Content</p>
</div>

// With flexbox
<div className="flex vw-gap-16 md:gap-6">
  <div className="vw-w-100">Item 1</div>
  <div className="vw-w-100">Item 2</div>
</div>

// Absolute positioning
<div className="relative">
  <div className="absolute vw-top-10 vw-right-10">
    Positioned element
  </div>
</div>
```

## Conversion Formula

```
vw value = px value / base width × 100vw

Example: vw-mb-16 (base width 375px)
→ margin-bottom: calc(16 / 375 * 100vw)
→ margin-bottom: 4.2667vw
```

## Responsive Design

Combine with Tailwind breakpoints:

```tsx
// Mobile: vw-based layout
// Tablet and up: switch to fixed values
<div className="vw-p-20 vw-text-14 md:p-5 md:text-base">Content</div>
```

## Requirements

- Tailwind CSS v4.0.0 or higher

## License

MIT
