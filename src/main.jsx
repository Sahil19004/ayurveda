import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight,
  CircleUserRound, Facebook, Instagram, Leaf, Mail, MapPin, Menu, Minus,
  Phone, Play, Quote, Search, ShieldCheck, Sparkles, Sprout, X, Youtube
} from 'lucide-react';
import './styles.css';

const images = {
  hero: '/products/shakti-prash.jpeg',
  story: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85',
  herbs: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&w=1000&q=85',
  field: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?auto=format&fit=crop&w=1400&q=85',
  apothecary: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85'
};

const productImages = {
  nightHorse: '/products/night-horse.jpeg',
  shaktiPrash: '/products/shakti-prash.jpeg',
  trailPack: '/products/trail-pack.jpeg',
  pleasure: '/products/pleasure.jpeg',
  manPowerOil: '/products/man-power-oil.jpeg',
  instantAuraKit: '/products/instant-aura-kit.jpeg',
  mensAura: '/products/mens-aura.jpeg'
};

const products = [
  { name: 'Shakti Prash', category: 'Wellness', description: 'A premium Ayurvedic rasayana for vitality, strength and rejuvenation.', image: productImages.shaktiPrash, ingredients: 'Traditional herbs and botanicals.' },
  { name: 'Night Horse', category: 'Wellness', description: 'A high-extract Ayurvedic formula for stamina and strength.', image: productImages.nightHorse, ingredients: 'A proprietary blend of Ayurvedic extracts.' },
  { name: 'Men’s Aura', category: 'Wellness', description: 'A considered formula for strength, reproductive health and duration.', image: productImages.mensAura, ingredients: 'A blend of traditional herbs and minerals.' },
  { name: 'Trail Pack', category: 'Wellness', description: 'A natural capsule blend enriched with powerful herbs for everyday stamina.', image: productImages.trailPack, ingredients: 'Shatavari, Shilajeet, Ashwagandha and other herbs.' },
  { name: 'Pleasure', category: 'Wellness', description: 'A fast-acting Ayurvedic proprietary medicine for vitality and stamina.', image: productImages.pleasure, ingredients: 'A proprietary blend of Ayurvedic extracts.' },
  { name: 'Man Power Oil', category: 'Personal Care', description: 'A botanical massage oil for a confident, restorative ritual.', image: productImages.manPowerOil, ingredients: 'A nourishing herbal oil blend.' },
  { name: 'Instant Aura Kit', category: 'Wellness', description: 'A complete pairing for natural strength, better health and vibrant living.', image: productImages.instantAuraKit, ingredients: 'A curated combination of Ayurvedic products.' }
];

const heroSlides = [
  { image: productImages.shaktiPrash, name: 'Shakti Prash', category: 'Premium Ayurvedic Rasayana', message: 'Vitality, strength & rejuvenation' },
  { image: productImages.nightHorse, name: 'Night Horse', category: 'Ayurvedic Proprietary Medicine', message: 'Boost stamina. Increase strength.' },
  { image: productImages.mensAura, name: 'Men’s Aura', category: 'Ayurvedic Wellness', message: 'Strength, vitality & confidence' },
  { image: productImages.trailPack, name: 'Trail Pack', category: 'Wellness', message: 'Natural capsules for everyday vitality' },
  { image: productImages.pleasure, name: 'Pleasure', category: 'Ayurvedic Wellness', message: 'Vigor, stamina & confidence' },
  { image: productImages.manPowerOil, name: 'Man Power Oil', category: 'Botanical Personal Care', message: 'A restorative ritual for every day' },
  { image: productImages.instantAuraKit, name: 'Instant Aura Kit', category: 'Complete Wellness Kit', message: 'Natural strength. Better health.' }
];

