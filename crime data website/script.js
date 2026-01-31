function showDashboard() {
    const dashboard = document.getElementById("dashboard");
    dashboard.classList.remove("hidden");
    dashboard.scrollIntoView({ behavior: "smooth" });
}

const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownContainer = document.querySelector(".dropdown-container");

dropdownBtn.addEventListener("click", () => {
    dropdownContainer.style.display =
        dropdownContainer.style.display === "block" ? "none" : "block";
});
