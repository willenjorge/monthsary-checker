function calculate() {
    const startDate = new Date(document.getElementById('startDate').value)
    const endDate = new Date(document.getElementById('endDate').value)

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').textContent = "Please select valid dates.";
        document.getElementById('result').style.color = "red";
    } else {
        const timeDiff = endDate - startDate;
        const months = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) / 30);

        document.getElementById('result').style.color = "#000";
        document.getElementById('result').textContent = 'You are now ' + months + ' months.';
    }
}

function reset() {
    document.getElementById('result').textContent = "You are now 0 months.";
    document.getElementById('result').style.color = "#000";
    document.getElementById('startDate').value = "";
    document.getElementById('endDate').value = "";
}