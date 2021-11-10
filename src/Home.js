function homePage(){

    const home = document.createElement("div");

    home.innerHTML = `
    <div class = "home-card">
    <img src = "assests/home.png" style="width: 100%;">
       </div>`;

    const content = document.getElementById("content");

    content.append(home);


    
}

export { homePage };