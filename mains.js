// main.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const programType = document.getElementById('programType').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const studentData = {
        name,
        programType,
        date,
        time
    };

    // Store data in local storage
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentData);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Registration successful!');
    document.getElementById('registrationForm').reset(); // Reset the form
});
