'use strict';
{
    //drawer
    $(document).ready(function() { 
        //ドロワーの記述
        $('.drawer').drawer();
        
        //固定ヘッダー分の高さを考慮してそれを引いた分のエリアを割り出す場合
        // #から始まるURLがクリックされた時
        $('a[href^="#"]').click(function(){
            let header = $(".header").innerHeight(); 
            let speed = 500;
            let href= $(this).attr("href");
            let target = $(href == "#" || href == "" ? 'html' : href);
            let position = $(target).offset().top - header;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });  

    //wow適用のために記入する内容
    new WOW().init();
}