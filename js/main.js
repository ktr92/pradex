$(document).ready(function() {

   $(".productslider__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow: $(".productslider__arrow_left"),
    nextArrow: $(".productslider__arrow_right"),
     responsive: [
    {
      breakpoint: 1023,
      settings: {
         slidesToShow: 3,
    slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
         slidesToShow: 3,
    slidesToScroll: 1,
      }
    },    
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
  });

var counterTeaserL = $('.stats');
var winHeight = $(window).height();
if (counterTeaserL.length) {
    var firEvent = false,
        objectPosTop = $('.stats').offset().top;

        //when element shows at bottom
        var elementViewInBottom = objectPosTop - winHeight;
    $(window).on('scroll', function() {
        var currentPosition = $(document).scrollTop();
        //when element position starting in viewport
      if (currentPosition > elementViewInBottom && firEvent === false) {
        firEvent = true;
        animationCounter1();
        animationCounter2();
        animationCounter3();
        
      }   
    });
}

//counter function will animate by using external js also add seprator "."
 function animationCounter1(){
         $('#num_1').each(function () {
          $(this).prop('Counter', 0).animate({
                  Counter: $(this).data('value')
              }, {
              duration: 1200,
              easing: 'swing',
              step: function (now) {                      
                  $(this).text(this.Counter.toFixed(0));
              }
            });
          });
    }


 function animationCounter2(){
         $('#num_2').each(function () {
          $(this).prop('Counter', 0).animate({
                  Counter: $(this).data('value')
              }, {
              duration: 1900,
              easing: 'swing',
              step: function (now) {                      
                  $(this).text(this.Counter.toFixed(0));
              }
            });
          });
    }


 function animationCounter3(){
         $('#num_3').each(function () {
          $(this).prop('Counter', 0).animate({
                  Counter: $(this).data('value')
              }, {
              duration: 3200,
              easing: 'swing',
              step: function (now) {                      
                  $(this).text(this.Counter.toFixed(0));
              }
            });
          });
    }






    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
        parent.find('input[name=' + fieldName + ']').val(1);
        }
      }
      function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        if (!isNaN(currentVal) && currentVal > 1) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
        parent.find('input[name=' + fieldName + ']').val(1);
        }
      }
      $('.quantity').on('click', '.quantity-plus', function(e) {
        incrementValue(e);
      });
      $('.quantity').on('click', '.quantity-minus', function(e) {
        decrementValue(e);
      });
});



