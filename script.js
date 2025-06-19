function openModal(title) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function toggleMode() {
    document.body.classList.toggle("dark");
}