(function() {
    "use strict";

    const element = document.getElementById("icon");

    let addResponsiveClass = () => {
        console.log('addResponsiveClass');
        const navbar = document.getElementById("main-top-nav");
        const isResponsive = navbar.className.indexOf("responsive") > -1;

        isResponsive ? navbar.className = "top-nav" : navbar.className = "top-nav responsive";
    }

    element.addEventListener("click", addResponsiveClass);

}());