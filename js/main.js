// Main JavaScript for Sunny Style Website

// Check if products is loaded
if (typeof products === 'undefined') {
    console.error('ERROR: products.js not loaded!');
    // Create fallback products
    window.products = [
        {
            id: 1,
            name: "JK3200 Electric Handheld Packaging Machine",
            category: "Strapping Equipment",
            price: "CAD $699",
            image: "📦",
            images: [],
            shortDesc: "Portable electric strapping tool",
            fullDesc: "Professional handheld strapping machine.",
            specs: {"Model":"JK3200","Strap Width":"13-16mm"},
            features: ["One-handed operation"],
            service: {warranty:"1 Year",support:"Online",customization:"Available"},
            attributes: {"Application":"Packaging"},
            description: "<h3>Product Overview</h3><p>Professional handheld strapping machine.</p>"
        },
        {
            id: 2,
            name: "Portable Mini Self-Loading Stacker 1.6m",
            category: "Stacker",
            price: "CAD $999",
            image: "🚜",
            images: [],
            shortDesc: "Portable mini self-loading stacker",
            fullDesc: "Mini Electric Stacker.",
            specs: {"Load Capacity":"300kg","Max Height":"1600mm"},
            features: ["Maintenance free"],
            service: {warranty:"1 Year",support:"Online",customization:"Available"},
            attributes: {"Condition":"New"},
            description: "<h3>Overview</h3><p>Mini Electric Stacker.</p>"
        },
        {
            id: 3,
            name: "Self-Loading Lifting Stacker 1000kg",
            category: "Stacker",
            price: "CAD $1,299",
            image: "🏗️",
            images: [],
            shortDesc: "Semi-electric portable stacker",
            fullDesc: "Self-loading lifting stacker.",
            specs: {"Load Capacity":"1000kg","Max Height":"1600mm"},
            features: ["High-power motor"],
            service: {warranty:"1 Year",support:"Online",customization:"Available"},
            attributes: {"Condition":"New"},
            description: "<h3>Overview</h3><p>Self-loading lifting stacker.</p>"
        }
    ];
} else {
    console.log('Products loaded successfully:', products.length);
}

// Store quote submissions
let quoteSubmissions = JSON.parse(localStorage.getItem('quoteSubmissions') || '[]');

// Current product image index for carousel
let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    renderProducts();
    setupModal();
    setupSmoothScroll();
});

