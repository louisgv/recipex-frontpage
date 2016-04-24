(() => {
	"use strict";

	var mt = window["m"];

	function Mount() {
		mt.mount(window.document.getElementById("welcome"), Container);
	}

	function Controller() {
		// var getData = mt.request({ method: "GET", url: apiUrl });

	}

	function View() {

		return mt("div", {
			class: "pure-g"
		}, [
      mt("div.full-height.pure-u-1-2.app-preview", [
				mt("div.app-phonecase")
			]),
      mt("div.full-height.pure-u-1-2.feature-request", [
				mt("div.pure-u-18-24", [
					mt("div.feature-item.pure-u-1", "A gamified recipe app"),
					mt("div.feature-item.pure-u-4-5"),
					mt("div.feature-item.pure-u-3-5", "Like what we do? Drop us a few line:")
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
