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
    
    // Keep track of whether form should submit
    let pendingSubmission = false;
    
    // Get form elements
    const form = document.getElementById('contactForm');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const messageField = document.getElementById('message');
    
    // Intercept form submit
    form.addEventListener('submit', function(e) {
      if (!pendingSubmission) {
        e.preventDefault(); // Stop it the first time
        confirmationPopup.style.display = 'flex'; // Show Upwork confirm popup
      }
    });
    
    // Hire Now button
    document.getElementById('hireNowBtn').addEventListener('click', function () {
      messageField.value += "\n\nUpwork Verified";
      pendingSubmission = true;
      confirmationPopup.style.display = 'none';
      form.submit();
      form.reset(); // ✅ Clear form after submit
      setTimeout(() => {
        window.location.href = "https://www.upwork.com/freelancers/your-upwork-id"; // Replace with your Upwork link
      }, 1000);
    });
    
    // Maybe Later button
    document.getElementById('maybeLaterBtn').addEventListener('click', function () {
      messageField.value += "\n\nUpwork Not Verified";
      pendingSubmission = true;
      confirmationPopup.style.display = 'none';
      form.submit();
      form.reset(); // ✅ Clear form after submit
    });
    