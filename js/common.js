const body = document.querySelector("body");

$('input[name=phone]').each(function (index, element) {
    $(element).mask("+7(999) 999-9999");
      });


$('#persdata').on('change', function() {
    if ($('#persdata').is(":checked")) {
        $('.calculator__wrapper-btn').removeAttr("disabled");
    } else {
        $('.calculator__wrapper-btn').attr("disabled", true);
    }
})

$('.rec__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
$('.license__slider').slick({
    infinite: false,
    speed: 300,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});


$('.catalog__tabs-item').on('click', function() {
    $('.catalog__tabs-item').removeClass('catalog__tabs-item--active');
    let btnAttr = $(this).attr('data-id');
    $(this).addClass('catalog__tabs-item--active');

    $('.catalog__content').removeClass('catalog__content--active');

    $('.catalog__content[data-id=' + btnAttr + ']').addClass('catalog__content--active');

})


//=========================slider banner======================//
// const bannerSlider = document.querySelector(".banner__slider");

// if (bannerSlider) {
//   new Swiper(bannerSlider, {
//     autoplay: {
//       delay: 5000,
//     },
//     loop: true,
//     navigation: {
//       nextEl: ".banner__slider-next",
//       prevEl: ".banner__slider-prev",
//     },
//     pagination: {
//       el: ".banner-pagination",
//       clickable: true,
//     },
//   });
// }

//=========================slider licenses======================//
const licensesSlider = document.querySelector(".licenses__wrapper-slider");

if (licensesSlider) {
    new Swiper(licensesSlider, {
        spaceBetween: 10,
        navigation: {
            nextEl: ".licenses__next",
            prevEl: ".licenses__prev",
        },
        breakpoints: {
            1000: {
                slidesPerView: 4,
            },
            850: {
                slidesPerView: 3,
            },
            400: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1.4,
            },
        },
    });
}

//=========================discount slider======================//
const discountSlider = document.querySelector(".discount__wrapper-slider");

if (discountSlider) {
    new Swiper(discountSlider, {
        slidesPerView: 1,
        allowTouchMove: false,
        pagination: {
            el: ".discount-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".discount__wrapper-btn",
        },
    });
}

// $('input[name="nameq"], input[name="phone"]').on('keyup', function(){

// })

//=========================check active checkbox discount======================//
const discountItem = document.querySelectorAll(
    ".discount__wrapper-slider .swiper-slide"
);

if (discountItem) {
    function checkActive(disInput, btn) {
        let i = 0;

        disInput.forEach((item) => {
            const input = item.querySelector("input");
            if (input.checked) {
                i += 1;
            }
            if (input.getAttribute("type") == "text" && input.value != "") {
                console.log(input.value)
                i += 1;

            }
        });
        try {
            i == 0 ? btn.classList.add("disabled") : btn.classList.remove("disabled");
            i = 0;
        } catch (error) {
            if ($('input[name="nameq"]').val().length > 2 && $('input[name="phoneq"]').val().length > 9) {
                $('.quiz').css('opacity', '1');
                $('.quiz').css('pointer-events', 'all')
            }
        }

    }

    // $('input[name="phoneq"]').mask("8(999) 999-9999");

    discountItem.forEach((item) => {
        const btn = item.querySelector(".discount__wrapper-btn"),
            disInput = item.querySelectorAll(".discount__wrapper-input");

        disInput.forEach((block) => {
            const input = block.querySelector("input");
            input.addEventListener("input", () => checkActive(disInput, btn));
        });
    });
}

//=========================tabs catalog======================//
const catalogWrapperTag = document.querySelectorAll(".catalog__wrapper-tag"),
    catalogWrapperBlock = document.querySelectorAll(".catalog__wrapper-block");

// catalogWrapperBlock[0].classList.add("active");
// catalogWrapperTag[0].classList.add("active");

function changeShowBlock(id) {
    catalogWrapperBlock.forEach((item, idx) => {
        catalogWrapperBlock[idx].classList.remove("active");
        catalogWrapperTag[idx].classList.remove("active");
    });

    catalogWrapperBlock[id].classList.add("active");
    catalogWrapperTag[id].classList.add("active");
}

catalogWrapperTag.forEach((btn, idx) => {
    btn.addEventListener("click", () => changeShowBlock(idx));
});

//=========================licenses gallery======================//
const licensesGallery = document.querySelectorAll(".lightgallery");
licensesGallery.forEach((item) => {
    lightGallery(item, {
        speed: 500,
    });
});

//=========================open modal order======================//
const btnOrder = document.querySelectorAll(".btn-order");

btnOrder.forEach((btn) => {
    btn.addEventListener("click", () => {
        body.classList.add("modal-order");

        const modalForm = document.querySelector(".modal-form");
        body.addEventListener("click", (e) => {
            if (e.target.contains(modalForm)) {
                body.classList.remove("modal-order");
            }
        });
    });
});

//=========================open modal form======================//
const btnForm = $('.btn-form').on('click', function() {
    body.classList.add("modal-form");

    const modal = document.querySelector(".modal-calc");
    body.addEventListener("click", (e) => {
        if (e.target.contains(modal)) {
            body.classList.remove("modal-form");
        }
    });
});

// btnForm.addEventListener("click", () => {

// });

//=========================btn change btn======================//
// const discountBtn = document.querySelectorAll(".discount__wrapper-btn");

// discountBtn.forEach((btn, idx) => {
//   if (idx === discountBtn.length - 1) {
//     // btn.textContent = "Отправить";
//     // btn.addEventListener("click", () => {
//     //   body.classList.add("modal-question-open");

