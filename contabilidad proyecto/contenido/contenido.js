document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#payments-table tbody');
    const filterForm = document.getElementById('filter-form');
    const searchInput = document.getElementById('search');

    // Ejemplo de datos, puedes reemplazarlo con datos reales
    const payments = [
        { id: '001', name: 'Juan Pérez', date: '2024-07-15', amount: '$500', status: 'Pagado' },
        { id: '002', name: 'Ana García', date: '2024-07-16', amount: '$300', status: 'Pendiente' },
        { id: '003', name: 'Luis Martínez', date: '2024-07-17', amount: '$400', status: 'Pagado' },
    ];

    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(payment => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${payment.id}</td>
                <td>${payment.name}</td>
                <td>${payment.date}</td>
                <td>${payment.amount}</td>
                <td>${payment.status}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    filterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPayments = payments.filter(payment =>
            payment.name.toLowerCase().includes(searchTerm) || payment.id.includes(searchTerm)
        );
        renderTable(filteredPayments);
    });

    document.getElementById('logout').addEventListener('click', function () {
        window.location.href = '..index.html'; // Redirigir a la página de inicio
    });

    renderTable(payments);
});
