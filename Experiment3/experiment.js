var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */
var flr;
var fan_base;
var fan_main;
var fan_main_stand;
var fan_wing;
var fan_wing1;
var i=0;
var j;
var k;
var vfull;
var lfull;
var vghalf;
var lghalf;
var vhalf;
var lhalf;
var ltotal;
var vtotal;
var flag;
var col;
var b;
var h=1;
var arr = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
			"0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
			
var arrfull;
var arrhalf;
var arrghalf;
 var x = 0, y = 0;
 var col=0;
 var heartShape;

var fan_wing2;
var fan;
function initialiseControlVariables()
{
	i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	
	PIEremoveElement(ltotal);
	PIEremoveElement(vtotal);
	PIEremoveElement(vghalf);
	PIEremoveElement(lghalf);
	PIEremoveElement(vhalf);
	PIEremoveElement(lhalf);
	PIEremoveElement(vfull);
	PIEremoveElement(lfull);
	
h=1;
	flag=0;
}
function EXP1() {
   
	i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	
  PIEaddElement(mesh2);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
		arrfull=[];//"34","35","43","44","45","46","53","54","55","56","57","63","66"];
	arrghalf=["22","32","41","45","23","24","34","55","66","68","58"];
	arrhalf=["31","13","44","56","35","49","48","59","65","67","77","76"];

	PIErender();
}
function EXP2() {
	i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	
	
    
  PIEaddElement(mesh3);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
arrfull=["35","47","54","66"];
	arrghalf=["34","36","44","45","46","55","56","58","67","65","64","74","75","76"];
	arrhalf=["43","48","68","77","86","85","84","73","63","53","33"];
	
	PIErender();
}function EXP3() {
 i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
    
 	PIEaddElement(mesh4);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=["33","34","62","65"];
	arrghalf=["32","35","42","45","55","52","63","64","73","74"];
	arrhalf=["41","51","61","72","75","66","56","46","23","24"];
		PIErender();
}function EXP4() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
    
 	PIEaddElement(mesh5);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
		arrfull=["34","33","35","42","43","44","45","52","53","54","55","62","63","64","65"];
	arrghalf=["73","74","75","46","56","32"]//,"24","34","55","66","68","58"];
	arrhalf=["23","24","25","41","51","61","72","66","36"]//,"59","65","67","77","76"];
		PIErender();
}function EXP5() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(mesh6);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
		arrfull=["35","33","34","43","44","45","46","42","53","54","55","64","65","56"]//,"64","65"];
	arrghalf=["23","24","25","36","52","63","66","57","47","48","58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["28","68","41","32"]//,"25","41","51","61","72","66","36"]//,"59","65","67","77","76"];
		PIErender();
}function EXP6() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(mesh7);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=[]//"35","33","34","43","44","45","46","42","53","54","55","64","65","56"]//,"64","65"];
	arrghalf=["24","23","32","42","43","44","45","33","34","35"]//,"58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["52","62","63","64","65","55","56","46","36","22","25","31","41","51"]//,"59","65","67","77","76"];
		PIErender();
}function EXP7() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(mesh8);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=["21","32","33","43","44","54","65","75"]//,"53","54","55","64","65","56"]//,"64","65"];
	arrghalf=["22","31","42","53","64","74","76","55","34"]//,"48","58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["84","85","86"]//,"34","62","13","45"]//,"25","41","51","61","72","66","36"]//,"59","65","67","77","76"];
		PIErender();
}function EXP8() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(mesh12);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=["24","25","26","35","45"]//,"45","46","42","53","54","55","64","65","56"]//,"64","65"];
	arrghalf=["23","34","36"]//,"54","64"]//,"63","66","57","47","48","58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["44","55","46","27"]//,"14","15","25","74","73"]//,"59","65","67","77","76"];
		PIErender();
}function EXP9() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(mesh13);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh1);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=["15","25","35","45","55","65"]//,"45"]//,"42","53","54","55","64","65","56"]//,"64","65"];
	arrghalf=["14","24","34","44","54","64"]//,"66","57","47","48","58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["4","5","74","75"]//,"63","64","46","36"]//,"61","72","66","36"]//,"59","65","67","77","76"];
		PIErender();
}function EXP10() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(fan);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(mesh1);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=["33","34","83","84","85","82"]//,"42","53","54","55","64","65","56"]//,"64","65"];
	arrghalf=["23","24","13","14","3","4","32","35","42","45","46"]//,"38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["31","41","81","86","36","43","44"]//,"25","41","51","61","72","66","36"]//,"59","65","67","77","76"];
		PIErender();
}function EXP11() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(hill);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(mesh1);
	PIEremoveElement(disappear1);
	arrfull=["43","44","53","54","55","62","63","64","65"]//,"55","64","65","56"]//,"64","65"];
	arrghalf=["33","34","45","66","52"]//,"52","63","66","57","47","48","58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["23","24","35","42","61","56"]//,"25","41","51","61","72","66","36"]//,"59","65","67","77","76"];
		PIErender();
}

