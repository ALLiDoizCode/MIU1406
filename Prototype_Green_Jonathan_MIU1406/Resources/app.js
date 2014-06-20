

Ti.include("JSON.js");


var mainWindow = Ti.UI.createWindow({
	title: "PetStore",
	backgroundColor: "black"
});
//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow,		
});

//Views
var myBorder = Ti.UI.createView({
	backgroundColor: "black",
	height: "2",
	top:"0%",
	backgroundImage: "Images/textures/Red_Retreiver_Dog_Fur_Texture_by_FantasyStock.jpg"
});

//table//
var table = Ti.UI.createTableView({
	backgroundColor: "#white",
	top: myBorder.top + myBorder.height,
});

var sec = Ti.UI.createTableViewSection({
	headerTitle: "Dog Breeds",
	
});

//Load Data
var info = [sec];
table.setData(info);


//LOAD
var funkyTown = require("Function");

//ElementLoader//

mainWindow.add(table,myBorder);	
navWindow.open();