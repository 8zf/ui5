sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.todomvc.controller.todo", {
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
