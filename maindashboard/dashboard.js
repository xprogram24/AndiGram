let sidebarbutton = document.getElementById('logo');
let sidebar = document.getElementById('sidebar');
let search = document.createElement('div');
search.classList.add('search')
let searchbox = document.createElement('input');

/*function createSearch() {
    searchbox.type = 'search';
    searchbox.name = 'search';
    searchbox.id = 'search-box';
    searchbox.placeholder = 'search';
    searchbox.classList.add('search')
    search.appendChild(searchbox);
}

sidebarbutton.addEventListener('click', function() {
    if (sidebar.style.width === '210px') {
        sidebar.style.width = '100px';
        search.remove();
    } else {
        sidebar.style.width = '210px';
        createSearch();
        sidebarbutton.insertAdjacentElement("afterend", search);
    }
});*/
//log out button
let logoutbtn = document.getElementById('logout')

logoutbtn.addEventListener('click',function(){
    
    window.location.href = '/index.html';
})
//creates  the infinite scroll
document.addEventListener("DOMContentLoaded", function () {
    const feedsContainer = document.querySelector(".feeds");

    function loadMorePosts() {
        for (let i = 0; i < 3; i++) { // Add 3 new posts
            const newPost = document.createElement("div");
            newPost.classList.add("card");
            newPost.innerHTML = `
                <div class="card-img">
                    <img src="/images/OIP (2).jpg" alt="" class="card-user-img">
                    <div class="user-cardname">
                        <h3>New User ${Math.floor(Math.random() * 100)}</h3>
                        <h4>Web Developer</h4>
                    </div>
                </div>
                <div class="feedimg">
                    <p>This is a new post added dynamically.</p>
                    <img src="/images/feed image.jpg" alt="feed image" class="feed-img">
                </div>
                <div class="feed-icons">
                           <!--likes-->
                           <!--comment-->
                           <!--saved-->
                           <!--shares-->
                       </div>
                       <div class="comment-section">
                           <div class="comment1">
                               <img src="" alt="">
                               <textarea name="" id="">write your comment</textarea>
                           </div>
                           <div class="comment-icons">
                               <!--copy-->
                               <!--emoji-->
                               <!--share-->
                           </div>                      
                       </div>
            `;
            feedsContainer.appendChild(newPost);
        }
    }

    feedsContainer.addEventListener("scroll", function () {
        if (feedsContainer.scrollTop + feedsContainer.clientHeight >= feedsContainer.scrollHeight - 10) {
            loadMorePosts();
        }
    });

    // Load initial posts
    loadMorePosts();
});

