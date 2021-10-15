$(function(){
    $('.navbar li a').on('click', function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 800)
    })



    $('.navbar li a').on('click', function(){
        $('.navbar a').removeClass('active');
        $(this).addClass('active')
    })



    var theText = $('.title .type').data('text'),
    theTextLength = theText.length,
    n = 0,
    theTyper = setInterval(function(){
        $('.title .type').each(function(){
            $(this).html(($(this).html() + theText[n]))
        })
        n += 1;
        if(n >= theTextLength){
            clearInterval(theTyper)
        }
    }, 150)



    $(window).scroll(function(){
        if($(window).scrollTop() >= $('#about').offset().top - 240){
            $('.progress span').each(function(){
                $(this).animate({
                    width: $(this).data('progress')+'%'
                },1000, function(){
                    $(this).text($(this).data('progress')+'%').fadeIn(200)
                })
            })
        }
    })
    



    $('.service').on('mouseenter', function(){
            $(this).find('i').animate($(this).find('i').css({
                'color': '#fff',
                'backgroundColor': '#4345e6'
            }), 300,)
        })
        $('.service').on('mouseleave', function(){
            $(this).find('i').animate($(this).find('i').css({
                'color': 'black',
                'backgroundColor': "white"
            }))
        })



    $(window).scroll(function(){
        if($(window).scrollTop() > $('#services').offset().top + 450){
            var myCounter = setInterval(function(){
                $('.number h4').each(function(){
                    var counter = parseInt($(this).html());
                    if (counter < $(this).data('num')){
                        $(this).html(counter + 1)
                    }
                });
            }, 50)
        }
    })
    



    $('.work').on('mouseenter', function(){
        $(this).find('img').animate({
            width: '115%'
        }, 250)
        $(this).find('i').animate($(this).find('i').css('fontSize', '2.5em'))
    })
    $('.work').on('mouseleave', function(){
        $(this).find('img').animate({
            width: '100%'
        }, 250)
        $(this).find('i').animate($(this).find('i').css('fontSize', '2em'))
    })



    $('.people i').on('click', function(){
        $('.people .person').each(function(){
            $(this).toggleClass('active')
            if($(this).hasClass('active')){
                $(this).show(500)
            }else{
                $(this).hide(500)
            }
        })
    })



    $(window).scroll(function(){
        $('.block').each(function(){
            if ($(window).scrollTop() > $(this).offset().top){
                var blockId = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll="' + blockId + '"]').addClass('active')
            }
        })

        
        var btnTop = $('.scrollToTop');
        if($(window).scrollTop() >= 800){
            if($(btnTop).is(':hidden')){
                $(btnTop).fadeIn(200)
            }
        }else{
            $(btnTop).fadeOut(200)
        }
    })
    $('.scrollToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 800)
    })
});