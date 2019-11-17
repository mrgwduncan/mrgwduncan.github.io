function toggle(content){
	div = document.getElementById(content);
	boo = div.style.display
	baa = "block"
	menu = document.getElementById("banner")
	
		if (boo == baa) {
			div.style.display = "none";	
			document.getElementById("banner").classList.remove("active");
			document.getElementById("fb").innerHTML = "&#xf0d7;";
		}
		else {
			div.style.display = "block";
			 document.getElementById("banner").classList.add("active"); 
			 document.getElementById("fb").innerHTML = "&#xf0d8;";
		}
	}
	
function load_content(content) {
     document.getElementById("content").innerHTML='<object type="text/html" data="sprint2_technical.html" ></object>';
}