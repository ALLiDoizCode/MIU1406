

Ti.include("JSON.js");
var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "Images");
var images = imageFolder.getDirectoryListing();

// background color & Window
Ti.UI.setBackgroundColor("#000");


var mainWindow = Ti.UI.createWindow({
	// Reserved Properties	
	backgroundColor: "#61C8EB"	
});

//Views
var myTextView = Ti.UI.createView({
	//Reserved Properties
	backgroundColor: "#white",
	height: 65,
	top: 0			
});

var myBorder = Ti.UI.createView({
	backgroundColor: "black",
	height: 2,
	top: myTextView.height + myTextView.top
	
});

var Image = Ti.UI.createImageView({
	image: "Images/image1.jpg",
	align: "center",
	top: "30%"
});

//Labels
var Label = Ti.UI.createLabel({	
	text: "Questions",
	color: "black",
	textAlign: "center"
	
});

//Tables
var Table = Ti.UI.createTableView({
	top: myBorder.top + myBorder.height
});


var aboutSec = Ti.UI.createTableViewSection({
	headerTitle: "About me"
	
});

	

var loadFunkyTown = require("Function");
				


//Element loaders
myTextView.add(Label);
mainWindow.add(myTextView, myBorder, Table);
mainWindow.open();

