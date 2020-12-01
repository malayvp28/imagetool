const uploadFile = document.getElementById("uploadbutton");
var canvas1=document.getElementById("canvas_editing");
var ctx1 = canvas1.getContext("2d");
var canvas2= new fabric.Canvas("canvas_font");
b=[0,0];
if(uploadFile)
	console.log("yes");
img = new Image();
img1 = new Image();
flag=0;
uploadFile.addEventListener("change", () => 
{
	console.log("enter");
	var file = document.getElementById("uploadbutton").files[0];
	
	var reader = new FileReader();
	
	if (file) 
	{
		fileName = file.name;
		reader.readAsDataURL(file);
		console.log("done");
	}

     reader.addEventListener("load",() => 
	{
		console.log("enter");
		
		img.src = reader.result;
		img.onload = function() 
		{
		x=img.width;
		y=img.height;
	    x1=img.width;
		y1=img.height;
		console.log(x,"x and y ",y);
		 var o = document.getElementById('c3').offsetWidth;
		 var o1 = document.getElementById('c3').offsetHeight;
		 console.log(o,"don",o1);
		 o=o-(.1)*o;
		 if(x>y)
		 {
			if(o1>(y*o/x))
			{
				y=y*o/x;
				x=o;
			}
			else
			{
				x=(o1-40)*x/y;
				y=(o1-40);
				
			}
			 
		 }
		 else
		 {
			 	if(o>(x*(o1-40)/y))
			{
				x=x*(o1-40)/y;
				y=(o1-40);
			}
			else
			{
				x=(o1-40)*x/y;
				y=(o1-40);
				
			}
			
			 
		 }
		   console.log(x,"x and y ",y);
		    x1=x*90/o;
		   x=x+"px";
		   y1=y*90/(o1-40)
		 
		  y=y+"px";
		     console.log(x,"x and y ",y);
		var a=document.getElementById("main_image");
		var c=document.getElementById("c3");
         a.setAttribute("src",img.src);
		 	a.setAttribute("width",x);
			a.setAttribute("height",y);
			
	     a.setAttribute("style","display:block");
		 var b=document.getElementById("navigate_img");
         b.setAttribute("src",img.src);
		 var h=document.getElementById("navi_hide");
         h.setAttribute("style","display:block");
		
		 x1=x1+"%";
         y1=y1+"%";
		 b.setAttribute("width",x1);
		 b.setAttribute("height",y1);
			 var d=document.getElementById("start_img");
        d.setAttribute("src",img.src);
		 d.setAttribute("width",x1);
		 d.setAttribute("height",y1);
		 document.getElementById("alink").setAttribute("href",img.src);
		 document.getElementById("main_upload_button").setAttribute("style","display:none");
		
		console.log(a.height," w:",a.width,"c",o);
		 canvas1.width = a.width;
		 canvas1.height = a.height;
		 	ctx1 = canvas1.getContext("2d");
			
			ctx1.drawImage(img, 0, 0,a.width,a.height);
			Url = canvas1.toDataURL("image/jpeg");
			document.getElementById("canvas_editing").setAttribute("style","display:none");
			document.getElementById("divid").setAttribute("style","display:block");
			document.getElementById("main_image").setAttribute("style","display:none");
			flag=1;
			canvas2.setHeight(a.height);
            canvas2.setWidth(a.width);
			canvas2.setBackgroundImage(Url, canvas2.renderAll.bind(canvas2), {
			backgroundImageOpacity:1,
			backgroundImageStretch: false
   });
     
		};
         
	},
    false
	);
	
});
function start_new_img(){
	
var file = document.getElementById("upload-file").files[0];
		var reader = new FileReader();

	if (file) 
	{
		fileName = file.name;
		reader.readAsDataURL(file);
		console.log("done");
	}

     reader.addEventListener("load",() => 
	{
		console.log("enter");
		
		img1.src = reader.result;
		img1.onload = function() 
		{
		x=img1.width;
		y=img1.height;
	    x1=img1.width;
		y1=img1.height;
		console.log(x,"x and y ",y);
		 var o = document.getElementById('c3').offsetWidth;
		 var o1 = document.getElementById('c3').offsetHeight;
		 console.log(o,"don",o1);
		 o=o-(.1)*o;
		 if(x>y)
		 {
			if(o1>(y*o/x))
			{
				y=y*o/x;
				x=o;
			}
			else
			{
				x=(o1-40)*x/y;
				y=(o1-40);
				
			}
			 
		 }
		 else
		 {
			 	if(o>(x*(o1-40)/y))
			{
				x=x*(o1-40)/y;
				y=(o1-40);
			}
			else
			{
				x=(o1-40)*x/y;
				y=(o1-40);
				
			}
			
			 
		 }
		   console.log(x,"x and y ",y);
		    x1=x*90/o;
		   x=x+"px";
		   y1=y*90/(o1-40);
		 
		  y=y+"px";
		 
		
		 console.log(x1,"x and y ",y1," ",o);
		 var b=document.getElementById("start_img");
         b.setAttribute("src",img1.src);
		 
		 x1=x1+"%";
         y1=y1+"%";
		
		
		 b.setAttribute("width",x1);
		 b.setAttribute("height",y1);
		b.setAttribute("style","display:block");
	
		};
         
	},
    false
	);
	
}
function load(){
	console.log("load");
	upload_new_file();

}


