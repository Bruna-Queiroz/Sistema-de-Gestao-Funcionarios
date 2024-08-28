document.getElementById('app').innerHTML = `
    <form id="employee-form">
        <input type="text" id="name" placeholder="Nome" required>
        <input type="text" id="position" placeholder="Cargo" required>
        <button type="submit">Adicionar Funcionário</button>
    </form>
    <ul id="employee-list"></ul>
`;

const form = document.getElementById('employee-form');
const list = document.getElementById('employee-list');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;

    const response = await fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, position })
    });

    const employee = await response.json();
    list.innerHTML += `<li>${employee.name} - ${employee.position}</li>`;
    form.reset();
});

async function loadEmployees() {
    const response = await fetch('http://localhost:3000/employees');
    const employees = await response.json();

    employees.forEach(employee => {
        list.innerHTML += `<li>${employee.name} - ${employee.position}</li>`;
    });
}

loadEmployees();
