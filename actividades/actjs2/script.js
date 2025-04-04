function calculate() {
    let baseSalary = parseFloat(document.getElementById("baseSalary").value);
    let electricity = parseFloat(document.getElementById("electricity").value) || 0;
    let water = parseFloat(document.getElementById("water").value) || 0;
    let rent = parseFloat(document.getElementById("rent").value) || 0;
    
    let netSalary = baseSalary - (electricity + water + rent);

    let birthDate = new Date(document.getElementById("dob").value);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("netSalary").textContent = `$${netSalary.toFixed(2)}`;
    document.getElementById("workerAge").textContent = `${age} years old`;
}
