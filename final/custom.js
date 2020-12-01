
function dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}
var flag=false;
function showPreview(){

	file = document.querySelector("input[type=file]").files[0];
	preview = document.getElementById("img");
	reader = new FileReader();

	flag=true;
	reader.addEventListener("load", function () {
	preview.src = reader.result;
	  }, false);
  

    reader.readAsDataURL(file);
	src_img = document.getElementById("img");
		document.getElementById("div1").style.display="block";
	document.getElementById("div").style.display="none";
	document.getElementById("div2").style.display="none";
	document.getElementById("div3").style.visibility = "visible";
}
function b(){
	n= parseInt(document.getElementById("abs").value);
	n=(n*100)/88;
	n=Math.floor( n );
	document.getElementById("l4").innerHTML =n+"%";
}
	n= parseInt(document.getElementById("abs").value);
	n=(n*100)/88;
	n=Math.floor( n );
	document.getElementById("l4").innerHTML =n+"%";
app = angular.module("demoApp",[]);
app.controller('demoController', ['$scope', '$http', function($scope, $http) {
	$scope.compressAndUpload = function(){
		
        src_img = document.querySelector("img");
    	target_img = document.createElement("IMG");
    	target_img.src = jic.compress(src_img,50,'jpg').src;
    	
		blob1 = dataURItoBlob(src_img.src);
    	blob = dataURItoBlob(target_img.src);
    	blob.filename="demofile.png";
    	
    	fd = new FormData();
    	fd.append('demoimage', blob,"demofile.png".replace(/\.[^/.]+$/, ".jpg"));
        
     console.log(blob1.size,"done",blob.size);
	};
	
	
}]);
  var URL = window.URL || window.webkitURL;
  
function a1(){
	
	if(flag){
	  var a= parseFloat(document.getElementById("abs").value);
	  document.getElementById("div2").style.display="block";
	  a=88-a;
	  console.log(a);
	src_img = document.getElementById("img");
    	target_img = document.createElement("IMG");
    	target_img.src = jic.compress(src_img,a,'jpg').src;
    
		
		blob1 = dataURItoBlob(src_img.src);
    	blob = dataURItoBlob(target_img.src);
    	blob.filename="demofile.png";
		outputURL = URL.createObjectURL(blob);
	   console.log(outputURL);
       document.getElementById("download").setAttribute("href",outputURL); 
	   document.getElementById("img2").setAttribute("src",outputURL); 
       var leval =((blob1.size-blob.size)/blob1.size)*100;
	   var f=parseInt(blob1.size,10);
	   f=Math.floor(f/1024);
	    var f1=parseInt(blob.size,10);
	 f1=Math.floor(f1/1024);
	 
       document.getElementById("l2").innerHTML = "Input Size: "+f+" Kb";
	   document.getElementById("l3").innerHTML = "Output Size: "+f1 +" Kb";
       console.log(blob1.size,"done",blob.size," ",leval);
	}
}