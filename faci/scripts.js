function postMessage() {
    const postText = document.getElementById('postText').value; 
    const mediaInput = document.getElementById('mediaInput'); 
    const postFeed = document.getElementById('post-feed'); 
  
    const mediaFile = mediaInput.files[0];
  
    if (postText.trim() === '' && !mediaFile) {
      alert('Please add a caption or upload a media file.');
      return;
    }
  
    const newPost = document.createElement('div');
    newPost.classList.add('post'); 
  
    newPost.innerHTML = `
      <div class="post-header">
        <img src="https://via.placeholder.com/40" alt="Profile Image" class="post-avatar">
        <div class="post-user-info">
          <span class="post-username">John Doe</span>
          <span class="post-time">Just now</span>
        </div>
      </div>
      <div class="post-content">
        <p>${postText}</p>
      </div>
      <div class="post-media">
        ${mediaFile ? getMediaHTML(mediaFile) : ''}
      </div>
      <div class="post-actions">
        <button class="like-btn" onclick="toggleLike(this)"><i class="fas fa-thumbs-up"></i> Like</button>
        <button class="comment-btn" onclick="toggleComments(this)">Comment</button>
      </div>
      <div class="comments-section" style="display: none;">
        <textarea class="comment-input" placeholder="Write a comment..."></textarea>
        <button class="submit-comment" onclick="submitComment(this)">Submit</button>
        <div class="comment-list"></div>
      </div>
    `;
  
    postFeed.prepend(newPost);
  
    document.getElementById('postText').value = '';
    mediaInput.value = '';
  }
  
  function getMediaHTML(mediaFile) {
    const fileType = mediaFile.type.split('/')[0]; 
  
    if (fileType === 'image') {
      
      return `<img src="${URL.createObjectURL(mediaFile)}" alt="Media" class="post-media-img">`;
    } else if (fileType === 'video') {
      return `<video controls class="post-media-video">
                <source src="${URL.createObjectURL(mediaFile)}" type="${mediaFile.type}">
                Your browser does not support the video tag.
              </video>`;
    }
  
    return ''; 
  }
  
  function toggleLike(button) {
    const isLiked = button.classList.contains('liked');
    
    if (isLiked) {
      button.classList.remove('liked');
      button.innerHTML = '<i class="fas fa-thumbs-up"></i> Like';  
    } else {
      button.classList.add('liked');
      button.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';  
    }
  }
  
  function toggleComments(button) {
    const post = button.closest('.post');
    const commentsSection = post.querySelector('.comments-section');
    
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
  }
  
  function submitComment(button) {
    const commentInput = button.closest('.comments-section').querySelector('.comment-input');
    const commentText = commentInput.value.trim();
    
    if (commentText === '') {
      alert('Please enter a comment.');
      return;
    }
  
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<p><strong>John Doe:</strong> ${commentText}</p>`;
    
    const commentList = button.closest('.comments-section').querySelector('.comment-list');
    commentList.appendChild(newComment);
   
    commentInput.value = '';
  }

    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    function handleSearch() {
        const query = searchInput.value.trim(); 
        if (query) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }

    searchButton.addEventListener('click', handleSearch);

    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

