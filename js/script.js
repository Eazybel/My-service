$(document).ready(function(){

  $('.scroll-top').hide();

  /*--------------- Navbar Toggler ---------------*/
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  /*--------------- Scroll-Top ---------------*/
  $(window).on('scroll',function(){
    
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // STICKY HEADER
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      } else {
        $('.scroll-top').fadeOut();
      }
    });

  });

});

// Same JavaScript as before with updated form handling
function openPopup() {
  document.getElementById('popupContainer').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popupContainer').style.display = 'none';
}

window.onclick = function(event) {
  const popup = document.getElementById('popupContainer');
  if (event.target === popup) {
    closePopup();
  }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get checkbox values
  const checkboxes = document.querySelectorAll('input[name="options"]:checked');
  const selectedOptions = Array.from(checkboxes).map(cb => cb.value);
  
  // Add your form submission logic here
  alert(`Form submitted! Selected options: ${selectedOptions.join(', ') || 'none'}`);
  closePopup();
});
