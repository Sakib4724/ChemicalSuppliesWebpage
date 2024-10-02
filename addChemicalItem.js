const formContainer = document.getElementById('form-container');
const addChemical = document.getElementById('addChemical');
const addChemForm = document.getElementById('addChemForm');

addChemical.addEventListener('click', () => {
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
        addChemical.innerText = 'Hide Form';
    }
    else {
        formContainer.style.display = 'none';
        addChemical.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }
});

addChemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const chemicalName = document.getElementById('chemicalName').value;
    const vendor = document.getElementById('vendor').value;
    const density = parseFloat(document.getElementById('density').value);
    const viscosity = parseFloat(document.getElementById('viscosity').value);
    const packaging = document.getElementById('packaging').value;
    const packSize = parseInt(document.getElementById('packSize').value);
    const unit = document.getElementById('unit').value;
    const quantity = parseFloat(document.getElementById('quantity').value);

    const newItem = {
        id: chemicalData.length + 1,
        ChemicalName: chemicalName,
        Vendor: vendor,
        Density: density,
        Viscosity: viscosity,
        Packaging: packaging,
        PackSize: packSize,
        Unit: unit,
        Quantity: quantity
    };

    chemicalData.push(newItem);

    renderTable(chemicalData);

    formContainer.style.display = 'none';
    addChemical.innerHTML = '<i class="fa-solid fa-plus"></i>';
    addChemForm.reset();
});