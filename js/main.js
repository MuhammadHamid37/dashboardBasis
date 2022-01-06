//sidebar toggle
var sidebar_toggle = document.getElementById('sidebar_toggle');
sidebar_toggle.onclick =  function(){
    document.body.classList.toggle("sidebar_close");
}
//dropdown toggle
var dropdown_clickable = document.querySelectorAll('.dropdown_clickable');
function dropdown_close(current_click = null){
    var open_dropdown = document.querySelectorAll('.my_nav_dropdown.open');
    open_dropdown.forEach(function(el){
        console.log(current_click)
        if (current_click != el) {
            el.classList.remove('open');
        }
        
    });
}
dropdown_clickable.forEach(function(item) { 
    item.onclick = function(){
        dropdown_close(item.closest('.my_nav_dropdown'));
        item.closest('.my_nav_dropdown').classList.toggle('open')
    }
});
window.onclick = function(e) {
    var isDropdown = false;
    var parent = e.target.parentElement;
    while (parent !== document ) {
        if (parent.matches('.my_nav_dropdown')) {
            isDropdown = true
        }
        parent = parent.parentNode;
    }
    if(!isDropdown){
        dropdown_close(); 
    }
} 
  