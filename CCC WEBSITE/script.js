//JavaScript for Loading Screen
document.addEventListener("DOMContentLoaded", function () {
  const loadingDiv = document.getElementById("loading");

  // Check if the page is being reloaded using the browser
  if (!performance.getEntriesByType("navigation")[0].type.includes("reload")) {
      // If it's not a reload (e.g., navigation), skip the loading screen
      loadingDiv.style.display = "none";
  } else {
      // If it's a browser reload, show the loading screen
      setTimeout(() => {
      loadingDiv.style.display = "none"; // Hide the loading screen
      }, 2000); // Adjust delay as needed
  }
  });