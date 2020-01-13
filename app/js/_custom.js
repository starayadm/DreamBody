document.addEventListener("DOMContentLoaded", function() {

	// LazyLoad

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
	});

	// Menu

	const menuBtn = document.querySelector(".hamburger"),
				headerNav = document.querySelector(".nav"),
				navLinks = document.querySelectorAll(".menu__link"),
				pageBody = document.querySelector(".page__body");

		menuBtn.addEventListener("click", () => {

			// // Toggle Menu
			menuBtn.classList.toggle("is-active");
			headerNav.classList.toggle("nav--active");

			if (headerNav.classList.contains("nav--active")) {
				pageBody.style.overflow = "hidden";
			} else {
				pageBody.style.overflow = "auto";
			};

			for (let link of navLinks) {
				link.addEventListener("click", function(e) {
					e.preventDefault();
					const blockID = link.getAttribute('href').substr(1);
			
					document.getElementById(blockID).scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});

					headerNav.classList.remove("nav--active");
					menuBtn.classList.remove("is-active");
					pageBody.style.overflow = "auto";
				});
			}

			// // Animate Mobile Menu Links

			const timelineLinks = anime.timeline({
				targets: navLinks,
				easing: "easeOutExpo",
				duration: 300,
				delay: function(link,i) {
					return i * 100;
				}
			});

			timelineLinks
			.add({
				translateX: 50,
				opacity: 0
			})
			.add({
				translateX: 0,
				opacity: 1
			});

		});

 // Smooth Scrolling for desktop menu

 const anchors = document.querySelectorAll('a[href*="#"]');

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			
			const blockID = anchor.getAttribute('href').substr(1);
			
			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

 // Hero Blob

	const heroBlob = "M11.9164 166.667C43.2483 196.114 105.636 249.759 77.4114 359.913C49.1871 470.066 89.3981 465.513 144 449.88C198.602 434.247 209.472 512.948 308.537 540.487C407.601 568.025 383.987 467.246 427.76 300.844C471.532 134.441 482.475 75.8492 388.595 82.2944C294.714 88.7396 226.541 128.582 132.294 27.8034C38.0478 -72.9755 -27.2427 129.859 11.9164 166.667Z",
				aboutBlob1 = "M58.0384 434.113C12.6999 194.139 -46.0066 212.891 58.0384 101.718C180.946 -12.1362 285.776 -70.3167 363.632 146.073C463.794 424.456 433.582 455.229 383.735 466.711C105.473 507.639 72.9733 551.876 58.0384 434.113Z",
				aboutBlob2 = "M57.9179 103.905C19.5947 20.2797 388.023 -55.0406 338.653 55.1424C309.249 120.766 338.653 189.939 353.446 212.367C406.627 292.99 393.793 341.386 287.923 397.064C126.497 457.299 -24.0529 450.835 3.21591 379.161C58.7568 233.175 103.997 204.453 57.9179 103.905Z";

	const timelineHeroBlob = anime.timeline({
		duration: 15000,
		easing: "linear",
		direction: "alternate",
		loop: true
	});

	timelineHeroBlob.add({
		targets: ".hero__blob-path",
		d: [
			{
				value: heroBlob
			}
		]
	});

	const timelineAboutBlob1 = anime.timeline({
		duration: 15000,
		easing: "linear",
		direction: "alternate",
		loop: true
	});

	timelineAboutBlob1.add({
		targets: ".about__blob-path-1",
		d: [
			{
				value: aboutBlob1
			}
		]
	});

	const timelineAboutBlob2 = anime.timeline({
		duration: 10000,
		easing: "linear",
		direction: "alternate",
		loop: true
	});

	timelineAboutBlob2.add({
		targets: ".about__blob-path-2",
		d: [
			{
				value: aboutBlob2
			}
		]
	});

	// Swiper Slider

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 36,
		loop: true,
		preloadImages: false,
		lazy: true,
		grabCursor: true,
		keyboard: {
			enabled: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
			renderBullet: function (index, className) {
				return '<img alt="Девушка улыбается" src="./img/content/review-' + (index + 1) + '.jpg" srcset="./img/content/review-' + (index + 1) + '.jpg 1x, ./img/content/review-' + (index + 1) + '@2x' + '.jpg 2x" class="' + className + '">';
			},
		},
	});

	// Animation on scroll

	AOS.init();

});