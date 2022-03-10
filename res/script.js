function showList() {
    list = document.getElementById("sfogliaList");
    if ( list.style.display == "block" ) {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }
};

function goToArticleFromPreview( articleName ) {
	var year = new Date().getFullYear();
	window.location.href = "articoli/" + year + "/" + articleName + ".html";
}

function goToPageFromLink( postDestination ) {
	var href = window.location.href;
	var hrefArr = href.split("/");
	var location = hrefArr[3];
	var preDestination = "";
	if ( location == "speciali" ) {
		preDestination = "../";
	} else if ( location == "articoli" ) {
		preDestination == "../../../";
	}
	var destination = preDestination + postDestination;
	window.location.href = destination;
}