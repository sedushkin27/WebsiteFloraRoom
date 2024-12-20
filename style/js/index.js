
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.style.top = "-100px";
        } else {
            header.style.top = "0";
        }
        
        const targetSection = document.querySelector(".headline");
        const sectionPosition = targetSection.getBoundingClientRect().top;
        
        if (sectionPosition < 0) {
            header.classList.add("scrolled"); 
        } else {
            header.classList.remove("scrolled"); 
        }
        
        lastScroll = currentScroll;
    });
});

const removeAllActive = (element) => {
    if (!element.classList.contains('_active')) {
        const allActive = document.querySelectorAll('._active');
        if (allActive.length > 0){
            allActive.forEach(element => {
                element.classList.toggle('_active');
            });
        }
    }
}

const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const dropMenu = document.querySelector('.drop-menu');
    iconMenu.addEventListener('click', (e) => {
        removeAllActive(dropMenu)
        iconMenu.classList.toggle('_active');
        dropMenu.classList.toggle('_active');
    })
}

const cartButton = document.querySelector('.cart');
if (cartButton) {
    const cartMenu = document.querySelector('.cart-form-in-header');
    cartButton.addEventListener('click', (e) => {
        removeAllActive(cartMenu);
        cartMenu.classList.toggle('_active');
    })
}

const loginButtonInHeader = document.querySelector('.button-login-header');
if (loginButtonInHeader) {
    const loginForm = document.querySelector('.login-form-in-header');
    loginButtonInHeader.addEventListener('click', (e) => {
        removeAllActive(loginForm);
        loginForm.classList.toggle('_active');
    })
}

const registrionLinks = document.querySelectorAll('.registration-link');
if (registrionLinks.length > 0) {
    registrionForm = document.querySelector('.registration-form-in-header');
    registrionLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            removeAllActive(registrionForm);
            registrionForm.classList.toggle('_active');
            e.preventDefault();
        });
    });
}

const loginLinks = document.querySelectorAll('.login-link');
if (loginLinks.length > 0) {
    loginForm = document.querySelector('.login-form-in-header');
    loginLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            removeAllActive(loginForm);
            loginForm.classList.toggle('_active');
            e.preventDefault();
        })
    })
}

const forgotPasswordLink = document.querySelector('.forgot-password-link');
if (forgotPasswordLink) {
    forgotPasswordForm = document.querySelector('.forgot-password-form-in-header');
    forgotPasswordLink.addEventListener('click', (e) => {
        removeAllActive(forgotPasswordForm);
        forgotPasswordForm.classList.toggle('_active');
        e.preventDefault();
    })
}

const buttonFilter = document.querySelector('.button-filter-mobile');
if (buttonFilter) {
    dropMenuFilter = document.querySelector('.filter');
    buttonFilter.addEventListener('click', (e) => {
        removeAllActive(buttonFilter);
        buttonFilter.classList.toggle('_active');
        dropMenuFilter.classList.toggle('_active');
    })
}

const buttonOrderFilter = document.querySelector('.button-order');
if (buttonOrderFilter) {
    dropMenuOrderFilter = document.querySelector('.filter-order');
    buttonOrderFilter.addEventListener('click', (e) => {
        removeAllActive(dropMenuOrderFilter);
        buttonOrderFilter.classList.toggle('_active');
        dropMenuOrderFilter.classList.toggle('_active');
    })
}

const buttonTypeFilter = document.querySelector('.button-type');
if (buttonTypeFilter) {
    dropMenuTypeFilter = document.querySelector('.filter-type');
    buttonTypeFilter.addEventListener('click', (e) => {
        removeAllActive(dropMenuTypeFilter);
        buttonTypeFilter.classList.toggle('_active');
        dropMenuTypeFilter.classList.toggle('_active');
    })
}

const buttonPriceFilter = document.querySelector('.button-price');
if (buttonPriceFilter) {
    dropMenuPriceFilter = document.querySelector('.filter-price');
    buttonPriceFilter.addEventListener('click', (e) => {
        removeAllActive(dropMenuPriceFilter);
        buttonPriceFilter.classList.toggle('_active');
        dropMenuPriceFilter.classList.toggle('_active');
    })
}