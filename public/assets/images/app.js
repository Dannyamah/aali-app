$(document).ready(function () {
    // waypoint is a library for activating animation when the content scrolls into view

    $(".about-page").waypoint(function (direction) {
        if (direction == 'up') {

            $(".left-box").animate({ bottom: '250px', },
                2000);
        } else {
            $(".left-box").animate({ bottom: '160px', },
                2000);
        }
    });

    $(".about-page").waypoint(function (direction) {
        if (direction == 'up') {
            $(".left-border").animate({ left: '40px', },
                2000);
        } else {
            $(".left-border").animate({ left: '20px', },
                2000);
        }
    });

    $(".about-page").waypoint(function (direction) {
        if (direction == 'up') {

            $(".right-box").animate({ width: '250px', },
                2000);
        } else {
            $(".right-box").animate({ width: '180px', },
                2000);
        }
    })
    $(".about-page").waypoint(function (direction) {
        $(".progress-75").animate({
            width: "75%"
        }, 2500);
        $(".progress-25").animate({
            width: "25%"
        }, 2500);
    })

    $(".works").waypoint(function (direction) {
        if (direction == 'up') {

            $(".white-border").animate({ width: '230px', },
                2000);
        } else {
            $(".white-border").animate({ width: '180px', },
                2000);
        }
    })

    // to change color of nav on scroll

    // $(".about").waypoint(function (direction) {
    //     if (direction == 'down') {

    //         $("nav").css({ backgroundColor: 'white'},
    //             );}
        
    // })

    $(".owl-carousel").owlCarousel();
    
    

})


// for preloader
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
// preloader end
