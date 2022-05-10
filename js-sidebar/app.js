
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarClose = document.querySelector('.close-btn');


sidebarToggle.addEventListener('click', function () {
    console.log('asd')
    sidebar.classList.toggle('show-sidebar')
});
sidebarClose.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar')
});