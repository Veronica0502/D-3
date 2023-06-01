$(document).ready(function(){

    $(".main > li,.sub").hover(function(){
        $(".sub").stop().slideDown()
        
        
    },function(){
        $(".sub").stop().slideUp()
    })/* main li hover */
    
    $(".sub_list").hover(function(){
        var n = $(this).index()
        console.log("n : ", n)

        $(".main li a").removeClass("on")
        $(".main li").eq(n).find("a").addClass("on")
    },function(){
        $(".main li a").removeClass("on")
        
    })
    
    $(".fade_img li").eq(0).siblings().hide()

    setInterval(function(){
        var n=0
        $(".fade_img li").eq(n).fadeOut()
        if(n==2){n=0}else{n++}
        $(".fade_img li").eq(n).fadeIn()
    },3000)

    $(".gallery h2").click(function(){
        $(".notice_text").hide()
        $(".gallery_img").show()
    })/* gallery h2 click */

    $(".notice h2").click(function(){
        $(".notice_text").show()
        $(".gallery_img").hide()
    })/* gallery h2 click */

})/* jQuery Close */