function EXP12() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(disappear1);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(mesh1);
	arrfull=["52","53","54","55","56","57","58","62","63","64","65","66","67","68"]//,"31","36"]//,"64","65"];
	arrghalf=[]//"41","46","13","14"]//,"52","63","66","57","47","48","58","38"]//,"66"]//,"24","34","55","66","68","58"];
	arrhalf=["41","42","43","44","45","46","47","48","51","61"]//,"36"]//,"59","65","67","77","76"];
		PIErender();
}
function EXP13() {
    i=0;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEaddElement(mesh1);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	arrfull=["34","35","43","44","45","46","53","54","55","56","57","63","66"];
	arrghalf=["33","36","47","64","67"];
	arrhalf=["24","25","42","52","62","65","73","74","76"];
	
	PIErender();
}
function initialiseControls()
{
    initialiseControlVariables();
	 PIEpauseAnimation();
	PIEresetExperiment();
	PIEresumeAnimation();
	PIEslowdownAnimation();
	PIEspeedupAnimation();
	PIEstartAnimation();
	PIEstopAnimation();
	PIEupdateHelp(helpContent);
	PIEupdateInfo(infoContent);
	
}
var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Graph paper based area of irregular shapes and polygons Help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment describes the method to calculate the area of irregular shapes using graph paper. </p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The Animation has next button to show next shapes.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>You can change  the shapes by pressing next button.</p>";
    helpContent = helpContent + "<ul>";
	helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, The next shape is displayed if next button is pressed. </p>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
     helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Graph paper based area of irregular shapes and polygons </h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment explains to calculate the area of irregular shapes.</p>";
    infoContent = infoContent + "<h3>Working</h3>";
    infoContent = infoContent + "<p>Shows three rows  describe differnt types of area under shape.</p>";
    infoContent = infoContent + "<p>First row : shows the number of squares complete under the shape. It is equal to numbers of white dots. <br>Second rows shows squares which is more than half under shape. It is shown by Green Dots. <br>Third Row shows the squares which are equally half under shape. It is equal to number of Blue Dots. <br> </p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    infoContent = infoContent + "<h2>Total Area  =  No. of squares fully under shape + No. of squares more than half under shape + (No. of squares equal to half covered under shape)/2</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 140.0;
    mySceneBRX = 70.0;
    mySceneBRY = -120.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
   
		   var groundMaterial = new THREE.MeshLambertMaterial( { color: 0x154368, specular: 0x111111} );
    var mesh233 = new THREE.Mesh( new THREE.PlaneBufferGeometry( 1000, 1000 ), groundMaterial );
    mesh233.position.z = -100;
	//mesh233.recieveShadow = true;
    PIEaddElement( mesh233 );
}

function initialiseOtherVariables()
{ 
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY;
    topB=mySceneTLY;
}

function remove(i){
	

 PIEremoveElement(arr[i]);
	
}
function bulbfull(i){
	
k=i%10;
j=(i-k)/10;

 geometry = new THREE.CircleGeometry(.5, 132);
    arr[i] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xB3B6B7 })); // 0xfcf0b6
    //arr[i].position.set((11.85+(k*2.7)),(21.4-(j*2.7)),430);
    //arr[i] = new THREE.PointLight( 0xffff00, 1, 100 );
