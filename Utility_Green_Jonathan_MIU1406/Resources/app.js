//Window
var mainWindow = Ti.UI.createWindow({
	title: "Blizzard Mobile",
	backgroundColor: "#white",	
});

//Navigation//
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

//VIEW
var logoImage = Ti.UI.createImageView({
	image: "Images/starcraft2.jpg",
	align: "center",
	top: "28%"
});

//FUNCTION//
var introWindow = function(){
	var loadFile = Ti.UI.createWindow({
		title: "Mobile",
		layout: "vertical",
		url:"MainWindow.js",
	});
	navWindow.openWindow(loadFile);
	
};
//EventListenersa
logoImage.addEventListener("click", introWindow);

mainWindow.add(logoImage);
navWindow.open();
