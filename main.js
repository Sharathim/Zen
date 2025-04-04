

// Dog Care Products Data
const products = [
    { id: 1, name: "GOKU THE ANIME FATHER", price: "₹100", img: "./goku.jpg" },
    { id: 2, name: "MONKEY D LUFFY", price: "₹100", img: "./luffy.jpg" },
    { id: 3, name: "NARUTO UZUMAKI", price: "₹100", img: "./naruto.jpg" },
    { id: 4, name: "ICHIGO KUROSAKI", price: "₹100", img: "./ichigo.jpg" },
    { id: 5, name: "SATORU GOJO", price: "₹100", img: "./gojo.jpg" },
    { id: 6, name: "RYOMEN SUKUNA", price: "₹100", img: "./sukuna.jpg" },
    { id: 7, name: "EREN YEAGER", price: "₹100", img: "./eren.jpg" },
    { id: 8, name: "SAITAMA", price: "₹100", img: "./saitama.jpg" }


    
    
];

// Display Products
function displayProducts() {
    const container = document.getElementById("productsContainer");
    container.innerHTML = "";
    products.forEach(product => {
        const card = `
            <div class="col-md-3 mb-4">
                <div class="card shadow">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-custom" onclick="buyItem('${product.name}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function buyItem(itemName) {
    alert(`Thank you for buying ${itemName}! 🎉`);
}

// Show Thank You Alert & Reset Form
function showThankYou(event) {
    event.preventDefault();
    alert("Thank you for contacting us! ");
    document.querySelector("form").reset();
}

// Show Sections Dynamically
function showSection(section) {
    ["landing", "products", "about", "contact"].forEach(id => document.getElementById(id).classList.add("d-none"));
    document.getElementById(section).classList.remove("d-none");
    if (section === "products") displayProducts();
}

document.addEventListener("DOMContentLoaded", () => showSection('landing'));