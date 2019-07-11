(function($){

  $.fn.carousel = function (settings) {

    var options = $.extend({
      img: '#gallery .photos2 .showed',
      prev: '',
      next: '',
      auto: false,
      rate: 2000
    }, settings);


    var j = 0;
    var isRun = false;
    var nxt = $(options.next);

    var img = $(options.img);
    //console.log(this);
    sWt = img.eq(0).width();
    sHt = img.eq(0).height();

    // Предыдущий слайд
    $(options.prev).on('click', function () {

      if (isRun) {
        return;
      }
      isRun = true;

      // Скрыть предыдущий слайд
      img.eq(j).css({
        height: sHt,
        width: sWt,
      }).animate({
        left: -sWt,
      }, 2000);
      j--;
      if (j < 0) {
        j = img.length - 1;
      }

      // Показать предыдущий слайд
      img.eq(j).css({
        height: sHt,
        width: sWt,
        left: sWt,
      }).animate({
        left: 0,
      }, 2000, function () {
        isRun = false;
      });

    });


    function slideNext(){
      if (isRun) {
        return;
      }

      isRun = true;

      // Скрыть следующий слайд
      img.eq(j).css({
        height: sHt,
        width: sWt,
      }).animate({
        left: sWt,
      }, 2000);
      j++;
      if (j >= img.length) {
        j = 0;
      }

      // Показать следующий слайд
      img.eq(j).css({
        height: sHt,
        width: sWt,
        left: -sWt,
      }).animate({
        left: 0,
      }, 2000, function () {
        isRun = false;
      });
    }


    // В другом направлении - следующий
    nxt.on('click', slideNext);


    if(options.auto){
      setInterval(slideNext, options.rate);
    }



};

})(jQuery);