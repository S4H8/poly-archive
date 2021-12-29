function aboutSwitch() {
    document.getElementById("about-page").style.display = 'block';
    document.getElementById("wiki").style.display = 'none';
    document.getElementById("article-page").style.display = 'none';
    document.getElementById("article-not-found").style.display = 'none';
}

function wikiSwitch() {
    document.getElementById("about-page").style.display = 'none';
    document.getElementById("wiki").style.display = "block";
    document.getElementById("article-page").style.display = 'none';
    document.getElementById("article-not-found").style.display = 'none';
}