//open about me folder
let about_me_folder = document.getElementById('about_me_folder');
let about_me_window = document.getElementById('about_me_window');
about_me_folder.addEventListener("dblclick", () => {
    about_me_window.style.display = "block";
});

//close about me folder
let close_aboutMe_folder = document.getElementById('close-about-folder');
close_aboutMe_folder.addEventListener("click", () => {
    about_me_window.style.display = "none";
})

//open about me MS file
let about_me_file = document.getElementById('about_me_file');
let about_me_MS = document.getElementById('about_me_MS');
about_me_file.addEventListener("dblclick", () => {
    about_me_MS.style.display = "block";
});

//close about me MS file
let close_aboutMe_file = document.getElementById('close-about-file');
close_aboutMe_file.addEventListener("click", () => {
    about_me_MS.style.display = "none";
})

//open my picture
let my_picture_file = document.getElementById('my_picture_file');
let my_picture = document.getElementById('about_me_photo');
my_picture_file.addEventListener("dblclick", () => {
    my_picture.style.display = "block";
});

//close my picture
let close_my_picture = document.getElementById('close-about-picture');
close_my_picture.addEventListener("click", () => {
    my_picture.style.display = "none";
});

