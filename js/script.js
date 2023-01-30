let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

function first()
 {
    document.getElementById("one").style.color = "orange"
 }
 function second()
 {
    document.getElementById("one").style.color = "orange"
    document.getElementById("two").style.color = "orange"
 }
 function third()
 {
    document.getElementById("one").style.color = "orange"
    document.getElementById("two").style.color = "orange"
    document.getElementById("three").style.color = "orange"
 }
 function fourth()
 {
    document.getElementById("one").style.color = "orange"
    document.getElementById("two").style.color = "orange"
    document.getElementById("three").style.color = "orange"
    document.getElementById("four").style.color = "orange"
 }
 function fifth()
 {
    document.getElementById("one").style.color = "orange"
    document.getElementById("two").style.color = "orange"
    document.getElementById("three").style.color = "orange"
    document.getElementById("four").style.color = "orange"
    document.getElementById("five").style.color = "orange"
    alert("Thank You !!")
 } 






