// handel abut me section

let btnAbut = document.querySelectorAll(".abut-me .hire-me .btn")
let detail = document.querySelectorAll(".details .detail")

btnAbut.forEach((btn, index)=>{
    btn.addEventListener("click", ()=>{
        
        
        btnAbut.forEach((btn)=>{
            btn.classList.remove("active")
        })
        btn.classList.add("active")
        
        detail.forEach((sec)=>{

            sec.classList.remove("active")
            detail[index].classList.add("active")
        })
    })
})

const arrRight = document.querySelector(".projects .arr1")
const arrLeft = document.querySelector(".projects .arr2")

let index = 0

const activProject = ()=>{
    let imgSlide = document.querySelector(".projects .img-box")
    let projectInfo = document.querySelectorAll(".projects .project-info")

    imgSlide.style.transform= `translateX(calc(${index * -100}% - ${index * 2}rem))`
    projectInfo.forEach((el)=>{
        el.classList.remove("active")
    })
    projectInfo[index].classList.add("active")
}
arrRight.addEventListener("click", ()=>{
    if( index < 4){
        index++
    }else{
        arrLeft.classList.add("active")
        index = 5
        arrRight.classList.remove("active")
    }
    activProject()
})
arrLeft.addEventListener("click", ()=>{
    if( index > 1){
        index--
        arrRight.classList.remove("active")
    }else{
        index = 0
        arrLeft.classList.add("active")
    }
    activProject()
})

// handel header icon and navbar
const menu = document.querySelector("header .menu")
const nav = document.querySelector("header ul")
const navLi = document.querySelectorAll("header ul li")

menu.addEventListener("click", ()=>{
    menu.classList.toggle("fa-x")
    nav.classList.toggle("active")
})
navLi.forEach((el)=>{
    el.addEventListener("click", ()=>{
        nav.classList.remove("active")
        menu.classList.toggle("fa-x")
    })
}) 

// start footer

let textFooter = document.querySelector("footer h5 span")
let currentYear = new Date().getFullYear();
    textFooter.innerHTML = currentYear;

// end footer

// start up button
function handlerScroll() {
    // const numStudentPosition = parentCount.getBoundingClientRect().top; 
    const windowHeight = window.innerHeight; 

    // if (numStudentPosition < windowHeight) {
    //     onReachTarget(); 
    //     window.removeEventListener('scroll', handlerScroll); 
    // }
}

window.addEventListener('scroll', handlerScroll);

let upButton = document.querySelector(".Up")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 300){
        upButton.style.display= "block"
    }else{
        upButton.style.display = "none"
    }
})

upButton.onclick=()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
// end up button