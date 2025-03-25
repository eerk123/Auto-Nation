// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.querySelector('.navbar');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const carList = document.getElementById('car-list');
const authBtn = document.getElementById('authBtn');
const profileBtn = document.getElementById('profileBtn');

// Sample data + localStorage integration
let cars = JSON.parse(localStorage.getItem('cars')) || [{
        name: "Tesla Model S Plaid",
        price: "129,999",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
        specs: ["0-60mph: 1.99s", "396mi Range", "1,020hp"],
        contact: "sales@tesla.com"
    },
    {
        name: "Porsche 911 GT3",
        price: "179,999",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537",
        specs: ["4.0L Flat-6", "502hp", "6-speed Manual"],
        contact: "porsche@example.com"
    }
];

// Mobile Menu Toggle
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Render Cars Function
function renderCars(carsToRender = cars) {
    carList.innerHTML = '';

    if (carsToRender.length === 0) {
        carList.innerHTML = '<div class="no-results">Хайлтад тохирох үр дүн олдсонгүй</div>';
        return;
    }

    carList.innerHTML = carsToRender.map(car => `
        <div class="car-card">
            <div class="car-image" style="background-image: url(${car.image || 'default-car.jpg'})">
                <div class="car-price">₮${car.price}</div>
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <div class="specs">
                    ${car.specs.map(spec => `<span>${spec}</span>`).join('')}
                </div>
                <button onclick="showCarModal('${car.name}')">Дэлгэрэнгүй</button>
            </div>
        </div>
    `).join('');
    
    initObserver();
}

// Search Functionality
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.name.toLowerCase().includes(searchTerm) ||
        car.specs.some(spec => spec.toLowerCase().includes(searchTerm))
    );
    renderCars(filteredCars);
});

// Car Modal
function showCarModal(carName) {
    const car = cars.find(c => c.name === carName);
    const modal = document.getElementById('carModal');
    modal.style.display = 'flex';
    
    document.getElementById('carModalContent').innerHTML = `
        <h2>${car.name}</h2>
        <div class="car-image" style="background-image: url(${car.image || 'default-car.jpg'})"></div>
        <div class="specs">
            ${car.specs.map(spec => `<span>${spec}</span>`).join('')}
        </div>
        <p>Холбоо барих: ${car.contact}</p>
        <button>Санал өгөх</button>
    `;
}

// Modal Close
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('close')) {
            modal.style.display = 'none';
        }
    });
});

// Auth Simulation
authBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authBtn.style.display = 'none';
    profileBtn.style.display = 'block';
});

// Intersection Observer for animations
function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.car-card').forEach(card => {
        observer.observe(card);
    });
}

// Initial Render
renderCars();

// Refresh cars when returning from sell page
window.addEventListener('pageshow', () => {
    const updatedCars = JSON.parse(localStorage.getItem('cars')) || cars;
    if (updatedCars.length !== cars.length) {
        cars = updatedCars;
        renderCars();
    }
});