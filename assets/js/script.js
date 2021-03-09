const parallax = document.getElementById("home");

window.addEventListener("scroll", function(){
    //Parallax Scrolling for Main Section
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";

    //Navbar Scroll
    let navLinks = document.querySelectorAll(".navbar-link");
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        if(
            section.offsetTop-90 <= fromTop &&
            section.offsetTop-90 + section.offsetHeight > fromTop
        ) {
            link.parentElement.classList.add("active");
        } 
        else {
            link.parentElement.classList.remove("active");
        }
    })

})

//Contact Form
let contactform = {
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: ""
};

let formElement = document.forms.ContactForm;
let submitBtn = document.getElementById('form-submit');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    let formData = new FormData(formElement);
    contactform.name = formData.get('name');
    contactform.email = formData.get('email');
    contactform.mobile = formData.get('mobilenumber');
    contactform.company = formData.get('company');
    contactform.message = formData.get('message');

    alert(`
        Thank you for sending a message to MENA Group.
        We will reach out to you soon.
    `);
})