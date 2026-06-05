<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Solutions Agency</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

<!-- Navigation Bar -->
<nav class="navbar">
    <div class="nav-container">
        <div class="logo">Tech Solutions Agency</div>
        <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-we-work">How We Work</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="theme-toggle" id="themeToggle" title="Toggle Dark Mode">
            <i class="fas fa-moon"></i>
        </button>
    </div>
</nav>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-content">
        <h1>Welcome to Tech Solutions Agency</h1>
        <p>Transforming Ideas Into Innovative Technology Solutions</p>
        <a href="contact.html" class="cta-btn">Get Started Today</a>
    </div>
</section>

<!-- Statistics Section -->
<section class="statistics">
    <div class="section-container">
        <div class="stats-grid">
            <div class="stat-item">
                <h3 class="stat-number">500<span>+</span></h3>
                <p>Projects Completed</p>
            </div>
            <div class="stat-item">
                <h3 class="stat-number">300<span>+</span></h3>
                <p>Happy Clients</p>
            </div>
            <div class="stat-item">
                <h3 class="stat-number">15<span>+</span></h3>
                <p>Years Experience</p>
            </div>
            <div class="stat-item">
                <h3 class="stat-number">50<span>+</span></h3>
                <p>Team Members</p>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="services" id="services">
    <div class="section-container">
        <h2 class="section-title">Our Services</h2>
        <p class="section-subtitle">Comprehensive solutions tailored for your business</p>

        <div class="card-container">
            <div class="card">
                <i class="fas fa-globe"></i>
                <h3>Web Development</h3>
                <p>Modern and responsive websites built with cutting-edge technology.</p>
                <a href="contact.html" class="card-btn">Learn More</a>
            </div>

            <div class="card">
                <i class="fas fa-palette"></i>
                <h3>UI/UX Design</h3>
                <p>Beautiful and intuitive digital experiences that users love.</p>
                <a href="contact.html" class="card-btn">Learn More</a>
            </div>

            <div class="card">
                <i class="fas fa-headset"></i>
                <h3>Technical Support</h3>
                <p>24/7 reliable support to keep your systems running smoothly.</p>
                <a href="contact.html" class="card-btn">Learn More</a>
            </div>

            <div class="card">
                <i class="fas fa-mobile-alt"></i>
                <h3>Mobile Apps</h3>
                <p>Cross-platform mobile applications for iOS and Android.</p>
                <a href="contact.html" class="card-btn">Learn More</a>
            </div>

            <div class="card">
                <i class="fas fa-cloud"></i>
                <h3>Cloud Solutions</h3>
                <p>Scalable and secure cloud infrastructure for your business.</p>
                <a href="contact.html" class="card-btn">Learn More</a>
            </div>

            <div class="card">
                <i class="fas fa-shield-alt"></i>
                <h3>Cybersecurity</h3>
                <p>Protect your business with advanced security solutions.</p>
                <a href="contact.html" class="card-btn">Learn More</a>
            </div>
        </div>
    </div>
</section>

<!-- How We Work Section -->
<section class="how-we-work" id="how-we-work">
    <div class="section-container">
        <h2 class="section-title">How We Work</h2>
        <p class="section-subtitle">Our proven process for project success</p>

        <div class="process-grid">
            <div class="process-step">
                <div class="step-number">01</div>
                <div class="step-icon">
                    <i class="fas fa-comments"></i>
                </div>
                <h3>Discovery & Consultation</h3>
                <p>We listen to your goals and understand your business needs in detail.</p>
            </div>

            <div class="process-step">
                <div class="step-number">02</div>
                <div class="step-icon">
                    <i class="fas fa-pencil-alt"></i>
                </div>
                <h3>Design & Planning</h3>
                <p>Creating comprehensive strategies and beautiful designs for your project.</p>
            </div>

            <div class="process-step">
                <div class="step-number">03</div>
                <div class="step-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3>Development & Build</h3>
                <p>Expert developers bring your vision to life with clean, efficient code.</p>
            </div>

            <div class="process-step">
                <div class="step-number">04</div>
                <div class="step-icon">
                    <i class="fas fa-flask"></i>
                </div>
                <h3>Testing & QA</h3>
                <p>Rigorous testing ensures everything works perfectly across all platforms.</p>
            </div>

            <div class="process-step">
                <div class="step-number">05</div>
                <div class="step-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h3>Launch</h3>
                <p>Smooth deployment and go-live support for your new project.</p>
            </div>

            <div class="process-step">
                <div class="step-number">06</div>
                <div class="step-icon">
                    <i class="fas fa-headset"></i>
                </div>
                <h3>Support & Growth</h3>
                <p>Ongoing support and optimization to help your project grow.</p>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio Section -->
