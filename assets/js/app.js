let crossBtn = document.querySelector('.cross-btn');
let searchBtn = document.querySelector('.search_btn');
let searchBox = document.querySelector('.search-box');
let inputTest = document.querySelector('.input-test');

searchBox.addEventListener('click',function(e){
    e.preventDefault();  
   if(e.target.classList.contains('active_search')){
    searchBox.classList.remove('active_search');
   };
})

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchBox.classList.add('active_search');
    if(!(e.target.classList.contains('active_search'))){
        inputTest.classList.add('active_input');
       }else{
        inputTest.classList.remove('active_input');
       }
});

crossBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchBox.classList.remove('active_search');
});
//*nav ber end*//
//*BANNER
$(function(){
    // *jQuery starts

    $('.bannerSlider') .slick({
        arrows: false,
        dots: true,
        dotsClass:'bannerDots container',
        autoplay: true,
        autoplaySpeed: 1500,
    })

})
//*BANNER END*//
//* NEW ARRIVAL*//
//******TOOL TIP ******* */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//******TOOL TIP END ******* */


$('.parent_arrivals').slick({
  infinite: true,
  dots: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<span class="left"><i class="fa-solid fa-chevron-left"></i></span>',
 nextArrow:'<span class="right"><i class="fa-solid fa-chevron-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				

       //*NEW ARRIVAL END*//  
       //*latest*//


       $('.latest').slick({
        dots: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }); 
//*latest*///
//*date*//
$('.timer').countdown('2024/09/02', function(event) {
  // $(this).html(event.strftime('%D days %H:%M:%S'));

  $('.days').html(event.strftime('%D'))
  $('.sec').html(event.strftime('%S'))


});
       //*date end*//

       //*seller*****/

       $('.parent_sellers').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
              
      
       //*seller end*****/
    