# Frederick Osarodion Art Portfolio

A modern, high-performance portfolio website for contemporary African artist Eghosa Raymond Akenbor. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Features

### Modern Design & Performance

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for responsive, modern styling
- **Vercel Analytics & Speed Insights** for performance monitoring
- **SEO optimized** with metadata, sitemap, and robots.txt

### Artist Portfolio Features

- **Hero Section** with stunning visual impact
- **Collection-based Gallery** with filtering and search
- **Individual Artwork Pages** with detailed views
- **Artist Biography** and story presentation
- **Blog Section** for artistic insights and updates
- **Contact Form** with professional layout
- **Responsive Navigation** with mobile-friendly design

### Collections

- **Lovers Tales** - Exploring themes of love and connection
- **Guy Man** - Contemporary representations of masculinity
- **Adesuwa Collections** - Celebrating feminine beauty
- **Ancestral** - Connecting with traditional African art forms
- **Core** - Essential expressions of contemporary African identity
- **Experimental** - Pushing boundaries of contemporary art

### Technical Features

- **Prettier** + **ESLint** for code formatting and linting
- **Husky** + **lint-staged** for pre-commit hooks
- **Static Generation** for optimal performance
- **Image Optimization** with Next.js Image component
- **Dark Mode Support** throughout the site

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # Artist biography page
│   ├── art/[slug]/        # Individual artwork pages
│   ├── blog/              # Blog listing and individual posts
│   ├── collections/[slug]/ # Collection pages
│   ├── contact/           # Contact form page
│   ├── gallery/           # Advanced gallery with filtering
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable React components
│   ├── ArtworkCard.tsx    # Individual artwork card
│   ├── FeaturedSection.tsx # Homepage featured section
│   ├── Footer.tsx         # Site footer
│   ├── GalleryGrid.tsx    # Gallery grid layout
│   ├── HeroSection.tsx    # Homepage hero section
│   └── Navigation.tsx     # Site navigation
└── data/                  # Data files
    └── artworks.ts        # Artwork and collection data
```

## 🎨 Customization

### Adding New Artworks

1. **Add artwork data** in `src/data/artworks.ts`:

   ```typescript
   {
     slug: 'new-artwork',
     title: 'New Artwork Title',
     image: '/path/to/image.jpg',
     width: 800,
     height: 600,
     year: '2024',
     medium: 'Oil on canvas',
     collection: 'collection-name'
   }
   ```

2. **Add images** to the `public/` directory

3. **Create collection** if needed in the `collections` object

### Styling

- **Colors**: Customize the gradient colors in components
- **Typography**: Modify font settings in `layout.tsx`
- **Layout**: Adjust spacing and layout in Tailwind classes
- **Dark Mode**: All components support dark mode automatically

### Content

- **Artist Info**: Update biography in `src/app/about/page.tsx`
- **Contact Info**: Modify contact details in `src/app/contact/page.tsx`
- **Blog Posts**: Add new posts in `src/app/blog/[slug]/page.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Static Generation**: Pre-built pages for fast loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Lighthouse Score**: Optimized for 90+ scores across all metrics

## 🌐 SEO Features

- **Metadata**: Dynamic metadata for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Ready for schema markup

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set Environment Variables**
   - `NEXT_PUBLIC_SITE_URL`: Your domain URL

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**
- **AWS Amplify**
- **Railway**
- **Digital Ocean App Platform**

## 📈 Analytics

- **Vercel Analytics**: Automatic page view tracking
- **Speed Insights**: Core Web Vitals monitoring
- **Custom Events**: Track artwork views, contact form submissions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎨 About the Artist

Eghosa Raymond Akenbor is an experimental abstract artist and art educator based in Benin City, Nigeria. His work explores the intersection of traditional African art forms and contemporary expression, creating pieces that bridge cultural heritage with modern artistic movements.

## 📞 Contact

- **Phone**: +234 708 113 7270
- **Email**: info@eghoartkulture.com
- **Location**: Benin City, Edo State, Nigeria

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