arr[i].position.set((11.85+(k*2.7)),(21.4-(j*2.7)),430);
	PIEaddElement(arr[i]);
	
}
function bulbghalf(i){
	
k=i%10;
j=(i-k)/10;

 geometry = new THREE.CircleGeometry(.5, 132);
    arr[i] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x00ff00 })); // 0xfcf0b6
    arr[i].position.set((11.85+(k*2.7)),(21.4-(j*2.7)),430);
    PIEaddElement(arr[i]);
	
}
function bulbhalf(i){
	
k=i%10;
j=(i-k)/10;

 geometry = new THREE.CircleGeometry(.5, 132);
    arr[i] = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x0000ff })); // 0xfcf0b6
    arr[i].position.set((11.85+(k*2.7)),(21.4-(j*2.7)),430);
    PIEaddElement(arr[i]);
	
}

function loadExperimentElements()
{
	PIEsetExperimentTitle("Graph paper based area of irregular shapes and polygons");
    PIEsetDeveloperName("Punit Agrawal");
    PIEhideControlElement();
    initialiseHelp();
    initialiseInfo();
    initialiseScene();
    initialiseOtherVariables();

 
var shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(40, 0);
shape.lineTo(40, 0.00001);

 roundedRectShape = new THREE.Shape();
				( function roundedRect( ctx, x, y, width, height, radius ) {
					ctx.moveTo( x, y + radius );
					ctx.lineTo( x, y + height - radius );
					ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
					ctx.lineTo( x + width - radius, y + height );
					ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
					ctx.lineTo( x + width, y + radius );
					ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
					ctx.lineTo( x + radius, y );
					ctx.quadraticCurveTo( x, y, x, y + radius );
				} )( roundedRectShape, 0, 0, 50, 50, 20 );
				
heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

			 fishShape = new THREE.Shape();
				fishShape.moveTo( x, y );
				fishShape.quadraticCurveTo( x + 50, y - 80, x + 90, y - 10 );
				fishShape.quadraticCurveTo( x + 100, y - 10, x + 115, y - 40 );
				fishShape.quadraticCurveTo( x + 115, y, x + 115, y + 40 );
				fishShape.quadraticCurveTo( x + 100, y + 10, x + 90, y + 10 );
				fishShape.quadraticCurveTo( x + 50, y + 80, x, y );

				 smileyShape = new THREE.Shape();
				smileyShape.moveTo( 80, 40 );
				smileyShape.absarc( 40, 40, 40, 0, Math.PI * 2, false );
				 smileyEye1Path = new THREE.Path();
				smileyEye1Path.moveTo( 35, 20 );
				smileyEye1Path.absellipse( 25, 20, 10, 10, 0, Math.PI * 2, true );
				smileyShape.holes.push( smileyEye1Path );
				 smileyEye2Path = new THREE.Path();
				smileyEye2Path.moveTo( 65, 20 );
				smileyEye2Path.absarc( 55, 20, 10, 0, Math.PI * 2, true );
				smileyShape.holes.push( smileyEye2Path );
				 smileyMouthPath = new THREE.Path();
				smileyMouthPath.moveTo( 20, 40 );
				smileyMouthPath.quadraticCurveTo( 40, 60, 60, 40 );
				smileyMouthPath.bezierCurveTo( 70, 45, 70, 50, 60, 60 );
				smileyMouthPath.quadraticCurveTo( 40, 80, 20, 60 );
				smileyMouthPath.quadraticCurveTo( 5, 50, 20, 40 );
				smileyShape.holes.push( smileyMouthPath );
				
				var californiaPts = [];
				californiaPts.push( new THREE.Vector2( 610, 320 ) );
				californiaPts.push( new THREE.Vector2( 450, 300 ) );
				californiaPts.push( new THREE.Vector2( 392, 392 ) );
				californiaPts.push( new THREE.Vector2( 266, 438 ) );
				californiaPts.push( new THREE.Vector2( 190, 570 ) );
				californiaPts.push( new THREE.Vector2( 190, 600 ) );
				californiaPts.push( new THREE.Vector2( 160, 620 ) );
				californiaPts.push( new THREE.Vector2( 160, 650 ) );
				californiaPts.push( new THREE.Vector2( 180, 640 ) );
				californiaPts.push( new THREE.Vector2( 165, 680 ) );
				californiaPts.push( new THREE.Vector2( 150, 670 ) );
				californiaPts.push( new THREE.Vector2(  90, 737 ) );
				californiaPts.push( new THREE.Vector2(  80, 795 ) );
				californiaPts.push( new THREE.Vector2(  50, 835 ) );
				californiaPts.push( new THREE.Vector2(  64, 870 ) );
				californiaPts.push( new THREE.Vector2(  60, 945 ) );
				californiaPts.push( new THREE.Vector2( 300, 945 ) );
				californiaPts.push( new THREE.Vector2( 300, 743 ) );
				californiaPts.push( new THREE.Vector2( 600, 473 ) );
				californiaPts.push( new THREE.Vector2( 626, 425 ) );
				californiaPts.push( new THREE.Vector2( 600, 370 ) );
				californiaPts.push( new THREE.Vector2( 610, 320 ) );
				for( var i = 0; i < californiaPts.length; i ++ ) californiaPts[ i ].multiplyScalar( 0.25 );
				var californiaShape = new THREE.Shape( californiaPts );

				
				var triangleShape = new THREE.Shape();
				triangleShape.moveTo( 80, 20 );
				triangleShape.lineTo( 40, 80 );
				triangleShape.lineTo( 120, 80 );
				triangleShape.lineTo( 80, 20 ); // close path

				var trackShape = new THREE.Shape();
				trackShape.moveTo( 40, 40 );
				trackShape.lineTo( 40, 160 );
				trackShape.absarc( 60, 160, 20, Math.PI, 0, true );
				trackShape.lineTo( 80, 40 );
				trackShape.absarc( 60, 40, 20, 2 * Math.PI, Math.PI, true );
                var rectLength = 120, rectWidth = 40;
				var rectShape = new THREE.Shape();
				rectShape.moveTo( 0, 0 );
				rectShape.lineTo( 0, rectWidth );
				rectShape.lineTo( rectLength, rectWidth );
				rectShape.lineTo( rectLength, 0 );
				rectShape.lineTo( 0, 0 );

				
				
var options = {
  amount: 0.0001,
  bevelThickness: 0.000001,
  bevelSize: 0.00001,
  bevelSegments: 3,
  bevelEnabled: true,
  curveSegments: 12,
  steps: 1
};
var shapeGeo = new THREE.ExtrudeGeometry(smileyShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(roundedRectShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(californiaShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(triangleShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(trackShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(rectShape, options);

var shapeGeo = new THREE.ExtrudeGeometry(fishShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(heartShape, options);
var shapeGeo = new THREE.ExtrudeGeometry(shape, options);
var material = new THREE.MeshPhongMaterial({
  wireframe: true,
  color : 0xff0000
});

geometry = new THREE.ShapeGeometry( triangleShape );
 material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 mesh12 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh12 );
mesh12.position.z+=155;
mesh12.position.x-=105;
mesh12.position.y-=27;

geometry = new THREE.ShapeGeometry( rectShape );
 material = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
 disappear1 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( disappear1 );
disappear1.position.z+=155;
disappear1.position.x-=85;
disappear1.position.y-=27;


geometry = new THREE.ShapeGeometry( trackShape );
 material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 mesh13 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh13 );
mesh13.position.z+=55;
mesh13.position.x-=110;
mesh13.position.y-=77;

 geometry = new THREE.ShapeGeometry( smileyShape );
 material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
 mesh7 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh7 );
mesh7.position.z+=155;
mesh7.position.x-=5;
mesh7.position.y+=55;
mesh7.rotateZ(Math.PI);


 geometry = new THREE.ShapeGeometry( californiaShape );
 material = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
 mesh8 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh8 );
mesh8.position.z+=5;
mesh8.position.x-=5;
mesh8.position.y+=155;
mesh8.rotateZ(Math.PI);

 geometry = new THREE.ShapeGeometry( roundedRectShape );
 material = new THREE.MeshBasicMaterial( { color: 0xffa000 } );
 mesh5 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh5 );
mesh5.position.z+=275;
mesh5.position.x-=40;
mesh5.position.y-=20;


 geometry = new THREE.ShapeGeometry( fishShape );
 material = new THREE.MeshBasicMaterial( { color: 0x00fff0 } );
 mesh6 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh6 );
mesh6.position.z+=155;
mesh6.position.x-=85;
mesh6.position.y+=10;

 geometry = new THREE.RingGeometry( 10, 20, 32 );
 material = new THREE.MeshBasicMaterial( { color: 0xFF9D00, side: THREE.DoubleSide } );
 mesh4 = new THREE.Mesh( geometry, material );
PIEaddElement( mesh4 );

mesh4.position.z+=325;
mesh4.position.x-=5;
mesh4.position.y+=5;

	var helper = new THREE.GridHelper( 8.6, 10, 0xFF0000,0x000000 );
	helper.rotation.x = Math.PI / 2;
	helper.position.set(28,9.5,450);
	PIEaddElement( helper );
	
	

 geometry = new THREE.ShapeGeometry( heartShape );
 material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
 mesh1 = new THREE.Mesh( geometry, material ) ;
PIEaddElement( mesh1 );
mesh1.position.z+=405;
mesh1.position.x+=15;
mesh1.position.y-=0;

function CustomSinCurve( scale ) {

	THREE.Curve.call( this );

	this.scale = ( scale === undefined ) ? 1 : scale;

}

CustomSinCurve.prototype = Object.create( THREE.Curve.prototype );
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function ( t ) {

	var tx = t * 3 - 1.5;
	var ty = Math.sin( 2 * Math.PI * t );
	var tz = 0;

	return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

};

 path = new CustomSinCurve( 10 );
 geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
 material = new THREE.MeshBasicMaterial( { color: 0xff00ff } );
 mesh2 = new THREE.Mesh( geometry, material );
PIEaddElement( mesh2 );
mesh2.position.z+=405;
mesh2.position.x+=20;
mesh2.position.y+=10;

 geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
 material = new THREE.MeshBasicMaterial( { color: 0xEB984E } );
 mesh3 = new THREE.Mesh( geometry, material );
PIEaddElement( mesh3 );
mesh3.position.z+=355;
mesh3.position.x+=15;
mesh3.position.y+=4;

fan = new THREE.Group();
fan_base = new THREE.Mesh(new THREE.BoxGeometry(40,40,5),material);
fan_base.position.set(0, -30, 90);
fan_base.rotation.x += Math.PI/2;
fan.add(fan_base);
fan_main = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 1, 32), material);
fan_main.position.set(0, 20, 90);
fan_main.rotation.z += Math.PI/2;
fan.add(fan_main);
fan_main_stand = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 50, 32), material);
fan_main_stand.position.set(0, -5, 90);

