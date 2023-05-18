// Get the form and table elements
var form = document.getElementById('transaction-form');
var table = document.getElementById('transactions');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var title = document.getElementById('title').value;
    var category = document.getElementById('category').value;
    var amount = parseFloat(document.getElementById('amount').value);

    // Create a new row for the transaction
    var newRow = table.insertRow(-1);

    // Add transaction details to the row
    var titleCell = newRow.insertCell(0);
    var categoryCell = newRow.insertCell(1);
    var amountCell = newRow.insertCell(2);
    var actionCell = newRow.insertCell(3);

    titleCell.innerHTML = title;
    categoryCell.innerHTML = category;
    amountCell.innerHTML = amount.toFixed(2);
    actionCell.innerHTML = '<button onclick="deleteTransaction(this)">Delete</button>';

    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('category').value = 'income';
    document.getElementById('amount').value = '';
});

// Function to delete a transaction
function deleteTransaction(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}