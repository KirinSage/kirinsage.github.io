let aboutTab = document.querySelector("#about");
let linksTab = document.querySelector("#links");

aboutTab.addEventListener('click', function(){
    aboutTab.classList = "active_tab";
    linksTab.classList = "inactive_tab";
})

linksTab.addEventListener('click', function(){
    aboutTab.classList = "inactive_tab";
    linksTab.classList = "active_tab";
})