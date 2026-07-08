/*=========================================================
    PORTFOLIO V2
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeLoader();

    initializeTyping();

    initializeProgressBar();

    initializeNavbar();

    initializeMobileMenu();

    initializeScrollTop();

    initializeRevealAnimation();

    initializeCounters();

    initializeTheme();



});

/*=========================================================
    LOADER
=========================================================*/

function initializeLoader(){

    const loader = document.getElementById("loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        loader.style.transition="opacity .7s ease";

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },700);

    });

}

/*=========================================================
    TYPING EFFECT
=========================================================*/

function initializeTyping(){

    const text=document.getElementById("typing");

    if(!text) return;

    const words=[

        "Data Analyst",

        "Data Engineer",

        "AI/ML Engineer"

    ];

    let wordIndex=0;

    let charIndex=0;

    let deleting=false;

    function type(){

        const current=words[wordIndex];

        if(!deleting){

            text.textContent=current.substring(0,charIndex++);

            if(charIndex>current.length){

                deleting=true;

                setTimeout(type,1600);

                return;

            }

        }

        else{

            text.textContent=current.substring(0,charIndex--);

            if(charIndex<0){

                deleting=false;

                wordIndex=(wordIndex+1)%words.length;

            }

        }

        setTimeout(type,deleting?45:90);

    }

    type();

}

/*=========================================================
    PROGRESS BAR
=========================================================*/

function initializeProgressBar(){

    const progress=document.getElementById("progress-bar");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const current=window.scrollY;

        const width=(current/total)*100;

        progress.style.width=width+"%";

    });

}

/*=========================================================
    NAVBAR EFFECT
=========================================================*/

function initializeNavbar(){

    const navbar=document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>70){

            navbar.style.background="rgba(5,8,22,.92)";

            navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

        }

        else{

            navbar.style.background="rgba(12,18,35,.55)";

            navbar.style.boxShadow="none";

        }

    });

}

/*=========================================================
    MOBILE MENU
=========================================================*/

function initializeMobileMenu(){

    const menu=document.querySelector(".menu-btn");

    const links=document.querySelector(".nav-links");

    if(!menu || !links) return;

    menu.addEventListener("click",()=>{

        links.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link=>{

        link.addEventListener("click",()=>{

            links.classList.remove("active");

        });

    });

}

/*=========================================================
    SCROLL TOP
=========================================================*/

function initializeScrollTop(){

    const button=document.getElementById("scrollTop");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }

        else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*=========================================================
    SCROLL REVEAL
=========================================================*/

function initializeRevealAnimation(){

    const elements=document.querySelectorAll(

        ".section-title,.project-card,.skill-box,.detail-card,.timeline-item,.certificate-card,.contact-box,.resume-card,.stat-card"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elements.forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

}

/*=========================================================
    COUNTER ANIMATION
=========================================================*/

function initializeCounters(){

    const counters=document.querySelectorAll(".counter");

    if(counters.length===0) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                const counter=entry.target;

                const target=+counter.dataset.target;

                let current=0;

                const increment=target/80;

                const update=()=>{

                    current+=increment;

                    if(current<target){

                        counter.innerText=Math.ceil(current);

                        requestAnimationFrame(update);

                    }

                    else{

                        counter.innerText=target;

                    }

                };

                update();

                observer.unobserve(counter);

            }

        });

    });

    counters.forEach(counter=>observer.observe(counter));

}

/*=========================================================
    ACTIVE NAVIGATION
=========================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*=========================================================
    SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================================
    THEME TOGGLE
=========================================================*/

function initializeTheme(){

    const button=document.getElementById("theme-btn");

    if(!button) return;

    const saved=localStorage.getItem("theme");

    if(saved==="light"){

        document.body.classList.add("light-theme");

        button.innerHTML='<i class="ri-sun-line"></i>';

    }

    button.addEventListener("click",()=>{

        document.body.classList.toggle("light-theme");

        if(document.body.classList.contains("light-theme")){

            localStorage.setItem("theme","light");

            button.innerHTML='<i class="ri-sun-line"></i>';

        }

        else{

            localStorage.setItem("theme","dark");

            button.innerHTML='<i class="ri-moon-line"></i>';

        }

    });

}

/*=========================================
    SCROLL INDICATOR
=========================================*/

const scrollIndicator = document.querySelector(".scroll-down");

if (scrollIndicator) {

    scrollIndicator.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector("#about").scrollIntoView({

            behavior: "smooth"

        });

    });

}


