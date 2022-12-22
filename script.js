// WAIT CONTENT LOADING
document.addEventListener('DOMContentLoaded', () => {
    // GET BUTTON & FOOTER
    const btn = document.querySelector('button'),
        footer = document.querySelector('footer');

    // CALCULATE MAX HEIGHT OF DOCUMENT
    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, 
                                    document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    

    // SET SCROLL EVENT ON DOCUMENT
    document.addEventListener("scroll", () => {
        // CALCULATE SCROLLED DOCUMENT + SCROLLED BUTTON + BUTTON'S HEIGHT + FOOTER'S HEIGHT
        const total = document.documentElement.scrollTop + btn.getBoundingClientRect().top + (btn.offsetHeight / 2) + footer.offsetHeight;
        

        // COMPARE VALUES AND TOGGLE CLASS
        documentHeight < total ? btn.classList.add('red') : btn.classList.remove('red');
    });


    // SET CLICK EVENT ON BUTTON
    btn.addEventListener('click', () => {
        // CHECK BUTTON POSITION & PASS VALUE
        btn.classList.contains('red') ? goTo(0) : goTo(documentHeight);
    });
});


// CREATE SMOOTH SCROLL
function goTo(point) {
    window.scrollTo({
        top: point, 
        behavior: 'smooth'
    });
}
