let btn = document.querySelector(".m-burger");
let nav = document.querySelector(" .nav-bar");

btn.addEventListener('click', function () {
    if (nav.style.height != "300px") {
        nav.style.height = "300px";
        nav.style.margin = "0";
    }
    else {
        nav.style.height = "0";
        nav.style.margin = "0";
    }
});

