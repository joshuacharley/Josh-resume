$(document).ready(function(){

    // MODAL
    var modalText = {
      roambi: {
        title: 'online university application uniapply',
        tag: 'uniapply is UNDER DEV.',
        detail: 'We look for things to happen when ever possible and now we are happy for UniApply for making things easier with much money to save, time and energy. Site is devloped in PHP, Javascript and Bootstrap with freewha hosting.',
        link: 'uniapply.orgfree.com/uniapply.sl'
      },
      walker: {
        title: 'University High Flyer Mannual',
        tag: 'Ebook flyer.',
        detail: 'This Single Page Application is a university ebook app that help student to know more about the university by reading the mannual online in web-mobile-desktop. This app is built with vue js and qausar frame work.',
        link: 'https://limkokwinghighflyermannual.000webhostapp.com/#/'

      },
      powur: {
        title: 'Crownclothing',
        tag: 'Is UNDER DEV',
        detail: 'Its a full ecommerce App Built with pure Ract and sass for styling. Makes use of React-Material for front-end visuals. Rich in react features like Redux e.t.c',
        // link: 'crownclothing'
      },
      mystand: {
        title: 'Sierra Life',
        tag: 'Sierralife is UNDER DEV.',
        detail: 'SierraLife is an entertainment Web Application that 100% focused on entertainment in Sierra Leone. This App provides features like downloading of music, videos and also support digital content shopping. SierraLife provides outstanding feature like online application for any entertainment startup and also shopping of tickets. Sierra life also provides blogging etc.',
      },
      never: {
        title: 'Housetolet sierraleone',
        tag: 'HouseTolet under Dev.',
        detail: 'Dicover places with us, live and grow with safty renting and affordable housing. We uncover the most beautiful hidden places you will love to stay just next to your palm. Take the adventure to combat housing problems with fake and fraud agents. Pure JavaScript housing site to rent houses and know location.',
      },
      themall: {
        title: 'Email subscribe form with mainchip api',
        tag: '',
        detail: 'Mailchimp email subscribe API with node js',
        link: 'https://immense-anchorage-97858.herokuapp.com/'
      }
    };
  
    $('#gallery .button').on('click', function(){
      fillModal(this.id);
      $('.modal-wrap').addClass('visible');
    });
  
    $('.close').on('click', function(){
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    $('.mask').on('click', function(){
      $('.modal-wrap, #modal .button').removeClass('visible');
    });
  
    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth/3,
        dragStart, 
        dragEnd;
  
    setDimensions();
  
    $('#next').click(function(){ shiftSlide(-1) })
    $('#prev').click(function(){ shiftSlide(1) })
  
    carousel.on('mousedown', function(){
      if (carousel.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function(){
        dragEnd = event.pageX;
        $(this).css('transform','translateX('+ dragPos() +'px)');
      });
      $(document).on('mouseup', function(){
        if (dragPos() > threshold) { return shiftSlide(1) }
        if (dragPos() < -threshold) { return shiftSlide(-1) }
        shiftSlide(0);
      });
    });
  
    function setDimensions() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
       slideWidth = $(window).innerWidth();
      }
      $('.carousel-wrap, .slide').css('width', slideWidth);
      $('.modal').css('max-width', slideWidth);
      $('#carousel').css('left', slideWidth * -1)
    }
  
    function dragPos() {
      return dragEnd - dragStart;
    }
  
    function shiftSlide(direction) {
      if (carousel.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup')
      carousel.off('mousemove')
              .addClass('transition')
              .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
      setTimeout(function(){
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        carousel.removeClass('transition')
        carousel.css('transform','translateX(0px)'); 
      },700)
    }
  
    function fillModal(id) {
      $('#modal .title').text(modalText[id].title);
      $('#modal .detail').text(modalText[id].detail);
      $('#modal .tag').text(modalText[id].tag);
      if (modalText[id].link) $('#modal .button').addClass('visible')
                                                 .parent()
                                                 .attr('href', modalText[id].link)
  
      $.each($('#modal li'), function(index, value ) {
        $(this).text(modalText[id].bullets[index]);
      });
      $.each($('#modal .slide'), function(index, value) {
        $(this).css({
          background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
          backgroundSize: 'cover'
        });
                
      });
    }
  })