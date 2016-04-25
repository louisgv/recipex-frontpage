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

		return mt("div.pure-g", [
      mt("div.full-height.pure-u-1-2.app-preview", [
				mt("div.app-phonecase")
			]),
      mt("div.full-height.pure-u-1-2.feature-request", [
				mt("div.pure-u-18-24", [
					mt("div.feature-header.pure-u-1-2"),
					mt("div.feature-item.pure-u-1"),
					mt("div.feature-item.pure-u-4-5"),
					mt("div.feature-item.pure-u-3-5")
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
