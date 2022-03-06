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