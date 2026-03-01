/* ============================================================
   main.js — Mohamad Adil Portfolio
============================================================ */

$(function () {

  /* =========================================================
     GSAP SETUP
  ========================================================= */
  gsap.registerPlugin(ScrollTrigger);

  /* =========================================================
     NAVBAR
  ========================================================= */
  function checkScroll() {
    $(window).scrollTop() > 60
      ? $('#navbar').addClass('scrolled')
      : $('#navbar').removeClass('scrolled');
  }
  checkScroll();
  $(window).on('scroll', checkScroll);

  /* =========================================================
     HAMBURGER / MOBILE MENU
  ========================================================= */
  $('#hamburger').on('click', function () {
    $('#mobileMenu').addClass('open');
    $('body').css('overflow', 'hidden');
  });
  $('#mobileClose').on('click', closeMobile);
  function closeMobile() {
    $('#mobileMenu').removeClass('open');
    $('body').css('overflow', '');
  }

  /* =========================================================
     SMOOTH SCROLL
  ========================================================= */
  $('a[href^="#"]').on('click', function (e) {
    const $t = $(this.getAttribute('href'));
    if (!$t.length) return;
    e.preventDefault();
    closeMobile();
    $('html,body').animate({ scrollTop: $t.offset().top - 75 }, 550);
  });

  /* =========================================================
     SCROLL SPY
  ========================================================= */
  const $secs = $('section[id]');
  function updateSpy() {
    const pos = $(window).scrollTop() + 90;
    $secs.each(function () {
      const top = $(this).offset().top;
      const btm = top + $(this).outerHeight();
      if (pos >= top && pos < btm) {
        $('.nav-link').removeClass('active');
        $('.nav-link[href="#' + this.id + '"]').addClass('active');
      }
    });
  }
  $(window).on('scroll', updateSpy);
  updateSpy();

  /* =========================================================
     SCROLL-TO-TOP
  ========================================================= */
  $(window).on('scroll', function () {
    $(this).scrollTop() > 380 ? $('#toTop').addClass('show') : $('#toTop').removeClass('show');
  });
  $('#toTop').on('click', function () { $('html,body').animate({ scrollTop: 0 }, 500); });

  /* =========================================================
     GSAP — HERO
  ========================================================= */
  const htl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  htl
    .from('.hero-badge', { opacity: 0, y: 18, duration: .55, delay: .15 })
    .from('.hero-name', { opacity: 0, y: 44, duration: .75 }, '-=.25')
    .from('.hero-role', { opacity: 0, y: 28, duration: .6 }, '-=.45')
    .from('.hero-actions', { opacity: 0, y: 22, duration: .55 }, '-=.4')
    .from('.hero-stats', { opacity: 0, y: 18, duration: .5 }, '-=.38')
    .from('.info-card', { opacity: 0, x: 50, duration: .75 }, '-=.65');

  /* =========================================================
     GSAP — SCROLL REVEALS
  ========================================================= */
  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.from(el, {
      opacity: 0, y: 28, duration: .65, ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
      }
    });
  });

  /* Timeline items */
  gsap.utils.toArray('.exp-item').forEach(function (el, i) {
    gsap.from(el, {
      opacity: 0, x: -28, duration: .6, ease: 'power2.out',
      delay: i * .12,
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none', once: true }
    });
  });

  /* Chips stagger */
  gsap.utils.toArray('.chip').forEach(function (el, i) {
    gsap.from(el, {
      opacity: 0, scale: .8, duration: .4, ease: 'back.out(1.7)',
      delay: (i % 8) * .045,
      scrollTrigger: { trigger: el, start: 'top 93%', toggleActions: 'play none none none', once: true }
    });
  });

  /* =========================================================
     PROJECTS DATA
  ========================================================= */
  const PROJECTS = [
    {
      name: 'Michelle P (Margot Bardot)', tech: ['Shopify', 'HTML', 'CSS'], cat: 'shopify', short: 'Premium Shopify fashion store with luxury shopping experience.',
      long: 'Margot Bardot is a premium fashion and lifestyle Shopify store delivering a luxury shopping experience. The project involved a fully custom Shopify theme with pixel-perfect fidelity to the original design. Key challenges included seamless AJAX cart functionality, custom filterable collection pages, and responsive design across all breakpoints. Custom section builders enable flexible content management, and optimized image loading ensures fast performance with a streamlined checkout flow.',
      url: 'https://margotbardot.com/', role: 'Frontend Developer',
      challenge: 'Pixel-perfect design translation from PSD while maintaining high Shopify performance scores and seamless cross-device compatibility.',
      solution: 'Used Shopify Liquid templating with a custom CSS architecture, lazy-loaded all product images, and built modular section-based design for easy client updates.'
    },

    {
      name: 'Visit Florida Islands & Beaches', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Tourism promotional site showcasing Florida coastal destinations.',
      long: 'Visit Florida Islands and Beaches is a tourism promotional website built on WordPress to showcase the beauty and attractions of Florida\'s coastal destinations. The site required an immersive, visually engaging layout with large hero imagery, interactive map sections, and dynamic content areas. Built with a custom WordPress theme, the site includes a custom post type for attractions and events, SEO-optimized page structure, and fully responsive design. Page speed was addressed through image optimization and caching strategies.',
      url: 'http://visitfloridaislandsandbeaches.com/', role: 'Frontend Developer',
      challenge: 'Managing heavy visual content while maintaining fast load times and ensuring responsive layouts across all devices.',
      solution: 'Implemented WebP image formats, lazy loading, and a lightweight custom WordPress theme with minimal plugin dependencies.'
    },

    {
      name: 'Baba Food', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'French restaurant website with warm, culinary-inspired visual design.',
      long: 'Baba Food is a restaurant and food brand website built for a French-market client. The project required a warm, inviting visual design communicating the brand\'s culinary identity while providing practical information for diners. Built using WordPress with Elementor, the site features a custom menu section, reservation call-to-action, photo gallery, and multilingual support. The design followed client brand guidelines with rich food photography and earthy tones. All Elementor sections were built with custom CSS for precise control over spacing and typography.',
      url: 'https://babafood.fr', role: 'Frontend Developer',
      challenge: 'Creating an immersive food brand experience with custom typography, rich imagery, and precise layout control within Elementor.',
      solution: 'Combined Elementor\'s visual builder with custom CSS classes and HTML widgets for sections requiring fine-grained design control beyond default capabilities.'
    },

    {
      name: 'Maximumbit', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Technology & digital services company website.',
      long: 'Maximumbit is a technology and digital services company website that needed to communicate expertise, professionalism, and modernity. Built on WordPress with Elementor, the site includes service sections, team profiles, case study showcases, and a blog. The frontend development focused on creating smooth scroll animations, a dynamic services grid, and a clean contact form integration. Custom CSS was used extensively to achieve the precise visual language required by the brand.',
      url: 'https://maximumbit.com/', role: 'Frontend Developer',
      challenge: 'Achieving a modern, professional tech brand aesthetic within WordPress/Elementor while ensuring smooth performance on all devices.',
      solution: 'Used Elementor Pro with custom CSS overrides, optimized all assets, and implemented a clean typographic system for consistent brand presentation.'
    },

    {
      name: 'DeepMind Works', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Corporate website for a digital agency.',
      long: 'DeepMind Works is the corporate website for a digital agency, built to showcase services, team, and portfolio. I was responsible for translating design concepts into a polished Elementor-based WordPress site. The site features animated section reveals, a dynamic portfolio grid, service cards with hover effects, and a clean contact section. The challenge was delivering a site that felt premium and agency-quality while remaining fully manageable by non-technical staff.',
      url: 'https://deepmindworks.com/', role: 'Lead Frontend Developer',
      challenge: 'Creating an agency-quality site that is both visually impressive and easily maintainable by the client\'s internal team.',
      solution: 'Architected reusable Elementor sections with clear naming conventions, documented all custom CSS, and set up a flexible template library for the client.'
    },

    {
      name: 'Broad Therapy', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Mental health therapy practice website with calm, accessible design.',
      long: 'Broad Therapy is a Canadian mental health therapy practice website designed to create a calming, welcoming first impression for potential clients seeking professional support. Built on WordPress with Elementor and custom CSS, focusing on warm colors, clear service descriptions, easy appointment booking, and accessibility. The design required careful attention to typography readability, compassionate tone in visual design, and clear navigation to therapy services and contact information. Privacy and accessibility considerations were integral to the build.',
      url: 'https://broadtherapy.ca', role: 'Frontend Developer',
      challenge: 'Creating a calming, accessible design for a mental health audience while meeting WCAG accessibility standards.',
      solution: 'Implemented high-contrast color ratios, semantic HTML structure, ARIA labels, and a clean typographic hierarchy for optimal readability.'
    },

    {
      name: 'Sikhs For Business', tech: ['HTML', 'CSS', 'Laravel'], cat: 'custom', short: 'Business networking platform for the Sikh entrepreneurial community.',
      long: 'Sikhs For Business is a custom web application built using Laravel backend and HTML/CSS frontend, serving as a business directory and networking platform for the Sikh entrepreneurial community. My role focused on the frontend implementation, translating designs into responsive, accessible HTML/CSS templates integrated with Laravel Blade. The platform features member directory listings, search and filter functionality, business profiles, and community event sections.',
      url: 'https://sikhs4business.com/', role: 'Frontend Developer (Laravel Integration)',
      challenge: 'Integrating clean frontend templates with Laravel Blade while managing dynamic content display and complex filter UI.',
      solution: 'Built reusable Blade component templates with BEM-style CSS naming, implemented AJAX-powered search filters, and optimized template rendering.'
    },

    {
      name: 'Zero Health Insurance', tech: ['HTML', 'CSS', 'Next.js'], cat: 'custom', short: 'Health insurance comparison platform built with Next.js.',
      long: 'Zero Health Insurance Bill is a modern informational and comparison platform for health insurance built with Next.js for optimal SEO and performance. My frontend responsibilities included building responsive page layouts, implementing smooth scroll animations, creating interactive comparison tables, and ensuring accessibility compliance. The Next.js architecture enabled static site generation for lightning-fast load times and excellent search engine visibility.',
      url: 'https://zerohealthinsurancebill.com/', role: 'Frontend Developer',
      challenge: 'Building a highly performant, SEO-optimized insurance platform with complex data tables and clear information architecture.',
      solution: 'Leveraged Next.js static generation, implemented responsive comparison tables with horizontal scroll on mobile, and optimized for Core Web Vitals.'
    },

    {
      name: 'Peaks and Valleys Therapy', tech: ['WordPress', 'HTML', 'CSS', 'Divi'], cat: 'wordpress', short: 'Therapy practice website with nature-inspired earthy design.',
      long: 'Peaks and Valleys Therapy is a Canadian psychotherapy practice website built on WordPress using the Divi theme builder. The design required an earthy, nature-inspired visual language that conveyed safety, growth, and healing. I built custom Divi sections with advanced CSS for the hero, service offerings, therapist profiles, and client resources sections. The site features accessible forms for appointment requests, a mobile-first responsive layout, and optimized images of natural landscapes.',
      url: 'https://peaksandvalleystherapy.ca/', role: 'Frontend Developer',
      challenge: 'Achieving a bespoke natural aesthetic within Divi\'s builder constraints while maintaining performance.',
      solution: 'Combined Divi\'s visual builder with custom CSS modules and carefully curated imagery to create a distinctive, brand-aligned experience.'
    },

    {
      name: 'Manora Wellness Group', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Wellness center website with soft, professional design.',
      long: 'Manora Wellness Group is a wellness center website designed to communicate tranquility, professionalism, and comprehensive care. Built with WordPress and Elementor, the site features a clean, soft visual design with sections for services, practitioners, testimonials, and booking. Custom CSS overrides were applied throughout to achieve precise typography, spacing, and color palette alignment. The mobile experience received particular attention to ensure the booking flow worked flawlessly on all screen sizes.',
      url: 'https://manorawellnessgroup.com/', role: 'Frontend Developer',
      challenge: 'Creating a cohesive wellness brand experience with precise typographic control and optimal mobile booking flow.',
      solution: 'Applied custom CSS design tokens via Elementor global settings, created reusable card components, and tested extensively across mobile devices.'
    },

    {
      name: 'Connell Law Firm', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Professional law firm website with authoritative design.',
      long: 'Connell Law Firm is a professional legal services website built on WordPress with Elementor. The design required a serious, authoritative aesthetic that built trust while remaining approachable. I built the frontend with a focus on clear information hierarchy, practice area sections, attorney profiles, and a prominent contact system. Custom CSS was applied for the color scheme, typography, and layout refinements. The site is fully responsive with particular attention to how legal content reads on mobile devices.',
      url: 'https://connell-lawfirm.com/', role: 'Frontend Developer',
      challenge: 'Balancing professional authority with approachability in design, and presenting dense legal content clearly.',
      solution: 'Used strong typographic hierarchy with generous spacing, clear section divisions, and strategic use of accent color to guide the user journey.'
    },

    {
      name: 'Morgan Air BCS', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'HVAC services company website optimized for conversions.',
      long: 'Morgan Air BCS is an HVAC services company website. Built on WordPress with Elementor, the site clearly presents service offerings, service area maps, testimonials, and a strong call-to-action for quote requests. My frontend work focused on building a clean service grid, responsive image sections, and an optimized mobile experience. The site needed to load quickly for users searching for urgent HVAC services, so performance optimization was a key deliverable.',
      url: 'https://morganairbcs.com', role: 'Frontend Developer',
      challenge: 'Building a fast-loading, conversion-optimized service business website with clear CTAs.',
      solution: 'Optimized all imagery, minimized plugin usage, and structured the page to guide users naturally toward the quote request form.'
    },

    {
      name: 'Prospero FGS', tech: ['WordPress', 'HTML', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Financial and business advisory services website.',
      long: 'Prospero FGS is a financial and business advisory firm website designed to convey expertise, credibility, and professional service. Built on WordPress with Elementor, the site includes service sections, about pages, case studies, and a news/insights blog. The visual design used a refined color palette with strong typographic choices to communicate authority. Custom CSS was applied extensively for layout precision, and all sections were built for easy content updates by the client team.',
      url: 'https://prosperofgs.com/', role: 'Frontend Developer',
      challenge: 'Communicating financial expertise through design while keeping the interface clean and user-friendly.',
      solution: 'Applied a structured visual hierarchy with clear content zones, professional iconography, and a clean color system for consistent presentation.'
    },

    {
      name: 'Recovery Nurse Direct', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Healthcare staffing and nursing recovery service website.',
      long: 'Recovery Nurse Direct is a healthcare staffing and nursing recovery service website built on WordPress. The site communicates trust, professional care, and clear service delivery to both individual clients and healthcare organizations. I built the frontend with custom WordPress templates using clean HTML/CSS without a page builder, for maximum performance and control. The layout includes service breakdowns, team sections, client testimonials, and a streamlined inquiry form.',
      url: 'https://recoverynursedirect.com/', role: 'Frontend Developer',
      challenge: 'Building a trustworthy healthcare site from scratch with custom WordPress templates rather than a page builder.',
      solution: 'Developed a custom WordPress theme with clean PHP templates, custom post types for services, and optimized CSS for fast rendering.'
    },

    {
      name: 'Sohangarh Farmversity', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Agri-education and farm experience website.',
      long: 'Sohangarh Farmversity is an agricultural education and experiential farm website. The project required an organic, earthy visual design communicating the brand\'s connection to nature and learning. Built on WordPress with custom HTML/CSS templates, the site features sections for programs, farm experiences, photo galleries, and booking information. The design used natural colors, handcrafted typography, and textured visual elements to create an authentic rural identity.',
      url: 'https://sohangarhfarmversity.com/', role: 'Frontend Developer',
      challenge: 'Creating an authentic agricultural brand identity with natural visual design while ensuring good performance on variable connections.',
      solution: 'Implemented a lightweight custom theme, optimized all images for web, and used progressive enhancement to ensure core content loaded on slow connections.'
    },

    {
      name: 'Tailwinds Agency', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Marketing agency website with bold, energetic visual design.',
      long: 'Tailwinds Agency is a digital marketing agency website built on WordPress with Elementor. The design required bold, energetic visual elements showcasing the agency\'s creativity and results-driven approach. Custom CSS was applied throughout for precise control over section styling, animations, and the overall visual language. The site includes a services overview, portfolio showcase, team section, and client testimonials with smooth CSS scroll animations.',
      url: 'https://tailwinds.agency/', role: 'Frontend Developer',
      challenge: 'Bringing an energetic agency brand to life with bold design while maintaining fast page performance.',
      solution: 'Used CSS animations and transitions rather than JavaScript-heavy libraries to achieve smooth motion effects with minimal performance impact.'
    },

    {
      name: 'Build Smart Web', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Web development services company website.',
      long: 'Build Smart Web is a web development and digital services company website built on WordPress with Elementor. The site showcases services, process methodology, portfolio pieces, and client testimonials. My frontend work included precise CSS refinements to achieve a clean, professional appearance. The layout emphasizes trust signals, clear service packaging, and an easy path to inquiries. Performance optimization included minimizing Elementor\'s generated CSS and deferring non-critical assets.',
      url: 'https://buildsmartweb.com/', role: 'Frontend Developer',
      challenge: 'Differentiating a web services company\'s own site through design precision and performance.',
      solution: 'Applied custom CSS design overrides for a sharper, more distinctive look, and implemented performance best practices including resource deferral.'
    },

    {
      name: 'Next Chapter Psychotherapy', tech: ['WordPress', 'CSS', 'Divi'], cat: 'wordpress', short: 'Psychotherapy practice website with warm accessible design.',
      long: 'The Next Chapter Psychotherapy is a Canadian therapy practice website focused on creating a sense of safety, welcome, and professional care. Built on WordPress with Divi, I applied extensive custom CSS to achieve a warm, inviting color palette and clean typographic presentation. The site includes therapist profiles, modality descriptions, a detailed FAQ section, and an appointment request system. Accessibility was a core requirement, ensuring the site is usable for individuals who may be experiencing emotional distress.',
      url: 'https://thenextchapterpsychotherapy.ca/', role: 'Frontend Developer',
      challenge: 'Building a welcoming, accessible mental health site with Divi that goes beyond template design.',
      solution: 'Extensively customized Divi\'s output with custom CSS, improved contrast ratios, added focus styles for keyboard navigation, and streamlined the appointment flow.'
    },

    {
      name: 'Beyond Translation', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Professional translation services website for Australian market.',
      long: 'Beyond Translation is an Australian professional translation and language services company website. Built on WordPress with custom HTML/CSS, the site needed to communicate precision, expertise, and global reach. I built the frontend with clean, professional templates emphasizing service clarity, language pair offerings, and client testimonials. The site uses a restrained, professional color palette with strong typographic choices appropriate for a language services provider.',
      url: 'https://beyondtranslation.com.au/', role: 'Frontend Developer',
      challenge: 'Communicating translation precision and global expertise through restrained, professional design.',
      solution: 'Built a clean custom WordPress theme with structured content presentation, multilingual-ready architecture, and strong SEO foundations.'
    },

    {
      name: 'Extreme Game Truck', tech: ['Webflow'], cat: 'webflow', short: 'Mobile gaming entertainment service website built in Webflow.',
      long: 'Extreme Game Truck is a mobile gaming entertainment service website built entirely in Webflow. The site needed high energy, vibrant design to appeal to kids and teens while communicating event booking and availability to parents. I built the Webflow site with custom interactions, animated sections, and a clear booking flow. The Webflow CMS was used for managing event packages and pricing. Complex layout sections including interactive game truck showcase were built with Webflow\'s visual canvas and custom CSS.',
      url: 'https://www.extremegametruck.com/', role: 'Webflow Developer',
      challenge: 'Creating a high-energy gaming brand experience in Webflow with custom animations and a clear parent-facing booking experience.',
      solution: 'Used Webflow interactions for scroll and hover animations, implemented CMS collections for packages, and designed a dual-audience layout for both kids and parents.'
    },

    {
      name: 'Rose Gold Oil By Dawn', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Premium beauty and wellness brand website.',
      long: 'Rose Gold Oil By Dawn is a premium beauty and wellness brand website built on WordPress with WooCommerce and Elementor. The site presents a luxury product line with elegant photography, custom product sections, and brand storytelling. My frontend work focused on precise CSS styling of product pages, custom homepage sections with overlay effects, and a smooth shopping experience. The design used a gold and rose color palette with refined typography to communicate premium product quality.',
      url: 'https://rosegoldoilbydawn.com/', role: 'Frontend Developer',
      challenge: 'Achieving a luxury brand aesthetic within WordPress/Elementor with WooCommerce product pages.',
      solution: 'Applied comprehensive custom CSS to WooCommerce templates and Elementor sections, created custom product showcase layouts, and polished all hover and transition effects.'
    },

    {
      name: 'Reid Ranch', tech: ['WordPress', 'CSS', 'Divi'], cat: 'wordpress', short: 'Western ranch and outdoor lifestyle website.',
      long: 'Reid Ranch is a western ranch and outdoor lifestyle website built on WordPress with the Divi theme builder. The site captures the spirit of ranch life with strong landscape imagery, earthy tones, and rugged typographic choices. I applied custom CSS throughout to refine layouts, implement custom card designs for accommodations and activities, and create a cohesive visual system. The site includes sections for lodging, activities, events, and reservations.',
      url: 'https://reidranch.com/', role: 'Frontend Developer',
      challenge: 'Capturing authentic western ranch character through web design within Divi.',
      solution: 'Developed custom CSS design language for the ranch brand, carefully curated imagery display, and created immersive hero sections with Divi\'s custom CSS fields.'
    },

    {
      name: 'Fruitful Media', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Media production and content strategy agency website.',
      long: 'Fruitful Media is a media production and content strategy agency website. Built on WordPress with custom HTML/CSS templates, the site showcases services, work samples, and client success stories. The design balances creative energy with strategic clarity, communicating both creativity and measurable results. I built reusable page templates and custom post types for case studies and service offerings, with a focus on performance and clean code architecture.',
      url: 'https://www.fruitfulmedia.app/', role: 'Frontend Developer',
      challenge: 'Creating a media agency site that demonstrates creativity while maintaining a structured, professional presentation.',
      solution: 'Designed a clean layout system with vibrant accent colors, built custom WordPress templates for case studies, and optimized all media for fast loading.'
    },

    {
      name: 'Teol Capital', tech: ['Webflow'], cat: 'webflow', short: 'Fintech investment firm website with premium dark aesthetic.',
      long: 'Teol Capital is a financial investment firm website built in Webflow, designed to convey authority, stability, and sophisticated financial expertise. The site features a dark, refined color palette with subtle animations and clear investment thesis content. Built using Webflow\'s visual editor with custom CSS, the site includes team profiles, investment focus sections, portfolio companies, and contact. The design prioritized minimalism and professionalism.',
      url: 'https://teolcapital.com/', role: 'Webflow Developer',
      challenge: 'Building a premium fintech brand presence in Webflow that conveys authority and sophistication.',
      solution: 'Leveraged Webflow\'s design canvas with custom CSS for typography refinements, used subtle scroll interactions, and maintained strict visual discipline throughout.'
    },

    {
      name: 'Hotel June', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Boutique hotel website with immersive visual experience.',
      long: 'Hotel June is a boutique hotel property website built on WordPress, designed to attract guests through immersive imagery and a premium hospitality experience online. I built the frontend with custom WordPress templates featuring full-width image sections, room showcase galleries, amenities displays, and a seamless booking integration. The design used a warm, refined palette with editorial typography to communicate the hotel\'s personality.',
      url: 'https://www.thehoteljune.com/', role: 'Frontend Developer',
      challenge: 'Creating an immersive hotel brand experience that drove booking conversions.',
      solution: 'Built full-width visual sections with parallax effects, optimized high-resolution imagery, and streamlined the booking CTA flow across all pages.'
    },

    {
      name: 'Proper Hotel', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Design-forward boutique hotel brand website.',
      long: 'Proper Hotel is a design-forward boutique hotel brand website. Built on WordPress with custom HTML/CSS, the site showcases multiple hotel properties with location-specific pages, room galleries, dining sections, and events programming. The frontend required careful attention to visual consistency across property pages while allowing for location-specific character. Custom WordPress templates were built for each content type.',
      url: 'https://www.properhotel.com/', role: 'Frontend Developer',
      challenge: 'Maintaining brand consistency across multiple hotel property pages while enabling location-specific design variations.',
      solution: 'Built a flexible WordPress template system with shared base styles and property-specific CSS overrides, using custom fields for location content.'
    },

    {
      name: 'Shelborne', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Luxury Miami Beach hotel website with glamorous design.',
      long: 'Shelborne is a luxury hotel property website in Miami Beach, built on WordPress with custom HTML/CSS templates. The site required a refined, glamorous aesthetic that captured Miami\'s distinctive energy while communicating luxury hospitality. I built custom room showcase sections, pool and amenities displays, dining features, and event spaces. Large-format photography was carefully integrated with performance optimization to ensure fast loading.',
      url: 'https://shelborne.com/', role: 'Frontend Developer',
      challenge: 'Balancing large-format luxury photography with fast page performance and seamless mobile experience.',
      solution: 'Implemented responsive images with multiple size variants, WebP format optimization, and progressive loading for visual content throughout the site.'
    },

    {
      name: 'Robinsons Roofing & Cladding', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'UK roofing and cladding contractor website.',
      long: 'Robinsons Roofing and Cladding is a UK-based construction contractor website built on WordPress with Elementor. The site clearly presents services, project portfolio, accreditations, and contact information for potential commercial and residential clients. Custom CSS achieved a professional, trustworthy appearance with project gallery sections. The site emphasizes social proof through project case studies, accreditation logos, and client testimonials.',
      url: 'https://robinsonsroofingandcladding.co.uk/', role: 'Frontend Developer',
      challenge: 'Building a credible construction company site optimized for local UK search.',
      solution: 'Implemented structured schema markup, built an impressive project gallery system, and ensured fast mobile load times for local search users.'
    },

    {
      name: 'Mahamantram Rudraksha', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Spiritual products e-commerce website.',
      long: 'Mahamantram Rudraksha is a spiritual products e-commerce website built on WordPress with WooCommerce and Elementor. The site sells traditional Rudraksha beads and spiritual accessories, requiring a design that felt authentic to the spiritual tradition while offering a smooth online shopping experience. Custom CSS styling was applied throughout WooCommerce templates and Elementor sections to achieve the required visual language.',
      url: 'https://mahamantramrudraksha.com/', role: 'Frontend Developer',
      challenge: 'Creating an authentic spiritual brand experience in WooCommerce that built trust for high-value traditional products.',
      solution: 'Applied comprehensive WooCommerce template CSS customization, built custom product detail layouts, and designed trust-building certification display sections.'
    },

    {
      name: 'Aztec (Codeller)', tech: ['WordPress', 'HTML', 'CSS'], cat: 'wordpress', short: 'Business solutions WordPress website.',
      long: 'Aztec is a business and enterprise solutions website built on WordPress as part of the Codeller portfolio. The project involved building a clean, professional frontend with custom HTML/CSS templates for service pages, about sections, and lead generation landing pages. The design maintained a strong corporate identity with clear information hierarchy. All pages were built with SEO best practices and performance optimization in mind.',
      url: 'https://codeller.com/aztec', role: 'Frontend Developer',
      challenge: 'Building a polished enterprise-grade site template with clear service communication.',
      solution: 'Created modular HTML/CSS components with clean naming conventions, implemented SEO-friendly semantic structure, and tested across all major browsers.'
    },

    {
      name: 'King Machine Tool Services', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Industrial machinery services B2B website.',
      long: 'King Machine Tool Services is a B2B industrial machinery and services company website. Built on WordPress with Elementor, the site clearly presents equipment categories, service capabilities, and contact information for industrial buyers. Custom CSS provided a strong industrial visual character. The site includes a product/equipment catalog section, service descriptions, company history, and inquiry forms.',
      url: 'https://kingmachinetoolservices.com/', role: 'Frontend Developer',
      challenge: 'Creating a clear, navigable industrial catalog site for B2B buyers.',
      solution: 'Built a structured category navigation system, created scannable equipment listing layouts, and ensured prominent placement of contact and inquiry CTAs.'
    },

    {
      name: 'Liberty Funding', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Financial funding and mortgage services website.',
      long: 'Liberty Funding is a mortgage and financial services website built on WordPress with Elementor. The site communicates trustworthiness, transparency, and expert financial guidance. Custom CSS was applied throughout to achieve a clean, professional look with clear service sections and a streamlined inquiry process. The design used calm, trustworthy colors with strong typography to communicate financial expertise and reliability.',
      url: 'https://libertyfunding.co/', role: 'Frontend Developer',
      challenge: 'Building a trustworthy financial services site with clear conversion paths.',
      solution: 'Applied professional color system and typography, built clear service comparison sections, and designed prominent but non-aggressive CTAs throughout.'
    },

    {
      name: 'Haind Enterprises', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'B2B services and enterprise company website.',
      long: 'Haind Enterprises is a B2B services company website built on WordPress with Elementor. The site presents service offerings, team, and client portfolio with a professional corporate aesthetic. Custom CSS refinements were applied throughout Elementor sections for precise visual control. The site includes service pages with detailed capability descriptions, team profiles, and a contact system optimized for business inquiries.',
      url: 'https://haindenterprises.com/', role: 'Frontend Developer',
      challenge: 'Creating a polished corporate B2B presence that clearly communicates enterprise service value.',
      solution: 'Built structured service page templates with clear benefit communication, applied consistent visual identity through CSS variables, and optimized for business user experience.'
    },

    {
      name: 'Beatitudes', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Australian faith-based community website.',
      long: 'Beatitudes is an Australian faith-based community and events website built on WordPress with Elementor. The site creates a welcoming, inclusive atmosphere while communicating community programs, events, and resources. Custom CSS was applied for warm, welcoming visual presentation. The site includes event listings, community program descriptions, resources section, and contact information. Accessibility was a core priority.',
      url: 'https://beatitudes.com.au/', role: 'Frontend Developer',
      challenge: 'Creating an accessible, welcoming community site that serves diverse age groups and abilities.',
      solution: 'Applied WCAG-compliant color contrast, large readable typography, simplified navigation, and tested extensively with screen readers.'
    },

    {
      name: 'OZ Wide Care', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Australian NDIS disability care services website.',
      long: 'OZ Wide Care is an Australian NDIS disability support and care services website. Built on WordPress with Elementor, the site clearly communicates services, values, and contact paths for individuals and families seeking disability support. Accessibility was the paramount concern. Custom CSS ensured high contrast, readable typography, and clear visual hierarchy. The site includes service descriptions, NDIS guidance, team profiles, and a streamlined inquiry form.',
      url: 'https://ozwidecare.com.au/', role: 'Frontend Developer',
      challenge: 'Building a fully accessible NDIS care site for users with diverse abilities and needs.',
      solution: 'Implemented WCAG 2.1 AA compliance throughout, used semantic HTML with ARIA, ensured keyboard navigability, and applied high-contrast design system.'
    },

    {
      name: 'Nassy', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Australian service business website.',
      long: 'Nassy is an Australian service business website built on WordPress with Elementor. The site presents the company\'s offerings with a clean, modern design and clear communication of value propositions. Custom CSS was applied to achieve brand-aligned visual design with precise typography and spacing. The site is fully responsive and optimized for search with semantic HTML structure and proper meta optimization.',
      url: 'https://nassy.com.au', role: 'Frontend Developer',
      challenge: 'Delivering a polished, brand-accurate service site within a tight development timeline.',
      solution: 'Utilized Elementor\'s templates as a base and applied systematic CSS overrides for brand alignment, ensuring efficient delivery without sacrificing quality.'
    },

    {
      name: 'Southern AZ Business Coalition', tech: ['WordPress', 'CSS', 'Elementor'], cat: 'wordpress', short: 'Regional business advocacy and networking organization website.',
      long: 'Southern Arizona Business Coalition is a regional business advocacy and networking organization website. Built on WordPress with Elementor, the site serves member businesses, local government, and the general public. The site features member directory, news and events, advocacy resources, and membership enrollment. Custom CSS was applied for a professional, trustworthy appearance appropriate for a civic organization.',
      url: 'https://www.soazbc.com/', role: 'Frontend Developer',
      challenge: 'Building a multi-purpose site serving members, businesses, and the public with clear navigation paths.',
      solution: 'Structured the information architecture around distinct user journeys, built an organized member directory system, and created clear navigation for each audience segment.'
    }
  ];

  /* =========================================================
     RENDER PROJECTS
  ========================================================= */
  function renderProjects(filter) {
    const $g = $('#projGrid').empty();
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
    list.forEach(function (p, i) {
      const initials = p.name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
      const tags = p.tech.map(t => `<span class="p-tag">${t}</span>`).join('');
      const html = `
        <div class="p-card" onclick="openModal(${PROJECTS.indexOf(p)})">
          <div class="p-thumb">
            <div class="p-thumb-text">${initials}</div>
            <div class="p-hover-overlay"><i class="fa-solid fa-up-right-from-square"></i></div>
          </div>
          <div class="p-body">
            <div class="p-name">${p.name}</div>
            <div class="p-tags">${tags}</div>
            <div class="p-short">${p.short}</div>
            <div class="p-footer">
              <button class="p-link-btn">Details <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>`;
      $g.append(html);
    });
    gsap.from('#projGrid .p-card', {
      autoAlpha: 0, y: 24, duration: .45, ease: 'power2.out',
      stagger: .055,
      clearProps: 'all'
    });
  }
  renderProjects('all');

  $('.f-btn').on('click', function () {
    $('.f-btn').removeClass('active');
    $(this).addClass('active');
    renderProjects($(this).data('f'));
  });

  /* =========================================================
     MODAL
  ========================================================= */
  window.openModal = function (idx) {
    const p = PROJECTS[idx];
    const tags = p.tech.map(t => `<span class="p-tag" style="font-size:.76rem;padding:4px 10px">${t}</span>`).join('');
    $('#mTitle').text(p.name);
    $('#mTags').html(tags);
    $('#mDesc').text(p.long);
    $('#mRole').text(p.role);
    $('#mChallenge').text(p.challenge);
    $('#mSolution').text(p.solution);
    $('#mLink').attr('href', p.url).text(p.url);
    $('#modal').addClass('open');
    $('body').css('overflow', 'hidden');
  };

  function closeModal() {
    $('#modal').removeClass('open');
    $('body').css('overflow', '');
  }

  $('#mClose').on('click', closeModal);
  $('#modal').on('click', function (e) { if (e.target === this) closeModal(); });
  $(document).on('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  $('#mBox').on('click', function (e) { e.stopPropagation(); });

  /* =========================================================
     CONTACT FORM
  ========================================================= */
  $('#cForm').on('submit', function (e) {
    e.preventDefault();
    let ok = true;
    $('.f-input,.f-textarea').removeClass('error');
    $('.f-err').removeClass('show');

    const nm = $('#cName').val().trim();
    const em = $('#cEmail').val().trim();
    const msg = $('#cMsg').val().trim();

    if (!nm) { $('#cName').addClass('error'); $('#cName').next('.f-err').addClass('show'); ok = false; }
    if (!em || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      $('#cEmail').addClass('error'); $('#cEmail').next('.f-err').addClass('show'); ok = false;
    }
    if (!msg) { $('#cMsg').addClass('error'); $('#cMsg').next('.f-err').addClass('show'); ok = false; }

    if (ok) {
      const $btn = $('#cSubmit');
      $btn.prop('disabled', true).html('<i class="fa-solid fa-spinner fa-spin"></i> Sending…');
      setTimeout(function () {
        $btn.prop('disabled', false).html('<i class="fa-solid fa-paper-plane"></i> Send Message');
        $('#cForm')[0].reset();
        const $s = $('#cSuccess').addClass('show');
        gsap.from($s[0], { opacity: 0, y: 10, duration: .5 });
        setTimeout(() => $s.removeClass('show'), 5000);
      }, 1400);
    }
  });

  /* =========================================================
     PDF RESUME — FIXED: multi-page, no cut text, proper layout
  ========================================================= */
  $('#dlResume').on('click', function () {
    const $b = $(this);
    $b.prop('disabled', true).html('<i class="fa-solid fa-spinner fa-spin"></i> Generating…');

    function buildPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
      const W = 210, H = 297;
      const ML = 18, MR = 18, MT = 18;
      const CW = W - ML - MR; // 174mm content width
      const FOOTER_H = 14;
      const SAFE_BOTTOM = H - FOOTER_H - 10; // don't go past this Y
      let y = MT;
      let page = 1;

      // ---- helpers ----
      function addPage() {
        drawFooter();
        doc.addPage();
        page++;
        y = MT;
        // subtle top line on new page
        doc.setDrawColor(79, 70, 229);
        doc.setLineWidth(.5);
        doc.line(ML, y, W - MR, y);
        y += 6;
      }

      function checkY(needed) {
        if (y + needed > SAFE_BOTTOM) { addPage(); }
      }

      function drawFooter() {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.5);
        doc.setTextColor(160, 165, 185);
        doc.text('Mohamad Adil  ·  iadilansari00@gmail.com  ·  +91 87279 71368  ·  Chandigarh, India', W / 2, H - 8, { align: 'center' });
        doc.text('Page ' + page, W - MR, H - 8, { align: 'right' });
      }

      // ---- HEADER STRIP ----
      doc.setFillColor(79, 70, 229);
      doc.rect(0, 0, W, 48, 'F');

      // Accent line
      doc.setFillColor(6, 182, 212);
      doc.rect(0, 48, W, 2, 'F');

      // Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(255, 255, 255);
      doc.text('Mohamad Adil', ML, 18);

      // Role
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(200, 210, 255);
      doc.text('Front-End Developer  ·  WordPress · Webflow · Shopify · Elementor', ML, 27);

      // Contact info in header
      doc.setFontSize(8.5);
      doc.setTextColor(220, 228, 255);
      doc.text('+91 87279 71368', W - MR, 18, { align: 'right' });
      doc.text('iadilansari00@gmail.com', W - MR, 25, { align: 'right' });
      doc.text('adil@shires.in', W - MR, 32, { align: 'right' });
      doc.text('Chandigarh, India', W - MR, 39, { align: 'right' });

      // Links
      doc.setTextColor(180, 200, 255);
      doc.text('github.com/MohamadAdil', ML, 39);
      doc.text('linkedin.com/in/mohamad-adil-1326312b4', ML, 45);

      y = 62;

      // ---- Section heading ----
      function secHead(title) {
        checkY(14);
        // Accent bar
        doc.setFillColor(79, 70, 229);
        doc.rect(ML, y, 3, 5.5, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(14, 15, 25);
        doc.text(title.toUpperCase(), ML + 7, y + 4.2);
        y += 10;
        doc.setDrawColor(220, 224, 240);
        doc.setLineWidth(.25);
        doc.line(ML, y, W - MR, y);
        y += 5;
      }

      // ---- Body paragraph ----
      function para(text, indent, color) {
        const xOff = indent || 0;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(...(color || [59, 63, 92]));
        const lines = doc.splitTextToSize(text, CW - xOff);
        // render line by line to support page breaks mid-paragraph
        lines.forEach(function (line) {
          checkY(5);
          doc.text(line, ML + xOff, y);
          y += 4.8;
        });
        y += 1.5;
      }

      function labelVal(label, val) {
        checkY(5.5);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(14, 15, 25);
        const lw = doc.getTextWidth(label + ' ');
        doc.text(label, ML, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(59, 63, 92);
        // wrap value if too long
        const valLines = doc.splitTextToSize(val, CW - lw - 2);
        valLines.forEach(function (vl, vi) {
          checkY(5);
          if (vi === 0) {
            doc.text(vl, ML + lw, y);
          } else {
            y += 4.8;
            doc.text(vl, ML + lw, y);
          }
        });
        y += 5.5;
      }

      // ---- ABOUT ----
      secHead('About');
      para('Front-end developer specializing in WordPress and clean, responsive websites. I convert Figma and Photoshop designs into pixel-perfect pages using HTML, CSS, JavaScript, jQuery, and Elementor. I fix layout and responsiveness issues, improve UI sections, and handle small PHP customizations when needed. Comfortable with both page builders and custom code. I also help with website setup, hosting, domains, updates, and ongoing support.');
      y += 3;

      // ---- EXPERIENCE ----
      secHead('Experience');

      const expList = [
        {
          role: 'Frontend Developer',
          company: 'DeepMind Works',
          period: 'Jan 2025 – Present',
          location: 'Chandigarh, India · Hybrid',
          desc: 'Ambitious frontend developer with expertise in HTML, CSS, JavaScript, Webflow, Elementor, and WordPress. Creating responsive, user-focused websites while staying updated on the latest technologies to deliver innovative solutions. Passionate about growth, collaboration, and contributing to impactful projects.'
        },
        {
          role: 'Frontend Developer',
          company: 'Deftsoft',
          period: 'Nov 2023 – Dec 2024',
          location: 'Mohali, Punjab, India · On-site',
          desc: 'Created visually appealing, user-friendly web pages with HTML, CSS, JavaScript, and jQuery. Built responsive pages from Figma, Photoshop, and Adobe XD designs and ensured cross-device compatibility on WordPress, Webflow, Shopify, and React.'
        },
        {
          role: 'Customer Support Executive',
          company: 'Tech Mahindra',
          period: 'Jul 2023 – Sep 2023',
          location: 'Chandigarh, India · On-site',
          desc: 'Delivered technical and customer support, managed issue escalation, knowledge base updates, and professional client communication.'
        }
      ];

      expList.forEach(function (e) {
        checkY(32);
        // Role on left, period on right — on separate rows to avoid overlap
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(14, 15, 25);
        doc.text(e.role, ML, y);
        // Period pill aligned right
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(79, 70, 229);
        doc.text(e.period, W - MR, y, { align: 'right' });
        y += 5.5;
        // Company on new row
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(79, 70, 229);
        doc.text(e.company, ML, y);
        y += 4.8;
        // Location
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.2);
        doc.setTextColor(120, 126, 150);
        doc.text(e.location, ML, y);
        y += 5.5;
        // Description
        para(e.desc, 0, [59, 63, 92]);
        y += 3;
      });

      // ---- EDUCATION ----
      secHead('Education');

      const eduList = [
        { deg: 'Bachelor of Arts – Political Science & Government', school: 'Post Graduate Govt. College, Sector 46, Chandigarh', yr: '2020 – 2023' },
        { deg: '12th Standard', school: 'Chandigarh', yr: '2020' },
        { deg: '10th Standard', school: 'Govt. Model Senior Secondary School, Sector 19C, Chandigarh', yr: '2018' }
      ];

      eduList.forEach(function (e) {
        checkY(18);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(14, 15, 25);
        doc.text(e.deg, ML, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.2);
        doc.setTextColor(79, 70, 229);
        doc.text(e.yr, W - MR, y, { align: 'right' });
        y += 5;
        doc.setTextColor(120, 126, 150);
        doc.text(e.school, ML, y);
        y += 7;
      });

      y += 2;

      // ---- SKILLS ----
      secHead('Skills');

      const skills = [
        { l: 'Frontend:', v: 'HTML5, CSS3, JavaScript ES6, jQuery, PHP, Bootstrap 5, Tailwind CSS' },
        { l: 'CMS / Builders:', v: 'WordPress, Elementor, Webflow, Shopify, Divi' },
        { l: 'Frameworks:', v: 'Next.js, React, Laravel' },
        { l: 'Design Tools:', v: 'Figma, Adobe Photoshop, Adobe XD, PSD-to-Code' },
        { l: 'Hosting & Deploy:', v: 'cPanel, FTP, Domain Management, SSL, GitHub, Website Maintenance' }
      ];

      skills.forEach(function (s) { labelVal(s.l, s.v); });

      y += 2;

      // ---- LINKS ----
      secHead('Links');
      checkY(20);
      [
        ['GitHub:', 'github.com/MohamadAdil'],
        ['LinkedIn:', 'linkedin.com/in/mohamad-adil-1326312b4'],
        ['Behance:', 'behance.net/mohamadadil5']
      ].forEach(function ([l, v]) { labelVal(l, v); });

      // ---- FOOTER on last page ----
      drawFooter();

      doc.save('Mohamad-Adil-Resume.pdf');
      $b.prop('disabled', false).html('<i class="fa-solid fa-download"></i> Download Resume');
    }

    if (window.jspdf) {
      buildPDF();
    } else {
      $.getScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', function () {
        buildPDF();
      });
    }
  });

});
