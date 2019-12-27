document.addEventListener("DOMContentLoaded", function() {

	// LazyLoad

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy"
	});

	// Menu

	const menuBtn = document.querySelector(".hamburger"),
				headerNav = document.querySelector(".header__nav"),
				navLinks = document.querySelectorAll(".menu__link"),
				pageBody = document.querySelector(".page__body");

		menuBtn.addEventListener("click", () => {

			// // Toggle Menu
			menuBtn.classList.toggle("is-active");
			headerNav.classList.toggle("header__nav--active");

			if (headerNav.classList.contains("header__nav--active")) {
				pageBody.style.overflow = "hidden";
			} else {
				pageBody.style.overflow = "auto";
			};

			// // Animate Links

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

 // Hero Blob

	const blob = "M11.9164 166.667C43.2483 196.114 105.636 249.759 77.4114 359.913C49.1871 470.066 89.3981 465.513 144 449.88C198.602 434.247 209.472 512.948 308.537 540.487C407.601 568.025 383.987 467.246 427.76 300.844C471.532 134.441 482.475 75.8492 388.595 82.2944C294.714 88.7396 226.541 128.582 132.294 27.8034C38.0478 -72.9755 -27.2427 129.859 11.9164 166.667Z";

	const timelineBlob = anime.timeline({
		duration: 15000,
		easing: "linear",
		direction: "alternate",
		loop: true
	});

	timelineBlob.add({
		targets: ".blob",
		d: [
			{
				value: blob
			}
		]
	});

});
