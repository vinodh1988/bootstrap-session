// Sample JSON data with 50 records using real names
const names = [
    "John Doe", "Jane Smith", "Alice Johnson", "Robert Brown", "Emily Davis",
    "Michael Miller", "Sarah Wilson", "David Moore", "Laura Taylor", "James Anderson",
    "Linda Thomas", "Daniel Jackson", "Jessica White", "Matthew Harris", "Karen Martin",
    "Christopher Thompson", "Nancy Garcia", "Joshua Martinez", "Betty Robinson", "Andrew Clark",
    "Susan Rodriguez", "Joseph Lewis", "Margaret Lee", "Charles Walker", "Patricia Hall",
    "Steven Allen", "Barbara Young", "Paul King", "Elizabeth Wright", "Mark Scott",
    "Mary Green", "Donald Adams", "Jennifer Baker", "George Gonzalez", "Helen Nelson",
    "Kenneth Carter", "Sandra Mitchell", "Kevin Perez", "Donna Roberts", "Brian Turner",
    "Carol Phillips", "Edward Campbell", "Ruth Parker", "Ronald Evans", "Deborah Edwards",
    "Anthony Collins", "Shirley Stewart", "Jason Sanchez", "Cynthia Morris", "Jeffrey Rogers"
];

const data = names.map((name, i) => ({
    id: i + 1,
    name: name,
    age: Math.floor(Math.random() * 60) + 18,
    email: `user${i + 1}@example.com`
}));

// Function to create a table
function createTable(data) {
    const table = document.createElement('table');
    table.className = 'table table-sm table-striped table-bordered table-hover';

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['ID', 'Name', 'Age', 'Email'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(record => {
        const row = document.createElement('tr');
        Object.values(record).forEach(value => {
            const td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    return table;
}

// Append tables to the target element
const target = document.getElementById('tables-target');
const chunkSize = 10;
for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const table = createTable(chunk);
    target.appendChild(table);
}