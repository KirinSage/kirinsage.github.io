//project made and written by Ethan "KirinSage" Wright

let aboutTab = document.querySelector("#about");
let linksTab = document.querySelector("#links");
let aboutContent = document.querySelector("#about_content");
let linksContent = document.querySelector("#links_content")

aboutTab.addEventListener('click', function(){
    aboutTab.classList = "active_tab";
    linksTab.classList = "inactive_tab";
    aboutContent.classList = "open";
    linksContent.classList = "closed";
})

linksTab.addEventListener('click', function(){
    aboutTab.classList = "inactive_tab";
    linksTab.classList = "active_tab";
    aboutContent.classList = "closed";
    linksContent.classList = "oepn";
})