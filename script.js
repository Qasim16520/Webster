  document.querySelectorAll('.track').forEach(track => {
            let content = track.innerHTML;
            track.innerHTML += content + content; // Smooth looping
        });



window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    const hero = document.querySelector(".Hero");
    hero.style.display = "block";

    // ❗ Initialize AOS after content is visible
    AOS.init({
      once: true,
      duration: 1200
    });

  }, 2500);
});