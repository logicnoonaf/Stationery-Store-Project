"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// ====================================================
//  jquery.tabulation v2.0.0
//  Licensed by MIT
//  https://github.com/ruastronaut/jquery.tabulation
//  Copyright 2019 @ruastronaut
// ====================================================
!function (a) {
  var t = {
    init: function init(n) {
      var i = a(this),
          e = i.attr("data-tabulation-id"),
          o = {
        default: void 0,
        nav: "active",
        tab: "active",
        beforeSet: void 0,
        afterSet: void 0
      };
      i.data(a.extend(o, n)), i.find("[data-tabulation-ref=\"".concat(e, "\"][data-tabulation-nav]")).on("click", t.set);
      var d = void 0 !== o.default ? o.default : i.find("[data-tabulation-ref=\"".concat(e, "\"][data-tabulation-nav]")).eq(0).attr("data-tabulation-nav");
      t.change.call(this, d);
    },
    get: function get() {
      return a(this).attr("tabulation-index");
    },
    set: function set() {
      var n = a(this),
          i = n.closest("[data-tabulation-id=\"".concat(n.attr("data-tabulation-ref"), "\"]")),
          e = n.attr("data-tabulation-nav");
      return t.change.call(i.get(0), e);
    },
    change: function change(t) {
      var n = a(this),
          i = n.attr("data-tabulation-id");
      return ("function" != typeof n.data("beforeSet") || !1 !== n.data("beforeSet").call(this, t)) && (n.find("[data-tabulation-ref=\"".concat(i, "\"][data-tabulation-nav]")).removeClass(n.data("nav")).filter("[data-tabulation-nav=\"".concat(t, "\"]")).addClass(n.data("nav")), n.find("[data-tabulation-ref=\"".concat(i, "\"][data-tabulation-tab]")).removeClass(n.data("tab")).hide().filter("[data-tabulation-tab=\"".concat(t, "\"]")).addClass(n.data("tab")).show(), n.attr("tabulation-index", t), "function" == typeof n.data("afterSet") && n.data("afterSet").call(this, t), !0);
    },
    destroy: function destroy() {
      var t = a(this),
          n = t.attr("data-tabulation-id");
      t.find("[data-tabulation-ref=\"".concat(n, "\"][data-tabulation-nav]")).unbind("click"), t.find("[data-tabulation-ref=\"".concat(n, "\"][data-tabulation-nav]")).removeClass(t.data("nav")), t.find("[data-tabulation-ref=\"".concat(n, "\"][data-tabulation-tab]")).removeClass(t.data("tab")).show();
    }
  };

  a.fn.tabulation = function (n) {
    if (t[n]) return t[n].apply(this, Array.prototype.slice.call(arguments, 1));
    "object" != _typeof(n) && n ? a.error("jquery.tabulation: method \"".concat(n, "\" does not exist.")) : t.init.apply(this, arguments);
  };
}(jQuery);