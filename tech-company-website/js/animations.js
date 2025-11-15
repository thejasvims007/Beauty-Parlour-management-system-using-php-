// Advanced Animations using GSAP and Particles.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Particles.js for Hero Background
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#06b6d4', '#8b5cf6', '#ec4899']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#06b6d4',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        
        // Hero Text Animation
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) {
            gsap.from(heroTitle, {
                duration: 1.2,
                y: 100,
                opacity: 0,
                ease: 'power4.out',
                delay: 0.3
            });
        }
        
        if (heroSubtitle) {
            gsap.from(heroSubtitle, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                delay: 0.6
            });
        }

        // Animate buttons
        const glowButtons = document.querySelectorAll('.glow-btn');
        if (glowButtons.length > 0) {
            gsap.from(glowButtons, {
                duration: 0.8,
                y: 30,
                opacity: 0,
                stagger: 0.2,
                ease: 'back.out(1.7)',
                delay: 0.9
            });
        }

        // Service Cards Hover Animation
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.3,
                    y: -10,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.3,
                    y: 0,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Product Cards Animation
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // Timeline Items Animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems.length > 0) {
            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.from(entry.target, {
                            duration: 0.8,
                            x: entry.target.querySelector('.timeline-content').style.marginLeft === 'auto' ? 100 : -100,
                            opacity: 0,
                            ease: 'power3.out'
                        });
                        timelineObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            timelineItems.forEach(item => timelineObserver.observe(item));
        }

        // Scroll-triggered animations for sections
        const animateSections = document.querySelectorAll('.glass-strong');
        if (animateSections.length > 0) {
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.from(entry.target, {
                            duration: 0.8,
                            y: 50,
                            opacity: 0,
                            ease: 'power3.out'
                        });
                        sectionObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animateSections.forEach(section => sectionObserver.observe(section));
        }

        // Gradient Text Animation
        const gradientTexts = document.querySelectorAll('.gradient-text');
        gradientTexts.forEach(text => {
            gsap.to(text, {
                duration: 3,
                backgroundPosition: '200% center',
                ease: 'none',
                repeat: -1
            });
        });

        // Floating Animation for Icons
        const floatingIcons = document.querySelectorAll('.service-icon');
        floatingIcons.forEach((icon, index) => {
            gsap.to(icon, {
                duration: 2 + (index * 0.2),
                y: -10,
                ease: 'power1.inOut',
                repeat: -1,
                yoyo: true,
                delay: index * 0.2
            });
        });
    }

    // Swiper Initialization
    if (typeof Swiper !== 'undefined' && document.querySelector('.servicesSwiper')) {
        new Swiper('.servicesSwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Cursor Follow Effect (Optional - for desktop)
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(6, 182, 212, 0.5);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            display: none;
        `;
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.display = 'block';
        });

        function animateCursor() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Scale cursor on hover
        const interactiveElements = document.querySelectorAll('a, button, .product-card, .service-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }

    // Text Reveal Animation
    const revealText = (element) => {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            element.appendChild(span);
            
            if (typeof gsap !== 'undefined') {
                gsap.to(span, {
                    duration: 0.05,
                    opacity: 1,
                    delay: index * 0.03
                });
            }
        });
    };

    // Apply text reveal to specific elements
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    revealText(entry.target);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    console.log('Animations initialized! ✨');
});

// Page Transition Effect
window.addEventListener('beforeunload', () => {
    if (typeof gsap !== 'undefined') {
        gsap.to('body', {
            duration: 0.3,
            opacity: 0
        });
    }
});