//     //   const modal = document.querySelector(".modal-question");
//     //   body.addEventListener("click", (e) => {
//     //     if (e.target.contains(modal)) {
//     //       body.classList.remove("modal-question-open");
//     //     }
//     //   });
//     // });
//   }
// });

//=========================open modal code======================//
const btnCode = document.querySelector(".btn-code");

btnCode.addEventListener("click", () => {
    body.classList.remove("modal-question-open");
    body.classList.add("modal-open-code");

    const modal = document.querySelector(".modal-code");
    body.addEventListener("click", (e) => {
        if (e.target.contains(modal)) {
            // body.classList.remove("modal-open-code");
        }
    });
});

function code() {

    body.classList.add("modal-open-code");
}

//=========================open modal code======================//

/*

Маска для телефона раскоментить при необходимости
const maskPhone = document.querySelectorAll('input[type="tel"]');

maskPhone.forEach((tel) => {

  tel.addEventListener('input', function(e){
    if (tel.value.length == '1' && e.data == '8') {
      console.log(tel.value.length,e.data);
      var strTemp = '+{7}(000)000-00-00'
      IMask(tel, {

        prepare: function (appended, masked) {
          if (appended === '8' && masked.value === '') {
            strTemp = '{8}(000)000-00-00'
            return '';
          }
          return appended;
        },
        mask: strTemp,
      });
    }
    
  });
});
*/
//=========================close all modal======================//
const modalClose = document.querySelectorAll(".modal__close");

function hiddenModals() {
    body.classList.remove("modal-question-open");
    body.classList.remove("modal-form");
    body.classList.remove("modal-order");
    body.classList.remove("modal-succefull-open");
}

function ct() {

    body.classList.remove("modal-open-code");
    hiddenModals();
}

modalClose.forEach((btn) => {
    btn.addEventListener("click", () => ct());

});

//=========================send mailto======================//
const modalSubmit = document.querySelectorAll(".modal-submit");

function validateInput(modalForm) {
    const input = modalForm.querySelectorAll("input");
    let error = "";

    input.forEach((item) => {
        if (item.value == "") error++;
    });

    return error;
}

modalSubmit.forEach((modal) => {
    const modalForm = modal.querySelector("form"),
        modalFormBtn = modal.querySelector(".modals__form-btn");

    modalFormBtn.addEventListener("click", async(e) => {
        e.preventDefault();
        console.log('click on modalformbtn');

        let validate = validateInput(modalForm);

        if (validate == 0) {
            let formDate = new FormData(modalForm);
            let response = await fetch("sendmail.php", {
                method: "POST",
                body: formDate,
            });
            if (response.ok) {
                hiddenModals();
                body.classList.add("modal-succefull-open");
                const modal = document.querySelector(".modal-succeful");
                body.addEventListener("click", (e) => {
                    if (e.target.contains(modal)) {
                        body.classList.remove("modal-succefull-open");
                    }
                });
            }
        }
    });
});


// //=========================send mailto======================//
// const modalSubmit = document.querySelectorAll(".modal-submit");

// function validateInput(modalForm) {
//   const input = modalForm.querySelectorAll("input");
//   let error = "";

//   input.forEach((item) => {
//     if (item.value == "") error++;
//   });

//   return error;
// }

// modalSubmit.forEach((modal) => {
//   const modalForm = modal.querySelector("form"),
//     modalFormBtn = modal.querySelector(".modals__form-btn");

//   modalFormBtn.addEventListener("click", async (e) => {
//     e.preventDefault();

//     let validate = validateInput(modalForm);

//     if (validate == 0) {
//       let formDate = new FormData(modalForm);

//       let response = await fetch("sendmail.php", {
//         method: "POST",
//         body: formDate,
//       });
//       console.log(formDate)
//       console.log(response.text());
//       if (response.ok) {
//         hiddenModals();

//         body.classList.add("modal-succefull-open");
//         const modal = document.querySelector(".modal-succeful");
//         body.addEventListener("click", (e) => {
//           if (e.target.contains(modal)) {
//             body.classList.remove("modal-succefull-open");
//           }
//         });
//       }
//     }
//   });
// });


// $('.types__wrapper-item_title').on('click', function(e){
//     // e.preventDefault();
//     var link = $(this).attr('data-id');
//     console.log(link,$(link));
//     $(link).trigger('click');
// });
// 

// if $.length

$('#relation-2, #relation-1, #relation-3').on('submit', function(e) {
    e.preventDefault();
    //let data = []


    let data = $(this).serialize();


    console.log(data);
    $.ajax({
        type: 'POST',
        url: './sendmail.php',
        data: data,
        success: function(resp) {
            console.log(resp);
            body.classList.add("modal-succefull-open");
            const modal = document.querySelector(".modal-succeful");
            body.addEventListener("click", (e) => {
                if (e.target.contains(modal)) {
                    body.classList.remove("modal-succefull-open");
                }
            });
        },
        error: function() {
            console.log('error')
        }
    });


});


/*=======================================================*/

$(".wrapper-burger").on("click", function () {
    $(this).toggleClass("wrapper-burger-active");
    $(".mobile-menu_wrapper").toggleClass("mobile-menu_wrapper-active");
    $(".wrapper").toggleClass("wrapper-active");
    $('body').toggleClass('body--hidden')
});

const MainSlaider = document.querySelector(".main-slaider__wrapper");

if (MainSlaider) {
    new Swiper(MainSlaider, {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".main-slaider-button_right",
            prevEl: ".main-slaider-button_left",
        },
        pagination: {
            el: '.main-slaider__paginachion',
            clickable: true,
        },
    });
}

//==================================================================================================================================================
//Бэграунд картинок - "Начало"
//==================================================================================================================================================

function ibg(){
    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();

//==================================================================================================================================================
//Бэграунд картинок - "Конец"
//==================================================================================================================================================
