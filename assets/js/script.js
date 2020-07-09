
toggleNav();
function toggleNav() {
    let sidenav = document.querySelector("#sidenav");
    let hamburger = document.querySelector(".hamburger");
    let nav_links = document.querySelectorAll(".link");

    hamburger.addEventListener("click", () => {
        let styling = sidenav.style.transform;
        if (styling == "translate(-100%)") {
            sidenav.style.transform = "translate(0%)"
            hamburger.classList.add("lines");
        } else {
            sidenav.style.transform = "translate(-100%)";
            hamburger.classList.remove("lines");
        }
    })

    nav_links.forEach(link => {
        link.addEventListener("click", () => {
            sidenav.style.transform = "translate(-100%)";
            hamburger.classList.remove("lines");
    })
    });
   
}

const descriptions = ["Web Designer", "Web Developer","Python Programmer","Software Engineer(Jr)"];
const preps = document.querySelector("#preps");
const cursor = document.querySelector("#cursor");
let d_index = 0;
let w_index = 0;
let word = "";
function typer() {
    if(d_index < descriptions.length){
        word = descriptions[d_index];
        if(w_index < word.length){
            let letter = word.charAt(w_index);
            preps.innerHTML += letter;
            w_index++;
            setTimeout(typer, 150);
            cursor.classList.remove("blink")
        }else{
            setTimeout( eraser, 2000);
            cursor.classList.add("blink")
         
        }
         
    }else{
             d_index = 0;
             typer()
         }
        
    
   
}

function eraser() {
    if (d_index < descriptions.length) {
        if (w_index > 0) {
            cursor.classList.remove("blink")
            preps.innerHTML = word.substring(0,w_index-1);
            w_index--
            setTimeout(eraser, 100);
        }else{
            w_index=0
            d_index++
            setTimeout(typer,1000)
            cursor.classList.add("blink")
            
        }  
        
    }  
}



// Onscroll event for the top navbar
function onScrollChange() {
    let scrollHeight = 50;
    document.addEventListener("scroll", (e) => {
        
        if(window.scrollY > scrollHeight){
        document.querySelector(".top").style.background = "#000"
        document.querySelector(".top").style.boxShadow = "1px 1px 5px grey"
        
        }else{
            document.querySelector(".top").style.background = "transparent"
            document.querySelector(".top").style.boxShadow = "none"
        }
        
    })
    
}


function main() {
    typer()
    onScrollChange()
}
document.addEventListener("DOMContentLoaded", main);
