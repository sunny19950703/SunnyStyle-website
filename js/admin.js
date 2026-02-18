// Admin Panel - Content Management System

// Admin credentials (in production, this should be server-side)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin123' // Change this in production!
};

// Content data structure
let siteContent = {
    company: {
        name: "Sunny Style",
        tagline: "Efficiency Delivered. Convenience Powered",
        description: "At Sunny Style, we provide modern electric strapping tools, pallet trucks, and handling equipment designed to make your workflow faster, easier, and more efficient. Every product is built for reliability and user-friendly operation, helping Canadian businesses reduce labor effort, improve productivity, and move goods with confidence. Efficiency Delivered. Convenience Powered. - that's our promise for every job you take on.",
        address: "Verdun, Quebec, H3E 1H2",
        phone: "1-514-776-5198",
        email: "kingskywing@gmail.com",
        hours: {
            weekday: "Monday - Sunday: 8:00 AM - 22:00 PM",
            saturday: "Monday - Sunday: 8:00 AM - 22:00 PM",
            sunday: "Monday - Sunday: 8:00 AM - 22:00 PM"
        }
    },
    hero: {
        title: "Efficiency Delivered. Convenience Powered",
        subtitle: "Modern electric strapping tools, pallet trucks, and handling equipment for Canadian businesses"
    },
    social: {
        facebook: "https://facebook.com/proequip",
        linkedin: "https://linkedin.com/company/proequip",
        twitter: "https://twitter.com/proequip"
    }
};

// Load content from localStorage if available
function loadSiteContent() {
    const saved = localStorage.getItem('siteContent');
    if (saved) {
        siteContent = JSON.parse(saved);
    }
}

// Save content to localStorage
function saveSiteContent() {
    localStorage.setItem('siteContent', JSON.stringify(siteContent));
}

// Check if user is logged in
function isAdminLoggedIn() {
    return sessionStorage.getItem('adminLoggedIn') === 'true';
}

// Login function
function adminLogin(username, password) {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        return true;
    }
    return false;
}

// Logout function
function adminLogout() {
    sessionStorage.removeItem('adminLoggedIn');
}

// Show admin login modal
function showAdminLogin() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'adminLoginModal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 400px;">
            <div class="modal-header">
                <h2 data-i18n="admin_login">Admin Login</h2>
                <span class="close" onclick="closeAdminModal()">&times;</span>
            </div>
            <div class="modal-body">
                <form id="adminLoginForm">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" id="adminUsername" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="adminPassword" required>
                    </div>
                    <button type="submit" class="cta-button" style="width: 100%;">Login</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('adminUsername').value;
        const password = document.getElementById('adminPassword').value;
        
        if (adminLogin(username, password)) {
            modal.remove();
            showAdminPanel();
        } else {
            alert('Invalid credentials!');
        }
    });
}

// Close admin modal
function closeAdminModal() {
    const modal = document.getElementById('adminLoginModal');
    if (modal) modal.remove();
}

// Show admin panel
function showAdminPanel() {
    loadSiteContent();
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'adminPanelModal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px; max-height: 90vh; overflow-y: auto;">
            <div class="modal-header">
                <h2>Content Management</h2>
                <span class="close" onclick="closeAdminPanel()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="admin-tabs">
                    <button class="admin-tab active" onclick="switchTab('company')">Company Info</button>
                    <button class="admin-tab" onclick="switchTab('hero')">Hero Section</button>
                    <button class="admin-tab" onclick="switchTab('products')">Products</button>
                    <button class="admin-tab" onclick="switchTab('social')">Social Media</button>
                </div>
                
                <div id="adminContent">
                    <!-- Content loaded dynamically -->
                </div>
                
                <div style="margin-top: 30px; display: flex; gap: 10px;">
                    <button class="cta-button" onclick="saveAdminChanges()">Save Changes</button>
                    <button class="btn-secondary" onclick="closeAdminPanel()">Cancel</button>
                    <button class="btn-secondary" onclick="adminLogout(); closeAdminPanel();" style="margin-left: auto;">Logout</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Load initial tab
    switchTab('company');
}

// Close admin panel
function closeAdminPanel() {
    const modal = document.getElementById('adminPanelModal');
    if (modal) modal.remove();
}

