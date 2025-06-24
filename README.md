# Portfolio Dashboard

A modern, responsive React portfolio dashboard based on your design reference. This application features smooth animations, hover effects, and a clean, professional layout.

## Features

- **Modern Design**: Clean, minimalist interface matching your reference design
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, floating elements, and hover interactions
- **Interactive Elements**: Hover effects on navigation and contact links
- **Mouse Tracking**: Subtle background elements that respond to mouse movement

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   cd portfolio-dashboard
   pnpm install
   ```

2. **Start Development Server**:
   ```bash
   pnpm run dev
   ```

3. **Build for Production**:
   ```bash
   pnpm run build
   ```

## Project Structure

```
portfolio-dashboard/
├── src/
│   ├── App.jsx          # Main component with portfolio layout
│   ├── App.css          # Custom styles and animations
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Customization

### Updating Content
- Edit the name in `App.jsx` (currently "Onye")
- Update contact links (email, resume, LinkedIn)
- Modify navigation menu items
- Change the tagline/description

### Styling
- Colors and themes are defined in `App.css`
- Animations can be customized in the CSS file
- Responsive breakpoints use Tailwind CSS classes

### Adding Sections
The current layout is a single-page design. You can extend it by:
- Adding more sections below the main content
- Implementing routing for multiple pages
- Adding a portfolio gallery or project showcase

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Animations and advanced styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using CSS transforms
- Responsive images and layouts
- Minimal JavaScript bundle size
- Fast loading times

Enjoy your new portfolio dashboard!

