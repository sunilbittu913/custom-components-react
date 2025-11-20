# Sarvora Base UI

A modern, TypeScript-based React component library with Storybook documentation. This library provides reusable, customizable UI components that are ready to publish to npm.

## Features

- 🎨 **Modern Design** - Beautiful components with smooth animations and transitions
- 📘 **TypeScript** - Full TypeScript support with exported type definitions
- 📚 **Storybook** - Interactive component documentation and playground
- 🎯 **Tree-shakeable** - Optimized bundle size with ESM support
- ♿ **Accessible** - Built with accessibility in mind
- 🎭 **Customizable** - Easy to customize with CSS variables

## Installation

```bash
npm install sarvora-base-ui
```

## Usage

### Basic Import

```tsx
import { Button, Card, Input } from 'sarvora-base-ui';
import 'sarvora-base-ui/styles';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

### Components

#### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'sarvora-base-ui';

// Variants: primary, secondary, danger
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="danger">Danger Button</Button>

// Sizes: small, medium, large
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

**Props:**
- `variant?: 'primary' | 'secondary' | 'danger'` - Button style variant (default: 'primary')
- `size?: 'small' | 'medium' | 'large'` - Button size (default: 'medium')
- All standard HTML button attributes

#### Card

A flexible card component for displaying content in a container.

```tsx
import { Card } from 'sarvora-base-ui';

// Basic card
<Card header="Card Title">
  Card content goes here
</Card>

// With footer
<Card 
  header="Product" 
  footer={<Button>Add to Cart</Button>}
>
  Product description
</Card>

// Variants: elevated, outlined
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
```

**Props:**
- `variant?: 'elevated' | 'outlined'` - Card style variant (default: 'elevated')
- `header?: React.ReactNode` - Header content
- `footer?: React.ReactNode` - Footer content
- `children: React.ReactNode` - Main content

#### Input

An input component with label, helper text, and error states.

```tsx
import { Input } from 'sarvora-base-ui';

// With label and helper text
<Input 
  label="Email" 
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

// With error
<Input 
  label="Password"
  type="password"
  error="Password is required"
/>

// Disabled
<Input 
  label="Username"
  disabled
  value="john_doe"
/>
```

**Props:**
- `label?: string` - Input label
- `helperText?: string` - Helper text displayed below the input
- `error?: string` - Error message (displays error state)
- All standard HTML input attributes

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run Storybook for development
npm run storybook

# Build the library
npm run build
```

### Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build the library for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build static Storybook site

## Publishing to npm

### First Time Setup

1. **Login to npm:**
   ```bash
   npm login
   ```

2. **Update package.json:**
   - Change the `name` field to your desired package name
   - Update `author`, `repository`, and other metadata
   - Adjust version as needed

3. **Build and publish:**
   ```bash
   npm run build
   npm publish
   ```

### Subsequent Releases

1. **Update version:**
   ```bash
   npm version patch  # or minor, or major
   ```

2. **Publish:**
   ```bash
   npm publish
   ```

### Publishing Scoped Packages

If using a scoped package name (e.g., `@yourname/component-library`), ensure the package is public:

```bash
npm publish --access public
```

## Customization

All components use CSS variables for theming. You can customize the design by overriding these variables:

```css
:root {
  --primary-600: #your-color;
  --spacing-md: 1.5rem;
  --radius-md: 0.75rem;
  /* ... and more */
}
```

See `src/styles/index.css` for all available CSS variables.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
