// ============tab section ================
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

function openAbout() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#fff";
  btn2.style.color = "#333";
  btn3.style.color = "#333";
  btn1.style.background = "#7635f5";
  btn2.style.background = "none";
  btn3.style.background = "none";
}
function openSkill() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  btn1.style.color = "#333";
  btn2.style.color = "#fff";
  btn3.style.color = "#333";
  btn1.style.background = "none";
  btn2.style.background = "#7635f5";
  btn3.style.background = "none";

}
function openExp() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  btn1.style.color = "#333";
  btn2.style.color = "#333";
  btn3.style.color = "#fff";
  btn1.style.background = "none";
  btn2.style.background = "none";
  btn3.style.background = "#7635f5";
}

// ============ type js code =============

    var typed = new Typed('.element', {
  strings: ['Designer', 'Developer','Laravel Expert',],
  smartBackspace: true,
        typeSpeed:140,
        backSpeed:140,
        loop:true,
});

// counter js =============

let counters = document.querySelectorAll(".count");
let reload = document.getElementById("reload");

let time = 300;

reload.addEventListener("click", function () {
  
counters.forEach((counter) => {
  let updateCount = () => {
    let target = +counter.getAttribute("data-target");
    let count1 = +counter.innerText;

    let increment = target / time;

    if (count1 < target) {
      counter.innerText = Math.round(count1 + increment);
      setTimeout(updateCount, 1);
    } else {
      counter.inn = target;
    }
  };
  updateCount();
});

})

// ======= top see more button popup ==========

let seeBtn1 = document.getElementById("about-see-more-btn");
let seeBtn2 = document.getElementById("about-see-more-btn2");
let popUp = document.getElementById("popup");
let croseBtn = document.getElementById("croseButton");
let closeBtn = document.getElementById("footer-close");

seeBtn1.addEventListener("click", function () {
  popUp.classList.add("popup-active");
})
seeBtn2.addEventListener("click", function () {
  popUp.classList.add("popup-active");
})
croseBtn.addEventListener("click", function () {
  popUp.classList.remove("popup-active");
})
closeBtn.addEventListener("click", function () {
  popUp.classList.remove("popup-active");
})

// === read more button ===

// const parentContainer = document.querySelector(".feature-content");

// const parentContainer = document.getElementsByClassName("feature-content");


// parentContainer.addEventListener("click", event => {
//   const current = event.target;

//   const isReadMoreBtn = current.className.includes("card-btn");

//   if (!isReadMoreBtn) return;

//   const currentText = event.target.parentNode.querySelector(".read-more-text");

//   currentText.classList.toggle("read-more-text--show");

//   current.textContent = current.textContent.includes("Read More") ? "Read Less.." : "Read Less..";
// })


// ============= mobail menu code ++++++++++++//

let bars = document.querySelector(".humberger");
// let IsMenuOpen = false;

bars.addEventListener("click", function () {
  let menus = document.querySelector(".menu");
  // menus.classList.toggle("click");
  // menus.style.opacity = "1";
    // menus.style.display = 'block';
  menus.style.zIndex = '0';
  
});
let cancelBars = document.querySelector(".cancel");

cancelBars.addEventListener("click", function () {
  let menus = document.querySelector(".menu");
  // menus.style.opacity = "0";
  menus.style.display = 'none';
})

// Portfolio section
$(document).ready(function () {
  
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  })
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");

  // **************** Sticky Section -**********

let sticky = document.getElementById("nav-bar");
let linkColor1 = document.getElementById("link-color1");
let linkColor2 = document.getElementById("link-color2");
let linkColor3 = document.getElementById("link-color3");
let linkColor4 = document.getElementById("link-color4");
let linkColor5 = document.getElementById("link-color5");
let linkColor6 = document.getElementById("link-color6");

window.addEventListener("scroll", function () {
  
  if (this.window.pageYOffset >= 62) {
    sticky.classList.add("sticky");
    linkColorAdd();
  } else {
    sticky.classList.remove("sticky")
    linkColorRemov();
  }
});
function linkColorAdd() {
  
    linkColor1.classList.add("change-color");
    linkColor2.classList.add("change-color");
    linkColor3.classList.add("change-color");
    linkColor4.classList.add("change-color");
    linkColor5.classList.add("change-color");
    linkColor6.classList.add("change-color");
};

function linkColorRemov() {
  
    linkColor1.classList.remove("change-color");
    linkColor2.classList.remove("change-color");
    linkColor3.classList.remove("change-color");
    linkColor4.classList.remove("change-color");
    linkColor5.classList.remove("change-color");
    linkColor6.classList.remove("change-color");
};
