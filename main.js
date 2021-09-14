function pluginBySami(activeSlide = 0) {

    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener("click", () => {

            for (let x = 0; x < slides.length; x++) {
                slides[x].classList.remove("active");
            }

            slides[i].classList.add("active");

        });
    }
}

pluginBySami(2);