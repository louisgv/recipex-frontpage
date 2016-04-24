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
      mt("div", {
				class: "full-height pure-u-1-2 app-preview"
			},[
				mt("div", {
					class: "app-phonecase"
				})
			]),
      mt("div", {
				class: "full-height pure-u-1-2 feature-request"
			}, [
				mt("div", {
					class: "feature-item pure-u-4-5"
				}),
				mt("div", {
					class: "feature-item pure-u-3-5"
				}),
				mt("div", {
					class: "feature-item pure-u-2-5"
				})
			]),
    ]);
	}

	var Container = {
		view: View,
		controller: Controller
	};

	Mount();

})();
