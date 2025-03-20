// === Mobile Menu ===
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navbar = document.querySelector('.navbar');

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

// === Image Upload ===
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('carImages');
const previewContainer = document.getElementById('imagePreview');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', handleFiles);

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    fileInput.files = files;
    handleFiles();
});

function handleFiles() {
    previewContainer.innerHTML = '';
    Array.from(fileInput.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('preview-image');
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}

// === Dynamic Specifications ===
document.querySelector('.add-spec-btn').addEventListener('click', () => {
    const specItem = document.createElement('div');
    specItem.className = 'spec-item';
    specItem.innerHTML = `
        <input type="text" placeholder="Specification">
        <input type="text" placeholder="Value">
    `;
    document.getElementById('specsList').appendChild(specItem);
});

// === Form Submission ===
document.getElementById('sellForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const specifications = {};
    Array.from(document.querySelectorAll('.spec-item')).forEach(item => {
        const inputs = item.querySelectorAll('input');
        if (inputs[0].value && inputs[1].value) {
            specifications[inputs[0].value] = inputs[1].value;
        }
    });

    const newCar = {
        name: document.getElementById('carModel').value,
        price: document.getElementById('price').value,
        image: previewContainer.firstChild ? .src || 'default-car.jpg',
        specs: Object.entries(specifications).map(([key, value]) => `${key}: ${value}`),
        contact: `${document.getElementById('sellerEmail').value} | ${document.getElementById('sellerPhone').value}`,
        details: {
            modelYear: document.getElementById('modelYear').value,
            importYear: document.getElementById('importYear').value,
            mileage: document.getElementById('mileage').value,
            description: document.getElementById('description').value
        }
    };

    let cars = JSON.parse(localStorage.getItem('cars')) || [];
    cars.push(newCar);
    localStorage.setItem('cars', JSON.stringify(cars));
    window.location.href = 'home.html';
});