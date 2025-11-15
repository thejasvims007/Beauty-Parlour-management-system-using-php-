// Products Page JavaScript - Modal and Filter Functionality

document.addEventListener('DOMContentLoaded', () => {
    
    // Product Modal Functionality
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    
    // Open Modal
    const viewProductButtons = document.querySelectorAll('.view-product');
    viewProductButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productData = JSON.parse(button.getAttribute('data-product'));
            
            // Populate modal with product data
            modalTitle.textContent = productData.name;
            modalIcon.textContent = productData.icon;
            modalDescription.textContent = productData.description;
            modalPrice.textContent = productData.price;
            
            // Show modal with animation
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // GSAP animation if available
            if (typeof gsap !== 'undefined') {
                gsap.from('.modal-content', {
                    duration: 0.4,
                    scale: 0.7,
                    opacity: 0,
                    ease: 'back.out(1.7)'
                });
            }
        });
    });
    
    // Close Modal
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Product Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-purple-500');
            });
            button.classList.add('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-purple-500');
            
            // Filter products
            productCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    
                    // Animate card appearance
                    if (typeof gsap !== 'undefined') {
                        gsap.from(card, {
                            duration: 0.5,
                            scale: 0.8,
                            opacity: 0,
                            ease: 'back.out(1.7)'
                        });
                    }
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Re-initialize AOS for filtered items
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });
    
    // Product Card Hover Effects
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)',
                    ease: 'power2.out'
                });
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    duration: 0.3,
                    scale: 1,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
                    ease: 'power2.out'
                });
            }
        });
    });
    
    // Search Functionality (if search input exists)
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            productCards.forEach(card => {
                const productName = card.querySelector('h3').textContent.toLowerCase();
                const productDescription = card.querySelector('p').textContent.toLowerCase();
                
                if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Sort Functionality (if sort select exists)
    const sortSelect = document.getElementById('product-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortValue = e.target.value;
            const productsGrid = document.getElementById('products-grid');
            const productsArray = Array.from(productCards);
            
            productsArray.sort((a, b) => {
                const priceA = parseFloat(a.querySelector('.gradient-text').textContent.replace(/[^0-9.]/g, ''));
                const priceB = parseFloat(b.querySelector('.gradient-text').textContent.replace(/[^0-9.]/g, ''));
                
                if (sortValue === 'price-low') {
                    return priceA - priceB;
                } else if (sortValue === 'price-high') {
                    return priceB - priceA;
                } else if (sortValue === 'name') {
                    const nameA = a.querySelector('h3').textContent;
                    const nameB = b.querySelector('h3').textContent;
                    return nameA.localeCompare(nameB);
                }
                return 0;
            });
            
            // Re-append sorted cards
            productsArray.forEach(card => {
                productsGrid.appendChild(card);
            });
        });
    }
    
    // Add to Cart Functionality (placeholder)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Show notification
            showNotification('Product added to cart!', 'success');
            
            // Animate button
            if (typeof gsap !== 'undefined') {
                gsap.to(button, {
                    duration: 0.1,
                    scale: 0.9,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut'
                });
            }
        });
    });
    
    // Notification System
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-6 px-6 py-4 rounded-lg shadow-lg z-50 ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 
            'bg-blue-500'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        if (typeof gsap !== 'undefined') {
            gsap.from(notification, {
                duration: 0.3,
                x: 100,
                opacity: 0,
                ease: 'back.out(1.7)'
            });
        }
        
        // Remove after 3 seconds
        setTimeout(() => {
            if (typeof gsap !== 'undefined') {
                gsap.to(notification, {
                    duration: 0.3,
                    x: 100,
                    opacity: 0,
                    ease: 'power2.in',
                    onComplete: () => notification.remove()
                });
            } else {
                notification.remove();
            }
        }, 3000);
    }
    
    // Product Quick View (on card click)
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Only trigger if not clicking the view details button
            if (!e.target.classList.contains('view-product')) {
                const viewButton = card.querySelector('.view-product');
                if (viewButton) {
                    viewButton.click();
                }
            }
        });
    });
    
    // Lazy Load Product Images (if using actual images)
    const productImages = document.querySelectorAll('.product-card img[data-src]');
    if (productImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        }, { threshold: 0.1 });
        
        productImages.forEach(img => imageObserver.observe(img));
    }
    
    // Initialize tooltips for product features
    const initTooltips = () => {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip glass-strong px-3 py-2 rounded-lg text-sm absolute z-50';
                tooltip.textContent = this.getAttribute('data-tooltip');
                tooltip.style.cssText = 'bottom: 100%; left: 50%; transform: translateX(-50%); margin-bottom: 8px;';
                
                this.style.position = 'relative';
                this.appendChild(tooltip);
                
                if (typeof gsap !== 'undefined') {
                    gsap.from(tooltip, {
                        duration: 0.2,
                        opacity: 0,
                        y: 10,
                        ease: 'power2.out'
                    });
                }
            });
            
            element.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    };
    
    initTooltips();
    
    console.log('Products page initialized! 🛍️');
});
