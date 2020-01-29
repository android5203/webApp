window.onload = function () {
    $(document).scroll(function () {
        var scroH = $(document).scrollTop(); //滚动高度
        var viewH = $(window).height(); //可见高度 
        var contentH = $(document).height(); //内容高度
        console.log(scroH)

        if (scroH > 3) { //距离顶部大于100px时
            $("#headerFloat").addClass("headerFloatShadow");
        }
        if (scroH < 3) { //距离顶部大于100px时
            $("#headerFloat").removeClass("headerFloatShadow");
        }

        // 产品服务
        if(scroH >= 540 && scroH < 930) {
            $(".navBarLinkProduct").addClass("active");
        } else {
            $(".navBarLinkProduct").removeClass("active");
        }
        // 案例展示
        if(scroH >= 930 && scroH < 1380) {
            $(".navBarLinkCase").addClass("active");
        } else {
            $(".navBarLinkCase").removeClass("active");
        }
        // 服务流程
        if(scroH >= 1380 && scroH < 1950) {
            $(".navBarLinkService").addClass("active");
        } else {
            $(".navBarLinkService").removeClass("active");
        }
        // 关于我们
        if(scroH >= 1950 && scroH < 2610) {
            $(".navBarLinkAbout").addClass("active");
        } else {
            $(".navBarLinkAbout").removeClass("active");
        }
        // 我们的客户
        if(scroH >= 2610 && scroH < 2880) {
            $(".navBarLinkCustomers").addClass("active");
        } else {
            $(".navBarLinkCustomers").removeClass("active");
        }
        // 联系我们
        if(scroH >= 2880) {
            $(".navBarLinkContact").addClass("active");
        } else {
            $(".navBarLinkContact").removeClass("active");
        }
    });
    $('.goTop').click(function(){
        $('html ,body').animate({scrollTop: 0}, 300);
        return false;
    })

    // 产品服务
    $('.navBarLinkProduct').click(function(){
        $('html ,body').animate({scrollTop: 540}, 300);
        return false;
    })
    // 案例展示
    $('.navBarLinkCase').click(function(){
        $('html ,body').animate({scrollTop: 930}, 300);
        return false;
    })
    // 服务流程
    $('.navBarLinkService').click(function(){
        $('html ,body').animate({scrollTop: 1380}, 300);
        return false;
    })
    // 关于我们
    $('.navBarLinkAbout').click(function(){
        $('html ,body').animate({scrollTop: 1950}, 300);
        return false;
    })
    // 我们的客户
    $('.navBarLinkCustomers').click(function(){
        $('html ,body').animate({scrollTop: 2610}, 300);
        return false;
    })
    // 联系我们
    $('.navBarLinkContact').click(function(){
        $('html ,body').animate({scrollTop: 2880}, 300);
        return false;
    })

    // QQ 移入事件
    let showQQ = false;
    $('.sideBarItemQQ').mouseenter(function(){
        showQQ = true;
        $('.sideFlortQQ').fadeIn()
    })
    $('.sideBarItemQQ').mouseleave (function(){
        showQQ = false;
        setTimeout(function() {
            if(!showQQ) {
                $('.sideFlortQQ').fadeOut()
            }
        }, 500)
    })
    // 手机号 移入事件
    let showPhone = false;
    $('.sideBarItemPhone').mouseenter(function(){
        showPhone = true;
        $('.sideFlortPhone').fadeIn()
    })
    $('.sideBarItemPhone').mouseleave (function(){
        showPhone = false;
        setTimeout(function() {
            if(!showPhone) {
                $('.sideFlortPhone').fadeOut()
            }
        }, 500)
    })
    // 微信 移入事件
    let showWx = false;
    $('.sideBarItemWx').mouseenter(function(){
        showWx = true;
        $('.sideFlortWx').fadeIn()
    })
    $('.sideBarItemWx').mouseleave (function(){
        showWx = false;
        setTimeout(function() {
            if(!showWx) {
                $('.sideFlortWx').fadeOut()
            }
        }, 500)
    })
}