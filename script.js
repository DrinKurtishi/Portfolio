//z-index counter
let z_index = 0;
//exiting out of the lock screen
let footer = document.getElementById("footer");
let lock_screen = document.getElementById("lock_screen");
let user_button = document.getElementById("left_content");
user_button.addEventListener("click", () => {
  lock_screen.style.display = "none";
});

//open about me MS file
let about_me_file = document.getElementById('about_me_file');
let about_me_MS = document.getElementById('about_me_MS');
about_me_file.addEventListener("dblclick", () => {
    about_me_MS.style.display = "block";
    about_me_MS.style.zIndex = z_index;
    z_index = z_index + 1;
});

//close about me MS file
let close_aboutMe_file = document.getElementById('close-about-file');
close_aboutMe_file.addEventListener("click", () => {
    about_me_MS.style.display = "none";
});

//open projects folder
let projects_folder = document.getElementById("projects_folder");
let projects_window = document.getElementById("projects_window");

projects_folder.addEventListener("dblclick", () => {  
    projects_window.style.display = "block";
    projects_window.style.zIndex = z_index;
    z_index = z_index + 1;
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
    paint_window.style.zIndex = z_index;
    z_index = z_index + 1;

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
  rps_window.style.zIndex = z_index;
  z_index = z_index + 1;

});

//close rock paper scissors
let close_rps = document.getElementById("close-rps");
close_rps.addEventListener("click", () => {
  rps_window.style.display = "none";
})

//open contact 
let contact_file = document.getElementById("contact_me");
let contact_window = document.getElementById("contact_window");
contact_file.addEventListener("dblclick", (event) => {
  event.preventDefault();
  contact_window.style.display = "block";
  contact_window.style.zIndex = z_index;
  z_index = z_index + 1;
});

//close contact
let close_contact = document.getElementById("close-contact");
close_contact.addEventListener("click", () => {
  contact_window.style.display = "none";
})

//open msg ssent window through submit
let msg_sent_window = document.getElementById("message_sent");
let form = document.getElementById("contact_container");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  contact_window.style.display = "none";
  msg_sent_window.style.display = "block";
})

//open msg sent for submit button in mobile
let form_mobile = document.getElementById("contact_container_mobile");
form_mobile.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Message sent succesfully, Thank you for reaching out! I appreciate your interest and will be in contact with you shortly");
})

//close message sent
let close_msg_sent = document.getElementById("close_msg_sent");
close_msg_sent.addEventListener("click", () => {
  msg_sent_window.style.display = "none";
})

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
  paint_window.style.zIndex = z_index;
  z_index = z_index + 1;
})

rps_window.addEventListener("mousedown", () => {
  rps_window.style.zIndex = z_index;
  z_index = z_index + 1;
})

contact_window.addEventListener("mousedown", () => {
  contact_window.style.zIndex = z_index;
  z_index = z_index + 1;
})

msg_sent_window.addEventListener("mousedown", () => {
  msg_sent_window.style.zIndex = z_index;
  z_index = z_index + 1;
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

DraggableWindow('about_me_MS', 'about_me_bar');
DraggableWindow('projects_window', 'projects_bar');
DraggableWindow('paint_window', 'paint_bar');
DraggableWindow('rps_window', 'rps_bar');
DraggableWindow('contact_window', 'email_bar');
DraggableWindow('message_sent', 'msg_sent_bar');


//minimized windows

// Define an array to store the minimized windows
let minimizedWindows = [];

// Function to minimize a window
function minimizeWindow(windowId, title, logoUrl) {
  let windowElement = document.getElementById(windowId);
  windowElement.style.display = 'none';

  // Check if the minimized window already exists
  let existingMinimizedWindow = minimizedWindows.find(function(w) {
    return w.dataset.windowId === windowId;
  });

  if (existingMinimizedWindow) {
    // If the minimized window already exists, bring it to the front
    existingMinimizedWindow.classList.add('active');
  } else {
    // Create a minimized window element
    let minimizedWindow = document.createElement('div');
    minimizedWindow.className = 'minimized_window';

    // Create the logo element
    let logoElement = document.createElement('img');
    logoElement.className = 'window_logo';
    logoElement.src = logoUrl;

    // Create the title element
    let titleElement = document.createElement('span');
    titleElement.className = 'window_title';
    titleElement.textContent = title;

    // Add the logo and title to the minimized window
    minimizedWindow.appendChild(logoElement);
    minimizedWindow.appendChild(titleElement);
    minimizedWindow.dataset.windowId = windowId;

    // Add click event listener to restore the window
    minimizedWindow.addEventListener('click', function() {
      windowElement.style.display = 'block';
      windowElement.style.zIndex = z_index;
      z_index = z_index + 1;
      minimizedWindowsContainer.removeChild(minimizedWindow);
      minimizedWindows = minimizedWindows.filter(function(w) {
        return w !== minimizedWindow;
      });
    });

    // Add the minimized window to the container
    let minimizedWindowsContainer = document.getElementById('minimized_windows_container');
    minimizedWindowsContainer.appendChild(minimizedWindow);

    // Add the minimized window to the array
    minimizedWindows.push(minimizedWindow);
  }
}

// Example usage:
document.getElementById('minimize-about-file').addEventListener('click', function() {
  minimizeWindow('about_me_MS', 'AboutMe', 'images/ms_word_logo.jpg', );
});
document.getElementById('minimize-project').addEventListener('click', function() {
  minimizeWindow('projects_window', 'My projects', 'images/windows_folder_icon.png');
});
document.getElementById('minimize-paint').addEventListener('click', function() {
  minimizeWindow('paint_window', 'Paint', 'images/paint-logo.png');
});
document.getElementById('minimize-rps').addEventListener('click', function() {
  minimizeWindow('rps_window', 'RPS', 'images/windows_game_icon.png');
});
document.getElementById('minimize-contact').addEventListener('click', function() {
  minimizeWindow('contact_window', 'Contact me', 'images/email_icon.png');
});


