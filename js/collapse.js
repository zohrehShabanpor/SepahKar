function changeImage(path) {
    let image = document.getElementById('main-image');
    image.src = path;
}

for (let s = 1; s < 5; s++) {
    let e = document.getElementById("question" + s),
        a = document.getElementById("icon" + s);
    e.addEventListener("show.bs.collapse",
        function () {
            a.classList.remove("fa-plus");
            a.classList.add("fa-minus");
        })
    e.addEventListener("hide.bs.collapse",
        function () {
            a.classList.remove("fa-minus");
            a.classList.add("fa-plus");
        });
}