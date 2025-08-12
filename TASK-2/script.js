// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});

// TO-DO LIST
document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="remove-btn">X</button>`;

    li.querySelector(".remove-btn").addEventListener("click", function() {
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
});

// IMAGE GALLERY
document.getElementById("addImageBtn").addEventListener("click", function() {
    let imageURL = document.getElementById("imageURL").value.trim();

    if (!imageURL) {
        alert("Please enter an image URL.");
        return;
    }

    let img = document.createElement("img");
    img.src = imageURL;
    img.alt = "Gallery Image";

    document.getElementById("gallery").appendChild(img);
    document.getElementById("imageURL").value = "";
});
