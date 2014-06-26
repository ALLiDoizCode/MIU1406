var currentWindow = Ti.UI.currentWindow;

var tabGroup = Ti.UI.createTabGroup();

var img = Ti.UI.createView({
	backgroundImage: "Images/wall000-1680x1050.jpg",
	height: "90%",
	width: "200%"
	
});
 
var login = Ti.UI.createWindow({
    title:"User Login",
    url:"login.js"
});
 
var loginTab = Ti.UI.createTab({
    title:"Login",
    window:login
});

var contact = Ti.UI.createWindow({
	title: "Contact",
	url: "Contact.js"
});

var contactTab = Ti.UI.createTab({
	title: "Contact",
	window: contact
});
 
var account = Ti.UI.createWindow({
    title:'New Account',
    url:'usersAccount.js'
});
 
var accountTab = Ti.UI.createTab({
    title:'New Account',
    window:account
});
currentWindow.add(img);
tabGroup.addTab(loginTab);
tabGroup.addTab(contactTab);
tabGroup.addTab(accountTab);
tabGroup.open();
//currentTab.add(loginTab,accountTab);
//currentTab.open();
