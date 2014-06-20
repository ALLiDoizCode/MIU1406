///FUNCTIONS

//Info Function//
var infoDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "White",
		title: this.title,
		backButtonTitleImage: this.image,
		shadowImage: this.image
	});
	navWindow.openWindow(detailWindow);
		//FunctionViews
		var detailTextView = Ti.UI.createView({
			backgroundColor: "#white",
			height: 65,
			top: 0		
		});
		var image = Ti.UI.createImageView({
			image:this.backgroundFocusedImage,
			bottom: "8.7%",
		});
			
		var detailBorder = Ti.UI.createView({
			backgroundColor: "black",
			height: 2,
			top:"0%"	
		});
		
		//Table2
			var table1 = Ti.UI.createTableView({
				top: myBorder.top + myBorder.height,
				//backgroundColor:"black"
			});
			
			var sec1 = Ti.UI.createTableViewSection({
				headerTitle: "Description",
				
			});
			
			//Load Data
			var info1 = [sec1];
			table1.setData(info1);
			
			for(var i = 0, j = Dog.length; i<j; i++ ){	
					var data1 = Ti.UI.createTableViewRow({
					title: Dog[i].Desc
					//hasChild: true,
					});	
				sec1.add(data1);
				//data1.addEventListener("click", infoDetail2);
				//}			
			};	
		//EndTable2
		
		//Function Labels
			var detailunitLabel = Ti.UI.createLabel({	
			color: "black",
			textAlign: "center"
		});
		
		var infoText = Ti.UI.createLabel({
				text: this.desc,
				font: {fontSize: 15, fontFamilly: "Arial"},
				top: detailBorder.height + detailBorder.top + 40,
				left: 15,
				right: 15
			});
			
		var returnButton = Ti.UI.createLabel({
				text: "Return",
				backgroundColor: "black",
				color: "silver",
				height: 50,
				font: {fontSize: 13, fontFamily: "Arial"},
				width: "100%",
				bottom: 0,
				textAlign: "center"
		});
		
		var closeWindow = function(){
			detailWindow.close();
		};
		
		//EventListener
		returnButton.addEventListener("click", closeWindow);
		
	// Function Element loaders		
	detailTextView.add(detailunitLabel);	
	detailWindow.add(detailTextView, detailBorder, infoText,returnButton,table1);
	
	detailWindow.open();
};

for(var i = 0, j = Name.length; i<j; i++ ){	
		var data = Ti.UI.createTableViewRow({
		title: Name[i].Breed,
		desc: Name[i].Desc,
		image:Name[i].image,
		hasChild: true,
		});	
		
	sec.add(data);
	data.addEventListener("click", infoDetail);
};
