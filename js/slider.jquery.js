(function($){

  $.fn.slide = function (settings) {

    var options = $.extend({
      img: '#gallery .photos .showed',
      prev: '',
      next: '',
      auto: true,
      rate: 2000
    }, settings);


    var isRun = false;
    var i = 0;

    // Предыдущий слайд
    $(options.prev).on('click', function () {

      var img = $(options.img);
      //console.log(this);



      if(isRun){
        return;
      }

      isRun = true;
      // Скрыть предыдущий
      img.eq(i).css({
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto'
      }).animate({
        width: 0,
      }, 2000);
      i--;
      if(i < 0){
        i = img.length - 1;
      }
      //Показать предыдущий
      img.eq(i).css({
        left: 'auto',
        top: 'auto',
        right: 0,
        bottom: 0
      }).animate({
        width: '100%',
      }, 2000, function () {
        isRun = false;
      });

    });


    // Следующий слайд
    $(options.next).on('click', function () {

      var img = $(options.img);
      //console.log(this);

      if(isRun){
        return;
      }

      isRun = true;
      // Скрыть предыдущий
      img.eq(i).css({
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto'
      }).animate({
        width: 0,
      }, 2000);
      i++;
      if(i >= img.length){
        i = 0;
      }
      //Показать предыдущий
      img.eq(i).css({
        left: 'auto',
        top: 'auto',
        right: 0,
        bottom: 0
      }).animate({
        width: '100%',
      }, 2000, function () {
        isRun = false;
      });

    });

  };

})(jQuery);