// Recently viewed products
let history = [];


// View Product
function viewProduct(name, price) {

    // Open modal
    document.getElementById("modal").style.display = "flex";

    document.getElementById("productName").textContent = name;

    document.getElementById("productPrice").textContent =
        "Price: ₹" + price;


    // Remove duplicate
    history = history.filter(function(product) {

        return product !== name;

    });


    // Add latest product at beginning
    history.unshift(name);


    // Maximum 5 products
    if (history.length > 5) {

        history.pop();

    }


    // Update UI
    displayHistory();
}


// Display Recently Viewed
function displayHistory() {

    const container =
        document.getElementById("recentlyViewed");


    // Empty container
    container.innerHTML = "";


    // Empty state
    if (history.length === 0) {

        container.innerHTML =
            '<div class="empty">No recently viewed products</div>';

        return;
    }


    // Create cards
    history.forEach(function(product) {

        const card =
            document.createElement("div");


        card.classList.add("recent-card");


        card.innerHTML = `
            <h3>${product}</h3>
            <p>Recently Viewed</p>
        `;


        container.appendChild(card);

    });
}


// Close Modal
function closeModal() {

    document.getElementById("modal").style.display = "none";
}


// Remove History
function clearHistory() {

    history = [];

    displayHistory();
}


// Show empty state when page loads
displayHistory();