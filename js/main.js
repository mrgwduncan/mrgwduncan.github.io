var blogposts =["blogpost1","blogpost2","blogpost3","blogpost4","blogpost5","blogpost6","blogpost7","blogpost8","blogpost9","blogpost10"];

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
function loadGrid() {
    document.getElementById("splash").style.display = "none";	
    for(i = 0; i < blogposts.length; i++) {
        var id = blogposts[i];
        document.getElementById(id).classList.remove("tilehidden")
        document.getElementById(id).classList.remove("display")
        document.getElementById(id).classList.add("tileactive")
        document.getElementById(id).classList.add("tile")
        
    }
}
function maximize(post){
    loadGrid();
    document.getElementById("splash").style.display = "none";
    for(i = 0; i < blogposts.length; i++) {
        var id = blogposts[i];
        if (post === blogposts[i] ){
            document.getElementById(id).classList.add("display")
            document.getElementById(id).classList.remove("tile")
            }
        else
            document.getElementById(id).classList.remove("tileactive")
            document.getElementById(id).classList.add("tilehidden")

    } 
}