fan.add(fan_main_stand);
var fan_geo = new THREE.BoxGeometry(1,26,14);
fan_geo.applyMatrix( new THREE.Matrix4().makeTranslation( 0,13, 0 ) );
fan_wing = new THREE.Mesh(fan_geo,material);
fan_wing.position.set(0,20,90);
fan.add(fan_wing);
fan_wing1 = new THREE.Mesh(fan_geo,material);
fan_wing1.position.set(0,20,90);
fan_wing1.rotation.x +=2.094;
fan.add(fan_wing1);
fan_wing2 = new THREE.Mesh(fan_geo,material);
fan_wing2.position.set(0,20,90);
fan_wing2.rotation.x += 4.189;
fan.add(fan_wing2);
PIEaddElement(fan);
fan.position.z += 305;

fan.position.y +=5;
fan.position.x -=100;
fan.rotation.y += 121;


 

	//PIEstartButton.addEventListener("click", PIEstopAnimation);
	
	
 loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
		 geometry = new THREE.TextGeometry("Next", {
            font : font,
            size : 10,
            height : 0,
        });
		
 		        gval=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x000000}));
        gval.translation = geometry.center();
PIEaddElement(gval);       
	    gval.position.set((mySceneTLX+ mySceneBRX)/2+95, (mySceneBRY+ mySceneTLY)/2-90, 11);
	   
});
	
	
	geometry = new THREE.CylinderGeometry(70,10, 100);
    hill = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xA00000 })); // 0xfcf0b6
    hill.position.set(-80, 10, 0.3);
