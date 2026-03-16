// locomotive
function smoothscroll(){
    const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    lerp: 0.04,

  multiplier: 0.5,

 smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }

});
}


// Image hover animation
function animation() {
    let imgcontianer = document.querySelector('.imagecontianer')
    let elem_contianer = document.querySelector('.elemcontianer')

    elem_contianer.addEventListener("mouseenter", function () {
        imgcontianer.style.display = "block"
    })
    elem_contianer.addEventListener('mouseleave', function () {
        imgcontianer.style.display = "none"
    })

    let elems = document.querySelectorAll('.elem')
    elems.forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            let img = el.getAttribute('data-image')
            imgcontianer.style.backgroundImage = `url(${img})`
        })
    })
}


// Swiper
function swiper(){
    var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    pagination: { clickable: true },
});
}

// loader anamition
function pageloadeanmitation(){
    let loader= document.querySelector('.loader')
setTimeout(function(){
    loader.style.top='-100%'

},4000)
}



smoothscroll()
animation()
swiper()
pageloadeanmitation()