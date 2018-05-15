sap.ui.jsview("simpleCalculator.view.Main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf view.Main
	 */
	getControllerName: function() {
		return "simpleCalculator.controller.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf view.Main
	 */
	createContent: function(oController) {
		
		var oLblFNumber = new sap.m.Label("lblFirst", {
			text: "First Number....."
		});
		
		var oInpFNumber = new sap.m.Input("inpFirst", {
			type: sap.m.InputType.Number
		});
		
		var oInputSign = new sap.m.Input("inpSign", {
			value: "+"
		});
		
		oInputSign.setEditable(false);
		
		var oLblSNumber = new sap.m.Label("lblSecond", {
			text: "Second Number"
		});
		
		var oInpSNumber = new sap.m.Input("inpSecond",{
		});
		
		var oBtnResult = new sap.m.Button("btnResult",{
			text: "Show Result",
			press: oController.showResult
		});
		
		var oLblResult = new sap.m.Label("lblResult", {
			text: "Result"
		});
		
		var oInpResult = new sap.m.Input("inpResult", {
			editable: false
		});
		
		// oInpResult.setEditable(false);
		
		return [ oLblFNumber, oInpFNumber, oInputSign, oLblSNumber, oInpSNumber, oBtnResult, oInpResult ];
		
	}

});