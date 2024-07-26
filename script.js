function changePage(page) {
    // Hide all sections
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    // Show the requested section
    document.getElementById(page).style.display = "block";
}

// Initially display the home section
changePage('home');