hill.rotation.z=-Math.PI;
hill.castShadow=false;
hill.recieveShadow=false;
    PIEaddElement(hill);
	/*texture = new THREE.TextureLoader().load( 'india.png' );

 geometry = new THREE.BoxGeometry(150.2, 150);
    mesh8 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map:texture })); // 0xfcf0b6
    mesh8.position.set(-80, 20, 10.5);
    PIEaddElement(mesh8);
	*/
 geometry = new THREE.BoxGeometry(15.2, 15);
    time = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color:0x000000 })); // 0xfcf0b6
    time.position.set(60, -180, 10.5);
    PIEaddElement(time);
geometry = new THREE.BoxGeometry(30, 30);
    button = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color:0xffff00 })); // 0xfcf0b6
    button.position.set(130, -75, 10.5);
    PIEaddElement(button);
	PIEsetClick(button,function(){flag=flag%13;time.position.x=60; i=0;h=1;
	while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	
	PIEremoveElement(ltotal);
	PIEremoveElement(vtotal);
	PIEremoveElement(vghalf);
	PIEremoveElement(lghalf);
	PIEremoveElement(vhalf);
	PIEremoveElement(lhalf);
	PIEremoveElement(vfull);
	PIEremoveElement(lfull);
	if(flag==0)
		EXP1();
	else if(flag==1)
		EXP2();
	else if(flag==2)
		EXP3();
	else if(flag==3)
		EXP4();
	else if(flag==4)
		EXP5();
	else if(flag==5)
		EXP6();
	else if(flag==6)
		EXP7();
	else if(flag==7)
		EXP8();
	else if(flag==8)
		EXP9();
	else if(flag==9)
		EXP10();
	else if(flag==10)
		EXP11();
	else if(flag==11)
		EXP12();
	else if(flag==12)
		EXP13();
	flag=flag+1;
	PIEstartAnimation();
	});
