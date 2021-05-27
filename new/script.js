$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation script

    var typed = new Typed(".typing", {
        strings: ["Fullstack Developer"],
        typeSpeed: 105,
        backSpeed:60 ,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Fullstack Developer"],
        typeSpeed: 105,
        backSpeed:60 ,
        loop: true
    });

    // owl carousel script
    
    $('.carousel').owlCarousel({
        margin: 20,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });
});

// Email send script

function sendmail(params) {
    var tempparams = {
        to_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        from_name: document.getElementById("subject").value,
        message: document.getElementById("msg").value
    };
    emailjs.send("service_thb1wzr", "template_5m54858", tempparams).then(function (res) {

        console.log("success", res.status);
    })

}