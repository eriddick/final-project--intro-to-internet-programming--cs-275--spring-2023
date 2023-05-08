let table = document.getElementById(`table`);

window.onload = () => {

    let matrixSize = window.prompt(`Enter a size for the matrix.`);

    while (isNaN(parseInt(matrixSize)) || parseInt(matrixSize) < 2) {

        alert(`Please enter an integer greater than or equal to 2`);

        matrixSize = window.prompt(`Enter a size for the matrix.`);
    }

    table.style.visibility = `visible`;

    let title1 = document.createElement(`h2`);
    title1.innerText += `Matrix`;
    table.appendChild(title1);

    let matrix = document.createElement(`table`);
    table.appendChild(matrix);

    for (let row = 0; row < matrixSize; row++) {
        let matrixRow = document.createElement(`tr`);

        for (let column = 0; column < matrixSize; column++) {
            let cell = document.createElement(`td`);

            let value = ((row * matrixSize) + column + 1);
            cell.innerText += `${value}`;

            matrixRow.appendChild(cell);

            if ((row + column) === (matrixSize - 1)) {
                cell.className = `flip line`;
            }
        }

        matrix.appendChild(matrixRow);
    }

    let title2 = document.createElement(`h2`);
    title2.innerText += `Flipped Matrix`;
    table.appendChild(title2);

    let flippedMatrix = document.createElement(`table`);
    table.appendChild(flippedMatrix);

    for (let row = 0; row < matrixSize; row++) {
        let matrixRow = document.createElement(`tr`);

        for (let column = 0; column < matrixSize; column++) {
            let cell = document.createElement(`td`);

            if ((row + column) === (matrixSize - 1)) {
                cell.className = `flip line`;
                let value = ((row * matrixSize) + column + 1);
                cell.innerText += `${value}`;
            }
            else {
                let value = ((matrixSize * matrixSize) - ((row * matrixSize) + column));
                cell.innerText += `${value}`;
            }

            matrixRow.appendChild(cell);
        }

        flippedMatrix.appendChild(matrixRow);
    }
};
