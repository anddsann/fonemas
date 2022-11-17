$(window).scroll(function(){
    
    let pixel = $(window).scrollTop();
    
    console.log({pixel});
   
    final.currentTime = pixel / 190;
});