// Render product cards
function renderProducts() {
    console.log('renderProducts called');
    const productGrid = document.getElementById('productGrid');
    console.log('productGrid element:', productGrid);
    
    if (!productGrid) {
        console.error('Product grid not found');
        return;
    }
    
    productGrid.innerHTML = '';
    
    console.log('products variable:', typeof products, products);
    
    if (typeof products === 'undefined') {
        console.error('Products data not loaded');
        productGrid.innerHTML = '<p style="text-align: center; padding: 50px; color: red;">Error: Products not loaded</p>';
        return;
    }
    
    console.log('Number of products:', products.length);
    
    products.forEach((product, index) => {
        console.log('Creating card for product', index, product.name);
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
    
    console.log('Products rendered successfully:', products.length);
}

// Create product card element
function createProductCard(product) {
    console.log('createProductCard called for:', product.name);
    
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const isImagePath = product.image && (product.image.startsWith('http') || product.image.startsWith('images/'));
    
    console.log('isImagePath:', isImagePath, 'product.image:', product.image);
    
    const cardHTML = `
        <div class="product-card-inner" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div class="product-image" style="${isImagePath ? 'padding: 0; overflow: hidden;' : ''}">
            ${isImagePath 
                ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\'font-size: 4rem;\'>📦</span>';">`
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
                <button class="btn-secondary" onclick="showProductDetail(${product.id})">View Details</button>
            </div>
        </div>
    `;
    return card;
}

// Get key specifications for display
function getKeySpecs(product) {
    const specs = product.specs || {};
    const keySpecs = [];
    
    if (specs['Load Capacity']) keySpecs.push(specs['Load Capacity']);
    else if (specs['Strap Width']) keySpecs.push(specs['Strap Width']);
    
    if (specs['Max Height'] || specs['Max Lift Height']) {
        keySpecs.push(specs['Max Height'] || specs['Max Lift Height']);
    }
    
    if (specs['Battery Life']) keySpecs.push(specs['Battery Life']);
    
    return keySpecs.slice(0, 3);
}

// Show product detail modal with carousel and tabs
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentImageIndex = 0;
    
    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    modalTitle.textContent = product.name;
    
    const hasMultipleImages = product.images && product.images.length > 0;
    const imageUrls = hasMultipleImages ? product.images : [product.image || ''];
    const hasVideo = product.video && product.video.length > 0;
    
    let allThumbnails = [...imageUrls];
    if (hasVideo) {
        allThumbnails.push('video');
    }
    
    modalBody.innerHTML = `
        <div class="product-detail-new">
            <div class="product-gallery">
                <div class="main-image-container">
                    <button class="gallery-nav prev" onclick="changeImage(-1, ${product.id})">❮</button>
                    <img id="mainProductImage" src="${imageUrls[0] || ''}" alt="${product.name}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="image-placeholder" style="display: ${imageUrls[0] ? 'none' : 'flex'};">
                        <span style="font-size: 8rem;">${product.image || '📦'}</span>
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
                                 onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\'font-size: 2rem;\'>📦</span>';">
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="product-info-panel">
                <div class="category">${product.category}</div>
                <div class="product-price-large">${product.price}</div>
                <p class="product-short-desc">${product.fullDesc}</p>
                
                <div class="quick-specs">
                    <h4>Quick Specifications</h4>
                    <div class="specs-grid">
                        ${Object.entries(product.specs || {}).slice(0, 4).map(([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-label">${key}</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="product-tabs-container">
            <div class="product-tabs">
                <a href="#section-service-${product.id}" class="tab-btn" onclick="scrollToSection('section-service-${product.id}'); return false;">Service</a>
                <a href="#section-attributes-${product.id}" class="tab-btn" onclick="scrollToSection('section-attributes-${product.id}'); return false;">Attributes</a>
                <a href="#section-specs-${product.id}" class="tab-btn" onclick="scrollToSection('section-specs-${product.id}'); return false;">Specifications</a>
                <a href="#section-description-${product.id}" class="tab-btn" onclick="scrollToSection('section-description-${product.id}'); return false;">Description</a>
            </div>
        </div>
        
        <div id="section-service-${product.id}" class="product-section">
            <h3 class="section-heading">Service</h3>
            ${product.service ? `
                <div class="service-grid">
                    <div class="service-item">
                        <span class="service-icon">🛡️</span>
                        <div><strong>Warranty</strong><p>${product.service.warranty}</p></div>
                    </div>
                    <div class="service-item">
                        <span class="service-icon">📞</span>
                        <div><strong>Support</strong><p>${product.service.support}</p></div>
                    </div>
                    <div class="service-item">
                        <span class="service-icon">⚙️</span>
                        <div><strong>Customization</strong><p>${product.service.customization}</p></div>
                    </div>
                </div>
            ` : '<p>Service information coming soon.</p>'}
        </div>
        
        <div id="section-attributes-${product.id}" class="product-section">
            <h3 class="section-heading">Attributes</h3>
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
        
        <div id="section-specs-${product.id}" class="product-section">
            <h3 class="section-heading">Specifications</h3>
            ${product.specs ? `
                <table class="specs-table-full">
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <tr><th>${key}</th><td>${value}</td></tr>
                    `).join('')}
                </table>
            ` : '<p>Technical specifications coming soon.</p>'}
        </div>
        
        <div id="section-description-${product.id}" class="product-section">
            <h3 class="section-heading">Description</h3>
            <div class="description-content">${product.description || '<p>Detailed description coming soon.</p>'}</div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
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

// Scroll to section within modal
function scrollToSection(sectionId) {
    const modalContent = document.querySelector('.modal-content');
    const section = document.getElementById(sectionId);
    
    if (modalContent && section) {
        const modalRect = modalContent.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();
        const scrollTop = sectionRect.top - modalRect.top + modalContent.scrollTop - 150;
        
        modalContent.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
        
        section.style.background = 'rgba(221, 107, 32, 0.1)';
        section.style.transition = 'background 0.5s';
        setTimeout(() => {
            section.style.background = '';
        }, 1000);
    }
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

// Setup smooth scrolling for navigation links
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

// Add scroll effect to header
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

console.log('main.js loaded successfully');
