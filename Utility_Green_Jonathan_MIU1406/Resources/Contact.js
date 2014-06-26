var win = Ti.UI.currentWindow;

var view1 = Ti.UI.createScrollView({
	backgroundColor: "black",
});
 
var imgView = Ti.UI.createImageView({
	Image: "Images/Blizzard_Logo_look_of_dis--article_image.jpg",
	top: "60.5%",
	right: "42%"
	//height: "50%",
	//width: "100%"
});
 
var scrollView = Ti.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:false,
    zIndex: 1
});

var frist = Ti.UI.createTextField({
    color:'#336699',
    top:60,
    left:10,
    width:300,
    height:40,
    hintText:'Frist name',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var last = Ti.UI.createTextField({
    color:'#336699',
    top:110,
    left:10,
    width:300,
    height:40,
    hintText:'Last name',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var phone = Ti.UI.createTextField({
    color:'#336699',
    top:160,
    left:10,
    width:300,
    height:40,
    hintText:'(xxx)-xxx-xxxx',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var email = Ti.UI.createTextField({
    color:'#336699',
    top:210,
    left:10,
    width:300,
    height:40,
    hintText:'email',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
 
var subBtn = Ti.UI.createButton({
    title:'submit',
    top:260,
    width:130,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});

subBtn.addEventListener("click", function(){
	alert("We will contact you soon");
});
view1.add(imgView);
scrollView.add(subBtn,email,phone,frist,last);
win.add(scrollView,view1);