<section class="portfolio" id="portfolio">
    <div class="section-container">
        <h2 class="section-title">Our Portfolio</h2>
        <p class="section-subtitle">Showcasing our recent projects</p>

        <div class="portfolio-grid">
            <div class="portfolio-item">
                <div class="portfolio-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                <h3>E-Commerce Platform</h3>
                <p>Full-stack e-commerce solution with payment integration</p>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
                <h3>Social Media App</h3>
                <p>Real-time social networking application</p>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"></div>
                <h3>Analytics Dashboard</h3>
                <p>Advanced business intelligence dashboard</p>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"></div>
                <h3>Mobile Banking App</h3>
                <p>Secure mobile banking platform</p>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);"></div>
                <h3>CRM System</h3>
                <p>Customer relationship management tool</p>
            </div>

            <div class="portfolio-item">
                <div class="portfolio-image" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);"></div>
                <h3>Learning Platform</h3>
                <p>Educational platform with video streaming</p>
            </div>
        </div>
    </div>
</section>

<!-- Pricing Section -->
<section class="pricing" id="pricing">
    <div class="section-container">
        <h2 class="section-title">Our Pricing Plans</h2>
        <p class="section-subtitle">Choose the perfect plan for your business</p>

        <div class="pricing-grid">
            <!-- Starter Plan -->
            <div class="pricing-card">
                <div class="plan-header">
                    <h3>Starter</h3>
                    <p class="plan-description">Perfect for small projects</p>
                </div>
                <div class="price-display">
                    <span class="currency">$</span>
                    <span class="amount">5,000</span>
                </div>
                <ul class="features-list">
                    <li><i class="fas fa-check"></i> Up to 5 Pages</li>
                    <li><i class="fas fa-check"></i> Responsive Design</li>
                    <li><i class="fas fa-check"></i> Basic SEO</li>
                    <li><i class="fas fa-check"></i> 1 Month Support</li>
                    <li><i class="fas fa-times"></i> Advanced Analytics</li>
                    <li><i class="fas fa-times"></i> E-Commerce Setup</li>
                </ul>
                <a href="contact.html" class="plan-btn">Get Started</a>
            </div>

            <!-- Professional Plan -->
            <div class="pricing-card featured">
                <div class="plan-badge">Most Popular</div>
                <div class="plan-header">
                    <h3>Professional</h3>
                    <p class="plan-description">Best for growing businesses</p>
                </div>
                <div class="price-display">
                    <span class="currency">$</span>
                    <span class="amount">15,000</span>
                </div>
                <ul class="features-list">
                    <li><i class="fas fa-check"></i> Up to 20 Pages</li>
                    <li><i class="fas fa-check"></i> Responsive Design</li>
                    <li><i class="fas fa-check"></i> Advanced SEO</li>
                    <li><i class="fas fa-check"></i> 6 Months Support</li>
                    <li><i class="fas fa-check"></i> Analytics Dashboard</li>
                    <li><i class="fas fa-times"></i> E-Commerce Setup</li>
                </ul>
                <a href="contact.html" class="plan-btn">Get Started</a>
            </div>

            <!-- Enterprise Plan -->
            <div class="pricing-card">
                <div class="plan-header">
                    <h3>Enterprise</h3>
                    <p class="plan-description">For large-scale projects</p>
                </div>
                <div class="price-display">
                    <span class="currency">$</span>
                    <span class="amount">30,000</span>
                    <span class="currency-small">+</span>
                </div>
                <ul class="features-list">
                    <li><i class="fas fa-check"></i> Unlimited Pages</li>
                    <li><i class="fas fa-check"></i> Custom Design</li>
                    <li><i class="fas fa-check"></i> Full SEO Strategy</li>
                    <li><i class="fas fa-check"></i> Unlimited Support</li>
                    <li><i class="fas fa-check"></i> Advanced Analytics</li>
                    <li><i class="fas fa-check"></i> E-Commerce Setup</li>
                </ul>
                <a href="contact.html" class="plan-btn">Get Started</a>
            </div>
        </div>
    </div>
