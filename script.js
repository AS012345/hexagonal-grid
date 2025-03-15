const letters = ['أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي'];
let grid = document.getElementById("grid");

function createGrid() {
    grid.innerHTML = ""; 
    let shuffledLetters = [...letters].sort(() => Math.random() - 0.5).slice(0, 25);

    let topRow = document.createElement("div");
    topRow.classList.add("row");
    for (let i = 0; i < 7; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell", "top-bottom-cell");
        topRow.appendChild(cell);
    }
    grid.appendChild(topRow);

    for (let row = 0; row < 5; row++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        let sideLeft = document.createElement("div");
        sideLeft.classList.add("cell", "side-cell");
        rowDiv.appendChild(sideLeft);

        for (let col = 0; col < 5; col++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = shuffledLetters[row * 5 + col];
            cell.dataset.state = "default";

            cell.addEventListener("click", () => {
                if (cell.dataset.state === "default") {
                    cell.classList.add("green");
                    cell.dataset.state = "green";
                } else if (cell.dataset.state === "green") {
                    cell.classList.remove("green");
                    cell.classList.add("orange");
                    cell.dataset.state = "orange";
                } else {
                    cell.classList.remove("orange");
                    cell.dataset.state = "default";
                }
            });

            rowDiv.appendChild(cell);
        }

        let sideRight = document.createElement("div");
        sideRight.classList.add("cell", "side-cell");
        rowDiv.appendChild(sideRight);

        grid.appendChild(rowDiv);
    }

    let bottomRow = document.createElement("div");
    bottomRow.classList.add("row");
    for (let i = 0; i < 7; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell", "top-bottom-cell");
        bottomRow.appendChild(cell);
    }
    grid.appendChild(bottomRow);
}

function shuffleLetters() {
    createGrid();
}

createGrid();