function upload_new_file(){
	console.log("enter");
	
		
		img.src = img1.src;
	    img.onload = function() 
		{
		x=img.width;
		y=img.height;
	    x1=img.width;
		y1=img.height;
		console.log(x,"x and y ",y);
		 var o = document.getElementById('c3').offsetWidth;
		 var o1 = document.getElementById('c3').offsetHeight;
		 console.log(o,"don",o1);
		 o=o-(.1)*o;
		 if(x>y)
		 {
			if(o1>(y*o/x))
			{
				y=y*o/x;
				x=o;
			}
			else
			{
				x=(o1-40)*x/y;
				y=(o1-40);
				
			}
			 
		 }
		 else
		 {
			 	if(o>(x*(o1-40)/y))
			{
				x=x*(o1-40)/y;
				y=(o1-40);
			}
			else
			{
				x=(o1-40)*x/y;
				y=(o1-40);
				
			}
			
			 
		 }
		   console.log(x,"x and y ",y);
		    x1=x*90/o;
		   x=x+"px";
		   y1=y*90/(o1-40);
		 
		  y=y+"px";
		     console.log(x,"x and y ",y);
		var a=document.getElementById("main_image");
		var c=document.getElementById("c3");
         a.setAttribute("src",img.src);
		 	a.setAttribute("width",x);
			a.setAttribute("height",y);
			
	     a.setAttribute("style","display:block");
		 var b=document.getElementById("navigate_img");
         b.setAttribute("src",img.src);
		 var h=document.getElementById("navi_hide");
         h.setAttribute("style","display:block");
		
		 x1=x1+"%";
         y1=y1+"%";
		 b.setAttribute("width",x1);
		 b.setAttribute("height",y1);
			 var d=document.getElementById("start_img");
        d.setAttribute("src",img.src);
		 d.setAttribute("width",x1);
		 d.setAttribute("height",y1);
		 document.getElementById("main_upload_button").setAttribute("style","display:none");
		
		console.log(a.height," w:",a.width,"c",o);
		 canvas1.width = a.width;
		 canvas1.height = a.height;
		 	ctx1 = canvas1.getContext("2d");
			
			ctx1.drawImage(img, 0, 0,a.width,a.height);
			document.getElementById("alink").setAttribute("href",img.src);
			Url = canvas1.toDataURL("image/jpeg");
			document.getElementById("canvas_editing").setAttribute("style","display:none");
			document.getElementById("divid").setAttribute("style","display:block");
			document.getElementById("main_image").setAttribute("style","display:none");
			canvas2.setHeight(a.height);
			flag=1;
            canvas2.setWidth(a.width);
			canvas2.setBackgroundImage(Url, canvas2.renderAll.bind(canvas2), {
			backgroundImageOpacity:1,
			backgroundImageStretch: false
   });
     
		};
         

}
function adjust_tool(){

b[0]=1;b[1]=0;
var a1=document.getElementById("brightness");
var a2=document.getElementById("contrast");
var a3=document.getElementById("saturation");
var a4=document.getElementById("vibrance");
var a5=document.getElementById("noise");
var a6=document.getElementById("sepia");

var bright = parseInt(a1.value);
var contrast = parseInt(a2.value);
var saturation = parseInt(a3.value);
var vibrance = parseInt(a4.value);
var noise = parseInt(a5.value);
var sepia = parseInt(a6.value); 
	console.log(bright); 
	console.log(contrast); 
	console.log(saturation); 
	console.log(vibrance); 
	console.log(noise); 
	console.log(sepia); 
		  
   
	Caman("#canvas_editing", function(){
		
		
		console.log("helo1",bright);
	this.revert(false);
	this.brightness(bright);
	this.contrast(contrast);
	this.saturation(saturation);
	this.vibrance(vibrance);
	this.noise(noise);
	this.sepia(sepia);
	
	this.render();
	

		 
		
	});
}
function auto_adjust_tool(){
	b[0]=1;b[1]=0;
	Caman("#canvas_editing", function(){
		
		
		
	this.revert(false);
	this.brightness(5);
	this.contrast(5);
	this.saturation(-5);
	this.vibrance(-5);
	this.noise(0);
	this.sepia(20);
	
	this.render();
	

		 
		
	});
	
}
function revert(){
	Caman("#canvas_editing", function(){
    this.revert();
    this.render();
	hidemenu();
	});
	
}
function closefont(){
	var myobj2 = document.getElementById("divid");
    myobj2.remove();  
    can = document.createElement("canvas"); 
    can.id = 'canvas_font';
	 di = document.createElement("div"); 
    di.id = 'divid';
	
	document.getElementById("add_div").appendChild(di);
	document.getElementById("divid").appendChild(can);
	canvas2= new fabric.Canvas("canvas_font");
	img.src=Url;
	hidemenu();
}
function save(){
	if(b[0]==1)
	  Url = canvas1.toDataURL("image/jpeg");
    else
	  Url = canvas2.toDataURL("image/jpeg");
	var myobj1 = document.getElementById("canvas_editing");
    myobj1.remove();  
    var can = document.createElement("canvas"); 
    can.id = 'canvas_editing';
	document.getElementById("add_div").appendChild(can);
	canvas1=document.getElementById("canvas_editing");
    ctx1 = canvas1.getContext("2d");
    var myobj2 = document.getElementById("divid");
    myobj2.remove();  
    can = document.createElement("canvas"); 
    can.id = 'canvas_font';
	 di = document.createElement("div"); 
    di.id = 'divid';
	
	document.getElementById("add_div").appendChild(di);
	document.getElementById("divid").appendChild(can);
	canvas2= new fabric.Canvas("canvas_font");
	
document.getElementById("alink").setAttribute("href",Url);
	img.src=Url;
	
	
}
function hidemenu(){

	document.getElementById("id").style.display="block";
	document.getElementById("id").style.backgroundColor="black";
	document.getElementById("id4").style.display="none";
	document.getElementById("id3").style.display="none";
	document.getElementById("id2").style.display="none";
	document.getElementById("id1").style.display="none";
	document.getElementById("id5").style.display="none";
		if(flag==1)
	{
	document.getElementById("main_image").style.display="block";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="none";
	}
	else{
			document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="block";
	}
}
	function effect(){

	document.getElementById("id4").style.backgroundColor="rgb(20,20,20)";
	document.getElementById("id1").style.display="none";
	document.getElementById("id2").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("id3").style.display="none";
	document.getElementById("id4").style.display="block";
	document.getElementById("id5").style.display="none";
		if(flag==1)
	{
	document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="block";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="none";
	}
	else{
			document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="block";
	}
	}
	function adjust(){
	document.getElementById("id3").style.backgroundColor="rgb(20,20,20)";
	document.getElementById("id1").style.display="none";
	document.getElementById("id4").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("id2").style.display="none";
	document.getElementById("id3").style.display="block";
	document.getElementById("id5").style.display="none";
			if(flag==1)
	{
	document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="block";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="none";
	}
	else{
			document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="block";
	}

	}
  function uploadIm(){
  document.getElementById("id1").style.backgroundColor="rgb(20,20,20)";
	document.getElementById("id3").style.display="none";
	document.getElementById("id4").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("id2").style.display="none";
	document.getElementById("id1").style.display="block";
	document.getElementById("id5").style.display="none";
		if(flag==1)
	{
	document.getElementById("main_image").style.display="block";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="none";
	}
	else{
			document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="block";
	}
  
  }
    function uploadUrl(){
  document.getElementById("id2").style.backgroundColor="rgb(20,20,20)";
	document.getElementById("id3").style.display="none";
	document.getElementById("id4").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("id1").style.display="none";
	document.getElementById("id2").style.display="block";
	document.getElementById("id5").style.display="none";
  
  }
