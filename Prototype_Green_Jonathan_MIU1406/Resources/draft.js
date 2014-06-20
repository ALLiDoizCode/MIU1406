///FUNCTIONS

//Info Function//
var infoDetail2 = function(){
	var detailWindow2 = Ti.UI.createWindow({
		backgroundColor: "White",
		
	});
		//FunctionViews
		var detailTextView2 = Ti.UI.createView({
			backgroundColor: "#white",
			//backgroundImage:this.backgroundFocusedImage,
			height: 65,
			top: 0		
		});
		/*var image = Ti.UI.createImageView({
			image:this.backgroundFocusedImage,
			bottom: "8.7%"
			
		});*/
		var detailBorder2 = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top: detailTextView.height + detailTextView.top
			
		});
		//Function Labels
			var detailunitLabel2 = Ti.UI.createLabel({	
			text: this.title,
			color: "black",
			textAlign: "center"
		});
		
		var infoText2 = Ti.UI.createLabel({
				text: this.desc,
				font: {fontSize: 15, fontFamilly: "Arial"},
				top: detailBorder.height + detailBorder.top + 40,
				left: 15,
				right: 15
			});
			
		var returnButton2 = Ti.UI.createLabel({
				text: "Return",
				backgroundColor: "black",
				color: "silver",
				height: 50,
				font: {fontSize: 13, fontFamily: "Arial"},
				width: "100%",
				bottom: 0,
				textAlign: "center"
		});
		
		var closeWindow2 = function(){
			detailWindow2.close();
		};
		
		//EventListener
		returnButton2.addEventListener("click", closeWindow2);
		
	// Function Element loaders		
	detailTextView2.add(detailunitLabel);	
	detailWindow2.add(detailTextView2, detailBorder2, infoText2,returnButton2);
	
	detailWindow2.open();
};