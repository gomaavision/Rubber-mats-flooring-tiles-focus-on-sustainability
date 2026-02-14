window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".card");
    elements.forEach(function(el){
        let position = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;

        if(position < screenPosition){
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
