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

//TODO --> dragging windows functionality
// Get the window element and the window bar element
const windowElement = document.getElementById('about_me_MS');
const windowBarElement = document.getElementById('about_me_bar');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Function to handle mouse down event on the window bar
const handleMouseDown = (event) => {
  isDragging = true;

  // Calculate the offset between the mouse position and the window position
  offsetX = event.clientX - windowElement.offsetLeft;
  offsetY = event.clientY - windowElement.offsetTop;
};

// Function to handle mouse up event
const handleMouseUp = () => {
  isDragging = false;
};

// Function to handle mouse move event
const handleMouseMove = (event) => {
  if (isDragging) {
    // Calculate the new position of the window based on the mouse movement
    const newLeft = event.clientX - offsetX;
    const newTop = event.clientY - offsetY;

    // Update the position of the window
    windowElement.style.left = newLeft + 'px';
    windowElement.style.top = newTop + 'px';
  }
};

// Attach event listeners to the window bar
windowBarElement.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('mousemove', handleMouseMove);












//future functionality for z index positioining
/*
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
*/

