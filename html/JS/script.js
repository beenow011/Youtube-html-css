var menuIcon= document.querySelector(".menuIcon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container")
menuIcon.onclick = function()
{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("new-container");
    
}
alert("Buy YOUTUBE PRIME for $20");