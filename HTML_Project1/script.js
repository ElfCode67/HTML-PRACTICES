// Wait for page to load completely
window.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. CONTACT FORM HANDLER
    // ============================================
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var formStatus = document.getElementById('formStatus');
            var submitBtn = this.querySelector('.submit-btn');
            
            // Show loading state
            formStatus.textContent = 'Sending message...';
            formStatus.className = 'form-status sending';
            submitBtn.disabled = true;
            
            // Simulate API call with setTimeout
            setTimeout(function() {
                // Success simulation
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.className = 'form-status success';
                
                // Reset form
                contactForm.reset();
                
                // Re-enable button after a moment
                setTimeout(function() {
                    submitBtn.disabled = false;
                    // Clear status after 5 seconds
                    setTimeout(function() {
                        formStatus.textContent = '';
                        formStatus.className = 'form-status';
                    }, 5000);
                }, 1000);
                
            }, 1500);
        });
    }
    
    // ============================================
    // 2. INPUT FOCUS ANIMATIONS
    // ============================================
    var inputs = document.querySelectorAll('.form-input, .form-textarea');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        inputs[i].addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    }
    
    // ============================================
    // 3. RIPPLE EFFECT FOR BUTTONS
    // ============================================
    var buttons = document.querySelectorAll('.submit-btn, .reset-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(e) {
            var rect = this.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            
            var ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.className = 'ripple';
            
            this.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    }
    
    // ============================================
    // 4. SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ============================================
    // 5. SCROLL ANIMATION TO SECTIONS
    // ============================================
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    var sections = document.querySelectorAll('section');
    for (var i = 0; i < sections.length; i++) {
        observer.observe(sections[i]);
    }
    
    // ============================================
    // 6. TECH CARDS ENHANCEMENT
    // ============================================
    var techCards = document.querySelectorAll('.tech-card');
    for (var i = 0; i < techCards.length; i++) {
        techCards[i].addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 255, 0.6)';
            this.style.backgroundColor = '#0000ff';
            this.style.color = '#000';
        });
        
        techCards[i].addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    }
    
    // ============================================
    // 7. SKILL CARDS ENHANCEMENT
    // ============================================
    var skillCards = document.querySelectorAll('.skill-card');
    for (var i = 0; i < skillCards.length; i++) {
        skillCards[i].addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 255, 0.6)';
            this.style.backgroundColor = '#0000ff';
            this.style.color = '#000';
        });
        
        skillCards[i].addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    }
    
    // ============================================
    // 8. ANIME CARDS INTERACTION
    // ============================================
    var animeCards = document.querySelectorAll('.anime-card');
    for (var i = 0; i < animeCards.length; i++) {
        animeCards[i].addEventListener('click', function() {
            // Remove active class from all cards
            for (var j = 0; j < animeCards.length; j++) {
                animeCards[j].classList.remove('active');
            }
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Highlight the rank
            var rank = this.querySelector('.anime-rank');
            if (rank) {
                rank.style.transform = 'scale(1.3) rotate(360deg)';
                rank.style.background = '#3333ff';
                
                // Reset after animation
                setTimeout(function() {
                    rank.style.transform = '';
                }, 500);
            }
        });
    }
    
    // ============================================
    // 9. GAME CARDS ZOOM EFFECT
    // ============================================
    var gameCards = document.querySelectorAll('.game-card');
    for (var i = 0; i < gameCards.length; i++) {
        gameCards[i].addEventListener('mouseenter', function() {
            var img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.15) rotate(2deg)';
                img.style.transition = 'transform 0.3s ease';
            }
        });
        
        gameCards[i].addEventListener('mouseleave', function() {
            var img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    }
    
    // ============================================
    // 10. SCROLL TO TOP BUTTON
    // ============================================
    // Create scroll to top button
    var scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ============================================
    // 11. COPY EMAIL TO CLIPBOARD
    // ============================================
    var emailElements = document.querySelectorAll('.contact-info p');
    for (var i = 0; i < emailElements.length; i++) {
        if (emailElements[i].textContent.includes('balmesgenrique27@gmail.com')) {
            emailElements[i].style.cursor = 'pointer';
            emailElements[i].title = 'Click to copy email';
            
            emailElements[i].addEventListener('click', function() {
                // Create temporary textarea to copy text
                var textarea = document.createElement('textarea');
                textarea.value = 'balmesgenrique27@gmail.com';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                
                // Show feedback
                var originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> <strong>Email:</strong> Email copied to clipboard!';
                this.style.color = '#00ff00';
                
                // Reset after 2 seconds
                setTimeout(function() {
                    this.innerHTML = originalText;
                    this.style.color = '';
                }.bind(this), 2000);
            });
        }
    }
    
    // ============================================
    // 12. CURRENT YEAR IN FOOTER
    // ============================================
    var footerParagraphs = document.querySelectorAll('footer p');
    for (var i = 0; i < footerParagraphs.length; i++) {
        if (footerParagraphs[i].textContent.includes('2024')) {
            var currentYear = new Date().getFullYear();
            footerParagraphs[i].textContent = footerParagraphs[i].textContent.replace('2024', currentYear);
        }
    }
    
    // ============================================
    // 13. PROFILE IMAGE CLICK EFFECT
    // ============================================
    var profileImg = document.querySelector('.header-profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 0 40px rgba(0, 0, 255, 0.9)';
            
            setTimeout(function() {
                profileImg.style.transform = '';
                profileImg.style.boxShadow = '';
            }, 300);
        });
    }
    
    // ============================================
    // 14. SOCIAL LINKS ENHANCEMENT
    // ============================================
    var socialLinks = document.querySelectorAll('.social-link');
    for (var i = 0; i < socialLinks.length; i++) {
        socialLinks[i].addEventListener('mouseenter', function() {
            var icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.3)';
                icon.style.transition = 'transform 0.2s ease';
            }
        });
        
        socialLinks[i].addEventListener('mouseleave', function() {
            var icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    }
    
    // ============================================
    // 15. RANDOM PULSE ANIMATION
    // ============================================
    function randomPulse() {
        var elements = document.querySelectorAll('.tech-card, .skill-card');
        if (elements.length > 0) {
            var randomIndex = Math.floor(Math.random() * elements.length);
            var randomElement = elements[randomIndex];
            
            randomElement.style.boxShadow = '0 0 20px rgba(0, 0, 255, 0.8)';
            randomElement.style.transform = 'scale(1.05)';
            
            setTimeout(function() {
                randomElement.style.boxShadow = '';
                randomElement.style.transform = '';
            }, 1000);
        }
    }
    
    // Start random pulse every 3 seconds
    setInterval(randomPulse, 3000);
});