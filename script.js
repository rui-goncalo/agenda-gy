function addBooking() {
    const name = document.getElementById('name').value;
    const className = document.getElementById('class').value;
    const date = document.getElementById('date').value;

    if (name && className && date) {
        const bookingList = document.getElementById('bookingList');
        const newRow = bookingList.insertRow();
        
        const nameCell = newRow.insertCell(0);
        const classCell = newRow.insertCell(1);
        const dateCell = newRow.insertCell(2);

        nameCell.textContent = name;
        classCell.textContent = className;
        dateCell.textContent = date;

        document.getElementById('bookingForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