function font(){

  document.getElementById("id5").style.backgroundColor="rgb(20,20,20)";
	document.getElementById("id3").style.display="none";
	document.getElementById("id4").style.display="none";
	document.getElementById("id").style.display="none";
	document.getElementById("id1").style.display="none";
	document.getElementById("id5").style.display="block";
	document.getElementById("id2").style.display="none";
	if(flag==1)
	{
	document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="block";
	document.getElementById("main_upload_button").style.display="none";
	}
	else{
			document.getElementById("main_image").style.display="none";
	document.getElementById("canvas_editing").style.display="none";
	document.getElementById("divid").style.display="none";
	document.getElementById("main_upload_button").style.display="block";
	}
}
function lom(){
b[0]=1;b[1]=0;
	Caman("#canvas_editing", function(){
this.revert();
this.lomo();
this.render();
 });
}
function vin(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.vintage();
this.render();
 });
} 
function cla(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
 this.clarity();
this.render();
 });
}  
function sin(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
 this.sinCity();
this.render();
 });
}  
function cro(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.crossProcess();
this.render();
 });
}  
function pin(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
 this.pinhole();
this.render();
 });
}  
function nos(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.nostalgia();
this.render();
 });
}  
function her(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.herMajesty();
this.render();
 });
}  
function sun(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.sunrise();
this.render();
 });
}  
function ora(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
 this.orangePeel();
this.render();
 });
}  
function lov(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.love();
this.render();
 });
}  
function gru(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.grungy();
this.render();
 });
}  
function jar(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.jarques();
this.render();
 });
}  
function glo(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
 this.glowingSun();
this.render();
 });
}  
function haz(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();
this.hazyDays();
this.render();
 });
}  
function none(){
	b[0]=1;b[1]=0;
Caman("#canvas_editing", function(){
this.revert();

this.render();
 });
}   
var Text = new fabric.IText('Tap or Type', {
        left: 50,
        top: 100,
        fontFamily: 'arial black',
        fill: 'rgb(0,0,0)',
       opacity: 1,
	  textAlign: 'center',
	  width:10,
        fontSize: 50
});
function Addtext() {
       b[0]=0;b[1]=1;

      canvas2.add(Text);
       Text.width=20;
	   }
	 fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.padding = 5;
