let editbutton=document.querySelector('.profile__info-button')
let closeditmodalbutton=document.querySelector('.popup__close-button')
let displayname=document.querySelector('.profile__info-heading')
let displayabout=document.querySelector('.profile__info-subtitle')
let saveProfilebutton=document.querySelector('.popup__save-button')

editbutton.addEventListener('click', showEditProfilePopup)
closeditmodalbutton.addEventListener('click', closeEditProfilePopup)
saveProfilebutton.addEventListener('click', saveProfile)

  function showEditProfilePopup() {
    document.querySelector("#editProfilePopup").classList.add('visible')
  }
  
  function closeEditProfilePopup() {
    document.querySelector("#editProfilePopup").classList.remove('visible')
  }
  
  function saveProfile() {
    var name = document.getElementById("name").value;
    var about = document.getElementById("about").value;
    displayname.textContent=name
    displayabout.textContent=about
    
    closeEditProfilePopup();
  }
  