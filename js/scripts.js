const homebtn = document.getElementById("home")
const portfolio = document.getElementById("portfolio");
const contactbtn = document.getElementById("contact");
const aboutbtn = document.getElementById("about");
const backbtn = document.getElementById("back")

function port() {
    homebtn.classList.add("hidden");
    portfolio.classList.remove("hidden");
    backbtn.classList.remove("hidden");
};

function about() {
    homebtn.classList.add("hidden");
    aboutbtn.classList.remove("hidden");
    backbtn.classList.remove("hidden");
};

function contact() {
    homebtn.classList.add("hidden");
    contactbtn.classList.remove("hidden");
    backbtn.classList.remove("hidden");
};

function home() {
    if(homebtn.matches('.hidden')) {
        homebtn.classList.remove("hidden");
        
        backbtn.classList.add("hidden");
        portfolio.classList.add("hidden");
        contactbtn.classList.add("hidden");
        aboutbtn.classList.add("hidden");
    } else {
        
    }
};