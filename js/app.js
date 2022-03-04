let button = document.querySelector("button");
let toastContainer = document.querySelector("#toast-container");

let random = (min, max) => {
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    let m = undefined;

    if (r === 1) {
        m = "success";
    } else if (r === 2) {
        m = "failure";
    } else if (r === 3) {
        m = "warning";
    }

    return m;
};

let createElement = (type, duration = 2000) => {
    let i = undefined,
        t = undefined,
        m = "Loading...";

    if (type == "success") {
        (i = "fa-circle-check"), (t = "success"), (m = "Success!");
    } else if (type == "failure") {
        (i = "fa-circle-xmark"),
            (t = "failure"),
            (m = "Something went wrong...");
    } else if (type === "warning") {
        (i = "fa-triangle-exclamation"),
            (t = "warning"),
            (m = "You can't do that...");
    }

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toastContainer.appendChild(toast);

    let icon = document.createElement("i");
    icon.classList.add("fas", i, t);
    toast.appendChild(icon);

    let message = document.createElement("h3");
    message.innerHTML = m;
    toast.appendChild(message);

    setTimeout(function () {
        toast.classList.add("after");
        setTimeout(function () {
            toastContainer.removeChild(toast);
        }, 1000);
    }, duration);
};

button.addEventListener("click", () => {
    createElement(random(1, 3));
});
