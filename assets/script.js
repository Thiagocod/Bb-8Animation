$(document).ready(function(){
    $('.droid').on('click', function(){
        $(".head").toggleClass("move-droid-head");
        $(".radio,.shadow").toggleClass("move-droid");
        $(".body").toggleClass("move-droid-rotate");
              
    });
});
