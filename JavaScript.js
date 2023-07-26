/*SHOW MENU*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*CHANGE BGC HEADER*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*BMI calculator*/
const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

const calculateBMI = (e) => {
  e.preventDefault();

  if (calculateCm.value === "" || calculateKg.value === "") {
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    calculateMessage.textContent = "Fill in the Height and Weight";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const BMI = Math.round(kg / (cm * cm));

    if (BMI < 18.5) {
      calculateMessage.textContent = `Your BMI is ${BMI} and you are too skinny ❌`;
      calculateMessage.classList.add("color-green");
    }
    if (BMI < 25) {
      calculateMessage.textContent = `Your BMI is ${BMI} and you are healthy ✔`;
      calculateMessage.classList.add("color-green");
    }
    if (BMI > 25) {
      calculateMessage.textContent = `Your BMI is ${BMI} and you are overweight ❌`;
      calculateMessage.classList.add("color-green");
    }

    calculateCm.value = "";
    calculateKg.value = "";

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBMI);

/*EMAIL*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");
const contactUser = document.getElementById("contact-user");

const sendEmail = (e) => {
  e.preventDefault();

  if (contactUser.value === "") {
    contactMessage.classList.remove("coloer-green");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "You must enter your email";

    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_af6wcni",
        "template_i88pept",
        "contact-form",
        "o6ojfI7HSq8s0OmkH"
      )
      .then(
        () => {
          contactMessage.classList.add("color-green");
          contactMessage.textContent = "You registered successfully 👌";
        },
        (error) => {
          alert("OPS! SOMETHING HAS FAILED...", error);
        }
      );

    setTimeout(() => {
      contactMessage.textContent = "";
    }, 3000);

    contactUser.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);

/*SCROLL ACTIVE*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionID = current.getAttribute("id");

    const sectionsClass = document.querySelector(
      `.nav__menu a[href*= ` + sectionID + "]"
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*SCROLL UP ARROW*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*SCROLL REVEAL*/
const sr = ScrollReveal({
  origin: "top",
  distance: "6rem",
  duration: 1500,
  delay: 400,
});

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { interval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.choose__content, .calculate__img`, { origin: "right" });
