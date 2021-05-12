const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click',function(){
    
    if(nav.classList.contains('duplicate-ul')){
        nav.classList.remove('duplicate-ul');
    }
    else
    {
        nav.classList.add('duplicate-ul');
    }
})

var signbtn = document.querySelector('#sign');
function myFunction(x) {
  if (x.matches) { // If media query matches
    signbtn.textContent = "Sign up your team";
  }
  else
    signbtn.textContent = "Sign up your team";
}

var x = window.matchMedia("(min-width: 925px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