</section>

<!-- Tech Stack Section -->
<section class="tech-stack">
    <div class="section-container">
        <h2 class="section-title">Technologies We Use</h2>
        <p class="section-subtitle">Built with the latest and greatest tools</p>

        <div class="tech-grid">
            <div class="tech-item">
                <i class="fab fa-react"></i>
                <p>React</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-node"></i>
                <p>Node.js</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-python"></i>
                <p>Python</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-aws"></i>
                <p>AWS</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-docker"></i>
                <p>Docker</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-git-alt"></i>
                <p>Git</p>
            </div>
            <div class="tech-item">
                <i class="fas fa-database"></i>
                <p>MongoDB</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
            </div>
            <div class="tech-item">
                <i class="fab fa-figma"></i>
                <p>Figma</p>
            </div>
        </div>
    </div>
</section>

<!-- Testimonials Section -->
<section class="testimonials" id="testimonials">
    <div class="section-container">
        <h2 class="section-title">What Our Clients Say</h2>
        <p class="section-subtitle">Join hundreds of satisfied clients</p>

        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>"Tech Solutions Agency transformed our business with their innovative approach. Highly recommended!"</p>
                <h4>Sarah Johnson</h4>
                <p class="client-title">CEO, Digital Ventures</p>
            </div>

            <div class="testimonial-card">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>"Outstanding service and technical expertise. The team delivered beyond our expectations."</p>
                <h4>Michael Chen</h4>
                <p class="client-title">Founder, TechStart Co.</p>
            </div>

            <div class="testimonial-card">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>"Professional, responsive, and results-driven. They're our go-to technology partner."</p>
                <h4>Emily Rodriguez</h4>
                <p class="client-title">Director, Innovation Labs</p>
            </div>
        </div>
    </div>
</section>

<!-- Case Studies Section -->
<section class="case-studies">
    <div class="section-container">
        <h2 class="section-title">Case Studies</h2>
        <p class="section-subtitle">Real results from real clients</p>

        <div class="case-studies-grid">
            <div class="case-study-card">
                <div class="case-header">
                    <h3>E-Commerce Platform Redesign</h3>
                    <p class="client-name">Fashion Retail Co.</p>
                </div>
                <p class="case-challenge"><strong>Challenge:</strong> Old website had poor user experience and low conversion rates.</p>
                <p class="case-solution"><strong>Solution:</strong> Complete redesign with modern UI, improved navigation, and optimized checkout process.</p>
                <div class="case-results">
                    <div class="result-item">
                        <i class="fas fa-arrow-up"></i>
                        <p>150% Increase in Sales</p>
                    </div>
                    <div class="result-item">
                        <i class="fas fa-arrow-up"></i>
                        <p>75% Lower Bounce Rate</p>
                    </div>
                    <div class="result-item">
                        <i class="fas fa-clock"></i>
                        <p>6 Months Timeline</p>
                    </div>
                </div>
            </div>

            <div class="case-study-card">
                <div class="case-header">
                    <h3>Mobile App Development</h3>
                    <p class="client-name">HealthTech Startup</p>
                </div>
                <p class="case-challenge"><strong>Challenge:</strong> Required cross-platform app with real-time data sync and offline capability.</p>
                <p class="case-solution"><strong>Solution:</strong> Built React Native app with Firebase backend and progressive offline features.</p>
                <div class="case-results">
                    <div class="result-item">
                        <i class="fas fa-users"></i>
                        <p>50K Active Users</p>
                    </div>
                    <div class="result-item">
                        <i class="fas fa-star"></i>
                        <p>4.8/5 App Rating</p>
                    </div>
                    <div class="result-item">
                        <i class="fas fa-clock"></i>
                        <p>4 Months Timeline</p>
                    </div>
                </div>
            </div>

            <div class="case-study-card">
                <div class="case-header">
                    <h3>Cloud Migration & Optimization</h3>
                    <p class="client-name">Enterprise Corp</p>
                </div>
                <p class="case-challenge"><strong>Challenge:</strong> Legacy system causing downtime and high infrastructure costs.</p>
                <p class="case-solution"><strong>Solution:</strong> Migrated to AWS with auto-scaling, reduced costs and eliminated downtime.</p>
                <div class="case-results">
                    <div class="result-item">
                        <i class="fas fa-arrow-down"></i>
                        <p>60% Cost Reduction</p>
                    </div>
                    <div class="result-item">
                        <i class="fas fa-check"></i>
                        <p>99.99% Uptime</p>
                    </div>
                    <div class="result-item">
                        <i class="fas fa-clock"></i>
                        <p>3 Months Timeline</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Client Logos Section -->
