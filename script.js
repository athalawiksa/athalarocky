const menuIcon = document.getElementById("menu-icon")
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})

function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("fullImage");

    modal.style.display = "block"; 
    modalImg.src = imgElement.src; 
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none"; 
}