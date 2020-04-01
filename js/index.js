$(function() {
    //1.如果导航栏被卷没，则在顶部显示
    $(window).scroll(function() {
            var m = 2;
            if ($(document).scrollTop() <= 150) {
                $("header").stop(true, true);
                $("header").removeClass('header_down')
                    // $("header").css({
                    //     position: 'reletive',
                    //     opacity: 1
                    // });
                m--;
                // console.log(m);

            }

            if ($(document).scrollTop() >= 100) {
                if (m == 1) {
                    m++;
                    $("header").addClass('header_down')
                        // $("header").css({
                        //     position: 'fixed',
                        //     top: 0,
                        //     opacity: .8,
                        //     display: 'none',
                        //     vshadow: 10,
                        //     hshadow: 10
                        // })
                        // $("header").slideDown(3000);

                    // console.log(m);
                    var i = $(document).scrollTop();
                    // console.log(i);
                }

            }

        })
        //2.点击登陆显示框
        // $('.hd_nav ul li:first').click(
        //     $('.container').toggle()
        // )
        // $('.logo').click(
        //     $('.container').toggle()
        // )
    $('.log').click(function() {
        // $('.container').css('display', 'block');
        $(".container").slideToggle(500);
        console.log('66');

    });
    //3.点击显示搜索框
    $('.sear').click(function() {
        // $('.container').css('display', 'block');
        // $('.warp').css('display', 'block');
        $(".wrap").slideToggle(500);
        console.log('66');

    });
    $('.cart').click(function() {
        // $('.container').css('display', 'block');
        // $('.warp').css('display', 'block');
        $(".cart-dropdown").slideToggle(500);
        console.log('66');

    });

    $('.acc').click(function() {
        // $('.container').css('display', 'block');
        // $('.warp').css('display', 'block');
        $(".currency-dropdown").slideToggle('slow');
        console.log('66');

    });
})