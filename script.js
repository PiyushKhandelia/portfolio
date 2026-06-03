/* ===================================
   MOBILE MENU
=================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");
    });
}

/* ===================================
   TYPING EFFECT
=================================== */

const typingElement =
document.getElementById("typing");

const roles = [

    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "PHP Developer",
    "Problem Solver",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typingElement) return;

    const currentRole =
    roles[roleIndex];

    if(!deleting){

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(
            charIndex ===
            currentRole.length
        ){

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }else{

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            roleIndex++;

            if(
                roleIndex >=
                roles.length
            ){

                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 110
    );
}

typeEffect();

/* ===================================
   PRELOADER
=================================== */

window.addEventListener(
    "load",
    ()=>{

        const preloader =
        document.querySelector(
            ".preloader"
        );

        if(preloader){

            preloader.classList.add(
                "hide-preloader"
            );
        }
    }
);

/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const header =
document.querySelector("header");

window.addEventListener(
    "scroll",
    ()=>{

        if(!header) return;

        if(window.scrollY > 50){

            header.style.background =
            "rgba(5,8,22,0.95)";

            header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

        }else{

            header.style.background =
            "rgba(5,8,22,0.6)";

            header.style.boxShadow =
            "none";
        }
    }
);

/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements =
document.querySelectorAll(
`
.glass-card,
.project-card,
.timeline-item,
.education-card
`
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add(
            "show"
        );
    }
});

},
{
    threshold:.15
}

);

revealElements.forEach(el=>{

    observer.observe(el);
});

/* ===================================
   ACTIVE NAVIGATION
=================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let currentSection = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(

scrollY >=
sectionTop - 150

){

currentSection =
section.getAttribute("id");
}

});

navItems.forEach(link=>{

link.classList.remove(
"active"
);

if(

link.getAttribute("href")
=== `#${currentSection}`

){

link.classList.add(
"active"
);

}
});

});

/* ===================================
   SMOOTH SCROLL
=================================== */

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute(
"href"
)
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});
}

navLinks.classList.remove(
"active"
);

});
});

/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll(
".counter"
);

const counterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.dataset.target;

let count = 0;

const increment =
target / 120;

const updateCounter = ()=>{

if(count < target){

count += increment;

counter.innerText =
Math.ceil(count);

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText =
target;
}

};

updateCounter();

counterObserver.unobserve(
counter
);

}

});

},
{
threshold:.5
}

);

counters.forEach(counter=>{

counterObserver.observe(
counter
);

});

/* ===================================
   CURSOR GLOW
=================================== */

const cursorGlow =
document.querySelector(
".cursor-glow"
);

if(cursorGlow){

document.addEventListener(
"mousemove",
(e)=>{

cursorGlow.style.left =
e.clientX + "px";

cursorGlow.style.top =
e.clientY + "px";

});
}

/* ===================================
   HERO PARALLAX
=================================== */

const heroImage =
document.querySelector(
".hero-image"
);

window.addEventListener(
"mousemove",
(e)=>{

if(!heroImage) return;

const x =
(
e.clientX /
window.innerWidth
) * 20;

const y =
(
e.clientY /
window.innerHeight
) * 20;

heroImage.style.transform =
`translate(${x}px,${y}px)`;

});

/* ===================================
   PROJECT CARD HOVER
=================================== */

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
e=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX -
rect.left;

const y =
e.clientY -
rect.top;

card.style.setProperty(
"--x",
`${x}px`
);

card.style.setProperty(
"--y",
`${y}px`
);

});
});

/* ===================================
   CONTACT FORM
=================================== */

const contactForm = document.querySelector(".contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.innerHTML = "⚠ Please fill in all required fields.";
            formMessage.className = "error";
            formMessage.style.display = "block";
            return;
        }

        try {
            const body =
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;

            window.location.href =
                `mailto:yourmail@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            formMessage.innerHTML =
                "✅ Thank you! Your email application has been opened with your message.";
            formMessage.className = "success";
            formMessage.style.display = "block";

            contactForm.reset();

        } catch (error) {
            formMessage.innerHTML =
                "❌ Sorry! Something went wrong. Please try again later.";
            formMessage.className = "error";
            formMessage.style.display = "block";

            console.error(error);
        }
    });
}

/* ===================================
   SCROLL TO TOP BUTTON
=================================== */

const scrollTopBtn =
document.createElement("button");

scrollTopBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

scrollTopBtn.classList.add(
"scroll-top-btn"
);

document.body.appendChild(
scrollTopBtn
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 500){

scrollTopBtn.style.opacity =
"1";

scrollTopBtn.style.visibility =
"visible";

}else{

scrollTopBtn.style.opacity =
"0";

scrollTopBtn.style.visibility =
"hidden";
}

});

scrollTopBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* ===================================
   CONSOLE MESSAGE
=================================== */

console.log(
"%cWelcome to Piyush Khandelia's Portfolio 🚀",
"color:#00d4ff;font-size:16px;"
);

console.log(
"%cWeb Developer | Full Stack Developer",
"color:#8a2be2;font-size:14px;"
);