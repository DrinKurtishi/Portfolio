let folder = document.getElementsByClassName('folder_icon');//for detecting folder opening
let about_me = document.getElementById('about_me_window')
for (let i = 0; i < folder.length; i++) {
    // Add event listener to each element
    folder[i].addEventListener('dblclick', () => { //add event listener to every folder
        about_me.style.display = "block";
    });
  }

  //closing about me window
let closer = document.getElementById('close-about');
closer.addEventListener("click", () => {
    about_me.style.display = "none";
});
