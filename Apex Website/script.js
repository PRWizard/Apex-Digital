// Services Data
const servicesData = [
    {
        id: 1,
        title: 'SEO',
        description: 'Boost your organic visibility with our comprehensive SEO strategies. We optimize your website structure, content, and backlinks to rank higher on search engines and drive qualified traffic to your business.'
    },
    {
        id: 2,
        title: 'SEM',
        description: 'Maximize your ROI with targeted Search Engine Marketing campaigns. Our experts create and manage paid search ads on Google and Bing, ensuring your budget is spent on high-intent customers.'
    },
    {
        id: 3,
        title: 'Social Media Marketing',
        description: 'Build and engage your community across all platforms. We create compelling content, manage campaigns, and grow your follower base to increase brand awareness and customer loyalty.'
    },
    {
        id: 4,
        title: 'Email Marketing',
        description: 'Connect with your audience through personalized email campaigns. We design, segment, and automate your email marketing to nurture leads and convert them into loyal customers.'
    },
    {
        id: 5,
        title: 'Google Ads',
        description: 'Dominate Google search results with expertly crafted Google Ads campaigns. We handle keyword research, ad creation, bidding strategies, and continuous optimization for maximum conversions.'
    },
    {
        id: 6,
        title: 'LinkedIn Ads',
        description: 'Reach decision-makers and professionals through LinkedIn advertising. We target B2B audiences with precision to generate quality leads and establish your brand as an industry leader.'
    }
];

// SVG Icons as inline SVG strings
const svgIcons = {
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="white"></path><circle cx="17.5" cy="6.5" r="1.5" fill="white"></circle></svg>'
};

// Contacts Data
const contactsData = [
    {
        label: 'WhatsApp',
        value: '+880 1570-248254',
        href: 'https://wa.me/8801570248254',
        icon: 'whatsapp'
    },
    {
        label: 'Email',
        value: 'apexdigital.impact@gmail.com',
        href: 'mailto:apexdigital.impact@gmail.com',
        icon: 'email'
    },
    {
        label: 'Phone',
        value: '+880 1570-248254',
        href: 'tel:+8801570248254',
        icon: 'phone'
    },
    {
        label: 'Facebook',
        value: 'Visit our page',
        href: 'https://www.facebook.com/profile.php?id=61570708285781',
        icon: 'facebook'
    },
    {
        label: 'Instagram',
        value: '@__apexdigital__',
        href: 'https://www.instagram.com/__apexdigital__/',
        icon: 'instagram'
    }
];

let expandedService = null;

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
    renderContacts();
    setupEventListeners();
});

// Render Services
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    servicesGrid.innerHTML = '';

    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-header">
                <h4 class="service-title">${service.title}</h4>
                <svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
            <p class="service-description">${service.description}</p>
            <p class="service-hint">Click to learn more</p>
        `;

        serviceCard.addEventListener('click', () => toggleService(serviceCard, service.id));
        servicesGrid.appendChild(serviceCard);
    });
}

// Toggle Service Expansion
function toggleService(element, serviceId) {
    const allCards = document.querySelectorAll('.service-card');
    
    if (expandedService === serviceId) {
        element.classList.remove('expanded');
        expandedService = null;
    } else {
        allCards.forEach(card => card.classList.remove('expanded'));
        element.classList.add('expanded');
        expandedService = serviceId;
    }
}

// Render Contacts
function renderContacts() {
    const contactsGrid = document.getElementById('contacts-grid');
    contactsGrid.innerHTML = '';

    contactsData.forEach(contact => {
        const contactCard = document.createElement('a');
        contactCard.href = contact.href;
        contactCard.target = '_blank';
        contactCard.rel = 'noopener noreferrer';
        contactCard.className = 'contact-card';
        contactCard.innerHTML = `
            <div class="contact-icon">
                ${svgIcons[contact.icon]}
            </div>
            <h4 class="contact-label">${contact.label}</h4>
            <p class="contact-value">${contact.value}</p>
        `;

        contactsGrid.appendChild(contactCard);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    const privacyBtn = document.getElementById('privacy-btn');
    const privacyModal = document.getElementById('privacy-modal');
    const modalClose = document.getElementById('modal-close');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    // Privacy Modal
    privacyBtn.addEventListener('click', () => {
        privacyModal.classList.add('active');
    });

    modalClose.addEventListener('click', () => {
        privacyModal.classList.remove('active');
    });

    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('active');
        }
    });

    // Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scroll to Services
function scrollToServices() {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const privacyModal = document.getElementById('privacy-modal');
        if (privacyModal.classList.contains('active')) {
            privacyModal.classList.remove('active');
        }
    }
});
