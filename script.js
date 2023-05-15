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

//z-index counter
let z_index = 0;
//giving a rising z index to every window so it comes
// above the other windows every time it's clicked

about_me_window.addEventListener("click", () =>{
    about_me_window.style.zIndex = z_index;
    z_index = z_index + 1;
    console.log("zindex: ", z_index);
});

about_me_MS.addEventListener("click", () => {
    about_me_MS.style.zIndex = z_index;
    z_index = z_index + 1;
});

my_picture.addEventListener("click", () => {
    my_picture.style.zIndex = z_index;
    z_index = z_index + 1;
});


