(function () {
	"use strict";

	var mt = window["m"];

	function Mount() {
		mt.mount(window.document.getElementById("feature"), Container);
	}

	function Controller() {
		// var getData = mt.request({ method: "GET", url: apiUrl });

	}

	function View() {

		return mt("div.pure-g", [
      mt("div.pure-u-8-24", [
				mt("div.fea-1")
			]),
      mt("div.pure-u-8-24", [
				mt("div.fea-2")
			]),
      mt("div.pure-u-8-24", [
				mt("div.fea-3")
			]),
    ]);
	}

	var Container = {
		view: View,
		controller: Controller
	};

	Mount();

})();
