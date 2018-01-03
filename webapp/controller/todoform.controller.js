sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.todomvc.controller.todoForm", {
		onInit: function () {
		},
		onEnterPress: function (e) {
			if (e.getSource().getValue() === "") {
				console.log("this is empty")
				return
			}
			var oModel = this.getView().getModel('todos');
			var aTodos = jQuery.extend(true, [], oModel.getProperty('/items'));
			aTodos.push({
				id: Date.parse(new Date()),
				content: e.getSource().getValue(),
				done: false,
				createdAt: new Date().toLocaleString()
			});
			oModel.setProperty('/items', aTodos);
			oModel.setProperty('/newTodo', "");
		}
	});
});
