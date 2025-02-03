// Add button functionality
document.getElementById('addBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const result = num1 + num2;
    document.getElementById('result').value = result;
});

// Clear button functionality
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').value = '';
});

// Exit button functionality
document.getElementById('exitBtn').addEventListener('click', function() {
    if (confirm("Do you really want to exit?")) {
        window.location.href = "https://www.example.com"; // Redirect to another page
    }
});