<section class="client-logos">
    <div class="section-container">
        <h2 class="section-title">Trusted by Industry Leaders</h2>
        <p class="section-subtitle">We've worked with amazing companies</p>

        <div class="logos-grid">
            <div class="logo-item">
                <div class="logo-placeholder">Company A</div>
            </div>
            <div class="logo-item">
                <div class="logo-placeholder">Company B</div>
            </div>
            <div class="logo-item">
                <div class="logo-placeholder">Company C</div>
            </div>
            <div class="logo-item">
                <div class="logo-placeholder">Company D</div>
            </div>
            <div class="logo-item">
                <div class="logo-placeholder">Company E</div>
            </div>
            <div class="logo-item">
                <div class="logo-placeholder">Company F</div>
            </div>
        </div>
    </div>
</section>

<!-- Blog Section -->
<section class="blog">
    <div class="section-container">
        <h2 class="section-title">Latest Blog Posts</h2>
        <p class="section-subtitle">Stay updated with tech trends and insights</p>

        <div class="blog-grid">
            <article class="blog-card">
                <div class="blog-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"></div>
                <div class="blog-content">
                    <p class="blog-date"><i class="fas fa-calendar"></i> June 5, 2026</p>
                    <h3>The Future of Web Development in 2026</h3>
                    <p>Explore emerging technologies and frameworks shaping the web development landscape.</p>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </article>

            <article class="blog-card">
                <div class="blog-image" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
                <div class="blog-content">
                    <p class="blog-date"><i class="fas fa-calendar"></i> June 3, 2026</p>
                    <h3>AI Integration: How to Boost Productivity</h3>
                    <p>Learn how AI can transform your business processes and improve efficiency.</p>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </article>

            <article class="blog-card">
                <div class="blog-image" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);"></div>
                <div class="blog-content">
                    <p class="blog-date"><i class="fas fa-calendar"></i> June 1, 2026</p>
                    <h3>Cybersecurity Best Practices for Businesses</h3>
                    <p>Essential security measures to protect your organization from cyber threats.</p>
                    <a href="#" class="read-more">Read More →</a>
                </div>
            </article>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="newsletter">
    <div class="section-container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates on technology trends and exclusive offers</p>
        <form class="newsletter-form" id="newsletterForm">
            <input type="email" id="newsletterEmail" placeholder="Enter your email" required>
            <button type="submit" class="cta-btn">Subscribe</button>
        </form>
        <p id="newsletterResult"></p>
    </div>
</section>

<!-- Footer -->
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Tech Solutions Agency</h4>
            <p>Delivering innovative technology solutions for your business.</p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4>Follow Us</h4>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 Tech Solutions Agency. All rights reserved.</p>
    </div>
</footer>

<!-- Back to Top Button -->
<button id="backToTop" class="back-to-top">
    <i class="fas fa-arrow-up"></i>
</button>

<script src="script.js"></script>

</body>
</html>