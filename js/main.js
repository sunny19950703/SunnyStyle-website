// Main JavaScript for Sunny Style Website

// Store quote submissions
let quoteSubmissions = JSON.parse(localStorage.getItem('quoteSubmissions') || '[]');

// Current product image index for carousel
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    populateProductDropdown();
    setupModal();
    setupForm();
    setupSmoothScroll();
    checkNewSubmissions();
});

// Render product cards
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    products.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const isImagePath = product.image && (product.image.startsWith('http') || product.image.startsWith('images/'));
    
    card.innerHTML = `
        <div class="product-image" style="${isImagePath ? 'padding: 0; overflow: hidden;' : ''}">
            ${isImagePath 
                ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size: 4rem;\\'>📦</span>';">`
                : `<span style="font-size: 4rem;">${product.image}</span>`
            }
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-specs">
                ${getKeySpecs(product).map(spec => `<span class="spec-tag">${spec}</span>`).join('')}
            </div>
            <div class="product-price">${product.price}</div>
            <div class="product-actions">
                <button class="btn-secondary" onclick="showProductDetail(${product.id})" data-i18n="btn_details">View Details</button>
            </div>
        </div>
    `;
    return card;
}

// Get key specifications for display
function getKeySpecs(product) {
    const specs = product.specs;
    const keySpecs = [];
    
    if (specs['Strap Width']) keySpecs.push(specs['Strap Width']);
    if (specs['Tension Force']) keySpecs.push(specs['Tension Force']);
    if (specs['Battery']) keySpecs.push('Battery Powered');
    
    return keySpecs.slice(0, 3);
}

// Populate product dropdown in quote form
function populateProductDropdown() {
    const select = document.getElementById('product');
    if (!select) return;
    
    const firstOption = select.options[0];
    select.innerHTML = '';
    select.appendChild(firstOption);
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

// Show product detail modal with carousel and sections
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentImageIndex = 0;
    
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = product.name;
    
    const hasMultipleImages = product.images && product.images.length > 0;
    const imageUrls = hasMultipleImages ? product.images : [null];
    const hasVideo = product.video && product.video.length > 0;
    
    let allThumbnails = [...imageUrls];
    if (hasVideo) {
        allThumbnails.push('video');
    }
    
    modalBody.innerHTML = `
        <div class="product-detail-new">
            <!-- Left: Image Gallery -->
            <div class="product-gallery">
                <div class="main-image-container">
                    <button class="gallery-nav prev" onclick="changeImage(-1, ${product.id})">❮</button>
                    <img id="mainProductImage" src="${imageUrls[0] || ''}" alt="${product.name}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: ${imageUrls[0] ? 'none' : 'flex'};">
                        <span style="font-size: 8rem;">📦</span>
                    </div>
                    <div id="videoContainer" style="display: none; width: 100%; height: 100%;">
                        <video id="productVideo" controls style="width: 100%; height: 100%; object-fit: contain;">
                            <source src="${product.video || ''}" type="video/mp4">
                        </video>
                    </div>
                    <button class="gallery-nav next" onclick="changeImage(1, ${product.id})">❯</button>
                </div>
                <div class="thumbnail-container">
                    ${allThumbnails.map((item, index) => {
                        if (item === 'video') {
                            return `<div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index}, ${product.id})">
                                <span style="font-size: 1.5rem;">▶️</span>
                            </div>`;
                        }
                        return `<div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index}, ${product.id})">
                            <img src="${item || ''}" alt="${product.name} ${index + 1}"
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size: 2rem;\\'>📦</span>';">
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <!-- Right: Product Info -->
            <div class="product-info-panel">
                <div class="category">${product.category}</div>
                <div class="product-price-large">${product.price}</div>
                <p class="product-short-desc">${product.shortDesc}</p>
                <button class="cta-button" onclick="openQuoteModal('${product.name}')" data-i18n="btn_quote">Request Quote</button>
                
                <div class="quick-specs">
                    <h4>Quick Specs</h4>
                    <div class="specs-grid">
                        ${getKeySpecs(product).map(spec => `
                            <div class="spec-item">
                                <span class="spec-value">${spec}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Product Sections Navigation -->
        <div class="product-tabs-container">
            <div class="product-tabs">
                <button class="tab-btn" onclick="scrollToSection('section-service')">Service</button>
                <button class="tab-btn" onclick="scrollToSection('section-attributes')">Attributes</button>
                <button class="tab-btn" onclick="scrollToSection('section-specs')">Specifications</button>
                <button class="tab-btn" onclick="scrollToSection('section-description')">Description</button>
            </div>
        </div>
        
        <!-- Service Section -->
        <div id="section-service" class="product-section">
            <h3 class="section-heading">🛡️ Service</h3>
            ${product.service ? `
                <div class="service-grid">
                    ${product.service.warranty ? `
                    <div class="service-item">
                        <span class="service-icon">🛡️</span>
                        <div>
                            <strong>Warranty</strong>
                            <p>${product.service.warranty}</p>
                        </div>
                    </div>` : ''}
                    ${product.service.support ? `
                    <div class="service-item">
                        <span class="service-icon">📞</span>
                        <div>
                            <strong>Support</strong>
                            <p>${product.service.support}</p>
                        </div>
                    </div>` : ''}
                    ${product.service.customization ? `
                    <div class="service-item">
                        <span class="service-icon">⚙️</span>
                        <div>
                            <strong>Customization</strong>
                            <p>${product.service.customization}</p>
                        </div>
                    </div>` : ''}
                </div>
            ` : '<p>Service information coming soon.</p>'}
        </div>
        
        <!-- Attributes Section -->
        <div id="section-attributes" class="product-section">
            <h3 class="section-heading">📋 Attributes</h3>
            ${product.attributes ? `
                <div class="attributes-table">
                    ${Object.entries(product.attributes).map(([key, value]) => `
                        <div class="attr-row">
                            <div class="attr-label">${key}</div>
                            <div class="attr-value">${value}</div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p>Product attributes coming soon.</p>'}
        </div>
        
        <!-- Specifications Section -->
        <div id="section-specs" class="product-section">
            <h3 class="section-heading">⚙️ Specifications</h3>
            ${product.specs ? `
                <table class="specs-table-full">
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <tr>
                            <th>${key}</th>
                            <td>${value}</td>
                        </tr>
                    `).join('')}
                </table>
            ` : '<p>Technical specifications coming soon.</p>'}
        </div>
        
        <!-- Description Section -->
        <div id="section-description" class="product-section">
            <h3 class="section-heading">📝 Description</h3>
            <div class="description-content">
                ${product.description || '<p>Detailed description coming soon.</p>'}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Scroll to section within modal
function scrollToSection(sectionId) {
    const modalContent = document.querySelector('.modal-content');
    const section = document.getElementById(sectionId);
    
    if (modalContent && section) {
        // Calculate the position relative to modal-content
        const modalRect = modalContent.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const scrollTop = sectionRect.top - modalRect.top + modalContent.scrollTop - 150;
        
        modalContent.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
        
        // Highlight effect
        section.style.background = 'rgba(221, 107, 32, 0.1)';
        section.style.transition = 'background 0.5s';
        setTimeout(() => {
            section.style.background = '';
        }, 1000);
    }
}

// Change image in carousel
function changeImage(direction, productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.images) return;
    
    const hasVideo = product.video && product.video.length > 0;
    const totalItems = product.images.length + (hasVideo ? 1 : 0);
    currentImageIndex = (currentImageIndex + direction + totalItems) % totalItems;
    
    updateGallery(product);
}

// Select image from thumbnail
function selectImage(index, productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentImageIndex = index;
    updateGallery(product);
}

// Update gallery display
function updateGallery(product) {
    const mainImage = document.getElementById('mainProductImage');
    const imagePlaceholder = document.querySelector('.image-placeholder');
    const videoContainer = document.getElementById('videoContainer');
    const productVideo = document.getElementById('productVideo');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    const hasVideo = product.video && product.video.length > 0;
    const isVideo = hasVideo && currentImageIndex === product.images.length;
    
    if (isVideo) {
        if (mainImage) mainImage.style.display = 'none';
        if (imagePlaceholder) imagePlaceholder.style.display = 'none';
        if (videoContainer) videoContainer.style.display = 'block';
        if (productVideo) productVideo.play();
    } else {
        if (videoContainer) {
            videoContainer.style.display = 'none';
            if (productVideo) {
                productVideo.pause();
                productVideo.currentTime = 0;
            }
        }
        if (mainImage) {
            mainImage.style.display = 'block';
            mainImage.src = product.images[currentImageIndex];
        }
        if (imagePlaceholder) {
            imagePlaceholder.style.display = product.images[currentImageIndex] ? 'none' : 'flex';
        }
    }
    
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// Open quote modal with pre-selected product
function openQuoteModal(productName) {
    const productModal = document.getElementById('productModal');
    if (productModal) productModal.style.display = 'none';
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    const productSelect = document.getElementById('product');
    if (productSelect && productName) {
        productSelect.value = productName;
    }
    
    setTimeout(() => {
        const firstNameField = document.getElementById('firstName');
        if (firstNameField) firstNameField.focus();
    }, 800);
}

// Setup modal functionality
function setupModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Setup form submission
function setupForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Only email is required
        if (!data.email) {
            alert('Please enter your email address.');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        data.id = Date.now();
        data.timestamp = new Date().toISOString();
        data.status = 'new';
        
        quoteSubmissions.push(data);
        localStorage.setItem('quoteSubmissions', JSON.stringify(quoteSubmissions));
        
        // Send email notification
        sendQuoteEmailNotification(data);
        
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = t('form_submitting');
        submitButton.disabled = true;
        
        setTimeout(() => {
            const displayName = data.firstName || data.email;
            alert(`Thank you! Your quote request has been submitted. We will contact you at ${data.email} within 24 hours.`);
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            showQuoteNotification(data);
        }, 1500);
    });
}

// Send quote email notification
function sendQuoteEmailNotification(data) {
    // Email configuration - Replace with your email
    const EMAIL_CONFIG = {
        recipientEmail: 'kingskywing@gmail.com', // ← 修改为您的邮箱
        subject: `New Quote Request from ${data.email}`,
    };
    
    // Generate email content
    const emailContent = generateQuoteEmailContent(data);
    
    // Method 1: Using mailto link (opens user's email client)
    const mailtoLink = generateMailtoLink(data, EMAIL_CONFIG.recipientEmail);
    
    // Method 2: Log to console for debugging
    console.log('=== QUOTE REQUEST RECEIVED ===');
    console.log('To:', EMAIL_CONFIG.recipientEmail);
    console.log('Subject:', EMAIL_CONFIG.subject);
    console.log('Content:', emailContent);
    console.log('==============================');
    
    // Method 3: Store in localStorage for admin panel
    storeQuoteForAdmin(data);
    
    // Note: For production, you need to set up a backend service
    // Options: EmailJS, Formspree, Netlify Forms, or custom backend API
    
    return {
        success: true,
        message: 'Quote request saved. Email notification would be sent in production.'
    };
}

// Generate email content
function generateQuoteEmailContent(data) {
    return `
New Quote Request
================

Email: ${data.email}
First Name: ${data.firstName || 'Not provided'}
Last Name: ${data.lastName || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Product Interest: ${data.product || 'Not specified'}
Message: ${data.message || 'No message'}

Submitted: ${new Date(data.timestamp).toLocaleString()}

================
Sunny Style Website
    `;
}

// Generate mailto link
function generateMailtoLink(data, recipient) {
    const subject = encodeURIComponent(`Quote Request from ${data.email}`);
    const body = encodeURIComponent(generateQuoteEmailContent(data));
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

// Store quote for admin panel
function storeQuoteForAdmin(data) {
    // This is already done in the form submission
    // The quote is stored in localStorage.quoteSubmissions
    console.log('Quote stored for admin review:', data);
}

// Show quote notification
function showQuoteNotification(data) {
    const modal = document.getElementById('quoteNotificationModal');
    const body = document.getElementById('quoteNotificationBody');
    
    if (!modal || !body) return;
    
    body.innerHTML = `
        <div style="margin-bottom: 20px;">
            <h4>New Quote Request Received!</h4>
            <p style="color: var(--text-light); margin-top: 10px;">
                <strong>Name:</strong> ${data.firstName} ${data.lastName}<br>
                <strong>Email:</strong> ${data.email}<br>
                <strong>Phone:</strong> ${data.phone || 'N/A'}<br>
                <strong>Company:</strong> ${data.company || 'N/A'}<br>
                <strong>Product:</strong> ${data.product || 'Not specified'}<br>
                <strong>Message:</strong> ${data.message || 'N/A'}<br>
                <strong>Time:</strong> ${new Date(data.timestamp).toLocaleString()}
            </p>
        </div>
        <p style="background: #f0fff4; padding: 15px; border-radius: 6px; border-left: 4px solid var(--success-color);">
            ✓ This quote has been saved. You can view all submissions in the Admin Panel.
        </p>
    `;
    
    modal.style.display = 'block';
}

// Close quote notification
function closeQuoteNotification() {
    const modal = document.getElementById('quoteNotificationModal');
    if (modal) modal.style.display = 'none';
}

// Check for new submissions
function checkNewSubmissions() {
    const newSubmissions = quoteSubmissions.filter(s => s.status === 'new');
    if (newSubmissions.length > 0 && isAdminLoggedIn && isAdminLoggedIn()) {
        newSubmissions.forEach(s => s.status = 'viewed');
        localStorage.setItem('quoteSubmissions', JSON.stringify(quoteSubmissions));
        
        if (newSubmissions.length === 1) {
            showQuoteNotification(newSubmissions[0]);
        } else {
            alert(`You have ${newSubmissions.length} new quote requests! Check the Admin Panel to view them.`);
        }
    }
}

// Setup smooth scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Export functions
window.getQuoteSubmissions = function() {
    return quoteSubmissions;
};

window.clearQuoteSubmissions = function() {
    quoteSubmissions = [];
    localStorage.removeItem('quoteSubmissions');
};
