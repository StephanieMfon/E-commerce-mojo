

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
  setTimeout(changeSlide,3000);
  
}
changeSlide();


// practicing countdown feature delete when done

const countdown = () => {
  const countDate = new Date("January 30, 2023 00:00:00").getTime();
  console.log(countDate)
  // console.log(countDate)
  // we can use the get time method to convert it milisecond 
  // the logic is getting the difference between the future and now and subtrancting it to get our countdown date 

  const now = new Date().getTime();
console.log(now)
  // console.log(now)
  // the new date constructor by itself will always get our current time

  // to get the difference

  const gap = countDate - now;
  console.log(gap)
  // now we figure out how time works

  const second = 1000
  const minuite = second * 60
  const hour = minuite  * 60
  const day = hour * 24

// now we calculate from the gap how many days are there

const textDay = Math.floor(gap / day)
const textHour = Math.floor(gap % day / hour)
const textMunuite = Math.floor(gap % hour / minuite)
const textSecond = Math.floor(gap % minuite / second)

document.querySelector('.days').innerText = textDay
document.querySelector('.hours').innerText = textHour
document.querySelector('.minuites').innerText = textMunuite
document.querySelector('.seconds').innerText = textSecond

}
setInterval(countdown, 1000)
