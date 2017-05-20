// Exercise: Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.

document.getElementsByTagName('nav');

// Exercise: Find the sidebar on the left by using its id.

document.getElementById('sidebar-left');

// Exercise: Find the 'Pages' and 'Groups' sections of the sidebar by using their class.

document.getElementsByClassName('pages');
document.getElementsByClassName('groups');

// Exercise: Find all of the comments on the page.

document.getElementsByClassName('comments');

// Exercise: Find the first comment on the page.

document.getElementsByClassName('media-body')[0];

// Exercise: Find the last comment on the page.

let posts = document.getElementsByClassName('media-body');
let lastPostIndex = posts.length - 1;
return posts[lastPostIndex];

// Exercise: Find the fourth comment on the page. Make sure you grab the fourth *comment* rather than the fourth *block* of comments. You may need more than one line of code!

document.getElementsByClassName('media-body')[6];

// Exercise: Find one of the ads in the sidebar and hide them.

let hideAds = document.getElementsByClassName('ad-slot')[0];
hideAds.style.visibility = 'hidden';

// Exercise: Set the visibility on the ad that you hid in the previous exercise to make it visible again.

hideAds.style.visibility = 'visible';

// Exercise: Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.

let update = document.getElementsByClassName('ad-slot')[0];
let img = update.getElementsByTagName('img')[0];
img.setAttribute('src', 'http://placebear.com/200/300');

// Exercise: Find Sam's post and change its text to something incredible.

let updateText = document.getElementsByClassName('comments')[1];
let newText = updateText.getElementsByClassName('panel')[1];
let text = newText.getElementsByTagName('p')[0];
text.innerHTML = 'Reddit likes cats';

// Exercise: Find the first post and add the `.post-liked` class to it.

let firstPost = document.getElementsByClassName('post')[0];
firstPost.className = firstPost.className + (' post-liked');

// Exercise: Find the second post and remove the `.post-liked` class.

let secondPost = document.getElementsByClassName('post')[1];
secondPost.classList.remove('post-liked');
