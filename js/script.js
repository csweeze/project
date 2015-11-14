
// $(document).ready(function(){

// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// 	// build scenes
// 	new ScrollMagic.Scene({triggerElement: "#parallax-parent1"})
// 					.setTween(".parallax-image", {y: "80%", ease: Linear.easeNone})
// 					.addTo(controller);


// 	// build scenes section 2
// 	new ScrollMagic.Scene({triggerElement: "#parallax-parent2"})
// 					.setTween(".parallax-image", {y: "80%", ease: Linear.easeNone})
// 					.addTo(controller);

// });


// init controller
	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

	// build scenes
	new ScrollMagic.Scene({triggerElement: "#parallax1"})
					.setTween("#parallax1 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax2"})
					.setTween("#parallax2 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax3"})
					.setTween("#parallax3 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax4"})
					.setTween("#parallax4 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#parallax5"})
					.setTween("#parallax5 > div", {y: "80%", ease: Linear.easeNone})
					.addIndicators()
					.addTo(controller);

					