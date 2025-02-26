function calculate() { // New algorithm that calculates the accurate months.
    const startDate = new Date(document.getElementById('startDate').value)
    const endDate = new Date(document.getElementById('endDate').value)
    const validation = endDate - startDate;

    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('result').textContent = "Please select valid dates.";
        document.getElementById('result').style.color = "red";
    } else if (validation < 0) { // Fix to CHANGES.1 Bug. Added input validation for date input.
        document.getElementById('result').textContent = "Date input is invalid.";
        document.getElementById('result').style.color = "red";
    } else {
        document.getElementById('result').style.color = "#000";

        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();
        const startMonth = startDate.getMonth();
        const endMonth = endDate.getMonth();
        const startDay = startDate.getDate();
        const endDay = endDate.getDate();

        years = endYear - startYear;
        months = endMonth - startMonth;

        if (years < 1) {
            if (endDay < startDay) {
                resultMonths = months - 1;
                
                if (resultMonths == 1) {
                    document.getElementById('result').textContent = 'You are now ' + resultMonths + ' month.';
                } else {
                    document.getElementById('result').textContent = 'You are now ' + resultMonths + ' months.';
                }
            } else {
                if (months == 1) {
                    document.getElementById('result').textContent = 'You are now ' + months + ' month.';
                } else {
                    document.getElementById('result').textContent = 'You are now ' + months + ' months.';
                }
            }
        } else {
            if (endDay < startDay) {
                resultMonths = ((years * 12) + months - 1);
                document.getElementById('result').textContent = 'You are now ' + resultMonths + ' months.';
            } else {
                resultMonths = ((years * 12) + months);
                document.getElementById('result').textContent = 'You are now ' + resultMonths + ' months.';
            }
        }
    }
}

function reset() {
    document.getElementById('result').textContent = "";
    document.getElementById('result').style.color = "#000";
    document.getElementById('startDate').value = "";
    document.getElementById('endDate').value = "";
}