geometry = new THREE.BoxGeometry(35, 35);
    but = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color:0x00ff00 })); // 0xfcf0b6
    but.position.set(130, -75, 10);
    PIEaddElement(but);
		
	
	
	texture = new THREE.TextureLoader().load( 'graph1.jpg' );

 geometry = new THREE.PlaneGeometry(120, 120);
    graph = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map:texture })); // 0xfcf0b6
    graph.position.set(-124.5, 63.5, -10.5);
    PIEaddElement(graph);
	texture = new THREE.TextureLoader().load( 'graph1.jpg' );

 geometry = new THREE.PlaneGeometry(120, 120);
    graph = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map:texture })); // 0xfcf0b6
    graph.position.set(-124.5, -57.5, -10.5);
    PIEaddElement(graph);
	texture = new THREE.TextureLoader().load( 'graph1.jpg' );

 geometry = new THREE.PlaneGeometry(120, 120);
    graph = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map:texture })); // 0xfcf0b6
    graph.position.set(-3.5, 63.5, -10.5);
    PIEaddElement(graph);
	texture = new THREE.TextureLoader().load( 'graph1.jpg' );

 geometry = new THREE.PlaneGeometry(120, 120);
    graph = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map:texture })); // 0xfcf0b6
    graph.position.set(-3.5, -57.5, -10.5);
    PIEaddElement(graph);
	
	
	initialiseControls();
 resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
}

function resetExperiment()
{
    initialiseOtherVariables();
	//initialiseControlVariables();
	h=1;
flag=0;
while(i<100){
		PIEremoveElement(arr[i]);
	i++;}
	PIEremoveElement(mesh1);
	PIEremoveElement(mesh2);
	PIEremoveElement(mesh3);
	PIEremoveElement(mesh4);
	PIEremoveElement(mesh5);
	PIEremoveElement(mesh6);
	PIEremoveElement(mesh7);
	PIEremoveElement(mesh8);
	PIEremoveElement(mesh12);
	PIEremoveElement(mesh13);
	PIEremoveElement(fan);
	PIEremoveElement(hill);
	PIEremoveElement(disappear1);
	
	PIEremoveElement(vghalf);
	PIEremoveElement(lghalf);
	PIEremoveElement(vhalf);
	PIEremoveElement(lhalf);
	PIEremoveElement(vfull);
	PIEremoveElement(lfull);
	PIEremoveElement(ltotal);
	PIEremoveElement(vtotal);

}

