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
//sidebar aucoredin
var sidebar_aucoredin = document.querySelectorAll('.sidebar_link');

sidebar_aucoredin.forEach(function(item) { 
    item.onclick = function(){
        item.nextElementSibling.closest('.sidebar_treeview').classList.toggle('open')
    }
});

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: '#1479ff',
        borderColor: '#1e406c',
        data: [25, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('chart1'),
    config
);


const labels2 = [
    'green',
    'blue',
    'red',
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: ["#1abc9c", "#3498db", "#9b59b6"],
        borderColor: '#ffffff',
        data: [25, 10, 5],
    }]
};

const config2 = {
    type: 'pie',
    data: data2,
    options: {
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Pie Chart'
        }
        }
    },
};
const myChart2 = new Chart(
    document.getElementById('chart2'),
    config2
);
