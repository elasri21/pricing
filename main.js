$(document).ready(function(){
    //let price = [['&dollar;19.99', '&dollar;199.99'], ['&dollar;24.99', '&dollar;249.99'], ['&dollar;39.99', '&dollar;399.99']];

    // working with toggle button
    // get the toggle button
    const toggleButton1 = document.querySelector('.button .one')
    const toggleButton2 = document.querySelector('.button .two')
    //i know this is not a good approch but still work
    toggleButton1.addEventListener('click', function(){
        $('.button span').removeClass('toggle-bg')
        $(this).addClass('toggle-bg')
        $('.item h1.first').html('&dollar;199.99')
        $('.item h1.second').html('&dollar;249.99')
        $('.item h1.third').html('&dollar;399.99')
        },false)
   
    toggleButton2.addEventListener('click', function(){
        $('.button span').removeClass('toggle-bg')
        $(this).addClass('toggle-bg')
        $('.item h1.first').html('&dollar;19.99')
        $('.item h1.second').html('&dollar;24.99')
        $('.item h1.third').html('&dollar;39.99')
    }, false)
   
    //add hover styles
    let items = document.querySelectorAll('.item')
    for(let i=0;i<items.length; i++){
        items[i].addEventListener('mouseover', function(e){
            $('.item').removeClass('active')
            $(this).addClass('active')  
        }, false);

        items[i].addEventListener('mouseleave', function(e){
            $('.item').removeClass('active')
            $('.item:nth-child(2)').addClass('active')  
        }, false);
    }
});