function updateExperimentElements(t, dt)
{
 if(time.position.x<=50&&h==1){
	 	i=0;
	while(i<arrfull.length){
		bulbfull(arrfull[i]);
 i++;}h=2;
 loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
       geometry = new THREE.TextGeometry("Full(white Dots) :", {
            font : font,
            size : 8,
            height : 0,
        });
		        lfull=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        lfull.translation = geometry.center();
		PIEaddElement(lfull);       
	   lfull.position.set((mySceneTLX+ mySceneBRX)/2+95, (mySceneBRY+ mySceneTLY)/2+53, -99);
	   
	   geometry = new THREE.TextGeometry(arrfull.length, {
            font : font,
            size : 8,
            height : 0,
        });
		        vfull=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        vfull.translation = geometry.center();
		PIEaddElement(vfull);       
	   vfull.position.set((mySceneTLX+ mySceneBRX)/2+155, (mySceneBRY+ mySceneTLY)/2+53, -99);
	   
	   
	});
 }
 if(time.position.x<30&&h==2){
	 i=0;
	while(i<arrghalf.length){
		bulbghalf(arrghalf[i]);
 i++;}
 h=3;
 loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
       geometry = new THREE.TextGeometry("> Half(Green Dots) :", {
            font : font,
            size : 8,
            height : 0,
        });
		        lghalf=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        lghalf.translation = geometry.center();
		PIEaddElement(lghalf);       
	   lghalf.position.set((mySceneTLX+ mySceneBRX)/2+95, (mySceneBRY+ mySceneTLY)/2+33, -99);
	   
	   geometry = new THREE.TextGeometry(arrghalf.length, {
            font : font,
            size : 8,
            height : 0,
        });
		        vghalf=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        vghalf.translation = geometry.center();
		PIEaddElement(vghalf);       
	   vghalf.position.set((mySceneTLX+ mySceneBRX)/2+155, (mySceneBRY+ mySceneTLY)/2+33, -99);
	   
	   
	});
 }
 
 if(time.position.x<10&&h==3){
	 i=0;
	while(i<arrhalf.length){
		bulbhalf(arrhalf[i]);
 i++;}h=4;
 
 loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
       geometry = new THREE.TextGeometry("Half(Blue Dots) :", {
            font : font,
            size : 8,
            height : 0,
        });
		        lhalf=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        lhalf.translation = geometry.center();
		PIEaddElement(lhalf);       
	   lhalf.position.set((mySceneTLX+ mySceneBRX)/2+95, (mySceneBRY+ mySceneTLY)/2+13, -99);
	   
	   geometry = new THREE.TextGeometry(arrhalf.length, {
            font : font,
            size : 8,
            height : 0,
        });
		        vhalf=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        vhalf.translation = geometry.center();
		PIEaddElement(vhalf);       
	   vhalf.position.set((mySceneTLX+ mySceneBRX)/2+155, (mySceneBRY+ mySceneTLY)/2+13, -99);
	   
	   
	});
 }
 
 if(time.position.x<5&&h==4){
	 h=5;
loader = new THREE.FontLoader();
    loader.load("optimer.json", function(response){
		font = response;
     	    
		geometry = new THREE.TextGeometry("Area by Counting :", {
            font : font,
            size : 8,
            height : 0,
        });
		
 		        ltotal=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0x00ffff}));
        ltotal.translation = geometry.center();
PIEaddElement(ltotal);       
	    ltotal.position.set((mySceneTLX+ mySceneBRX)/2+115, (mySceneBRY+ mySceneTLY)/2-5, -99);
	geometry = new THREE.TextGeometry(((arrhalf.length/2)+arrfull.length+arrghalf.length), {
            font : font,
            size : 8,
            height : 0,
        });
		        vtotal=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color:0xffff00}));
        vtotal.translation = geometry.center();
		PIEaddElement(vtotal);       
	   vtotal.position.set((mySceneTLX+ mySceneBRX)/2+115, (mySceneBRY+ mySceneTLY)/2-23, -99);
	   
	});  
	 //PIEstopAnimation();
	 
 }
 if(time.position.x<4)
 {
	 PIEstopAnimation();
	// initialiseControlVariables();
 }
 time.position.x-=0.1;
 
}
