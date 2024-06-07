// Function to fetch data from the Fake Store API
function fetchData() {
    return fetch('https://fakestoreapi.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Function to display products
function displayProducts(products) {
    const dataOutput = document.getElementById('dataOutput');
    dataOutput.innerHTML = products.map(product => `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-2">${product.title}</h2>
            <p class="text-gray-700 mb-4"><strong>Price:</strong> $${product.price}</p>
            <p class="text-gray-600">${product.description}</p>
        </div>
    `).join('');
}

// Handling the fetch with then, catch, and finally
document.getElementById('fetchDataButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const dataOutput = document.getElementById('dataOutput');
    dataOutput.innerHTML = '<p class="text-gray-700">Fetching data...</p>';

    fetchData()
        .then(data => {
            let filteredData = data;
            if (searchInput) {
                filteredData = data.filter(product => product.title.toLowerCase().includes(searchInput));
            }
            displayProducts(filteredData);
        })
        .catch(error => {
            dataOutput.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
        })
        .finally(() => {
            console.log('Fetch attempt finished.');
        });
});
