(function () {
	"use strict";

	var mt = window["m"];

	var vm = {};

	function Mount() {
		mt.mount(window.document.getElementById("welcome"), Container);
	}

	function RandomFrom(array) {
		return array[Math.floor(Math.random() * array.length)]
	}

	function Controller() {
		// var getData = mt.request({ method: "GET", url: apiUrl });
		setInterval(function () {
			vm.randomScaryWord = RandomFrom([
				"Strange",
				"a Mystery",
				"a Terrible Idea"
			])
			mt.redraw();
		}, 900);

	}

	function View(ctrl) {

		return mt("div.pure-g", [
      mt("div.full-height.pure-u-1-2.app-preview", [
				mt("div.app-phonecase", [
					mt("img.img-responsive", {
						src: './imgs/app.png'
					})
				])
			]),
      mt("div.full-height.pure-u-1-2.feature-request", [
				mt("div.pure-u-18-24", [
					mt("div.pure-u-2-5.app-logo", [
							mt("img.img-logo", {
							src: './imgs/logo.png'
						})
					]),
					mt("div.pure-u-3-5", [
						mt("h1", "RecipeX"),
						mt("h3", "The Rocket Engineer's Cooking Guide"),
						// mt("hr")
					]),
						mt("form.pure-form", [
								mt("input.half-left-rounded.pure-u-4-5[placeholder='Email me when you launch!'][type='email']"),
								mt("button.half-right-rounded.pure-button.pure-u-1-5.pure-button-primary[type='submit']", "GO!")
						]),

				]),
			]),
    ]);
	}

	var Container = {
		view: View,
		controller: Controller
	};

	Mount();

})();
