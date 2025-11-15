# TechNova Solutions - Modern Tech Company Website

A fully-responsive, animated, and visually stunning website for a tech company that sells hardware projects, software solutions, IoT systems, and AI/ML services.

## 🌟 Features

### Design
- **Modern UI/UX**: Clean, futuristic tech-themed design
- **Glassmorphism Effects**: Beautiful glass-like transparent elements
- **Dark Theme**: Professional dark mode with vibrant cyan, purple, and pink accents
- **Gradient Backgrounds**: Animated gradient backgrounds throughout
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)

### Animations
- **Particle.js Background**: Interactive particle animation on hero section
- **GSAP Animations**: Smooth, professional animations for all elements
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Swiper.js Carousel**: Smooth service showcase slider
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Micro-interactions**: Subtle animations for enhanced user experience

### Pages

#### 1. Landing/Home Page (`index.html`)
- Hero section with animated text and glowing CTA button
- Particle.js animated background
- Service showcase carousel with Swiper.js
- "Why Choose Us" section
- Animated statistics counter
- Call-to-action section

#### 2. Services Page (`services.html`)
- Interactive service cards with hover effects
- Animated icons for each service
- Detailed service descriptions
- Process timeline (4-step approach)
- Services offered:
  - Hardware Solutions
  - Software Development
  - IoT Systems
  - AI & Machine Learning
  - Robotics
  - Cloud Solutions

#### 3. Products Page (`products.html`)
- Grid layout with product cards
- Filter functionality (All, Hardware, Software, IoT, AI)
- Product modal popups with detailed information
- Hover animations on product cards
- 9 sample products with pricing

#### 4. About Us Page (`about.html`)
- Mission & Vision sections
- Animated company timeline (2010-2025)
- Core values showcase
- Leadership team section
- Company journey with milestone animations

#### 5. Contact Page (`contact.html`)
- Stylish contact form with validation
- Real-time form validation
- Google Maps embed
- Contact information cards
- FAQ section with accordion
- Social media links

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styles with modern features
- **TailwindCSS 3.4.1**: Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)**: Modern vanilla JavaScript

### Libraries & Frameworks
- **GSAP 3.12.2**: Advanced animations
- **AOS.js 2.3.1**: Scroll animations
- **Swiper.js 11**: Touch slider/carousel
- **Particles.js 2.0.0**: Particle background effects

### Fonts
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
tech-company-website/
├── index.html              # Landing page
├── services.html           # Services page
├── products.html           # Products page
├── about.html             # About us page
├── contact.html           # Contact page
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   ├── main.js           # Main JavaScript functionality
│   ├── animations.js     # Animation configurations
│   └── products.js       # Products page functionality
├── assets/               # Assets folder (for images)
└── README.md            # This file
```

## 🚀 How to Run

### Option 1: Direct Browser Opening
1. Navigate to the project directory:
   ```bash
   cd tech-company-website
   ```

2. Open `index.html` in your web browser:
   - Double-click `index.html`, or
   - Right-click and select "Open with" → Your browser

### Option 2: Using a Local Server (Recommended)

#### Using Python:
```bash
cd tech-company-website
python3 -m http.server 8000
```
Then open: `http://localhost:8000`

#### Using Node.js (http-server):
```bash
npm install -g http-server
cd tech-company-website
http-server -p 8000
```
Then open: `http://localhost:8000`

#### Using PHP:
```bash
cd tech-company-website
php -S localhost:8000
```
Then open: `http://localhost:8000`

### Option 3: Using Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🌐 Deployment

### Deploy to Netlify
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `tech-company-website` folder
3. Your site will be live instantly!

### Deploy to Vercel
```bash
npm i -g vercel
cd tech-company-website
vercel
```

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push the code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Go to Settings → Pages → Select main branch
4. Your site will be live at `https://username.github.io/repo-name`

## 🎨 Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --primary: #06b6d4;    /* Cyan */
  --secondary: #8b5cf6;  /* Purple */
  --accent: #ec4899;     /* Pink */
  --dark: #0f172a;       /* Dark blue */
  --darker: #020617;     /* Darker blue */
  --light: #f8fafc;      /* Light gray */
}
```

### Content
- Update text content directly in HTML files
- Modify product data in `products.html`
- Change service descriptions in `services.html`
- Update company timeline in `about.html`

### Images
- Add your images to the `assets/` folder
- Replace emoji icons with actual images in HTML
- Update image paths in the code

### Animations
- Adjust animation speeds in `js/animations.js`
- Modify particle settings in the `particlesJS` configuration
- Change GSAP animation parameters

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Optimized animations using GSAP
- Lazy loading for images
- Efficient CSS with TailwindCSS
- Minimal JavaScript bundle
- CDN-hosted libraries for faster loading

## 🔧 Features Breakdown

### Navigation
- Fixed navbar with scroll effect
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth scroll to sections

### Forms
- Real-time validation
- Error messages
- Loading states
- Success/error notifications
- Required field indicators

### Animations
- Page load animations
- Scroll-triggered animations
- Hover effects
- Button interactions
- Modal transitions
- Counter animations
- Timeline animations

### Interactivity
- Product filtering
- Modal popups
- FAQ accordion
- Form validation
- Smooth scrolling
- Mobile menu toggle

## 📝 Notes

- All external libraries are loaded via CDN for easy setup
- No build process required - pure HTML/CSS/JS
- Fully commented code for easy understanding
- Mobile-first responsive design
- SEO-friendly semantic HTML
- Accessibility considerations included

## 🤝 Support

For issues or questions:
- Email: info@technova.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is open source and available for personal and commercial use.

## 🎉 Credits

- **Design & Development**: TechNova Solutions
- **Libraries**: GSAP, AOS.js, Swiper.js, Particles.js, TailwindCSS
- **Fonts**: Google Fonts (Inter)

---

**Built with ❤️ by TechNova Solutions**

Enjoy your modern, animated tech company website! 🚀
