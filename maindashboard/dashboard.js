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
    let username = document.getElementById('username')
    let email = document.getElementById('email')

    function loadMorePosts() {
        for (let i = 0; i < 3; i++) { // Add 3 new posts
            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(response => response.json())
                .then(data => {
                    const newPost = document.createElement("div");
                    newPost.classList.add("card");

                    newPost.innerHTML = `
                        <div class="card-img">
                            <img src="/images/OIP (2).jpg" alt="" class="card-user-img">
                            <div class="user-cardname">
                                <h3 id="username">${data.name}</h3>
                                <h4 id = "email">${data.email}</h4>
                            </div>
                        </div>
                        <div class="feedimg">
                            <p>This is a new post added dynamically.</p>
                            <img src="/images/feed image.jpg" alt="feed image" class="feed-img">
                        </div>
                        <div class="feed-icons">
                             <div class="lcss-icon">
                            <i class="fa-regular fa-thumbs-up" id="feedicon"></i>
                            <h6>likes</h6>
                          </div>
                          <div class="lcss-icon">
                            <i class="fa-regular fa-share-from-square" id="feedicon"></i>
                            <h6>share</h6>
                          </div>
                          <div class="lcss-icon">
                            <i class="fa-regular fa-comment" id="feedicon"></i>
                            <h6>comment</h6>
                          </div>
                          <div class="lcss-icon">
                            <i class="fa-regular fa-bookmark" id="feedicon"></i>
                            <h6>save</h6>
                          </div>
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
                })
                .catch(error => console.log(error));
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

