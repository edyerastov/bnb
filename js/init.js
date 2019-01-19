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

$('.product-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots:false,
    nav: false,
    items: 3
})
$('.slider-right').click(function() {
   $('.product-carousel').trigger('next.owl.carousel');
});
$('.slider-left').click(function() {
   $('.product-carousel').trigger('prev.owl.carousel');
});