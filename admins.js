window.onload = function() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentList = document.getElementById('studentList');

    // Clear the existing rows before displaying
    studentList.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="border border-gray-300 p-2">${student.name}</td>
            <td class="border border-gray-300 p-2">${student.programType}</td>
            <td class="border border-gray-300 p-2">${student.date}</td>
            <td class="border border-gray-300 p-2">${student.time}</td>
            <td class="border border-gray-300 p-2">
                <button onclick="editStudent(${index})" class="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                <button onclick="deleteStudent(${index})" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
        `;
        studentList.appendChild(row);
    });
};

// Function to delete a student
window.deleteStudent = function(index) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1); // Remove the student
    localStorage.setItem('students', JSON.stringify(students)); // Update local storage
    window.onload(); // Refresh the student list
};

// Function to edit a student
window.editStudent = function(index) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students[index];

    document.getElementById('updateIndex').value = index;
    document.getElementById('updateName').value = student.name;
    document.getElementById('updateProgramType').value = student.programType;
    document.getElementById('updateDate').value = student.date;
    document.getElementById('updateTime').value = student.time;
};

// Handle update form submission
document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const index = document.getElementById('updateIndex').value;
    const name = document.getElementById('updateName').value;
    const programType = document.getElementById('updateProgramType').value;
    const date = document.getElementById('updateDate').value;
    const time = document.getElementById('updateTime').value;

    // Update student data
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students[index] = { name, programType, date, time }; // Update the selected student
    localStorage.setItem('students', JSON.stringify(students)); // Update local storage

    alert('Student updated successfully!');
    window.onload(); // Refresh the student list
});
