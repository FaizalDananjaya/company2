document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.navbar-nav li a');

    function updateActiveNavigation() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavigation);

    // ==============================================
    // COUNTER ANIMATIONS
    // ==============================================

    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Trigger counter animation when visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const counterSection = document.querySelector('.boxes_area');
    if (counterSection) {
        counterObserver.observe(counterSection);
    }

    // ==============================================
    // CONTACT FORM ENHANCEMENT
    // ==============================================

    const contactForm = document.getElementById('login-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('ad').value;
            const phone = document.getElementById('tel').value;

            if (name.trim() === '' || phone.trim() === '') {
                showNotification('Silakan lengkapi semua field!', 'error');
                return;
            }

            // Simulate form submission
            const submitButton = contactForm.querySelector('.login-button');
            const originalIcon = submitButton.innerHTML;

            submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
            submitButton.disabled = true;

            setTimeout(() => {
                submitButton.innerHTML = '<i class="fa fa-check"></i>';
                submitButton.classList.add('success');
                showNotification('Terima kasih! Kami akan menghubungi Anda segera.', 'success');

                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.innerHTML = originalIcon;
                    submitButton.disabled = false;
                    submitButton.classList.remove('success');
                }, 3000);
            }, 2000);
        });
    }

    // ==============================================
    // NOTIFICATION SYSTEM
    // ==============================================

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        });

        // Auto close after 5 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }

    // ==============================================
    // CAROUSEL ENHANCEMENT
    // ==============================================

    // Auto-play carousel with pause on hover
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', function() {
            $(this).carousel('pause');
        });

        carousel.addEventListener('mouseleave', function() {
            $(this).carousel('cycle');
        });
    }

    // ==============================================
    // SERVICE CARDS HOVER EFFECT
    // ==============================================

    const serviceCards = document.querySelectorAll('.media');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ==============================================
    // MOBILE MENU ENHANCEMENT
    // ==============================================

    const mobileToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.navbar-collapse');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Add animation class
            if (!isExpanded) {
                mobileMenu.classList.add('mobile-menu-open');
            } else {
                mobileMenu.classList.remove('mobile-menu-open');
            }
        });
    }

    // ==============================================
    // LAZY LOADING FOR IMAGES
    // ==============================================

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ==============================================
    // PERFORMANCE OPTIMIZATIONS
    // ==============================================

    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debouncing to scroll events
    const debouncedScroll = debounce(updateActiveNavigation, 10);
    window.addEventListener('scroll', debouncedScroll);

    // ==============================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==============================================

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Focus management for dropdowns
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.nextElementSibling;
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });
    });

    // ==============================================
    // THEME DETECTION
    // ==============================================

    // Detect user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode - could implement dark theme here
        console.log('User prefers dark mode');
    }

    // ==============================================
    // ERROR HANDLING
    // ==============================================

    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // Could send error reports to analytics service
    });

    // ==============================================
    // INITIALIZATION
    // ==============================================

    console.log('Alpha Edge website initialized successfully!');

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');

});

// ==============================================
// UTILITY FUNCTIONS
// ==============================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Smooth scroll to element
function scrollToElement(element, offset = 0) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Add CSS for keyboard navigation
const keyboardNavigationStyles = `
.keyboard-navigation *:focus {
    outline: 2px solid #005FA6 !important;
    outline-offset: 2px !important;
}

.mobile-menu-open {
    animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.notification-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.notification-close {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notification-close:hover {
    opacity: 0.8;
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = keyboardNavigationStyles;
document.head.appendChild(styleSheet);
