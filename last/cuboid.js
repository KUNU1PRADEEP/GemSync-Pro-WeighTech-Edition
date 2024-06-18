var selectedRow = null
// document.getElementById("btnAdd").addEventListener("click", onFormSubmit);
function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["height"] = document.getElementById("height").value;
    formData["weight"] = document.getElementById("weight").value;
    formData["bmi"] = document.getElementById("bmi").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.height;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.weight;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.bmi;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("height").value = selectedRow.cells[1].innerHTML;
    document.getElementById("weight").value = selectedRow.cells[2].innerHTML;
    // document.getElementById("bmi").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.height;
    selectedRow.cells[2].innerHTML = formData.weight;
    selectedRow.cells[3].innerHTML = formData.bmi;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';
    document.getElementById("bmi").value = '';
    selectedRow = null;
}
