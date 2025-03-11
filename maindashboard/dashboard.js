let sidebarbutton = document.getElementById('logo');
let sidebar = document.getElementById('sidebar');
let search = document.createElement('div');
search.classList.add('search')
let searchbox = document.createElement('input');

function createSearch() {
    searchbox.type = 'search';
    searchbox.name = 'search';
    searchbox.id = 'search-box';
    searchbox.placeholder = 'search';
    searchbox.classList.add('search')
    search.appendChild(searchbox);
}

sidebarbutton.addEventListener('click', function() {
    if (sidebar.style.width === '260px') {
        sidebar.style.width = '120px';
        search.remove();
    } else {
        sidebar.style.width = '260px';
        createSearch();
        sidebarbutton.insertAdjacentElement("afterend", search);
    }
});