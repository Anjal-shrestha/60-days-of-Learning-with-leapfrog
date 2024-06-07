

function fetchData() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

document.getElementById('fetchDataButton').addEventListener('click', () => {
    const dataOutput = document.getElementById('dataOutput');
    dataOutput.innerHTML = '<p class="text-gray-700">Fetching data...</p>';

    fetchData()
        .then(data => {
            dataOutput.innerHTML = data.map(product => `
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-bold mb-2">${product.title}</h2>
                    <p class="text-gray-700 mb-4"><strong>Price:</strong> $${product.price}</p>
                    <p class="text-gray-600">${product.description}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            dataOutput.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
        })
        .finally(() => {
            console.log('Fetch attempt finished.');
        });
});
