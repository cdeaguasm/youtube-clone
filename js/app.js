const container = document.querySelector(".container");

document.querySelector("#menu-button").addEventListener("click", () => {
    container.classList.toggle("active");
});

function verifyResizeWindows() {
    if(window.innerWidth <= 768) {
        container.classList.remove('active');
    }
    else {
        container.classList.add('active');
    }
}

verifyResizeWindows();

window.addEventListener('resize', () => {
    verifyResizeWindows();
});


