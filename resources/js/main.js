$(document).ready(function () {

    //sticky Menu
    $(".js_ServiceSection").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        }
        else {
            $("nav").removeClass("sticky");
        }
    });

    let ul = document.querySelector('ul');
    let li = document.querySelectorAll('li');

    li.forEach(eL => {
        el.addEventListener('click', function () {
            ul.querySelector('active').classList.remove('active');
            el.classList.add('active');
        });
    });
    // //active link
    // $("nav ul li a").click(function () {
    //     $("nav ul li a").removeClass("active");
    //     $(this).addClass("active");
    // });

    // $("nav a img.logo").click(function () {
    //     $("nav ul li a").removeClass("active");
    //     $("nav ul li:first-child a").addClass("active");
    // });

    // $(document).on('click', 'ul li', function () {
    //     $(this).addClass('active').siblings.removeClass('active')
    // })

    //MixitUp portfolio Button
    var mixer = mixitup('.container');

    //Smooth for browser Compatibility

    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}