const posts = [
  { category: 'Ayurveda', date: '12 Sep 2026', title: 'The art of building a mindful morning ritual', excerpt: 'Small, consistent choices can help us reconnect with the wisdom of everyday wellness.', image: images.story },
  { category: 'Herbal Wisdom', date: '28 Aug 2026', title: 'Getting to know your kitchen herbs', excerpt: 'A gentle introduction to the botanicals that have long found a place in Indian homes.', image: images.herbs },
  { category: 'Wellness', date: '04 Aug 2026', title: 'A slower approach to modern wellbeing', excerpt: 'Why pausing, observing and listening remain timeless acts of self-care.', image: images.field }
];

function Logo({ light = false }) {
  return <a className={`logo ${light ? 'logo-light' : ''}`} href="#home" aria-label="Aarogya Kalp home">
    <img className="logo-image" src="/aarogya-kalp-logo.png" alt="Aarogya Kalp" />
  </a>;
}

function Button({ children, href = '#products', variant = 'primary', icon = true }) {
  return <a className={`button button-${variant}`} href={href}>{children}{icon && <ArrowRight size={16} />}</a>;
}

function SectionTitle({ eyebrow, title, body, light = false, align = '' }) {
  return <div className={`section-title ${light ? 'light' : ''} ${align}`}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>;
}

function Header({ page }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKey = e => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const links = [['home', 'Home'], ['about', 'About'], ['products', 'Products'], ['blogs', 'Blogs'], ['contact', 'Contact']];
  const current = page.startsWith('product-') ? 'products' : page;
  return <header className={`header ${scrolled ? 'header-scrolled' : ''} ${open ? 'header-open' : ''}`}>
    <div className="header-bar">
      <Logo />
      <nav className="desktop-nav" aria-label="Primary">{links.map(([id, label]) => <a className={current === id ? 'active' : ''} aria-current={current === id ? 'page' : undefined} href={`#${id}`} key={id}>{label}</a>)}</nav>
      <div className="header-actions">
        <a className="header-cta" href="#products"><Sparkles size={14} />Shop the collection<span><ArrowUpRight size={14} /></span></a>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
      <div className="header-progress" style={{ transform: `scaleX(${progress})` }} />
    </div>
    {open && <nav className="mobile-nav" aria-label="Mobile">{links.map(([id, label], i) => <a onClick={() => setOpen(false)} className={current === id ? 'active' : ''} href={`#${id}`} key={id}><span>0{i + 1}</span>{label}<ArrowUpRight size={16} /></a>)}<a className="header-cta" onClick={() => setOpen(false)} href="#products"><Sparkles size={14} />Shop the collection<span><ArrowUpRight size={14} /></span></a></nav>}
  </header>;
}

