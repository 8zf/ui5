sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.todomvc.controller.menu", {
		onInit: function () {

		},
		filterAll: function () {
			var oModel = this.getView().getModel('todos');
			oModel.setProperty('/mode', "all");
		},
		filterActive: function () {
			var oModel = this.getView().getModel('todos');
			oModel.setProperty('/mode', "active");
		},
		filterDone: function () {
			var oModel = this.getView().getModel('todos');
			oModel.setProperty('/mode', "done");
		},
		getCount: function (items) {
			var l = items.length
			if (l === 0)
				return "no item left"
			if (l === 1)
				return "1 item left"
			if (l >= 1)
				return l + " item left"
		}
	});
});
