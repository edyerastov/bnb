$('#header-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    items: 1
})
$('.slider-right').click(function() {
   $('#header-carousel').trigger('next.owl.carousel');
});
$('.slider-left').click(function() {
   $('#header-carousel').trigger('prev.owl.carousel');
});