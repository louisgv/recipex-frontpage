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
				mt("div.app-phonecase")
			]),
      mt("div.full-height.pure-u-1-2.feature-request", [
				mt("div.pure-u-18-24", [
					mt("div.pure-u-1", [
						mt("h1", "Cooking is " + (vm.randomScaryWord || "_____") + "?"),
						mt("hr")
					]),
					mt("div.pure-u-4-5", [
						mt("p.text-muted", "Let us help.")
					])
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
