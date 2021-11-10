function contactPage(){

    const content = document.getElementById("content");

    const contact = document.createElement("div");

    contact.innerHTML = `<card class = "card">
    <div class = "contact-us">Contact Us</div>
    <hr>
    <br><br>
    <div class = "address">
        <i class = "fa fa-car"></i> E - 117, Trent Street 
        <br>
        Paul's Downtowm, New York
        <br><br><br>
        <i class = "fa fa-phone"></i> + 1- 9878673863
        <br><br><br>
        <i class = "fa fa-envelope-o"></i> springler.your.kitchen@springler.com
        <br><br><br>
        <i class = "fa fa-external-link"></i> springler-your-kitchen.com
    </div>
</card>`;

    content.append(contact);


}

export { contactPage };