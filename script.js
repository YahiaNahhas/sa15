function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function toggleIngredients(recipeId) {
    var ingredients = document.getElementById(recipeId).getElementsByClassName("ingredients")[0];
    if (ingredients.classList.contains("hidden")) {
        ingredients.classList.remove("hidden");
    } else {
        ingredients.classList.add("hidden");
    }
}

document.querySelector(".tablinks:first-child").classList.add("active");
