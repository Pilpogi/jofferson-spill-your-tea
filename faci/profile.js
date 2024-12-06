function openEditModal() {
    const modal = document.getElementById('edit-profile-modal');
    modal.style.display = "block";
  
    document.getElementById('edit-name').value = document.getElementById('profile-name').innerText;
    document.getElementById('edit-bio').value = document.getElementById('profile-bio').innerText;
  }
  
  function closeEditModal() {
    const modal = document.getElementById('edit-profile-modal');
    modal.style.display = "none";
  }
 
  function saveProfileChanges() {
    const name = document.getElementById('edit-name').value;
    const bio = document.getElementById('edit-bio').value;
    const profilePhoto = document.getElementById('edit-profile-photo').files[0];
    const coverPhoto = document.getElementById('edit-cover-photo').files[0];
  
    document.getElementById('profile-name').innerText = name;
    document.getElementById('profile-bio').innerText = bio;
  
    if (profilePhoto) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('profile-photo').src = e.target.result;
      };
      reader.readAsDataURL(profilePhoto);
    }
  
    if (coverPhoto) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('cover-photo').src = e.target.result;
      };
      reader.readAsDataURL(coverPhoto);
    }
 
    closeEditModal();
  }
  