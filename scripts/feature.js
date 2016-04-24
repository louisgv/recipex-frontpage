(() => {
  "use strict";

  var mt = window["m"];

  function Mount() {
    mt.mount(window.document.getElementById("feature"), Container);
  }

  function Controller() {
    // var getData = mt.request({ method: "GET", url: apiUrl });

  }

  function View() {

    return mt("div", { class: "pure-g" }, [

    ]);
  }

  var Container = {
    view: View,
    controller: Controller
  };

  Mount();

})();
