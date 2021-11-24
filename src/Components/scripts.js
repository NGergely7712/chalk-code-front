function homework() {
    let body = document.getElementById("content-body");
    body.innerText = "homework";
}

function exam() {
    let body = document.getElementById("content-body");
    body.innerText = "exam";
}

function mark() {
    let body = document.getElementById("content-body");
    body.innerText = "mark";
}

function schedule() {
    let body = document.getElementById("content-body");
    body.innerText = "schedule";
}

function addEventListenersToButtons() {
    for (let element of document.getElementsByClassName("sidebar-buttons")) {
        console.log(element)
        switch (element.id) {
            case "homework":
                element.addEventListener("click", function () {
                    element.innerText = "HOMEWORK"
                    homework()
                });
                break;
            case "exam":
                element.addEventListener("click", function () {
                    exam()
                });
                break;
            case "mark":
                element.addEventListener("click", function () {
                    mark()
                });
                break;
            case "schedule":
                element.addEventListener("click", function () {
                    schedule()
                });
                break;
        }

    }
}

function script() {
    return addEventListenersToButtons();
}

export default script