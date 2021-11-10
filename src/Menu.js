function menuPage(){

    const content = document.getElementById("content");

    const contact = document.createElement("div");

    contact.innerHTML = `
    <div class = "menu-card">
    <h1>Menu</h1>
    <div class = "menu-card-item">
        <img src = "assests/food-img.png" style="width: 25%;">
        <div>
            <h3>Cheese Hamburger ___ 51/-</h3>
            <p>A delight for you and your tummy.</p>
        </div>
    </div>
    <br>
    <div class = "menu-card-item">
        <img src = "assests/food-img.png" style="width: 25%;">
        <div>
            <h3>Cheese Hamburger ___ 51/-</h3>
            <p>A delight for you and your tummy.</p>
        </div>
    </div>
    <br>
    <div class = "menu-card-item">
        <img src = "assests/food-img.png" style="width: 25%;">
        <div>
            <h3>Cheese Hamburger ___ 51/-</h3>
            <p>A delight for you and your tummy.</p>
        </div>
    </div>
    <br>
    <div class = "menu-card-item">
        <img src = "assests/food-img.png" style="width: 25%;">
        <div>
            <h3>Cheese Hamburger ___ 51/-</h3>
            <p>A delight for you and your tummy.</p>
        </div>
    </div>
    <br>
    <div class = "menu-card-item">
        <img src = "assests/food-img.png" style="width: 25%;">
        <div>
            <h3>Cheese Hamburger ___ 51/-</h3>
            <p>A delight for you and your tummy.</p>
        </div>
    </div>
</div>
    `;

    content.append(contact);


}

export { menuPage };