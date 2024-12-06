
const allUsers = [
    { name: 'Jane Doe', img: 'https://via.placeholder.com/50' },
    { name: 'Mark Smith', img: 'https://via.placeholder.com/50' },
    { name: 'Alice Johnson', img: 'https://via.placeholder.com/50' },
    { name: 'Emily White', img: 'https://via.placeholder.com/50' },
    { name: 'Michael Brown', img: 'https://via.placeholder.com/50' },
    { name: 'Sophia Davis', img: 'https://via.placeholder.com/50' },
    { name: 'David Wilson', img: 'https://via.placeholder.com/50' },
    { name: 'Maris Doe', img: 'https://via.placeholder.com/50' },
    { name: 'Sofia Smith', img: 'https://via.placeholder.com/50' },
    { name: 'Jasmine Johnson', img: 'https://via.placeholder.com/50' },
    { name: 'Janice White', img: 'https://via.placeholder.com/50' },
    { name: 'Pil Brown', img: 'https://via.placeholder.com/50' },
    { name: 'Sopie Davis', img: 'https://via.placeholder.com/50' },
    { name: 'Draken Wilson', img: 'https://via.placeholder.com/50' },
    { name: 'Janen Doe', img: 'https://via.placeholder.com/50' },
    { name: 'Mikey Smith', img: 'https://via.placeholder.com/50' },
    { name: 'Alpha Johnson', img: 'https://via.placeholder.com/50' },
    { name: 'Esme White', img: 'https://via.placeholder.com/50' },
    { name: 'Minotour Brown', img: 'https://via.placeholder.com/50' },
    { name: 'Sild Davis', img: 'https://via.placeholder.com/50' },
    { name: 'Alucard Wilson', img: 'https://via.placeholder.com/50' },
  ];
  
  function searchFriends() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();  
    const filteredUsers = allUsers.filter(user => 
      user.name.toLowerCase().includes(searchInput)  
    );
  
    displaySuggestions(filteredUsers);  
  }
  
  function displaySuggestions(users) {
    const friendSuggestions = document.getElementById('friendSuggestions');
    friendSuggestions.innerHTML = '';  
  
    if (users.length === 0) {
      friendSuggestions.innerHTML = '<p>No users found</p>';
      return;
    }
  
    users.forEach(user => {
      const friendItem = document.createElement('div');
      friendItem.classList.add('friend-item');
      friendItem.innerHTML = `
        <img src="${user.img}" alt="${user.name}">
        <div class="friend-info">
          <span>${user.name}</span>
          <button onclick="addFriend('${user.name}')">Add Friend</button>
        </div>
      `;
      friendSuggestions.appendChild(friendItem);  
    });
  }
  
  
  function addFriend(friendName) {
    alert(`${friendName} has been added as a friend!`);
  }
  