function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive(current => (current + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  const move = direction => setActive((active + direction + heroSlides.length) % heroSlides.length);

  return <section className="hero page-section" id="home">
    <div className="hero-orbit" /><div className="hero-leaf leaf-one">✽</div><div className="hero-leaf leaf-two">❧</div>
    <div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">AYURVEDA <i /> WELLNESS <i /> VEDIC WISDOM</div>
      <h1>Ancient wisdom.<br /><em>Naturally</em> reimagined.</h1>
      <p>Authentic wellness with deep-rooted Ayurvedic wisdom and unwavering credibility. We blend classical tradition and medicinal science to support holistic well-being.</p>
      <div className="hero-buttons"><Button href="#products">Explore our products</Button><a className="text-link" href="#about">Discover our story <ArrowUpRight size={16} /></a></div>
      <div className="hero-note"><span><ShieldCheck size={17} /> Thoughtfully formulated</span><span><Sprout size={17} /> Rooted in nature</span></div>
    </div><div className="hero-visual"><div className="hero-image"><img key={slide.image} src={slide.image} alt={`${slide.name} product`} /></div><div className="hero-caption"><span>0{active + 1}</span><span>{slide.name}<br /><small>{slide.message}</small></span><ArrowUpRight size={20} /></div><div className="hero-stamp"><span>आयुर्वेद</span><small>inspired by the Vedas</small></div><div className="hero-carousel-controls"><button onClick={() => move(-1)} aria-label="Previous product"><ChevronLeft size={18} /></button><div className="hero-dots">{heroSlides.map((item, index) => <button className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show ${item.name}`} key={item.name} />)}</div><button onClick={() => move(1)} aria-label="Next product"><ChevronRight size={18} /></button></div></div></div>
  </section>;
}

function TrustStrip() {
  return <section className="trust-strip"><div className="container trust-grid">{[['01', 'Classical Ayurvedic tradition', 'Deep roots in medicinal science'], ['02', 'Holistic wellness', 'A preferred choice for health seekers'], ['03', 'Purity you can trust', 'Uncompromised safety and effectiveness'], ['04', 'Restorative herbs', 'Authentic Ayurvedic formulations']].map(([num, title, sub]) => <div className="trust-item" key={num}><b>{num}</b><div><strong>{title}</strong><small>{sub}</small></div></div>)}</div></section>;
}

function Story() {
  return <section className="story section-padding" id="about"><div className="container story-grid"><div className="story-image image-frame"><img src={images.story} alt="Botanical leaves and natural Ayurvedic ingredients" /><span className="vertical-label">NATURE • WISDOM • BALANCE</span></div><div className="story-copy"><SectionTitle eyebrow="OUR STORY" title={<>Welcome to<br /><em>AarogyaKalp Ayurveda</em></>} body="AarogyaKalp Ayurveda is a trusted Ayurvedic wellness brand that seamlessly blends ancient Ayurvedic wisdom with modern science. We focus on purity, natural ingredients, and holistic healing to provide authentic wellness solutions." /><div className="story-stats"><div><strong>100%</strong><span>Pure &amp; Safe</span></div><div><strong>GMP · ISO</strong><span>Certified</span></div><div><strong>15 Years</strong><span>Excellence</span></div></div><a className="text-link" href="#about">Discover our story <ArrowRight size={16} /></a></div></div></section>;
}

function Philosophy() {
  const values = [['01', 'Our Vision', 'To bring Ayurveda in a modern, accessible form for every household, helping people achieve wellness naturally. We envision traditional wisdom and modern science working together for holistic health.'], ['02', 'Our Mission', 'To create safe, effective, research-based Ayurvedic products that solve real lifestyle health challenges, while maintaining the highest standards of quality, purity, and authenticity.']];
  return <section className="philosophy section-padding"><div className="container"><SectionTitle light eyebrow="OUR PURPOSE" title="Vision & Mission" body="Guided by classical Ayurvedic wisdom and modern wellness principles, we strive to bring authentic healing to every household." /><div className="philosophy-grid vision-grid">{values.map(([num, title, desc]) => <div className="philosophy-card" key={title}><span>{num}</span><Leaf size={23} /><h3>{title}</h3><p>{desc}</p><ArrowUpRight size={18} /></div>)}</div></div></section>;
}

function Commitment() {
  return <section className="commitment why section-padding"><div className="container why-grid"><div className="commitment-copy"><SectionTitle eyebrow="OUR COMMITMENT" title={<>Purity, care <em>&amp; credibility.</em></>} body="Our products are crafted with the finest natural ingredients, ensuring every formulation maintains the highest standards of purity while delivering effective results for your overall well-being." /><p>We believe in the power of nature and ancient Ayurvedic practices, combined with modern scientific validation. Every product undergoes rigorous quality checks and is manufactured in GMP and ISO certified facilities, ensuring safety, efficacy, and authenticity in every bottle.</p><p>Through Rasayana principles, holistic product design, and transparent education, we work to restore the body's natural intelligence and make authentic Ayurveda accessible without compromising purity.</p></div><div className="why-list">{[['01', 'Pure Ingredients', 'Finest natural ingredients sourced from trusted suppliers across India.'], ['02', 'Quality Certified', 'GMP and ISO certified manufacturing facilities that uphold high standards.']].map(([n, title, desc]) => <div key={n}><span>{n}</span><strong>{title}<small>{desc}</small></strong><Check size={18} /></div>)}</div></div></section>;
}

function ProductCard({ product }) {
  return <article className="product-card"><div className="product-image"><img src={product.image} alt={product.name} /><span>{product.category}</span><a href={`#product-${product.name.toLowerCase().replaceAll(' ', '-')}`} aria-label={`View ${product.name}`}><ArrowUpRight size={18} /></a></div><div className="product-info"><h3>{product.name}</h3><p>{product.description}</p><a className="small-link" href="#products">View product <ArrowRight size={14} /></a></div></article>;
}

function FeaturedProducts() {
  return <section className="products section-padding" id="products"><div className="container"><div className="heading-row"><SectionTitle eyebrow="THE COLLECTION" title={<>Nature's wisdom,<br /><em>carefully formulated.</em></>} body="Explore our range of Ayurvedic wellness products, created for rituals that feel good and do good." /><a className="text-link desktop-only" href="#products">View all products <ArrowRight size={16} /></a></div><div className="product-grid">{products.map(p => <ProductCard product={p} key={p.name} />)}</div><div className="mobile-center"><Button variant="outline">View all products</Button></div></div></section>;
}

function WhyUs() {
  const reasons = [['01', '100% Pure & Safe', 'Ayurvedic and safe ingredients with a holistic approach to natural, effective wellness.'], ['02', 'Safe, Natural Herbal Remedies', 'Formulated with care to support your wellness journey.'], ['03', 'Tradition Meets Modern Science', 'Ancient Ayurvedic wisdom meets modern research for today’s lifestyle.'], ['04', 'Complete Lifestyle Balance', 'Herbal supplements that support mind, body, balance, and vitality.']];
  return <section className="why section-padding"><div className="container why-grid"><div><SectionTitle eyebrow="WHY CHOOSE US" title={<>What Makes <em>Us Different</em></>} body="We combine ancient wisdom with modern science to deliver authentic Ayurvedic wellness solutions. At AarogyaKalp Ayurveda, we are dedicated to providing authentic, pure, and effective solutions that support your journey to holistic wellness. Every product is crafted with care, quality, and your well-being in mind." /><Button href="#about" variant="outline">Our commitment</Button></div><div className="why-list">{reasons.map(([n, title, desc]) => <div key={n}><span>{n}</span><strong>{title}<small>{desc}</small></strong><ArrowUpRight size={18} /></div>)}</div></div></section>;
}

function Testimonials() {
  const [active, setActive] = useState(0); const quotes = [['“A beautiful reminder that wellness can be both intentional and wonderfully simple.”', 'Meera S.', 'Pune, India'], ['“The ritual of slowing down is what I value most. Aarogya Kalp fits naturally into my day.”', 'Ananya R.', 'Bengaluru, India'], ['“Thoughtful, calming and honest. It feels like a brand with a real point of view.”', 'Rohan K.', 'Mumbai, India']];
  return <section className="testimonials section-padding"><div className="container testimonial-wrap"><Quote size={42} className="quote-icon" /><div className="testimonial-content"><div className="eyebrow">WORDS FROM OUR COMMUNITY</div><blockquote>{quotes[active][0]}</blockquote><p><strong>{quotes[active][1]}</strong> <span>{quotes[active][2]}</span></p><div className="slider-controls"><button onClick={() => setActive((active + quotes.length - 1) % quotes.length)} aria-label="Previous testimonial"><ChevronLeft /></button><span>0{active + 1} <i /> 0{quotes.length}</span><button onClick={() => setActive((active + 1) % quotes.length)} aria-label="Next testimonial"><ChevronRight /></button></div></div><div className="testimonial-image"><img src={images.apothecary} alt="Natural ingredients in a sunlit space" /></div></div></section>;
}

function BlogPreview() {
  return <section className="blog section-padding" id="blogs"><div className="container"><div className="heading-row"><SectionTitle eyebrow="FROM THE WORLD OF AYURVEDA" title={<>Notes for a more<br /><em>rooted life.</em></>} /><a className="text-link desktop-only" href="#blogs">View all stories <ArrowRight size={16} /></a></div><div className="blog-grid">{posts.map(post => <article className="blog-card" key={post.title}><a href="#blogs" className="blog-image"><img src={post.image} alt="" /></a><div className="blog-meta"><span>{post.category}</span><span>{post.date}</span></div><h3><a href="#blogs">{post.title}</a></h3><p>{post.excerpt}</p><a className="small-link" href="#blogs">Read article <ArrowRight size={14} /></a></article>)}</div></div></section>;
}

function FinalCta() {
  return <section className="final-cta"><div className="cta-orbit" /><div className="container"><div className="eyebrow">YOUR WELLNESS, YOUR RHYTHM</div><h2>Begin your journey<br /><em>towards natural wellness.</em></h2><p>Discover the timeless wisdom of Ayurveda through Aarogya Kalp.</p><Button href="#products" variant="light">Explore products</Button></div></section>;
}

function InnerHero({ eyebrow, title, body }) { return <section className="inner-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{body}</p></div></section>; }
function AboutPage() { return <><InnerHero eyebrow="OUR STORY" title={<>Rooted in ancient wisdom.<br /><em>Inspired by nature.</em></>} body="AarogyaKalp Ayurveda blends ancient Ayurvedic wisdom with modern science, focusing on purity, natural ingredients, and holistic healing for authentic wellness." /><Story /><Commitment /><Philosophy /><section className="approach section-padding"><div className="container"><SectionTitle align="center" eyebrow="OUR APPROACH" title={<>From the past, <em>for the present.</em></>} /><div className="approach-line">{['Classical wisdom', 'Natural ingredients', 'Research-based formulations', 'GMP & ISO quality', 'Accessible Ayurveda'].map((item, i) => <div key={item}><span>0{i + 1}</span><div className="approach-dot" /><strong>{item}</strong></div>)}</div></div></section><FinalCta /></>; }
function ProductsPage() { const [filter, setFilter] = useState('All'); const categories = ['All', 'Wellness', 'Herbal', 'Digestive', 'Immunity', 'Personal Care']; const visible = filter === 'All' ? products : products.filter(p => p.category === filter); return <><InnerHero eyebrow="THE COLLECTION" title={<>Our Ayurvedic<br /><em>collection.</em></>} body="Thoughtfully created with the wisdom of Ayurveda and the goodness of nature." /><section className="catalog section-padding"><div className="container"><div className="filters">{categories.map(c => <button className={filter === c ? 'selected' : ''} onClick={() => setFilter(c)} key={c}>{c}</button>)}</div><div className="product-grid catalog-grid">{visible.map(p => <ProductCard product={p} key={p.name} />)}</div></div></section><FinalCta /></>; }
function ProductDetail({ product }) { return <><InnerHero eyebrow={product.category} title={<>{product.name}<br /><em>for your daily ritual.</em></>} body={product.description} /><section className="story section-padding"><div className="container story-grid"><div className="story-image image-frame"><img src={product.image} alt={product.name} /></div><div className="story-copy"><SectionTitle eyebrow="A CONSIDERED FORMULATION" title={<>Simple, natural,<br /><em>thoughtfully made.</em></>} body="Product details shown here are placeholders and can be replaced with verified client information before launch." /><div className="detail-list"><p><strong>Key ingredients</strong>{product.ingredients}</p><p><strong>How to use</strong>Follow the final label directions provided with the product.</p><p><strong>Wellness note</strong>This product is intended to complement a balanced lifestyle and is not a substitute for medical advice.</p></div><a className="text-link" href="#products">Back to collection <ArrowLeft size={16} /></a></div></div></section><FinalCta /></>; }
function BlogsPage() { return <><InnerHero eyebrow="THE JOURNAL" title={<>Knowledge rooted<br /><em>in Ayurveda.</em></>} body="Explore stories, traditions and insights inspired by the ancient science of Ayurveda." /><section className="blog section-padding"><div className="container"><div className="featured-post"><img src={images.herbs} alt="Herbs arranged on a wooden table" /><div><div className="eyebrow">FEATURED STORY</div><h2>The quiet power of a daily ritual</h2><p>A thoughtful life is built in small moments. Explore how traditional wisdom can make space for more presence in the everyday.</p><a className="text-link" href="#blogs">Read the story <ArrowRight size={16} /></a></div></div><div className="blog-grid">{posts.map(post => <article className="blog-card" key={post.title}><a href="#blogs" className="blog-image"><img src={post.image} alt="" /></a><div className="blog-meta"><span>{post.category}</span><span>{post.date}</span></div><h3><a href="#blogs">{post.title}</a></h3><p>{post.excerpt}</p><a className="small-link" href="#blogs">Read article <ArrowRight size={14} /></a></article>)}</div></div></section></>; }
function ContactPage() { return <><InnerHero eyebrow="GET IN TOUCH" title={<>Let's <em>connect.</em></>} body="We would love to hear from you. Whether you have a question or simply want to say hello, our door is open." /><section className="contact section-padding"><div className="container contact-grid"><div className="contact-details"><SectionTitle eyebrow="SAY HELLO" title={<>A conversation is<br /><em>always welcome.</em></>} /><div className="contact-items"><p><Mail size={18} /><span><small>Email</small>hello@aarogyakalp.in</span></p><p><Phone size={18} /><span><small>Phone</small>+91 00000 00000</span></p><p><MapPin size={18} /><span><small>Visit</small>Jaipur, Rajasthan, India</span></p></div></div><form className="contact-form" onSubmit={e => e.preventDefault()}><div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label></div><label>Subject<input required placeholder="How can we help?" /></label><label>Message<textarea required rows="5" placeholder="Tell us a little more..." /></label><button className="button button-primary" type="submit">Send message <ArrowRight size={16} /></button></form></div></section><div className="map-placeholder"><div><MapPin size={22} /><strong>Find us in Jaipur</strong><span>Our studio is rooted in the Pink City.</span></div></div></>; }
function Footer() { return <footer><div className="container footer-top"><div className="footer-brand"><Logo light /><p>Ancient Ayurvedic wisdom, thoughtfully brought into modern wellness.</p><div className="socials"><a href="#home" aria-label="Instagram"><Instagram size={17} /></a><a href="#home" aria-label="Facebook"><Facebook size={17} /></a><a href="#home" aria-label="Youtube"><Youtube size={17} /></a></div></div><div><h4>Quick links</h4><a href="#home">Home</a><a href="#about">About</a><a href="#products">Products</a><a href="#blogs">Blogs</a><a href="#contact">Contact</a></div><div><h4>Explore</h4><a href="#about">Our philosophy</a><a href="#blogs">Ayurveda</a><a href="#blogs">Wellness</a><a href="#contact">FAQs</a></div><div className="newsletter"><h4>Stay connected with Ayurveda</h4><p>Occasional notes for a more rooted life.</p><div className="subscribe"><input aria-label="Email for newsletter" placeholder="Your email address" /><button aria-label="Subscribe"><ArrowRight size={17} /></button></div></div></div><div className="container footer-bottom"><span>© 2026 Aarogya Kalp. All rights reserved.</span><div><a href="#home">Privacy policy</a><a href="#home">Terms & conditions</a></div><span>आयुर्वेद inspired by the Vedas</span></div></footer>; }

function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || 'home');
  useEffect(() => { const onHash = () => { setPage(window.location.hash.slice(1) || 'home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }; window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash); }, []);
  const productSlug = page.startsWith('product-') ? page.slice(8) : '';
  const selectedProduct = products.find(p => p.name.toLowerCase().replaceAll(' ', '-') === productSlug);
  const content = selectedProduct ? <ProductDetail product={selectedProduct} /> : page === 'about' ? <AboutPage /> : page === 'products' ? <ProductsPage /> : page === 'blogs' ? <BlogsPage /> : page === 'contact' ? <ContactPage /> : <><Hero /><TrustStrip /><Story /><Commitment /><Philosophy /><FeaturedProducts /><WhyUs /><Testimonials /><BlogPreview /><FinalCta /></>;
  return <><Header page={page} /><main>{content}</main><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
