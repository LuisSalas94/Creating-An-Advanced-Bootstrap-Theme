/*============ NAVBAR TRANSPARENT TO SOLID ============*/
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			/* when reaches desire pixel, solid class actives */
			$(".navbar").addClass("solid");
		} else {
			$(".navbar").removeClass("solid");
		}
	});
});

/*============ CLOSE MOBILE NAV ON CLICK ============*/
$(document).ready(function () {
	$(document).click(function (event) {
		let clickover = $(event.target);
		let _opened = $(".navbar-collapse").hasClass("show");
		if (_opened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});

/*============ SMOOTH SCROLLING TO LINKS ============*/
$(document).ready(function () {
	$("a").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html,body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});

/*============ BOUNCING DOWN ARROW ============*/
$(document).ready(function () {
	$(window).scroll(function () {
		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
	});
});

/*============Meet the team=============*/
$(document).ready(function () {
	$("#team-slider").owlCarousel({
		items: 3,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 3,
			},
		},
	});
});

/*============Skills Counter=============*/
$(document).ready(function () {
	$(".counter").counterUp({
		delay: 10,
		time: 1900,
	});
});

/*============Clients Carousel=============*/
$(document).ready(function () {
	$("#clients-slider").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 1700,
		loop: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
		},
	});
});

/*============Top Scroll============*/
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$(".top-scroll").fadeIn();
		} else {
			$(".top-scroll").fadeOut();
		}
	});
});
