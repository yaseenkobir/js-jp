//ex1
function textChange(){
	document.getElementById('tc').innerHTML="Welcome to WWZ";
}
//ex2
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}
//ex3
function bulbOn(){
	document.getElementById('bulb').src='images/on.gif';
}
function bulbOff(){
	document.getElementById('bulb').src='images/off.gif';
}
//ex4
function Smile(){
     document.getElementById('logo').
     src='images/smile.png';
}
function Sad(){
     document.getElementById('logo').src='images/sad.png';
}
//ex5
function changeCss(){
	document.getElementById('cc').style.color="blue";
}
//ex6
function textShow(){
     document.getElementById('tsh').style.display="block";
}
function textHide(){
      document.getElementById('tsh').style.display="none";
}
//ex7
function fontSize(){
	document.getElementById('fz').style.fontSize="50px";
}
//ex8
function sitDown(){
     document.getElementById('man').
     src='images/sitdown.png';
}
function standUp(){
     document.getElementById('man').src='images/stanup.png';
}
//ex9
function demoResult(){
	document.getElementById('dr').innerHTML=5+5;
}
//ex10
function demoResult1(){
	document.getElementById('dr1').innerHTML=10.50;
}
//ex11
function showValue(){
	document.getElementById('ex').innerHTML=x=6;
}
//ex12
function resultShow(){
	document.getElementById('rs').innerHTML=(5 + 6) * 10;
}
//ex13
function resultShow1(){
	document.getElementById('rs1').innerHTML=5 * 10;
}
//ex14
function resultShow2(){
	document.getElementById('rs2').innerHTML=x=5 * 20;
}
//ex15
function resultShow3(){
	document.getElementById('rs3').innerHTML=x=5*50;
}
//ex16
function changeBgc(){
	document.getElementById('fbcg').style.backgroundColor="teal";
}
//ex17
function picShow(){
	document.getElementById('sc').style.display= 'block';
}
function picHide(){
	
	document.getElementById('sc').style.display= 'none';
}
//ex18
function show(){
	document.getElementById('scbs').style.backgroundColor='red';
}

function hide(){
	
	document.getElementById('scbs').style.backgroundColor= 'transparent';
}
//ex19
function changeBorder(){
	document.getElementById('cb').style.border= '5px solid black';
}
//ex20
function bShow(){
	document.getElementById('bb').style.border='5px dashed red';
}
function bHide(){
	
	document.getElementById('bb').style.border= 'none';
}
//ex21
function alignItem(){
	document.getElementById('ai').style.textAlign= 'center';
}
//ex22
function bcgImg(){
	document.getElementById('bimg').style.backgroundImage= "url('images/g2.png')";
}
//ex23
function ca(){
	document.getElementById("myDIV").style.animation = "mynewmove 4s 2";
}
//ex24
function cda(){
	document.getElementById("mDiv").style.animationDelay = "3s";
}
//ex25
function bcgClip(){
	document.getElementById("bclip").style.backgroundClip = "content-box";
}
//ex26
function bcgPos(){
	document.getElementById("bmg").style.backgroundPosition="top right"; 
}
//ex27
function bcgSize(){
	document.getElementById("bs").style.backgroundSize = "60px 120px";
}
//ex28
function myFunction(){
	document.getElementById("bf").style.backfaceVisibility = "visible";
}
function myFunction(){
	document.getElementById("bf").style.backfaceVisibility = "hidden";
}
//ex29
function changeBot(){
	document.getElementById('cbb').style.borderBottom = '2px  solid red';
}
//ex30
function changeBor(){
	document.getElementById('cbbr').style.borderBottomLeftRadius = "25px";
}
//ex31
function changeBots(){
	document.getElementById('cbbs').style.borderBottom = '2px  dashed red';
}
//ex32
function changeBotw(){
	document.getElementById('cbbw').style.borderBottomWidth = "10px";
}
//ex33
function changeBorl(){
	document.getElementById('cbbl').style.borderLeft = " 5px solid";
}
//ex34
function changeBorls(){
	document.getElementById('cbbls').style.borderLeftStyle = " dashed";
}
//ex35
function changeBorr(){
	document.getElementById('cbbrrr').style.borderRight = "thick solid";
}
//ex36
function changeBorrrs(){
	document.getElementById('cbbrrrs').style.borderRightStyle = " dashed";
}
//ex37
function changeBoxs(){
	document.getElementById('cboxs').style.boxShadow = "10px 20px 30px red";
}
//ex38
function myFunction() {
  document.getElementById("demo").style.direction = "rtl";
}
//ex39
function myFunction1() {
  document.getElementById("dem").style.display = "none";
}
//ex40
function myFunction() {
  document.getElementById("ff").style.fontFamily = "Volkhov, serif";
}
//ex41
function myFunctions() {
  document.getElementById("fs").style.fontStyle = "italic";
}
//ex42
function myFunctionv() {
  document.getElementById("fv").style.fontVariant = "small-caps";
}
//ex43
function myFunctionw() {
  document.getElementById("fw").style.fontWeight = "900";
}
//ex44
function myFunctionb() {
  document.getElementById("myBtn").style.height = "50px";
}
//ex45
function myFunctionbx() {
  document.getElementById("box").style.justifyContent = "space-between";
}
//ex46
function myFunctionl() {
  document.getElementById("myList").style.listStyle = "decimal inside";
}
//ex47
function myFunctionlp() {
  document.getElementById("myUL").style.listStylePosition = "inside";
}
//ex48
function myFunctionpr() {
  document.getElementById("myULI").style.listStyleType = "upper-roman";
}
//ex49
function myFunctionm() {
  document.getElementById("mr").style.margin = "50px 10px 20px 30px";
}
//ex50
function myFunctionmb() {
  document.getElementById("mb").style.marginBottom = "50px";
}
//ex51
function myFunctionml() {
  document.getElementById("ml").style.marginLeft = "50px";
}
//ex52
function myFunctionmt() {
  document.getElementById("mt").style.marginTop = "50px";
}
//ex53
function myFunctiontd() {
  document.getElementById("td").style.textDecoration = "underline overline";
}
//ex54
function myFunctiontdc() {
  document.getElementById("tdc").style.textDecorationColor = "red";
}
//ex55
function myFunctiontt() {
  document.getElementById("tt").style.textTransform = "capitalize";
}




/*============== jq ==============*/
$(document).ready(function(){

	$('#btn').click(function(){
        alert("Welcome");
	});
});