// Switch admin tabs
function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.admin-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const content = document.getElementById('adminContent');
    
    switch(tab) {
        case 'company':
            content.innerHTML = `
                <h3>Company Information</h3>
                <div class="form-group">
                    <label>Company Name</label>
                    <input type="text" id="editCompanyName" value="${siteContent.company.name}">
                </div>
                <div class="form-group">
                    <label>Tagline</label>
                    <input type="text" id="editTagline" value="${siteContent.company.tagline}">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea id="editDescription" rows="4">${siteContent.company.description}</textarea>
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" id="editAddress" value="${siteContent.company.address}">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" id="editPhone" value="${siteContent.company.phone}">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="editEmail" value="${siteContent.company.email}">
                </div>
                <h4>Business Hours</h4>
                <div class="form-group">
                    <label>Weekday</label>
                    <input type="text" id="editHoursWeekday" value="${siteContent.company.hours.weekday}">
                </div>
                <div class="form-group">
                    <label>Saturday</label>
                    <input type="text" id="editHoursSaturday" value="${siteContent.company.hours.saturday}">
                </div>
                <div class="form-group">
                    <label>Sunday</label>
                    <input type="text" id="editHoursSunday" value="${siteContent.company.hours.sunday}">
                </div>
            `;
            break;
            
        case 'hero':
            content.innerHTML = `
                <h3>Hero Section</h3>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" id="editHeroTitle" value="${siteContent.hero.title}">
                </div>
                <div class="form-group">
                    <label>Subtitle</label>
                    <textarea id="editHeroSubtitle" rows="3">${siteContent.hero.subtitle}</textarea>
                </div>
            `;
            break;
            
        case 'products':
            content.innerHTML = `
                <h3>Manage Products</h3>
                <p>Product management interface would go here. You can add, edit, or remove products.</p>
                <div id="productList">
                    ${products.map(p => `
                        <div style="padding: 15px; border: 1px solid #e2e8f0; margin-bottom: 10px; border-radius: 6px;">
                            <strong>${p.name}</strong> - ${p.price}
                            <button class="btn-secondary" style="float: right; padding: 5px 15px;">Edit</button>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
            
        case 'social':
            content.innerHTML = `
                <h3>Social Media Links</h3>
                <div class="form-group">
                    <label>Facebook</label>
                    <input type="url" id="editFacebook" value="${siteContent.social.facebook}">
                </div>
                <div class="form-group">
                    <label>LinkedIn</label>
                    <input type="url" id="editLinkedin" value="${siteContent.social.linkedin}">
                </div>
                <div class="form-group">
                    <label>Twitter</label>
                    <input type="url" id="editTwitter" value="${siteContent.social.twitter}">
                </div>
            `;
            break;
    }
}

// Save admin changes
function saveAdminChanges() {
    // Update company info
    siteContent.company.name = document.getElementById('editCompanyName')?.value || siteContent.company.name;
    siteContent.company.tagline = document.getElementById('editTagline')?.value || siteContent.company.tagline;
    siteContent.company.description = document.getElementById('editDescription')?.value || siteContent.company.description;
    siteContent.company.address = document.getElementById('editAddress')?.value || siteContent.company.address;
    siteContent.company.phone = document.getElementById('editPhone')?.value || siteContent.company.phone;
    siteContent.company.email = document.getElementById('editEmail')?.value || siteContent.company.email;
    siteContent.company.hours.weekday = document.getElementById('editHoursWeekday')?.value || siteContent.company.hours.weekday;
    siteContent.company.hours.saturday = document.getElementById('editHoursSaturday')?.value || siteContent.company.hours.saturday;
    siteContent.company.hours.sunday = document.getElementById('editHoursSunday')?.value || siteContent.company.hours.sunday;
    
    // Update hero
    siteContent.hero.title = document.getElementById('editHeroTitle')?.value || siteContent.hero.title;
    siteContent.hero.subtitle = document.getElementById('editHeroSubtitle')?.value || siteContent.hero.subtitle;
    
    // Update social
    siteContent.social.facebook = document.getElementById('editFacebook')?.value || siteContent.social.facebook;
    siteContent.social.linkedin = document.getElementById('editLinkedin')?.value || siteContent.social.linkedin;
    siteContent.social.twitter = document.getElementById('editTwitter')?.value || siteContent.social.twitter;
    
    saveSiteContent();
    alert('Changes saved successfully! Refresh the page to see updates.');
    closeAdminPanel();
}

// Initialize admin functionality
document.addEventListener('DOMContentLoaded', function() {
    loadSiteContent();
    
    // Add admin button to footer (hidden by default, press Ctrl+Shift+A to show)
    const adminButton = document.createElement('button');
    adminButton.id = 'adminAccessBtn';
    adminButton.textContent = '⚙️';
    adminButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        display: none;
    `;
    adminButton.onclick = function() {
        if (isAdminLoggedIn()) {
            showAdminPanel();
        } else {
            showAdminLogin();
        }
    };
    document.body.appendChild(adminButton);
    
    // Show admin button with keyboard shortcut
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            adminButton.style.display = adminButton.style.display === 'none' ? 'block' : 'none';
        }
    });
});

// CSS for admin tabs
const adminStyles = document.createElement('style');
adminStyles.textContent = `
    .admin-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        border-bottom: 2px solid #e2e8f0;
        padding-bottom: 10px;
    }
    .admin-tab {
        padding: 10px 20px;
        border: none;
        background: none;
        cursor: pointer;
        font-weight: 600;
        color: var(--text-light);
        border-radius: 6px;
        transition: all 0.3s;
    }
    .admin-tab:hover {
        background: var(--bg-light);
    }
    .admin-tab.active {
        background: var(--primary-color);
        color: white;
    }
`;
document.head.appendChild(adminStyles);