document.getElementById('text-color').onclick = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('text-color').onchange = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('text-color1').onclick = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('text-color1').onchange = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };	

	document.getElementById('text-color4').onclick = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('text-color4').onchange = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
	document.getElementById('text-color5').onclick = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('text-color5').onchange = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
	document.getElementById('text-color2').onclick = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('text-color2').onchange = function() {
      console.log("enter color");
	 Text.setFill(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('underline').onclick = function() {
      console.log("enter color");
	 Text.set("textDecoration", "underline");
      canvas2.renderAll();
	  
    };
document.getElementById('bold').onclick = function() {
      console.log("enter color");
	 Text.set("fontWeight", "bold");
      canvas2.renderAll();
	  
    };
document.getElementById('italic').onclick = function() {
      console.log("enter color");
	 Text.set("fontStyle", "italic");
      canvas2.renderAll();
	  
    };	
  document.getElementById('font-size').onchange = function() {
      Text.setFontSize(this.value);
      canvas2.renderAll();
    };	
	 document.getElementById('stroke').onchange = function() {
      Text.setStrokeWidth(this.value);
      canvas2.renderAll();
    };
	
	
	document.getElementById('color').onchange = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('color1').onclick = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('color1').onchange = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };	
	document.getElementById('color3').onclick = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('color3').onchange = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
	document.getElementById('color4').onclick = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('color4').onchange = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
	document.getElementById('color5').onclick = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
document.getElementById('color5').onchange = function() {
      console.log("enter color");
	 Text.setStroke(this.value);
      canvas2.renderAll();
	  
    };
function fonttype(){
	document.getElementById("id5").style.display="none";
	document.getElementById("idfont").style.display="block";
}
function hidemenu1(){
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
}		
function c1(){
	Text.setFontFamily('arial');
	canvas2.renderAll();
}
function c2(){
	Text.setFontFamily('arial black');
	canvas2.renderAll();
}
function c3(){
	Text.setFontFamily('sans');
	canvas2.renderAll();
}
function c4(){
	Text.setFontFamily('modak');
	canvas2.renderAll();
}
function c5(){
	Text.setFontFamily('Grenze Gotisch');
	canvas2.renderAll();
}
function c6(){
	Text.setFontFamily('Bangers');
	canvas2.renderAll();
}
function c7(){
	Text.setFontFamily('Fondamento');
	canvas2.renderAll();
}
function c8(){
	Text.setFontFamily('Montserrat Subrayada');
	canvas2.renderAll();
}
function c9(){
	Text.setFontFamily('doodle');
	canvas2.renderAll();
}
function c10(){
	Text.setFontFamily('Galada');
	canvas2.renderAll();
}
function c11(){
	Text.setFontFamily('Yellowtail');
	canvas2.renderAll();
}
function c12(){
	Text.setFontFamily('Dancing Script');
	canvas2.renderAll();
}
function c13(){
	Text.setFontFamily('Pacifico');
	canvas2.renderAll();
}
function c14(){
	Text.setFontFamily('Abril Fatface');
	canvas2.renderAll();
}
function c15(){
	Text.setFontFamily('Merienda One');
	canvas2.renderAll();
}
function c16(){
	Text.setFontFamily('Monoton');
	canvas2.renderAll();
}
function c17(){
	Text.setFontFamily('Berkshire Swash');
	canvas2.renderAll();
}
function c18(){
	Text.setFontFamily('Piedra');
	canvas2.renderAll();
}
function c19(){
	Text.setFontFamily('Fredericka the Great');
	canvas2.renderAll();
}
function c20(){
	Text.setFontFamily('Rye');
	canvas2.renderAll();
}
function c21(){
	Text.setFontFamily('Sedgwick Ave Display');
	canvas2.renderAll();
}
function f1(){
	document.getElementById("b").innerHTML = "Arial";
	document.getElementById("b").style.fontFamily="arial";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('arial');
    canvas2.renderAll();
}
function f2(){
	document.getElementById("b").innerHTML = "Arial Black";
	document.getElementById("b").style.fontFamily="arial black";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('arial black');
    canvas2.renderAll();
}	
function f3(){
	document.getElementById("b").innerHTML = "Sans";
	document.getElementById("b").style.fontFamily="sans";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('sans');
    canvas2.renderAll();
}	
function f4(){
	document.getElementById("b").innerHTML = "Modak";
	document.getElementById("b").style.fontFamily="modak";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('modak');
    canvas2.renderAll();
}	
function f5(){
	document.getElementById("b").innerHTML = "Grenze Gotisch";
	document.getElementById("b").style.fontFamily="Grenze Gotisch";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Grenze Gotisch');
    canvas2.renderAll();
}	
function f6(){
	document.getElementById("b").innerHTML = "Bangers";
	document.getElementById("b").style.fontFamily="Bangers";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Bangers');
    canvas2.renderAll();
}	
function f7(){
	document.getElementById("b").innerHTML = "Fondamento";
	document.getElementById("b").style.fontFamily="Fondamento";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Fondamento');
    canvas2.renderAll();
}	
function f8(){
	document.getElementById("b").innerHTML = "Montserrat Subrayada";
	document.getElementById("b").style.fontFamily="Montserrat Subrayada";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Montserrat Subrayada');
    canvas2.renderAll();
}	
function f9(){
	document.getElementById("b").innerHTML = "Doodle";
	document.getElementById("b").style.fontFamily="doodle";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('doodle');
    canvas2.renderAll();
}	
function f10(){
	document.getElementById("b").innerHTML = "Galada";
	document.getElementById("b").style.fontFamily="Galada";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Galada');
    canvas2.renderAll();
}	
function f11(){
	document.getElementById("b").innerHTML = "Yellowtail";
	document.getElementById("b").style.fontFamily="Yellowtail";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Yellowtail');
    canvas2.renderAll();
}	
function f12(){
	document.getElementById("b").innerHTML = "Dancing Script";
	document.getElementById("b").style.fontFamily="Dancing Script";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Dancing Script');
    canvas2.renderAll();
}	
function f13(){
	document.getElementById("b").innerHTML = "Pacifico";
	document.getElementById("b").style.fontFamily="Pacifico";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Pacifico');
    canvas2.renderAll();
}	
function f14(){
	document.getElementById("b").innerHTML = "Abril Fatface";
	document.getElementById("b").style.fontFamily="Abril Fatface";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Abril Fatface');
    canvas2.renderAll();
}	
function f15(){
	document.getElementById("b").innerHTML = "Merienda One";
	document.getElementById("b").style.fontFamily="Merienda One";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Merienda One');
    canvas2.renderAll();
}	
function f16(){
	document.getElementById("b").innerHTML = "Monoton";
	document.getElementById("b").style.fontFamily="Monoton";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Monoton');
    canvas2.renderAll();
}	
function f17(){
	document.getElementById("b").innerHTML = "Berkshire Swash";
	document.getElementById("b").style.fontFamily="Berkshire Swash";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Berkshire Swash');
    canvas2.renderAll();
}	
function f18(){
	document.getElementById("b").innerHTML = "Piedra";
	document.getElementById("b").style.fontFamily="Piedra";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Piedra');
    canvas2.renderAll();
}	
function f19(){
	document.getElementById("b").innerHTML = "Fredericka the Great";
	document.getElementById("b").style.fontFamily="Fredericka the Great";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Fredericka the Great');
    canvas2.renderAll();
}	
function f20(){
	document.getElementById("b").innerHTML = "Rye";
	document.getElementById("b").style.fontFamily="Rye";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Rye');
    canvas2.renderAll();
}	
function f21(){
	document.getElementById("b").innerHTML = "Sedgwick Ave Display";
	document.getElementById("b").style.fontFamily="Sedgwick Ave Display";
	document.getElementById("id5").style.display="block";
	document.getElementById("idfont").style.display="none";
	Text.setFontFamily('Sedgwick Ave Display";');
    canvas2.renderAll();
}	
	
function download(){
var a=document.getElementById("main_image").src;
document.getElementById("alink").href=a;
}