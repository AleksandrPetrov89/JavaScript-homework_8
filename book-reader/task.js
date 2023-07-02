const book = document.getElementById("book");

const controlFontSize = document.querySelector(".book__control_font-size");
controlFontSize.addEventListener("click", fontSizeChange);

const controlColor = document.querySelector(".book__control_color");
controlColor.addEventListener("click", colorChange);

const controlBackground = document.querySelector(".book__control_background");
controlBackground.addEventListener("click", colorChange);

function fontSizeChange (event) {
    event.preventDefault();
    event.currentTarget.querySelector(".font-size_active").classList.remove("font-size_active");
    event.target.classList.add("font-size_active");
    book.classList.remove("book_fs-small", "book_fs-big");
    if (event.target.dataset.size) {
        let text = "book_fs-" + event.target.dataset.size;
        book.classList.add(text);
    };
};

function colorChange (event) {
    event.preventDefault();
    event.currentTarget.querySelector(".color_active").classList.remove("color_active");
    event.target.classList.add("color_active");
    let text = "";
    if (event.target.dataset.textColor) {
        book.classList.remove("book_color-gray", "book_color-whitesmoke", "book_color-black");
        text = "book_color-" + event.target.dataset.textColor;
        book.classList.add(text);
    };
    if (event.target.dataset.bgColor) {
        book.classList.remove("book_bg-gray", "book_bg-white", "book_bg-black");
        text = "book_bg-" + event.target.dataset.bgColor;
        book.classList.add(text);
    };
};