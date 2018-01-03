sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.todomvc.controller.todos", {
		onPress: function () {
			console.log("you press columnlisitem");
		},
		getVisible: function (mode, done) {
			if (mode === "all")
				return true
			if (mode === "active") {
				if (done === true)
					return false
				else if (done === false)
					return true
			}
			if (mode === "done") {
				if (done === true)
					return true
				else if (done === false)
					return false
			}
			return false
		},
		deleteMe: function (e) {
			var sid = e.getSource().getParent().sId
			var index = parseInt(sid.substring(sid.indexOf('thisistodo-__clone') + 18))
			var oModel = this.getView().getModel('todos');
			var aTodos = jQuery.extend(true, [], oModel.getProperty('/items'));
			aTodos.splice(index, 1)
			oModel.setProperty('/items', aTodos);
		},
		modifyMe: function (e) {
			var sid = e.getSource().getParent().sId
			var index = parseInt(sid.substring(sid.indexOf('thisistodo-__clone') + 18))
			var oModel = this.getView().getModel('todos');
			var aTodos = jQuery.extend(true, [], oModel.getProperty('/items'));
			aTodos[index].content = e.getParameters().value
			oModel.setProperty('/items', aTodos);
		}
	});
});
