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

//open projects folder
let projects_folder = document.getElementById("projects_folder");
let projects_window = document.getElementById("projects_window");

projects_folder.addEventListener("dblclick", () => {  
    projects_window.style.display = "block";
});

//close projects folder
let close_projects_folder = document.getElementById('close-project');
close_projects_folder.addEventListener("click", () => {
  projects_window.style.display = "none";
})

//open paint app
let paint_app = document.getElementById("paint_icon");
let paintIFrame = document.getElementById("paintIFrame");
let paint_window = document.getElementById("paint_window");
 
paint_app.addEventListener("dblclick", () => {
    paintIFrame.src = "etch-a-sketch/index.html";
    paint_window.style.display = "block";
    paintIFrame.style.display = "block";
});

//close paint app
let close_paint = document.getElementById("close-paint");
close_paint.addEventListener("click", () => {
  paint_window.style.display = "none";
})

//open rock paper scissors
let rps_app = document.getElementById("game_icon");
let rpsIFrame = document.getElementById("rpsIFrame");
let rps_window = document.getElementById("rps_window");

rps_app.addEventListener("dblclick", () => {
  rpsIFrame.src = "rock-paper-scissors/index.html";
  rps_window.style.display = "block";
  rpsIFrame.style.display = "block";
});

//close rock paper scissors
let close_rps = document.getElementById("close-rps");
close_rps.addEventListener("click", () => {
  rps_window.style.display = "none";
})

//open contact 
let contact_file = document.getElementById("contact_me");
let contact_window = document.getElementById("contact_window");
contact_file.addEventListener("dblclick", () => {
  contact_window.style.display = "block";
});

//close contact
let close_contact = document.getElementById("close-contact");
close_contact.addEventListener("click", () => {
  contact_window.style.display = "none";
})




//draggable window functionality

function DraggableWindow(windowElementID, windowBarElementID) {

  const windowElement = document.getElementById(windowElementID);
  const windowBarElement = document.getElementById(windowBarElementID);

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Function to handle mouse down event on the window bar
  const handleMouseDown = (event) => {
    event.preventDefault();
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
      event.preventDefault();
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
}

let about_me_bar = document.getElementById("about_me_bar");
DraggableWindow('about_me_MS', 'about_me_bar');
let projects_bar = document.getElementById("projects_bar");
DraggableWindow('projects_window', 'projects_bar');
let paint_bar = document.getElementById("paint_bar");
DraggableWindow('paint_window', 'paint_bar');
let rps_bar = document.getElementById("rps_bar");
DraggableWindow('rps_window', 'rps_bar');
let contact_bar = document.getElementById("email_bar");
DraggableWindow('contact_window', 'email_bar');



//future functionality for z index positioining
/*
//z-index counter
let z_index = 0;
//giving a rising z index to every window so it comes
// above the other windows every time it's clicked

about_me_MS.addEventListener("mousedown", () => {
    about_me_MS.style.zIndex = z_index;
    z_index = z_index + 1;
});

projects_window.addEventListener("mousedown", () => {
  projects_window.style.zIndex = z_index;
  z_index = z_index + 1;
})

paint_window.addEventListener("mousedown", () => {
  paint_window.style.zIndex = z_index + 20;
  z_index = z_index + 20;
})

rps_window.addEventListener("mousedown", () => {
  rps_window.style.zIndex = z_index + 20;
  z_index = z_index + 20;
})

contact_window.addEventListener("mousedown", () => {
  contact_window.style.zIndex = z_index;
  z_index = z_index + 1;
})
*/





