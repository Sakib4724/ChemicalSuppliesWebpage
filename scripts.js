let chemicalData;
let ascending = true;
let selectedItemIndex = null;

const renderTable = (data) => {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    data.forEach((row, index) => {
        const tr = document.createElement('tr');

        if (index === selectedItemIndex) {
            tr.classList.add('selected');
        }
        tr.onclick = () => selectItem(index);

        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.ChemicalName}</td>
            <td>${row.Vendor}</td>
            <td>${row.Density}</td>
            <td>${row.Viscosity}</td>
            <td>${row.Packaging}</td>
            <td>${row.PackSize}</td>
            <td>${row.Unit}</td>
            <td>${row.Quantity}</td>
        `;
        tableBody.appendChild(tr);
    });
}

const sortTable = (colIndex) => {
    const keyMap = ['id', 'ChemicalName', 'Vendor', 'Density', 'Viscosity', 'Packaging', 'PackSize', 'Unit', 'Quantity'];
    const key = keyMap[colIndex];

    chemicalData.sort((a, b) => {
        return ascending ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1);
    });

    ascending = !ascending;
    renderTable(chemicalData);
}

const selectItem = (index) => {
    selectedItemIndex = index;
    renderTable(chemicalData);
}

const moveUp = () => {
    if (selectedItemIndex === null || selectedItemIndex === 0) {
        alert("Please select the item you want to move up.");
        return;
    }
    [chemicalData[selectedItemIndex - 1], chemicalData[selectedItemIndex]] = [chemicalData[selectedItemIndex], chemicalData[selectedItemIndex - 1]];
    selectedItemIndex--;
    renderTable(chemicalData);
}

const moveDown = () => {
    if (selectedItemIndex === null || selectedItemIndex === chemicalData.length - 1) {
        alert("Please select the item you want to move down.");
        return;
    }
    [chemicalData[selectedItemIndex], chemicalData[selectedItemIndex + 1]] = [chemicalData[selectedItemIndex + 1], chemicalData[selectedItemIndex]];
    selectedItemIndex++;
    renderTable(chemicalData);
}

const deleteChemical = () => {
    if (selectedItemIndex === null) {
        alert("Please select the item you want to delete.");
        return;
    }
    chemicalData.splice(selectedItemIndex, 1);
    selectedItemIndex = null;
    renderTable(chemicalData);
}

const refreshTable = () => {
    selectedItemIndex = null;
    renderTable(chemicalData);
}

const saveData = () => {
    localStorage.setItem('chemicalData', JSON.stringify(chemicalData));
    console.log("Data saved to local storage: ", JSON.stringify(chemicalData, null, 2));
    alert("Data saved to local storage.");
}

document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('chemicalData');
    if (storedData) {
        chemicalData = JSON.parse(storedData);
    }
    else {
        chemicalData = defaultChemicalData;
    }
    renderTable(chemicalData);
});