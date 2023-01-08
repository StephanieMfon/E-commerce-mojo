

const womensMenu = document.getElementById('women')
const mega = document.getElementById('mega')
// const showMenu  =()=>{
//   if(mega.style.display === "none"){
//     mega.style.display = "block"
//   }else{
//     mega.style.display = "none"
//   }
// }

// womensMenu.addEventListener("mouseover",
//     showMenu
// )

window.addEventListener('load', function(){
    mega.style.display = 'none';
      womensMenu.addEventListener('mouseover', function(){
        mega.style.display = 'block';
        // windows.style.position = 'fixed';
      });

      mega.addEventListener('mouseenter', function(){
        mega.style.display='block';
      }
      )
      womensMenu.addEventListener('mouseleave', function(){
        mega.style.display = 'none';
      })
      mega.addEventListener('mouseleave', function(){
        mega.style.display = 'none';
      })
})


// copy menu for mobile


// show mobile menu

const menuButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
 const addclass= document.querySelector('.site');
  
menuButton.addEventListener('click', function(){
  console.log('steph')
  addclass.classList.toggle('showmenu')
})

closeButton.addEventListener('click' ,function(){
  addclass.classList.remove('showmenu')
})
console.log(addclass)



function copyMenu(){
  // copy inside dpt.cat to departments
  const dptCategory= document.querySelector('.dpt-cat')
  const dptPlace = document.querySelector('.departments')
  dptPlace.innerHTML = dptCategory.innerHTML;
  
  // copy inside nav to nav
  const mainNav = document.querySelector('.header-nav nav')
  const navPlace = document.querySelector('.off-canvas nav')
  navPlace.innerHTML = mainNav.innerHTML
  
  // copy header-top wrapper to thetopnav
  
  const topNav = document.querySelector('.header-top')
  const topPlace = document.querySelector('.off-canvas  .thetop-nav')
  topPlace.innerHTML= topNav.innerHTML
  }
  copyMenu()


  // show sub menu on mobile
const subMenu = document.querySelectorAll('.has-child .icon-small')
subMenu.forEach((menu => menu.addEventListener('click', toggle)))

function toggle(e){
  e.preventDefault();
  subMenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null )
  if (this.closest('.has-child').classList != 'expand');
   this.closest('.has-child').classList.toggle('expand')
}

// ======automatic slideshow
let index = 0;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function changeSlide(){

  number = slides.length - 1

  if(index < 0){
    index = number;
  }
  
  if(index > number){
    index = 0;
  }
  
  for(let slide of slides){
    slide.style.display = "none";
  }
  for(let dot of dots){
    dot.classList.remove("active");
  }
  slides[index].style.display= "block";
  dots[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,4000);
  
}

changeSlide();


