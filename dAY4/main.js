// main.js

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
    dataOutput.innerText = 'Fetching data...';

    fetchData()
        .then(data => {
            dataOutput.innerHTML = data.map(product => `
                <div class="product">
                    <h2>${product.title}</h2>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <p>${product.description}</p>
                </div>
            `).join('');
        })
        .catch(error => {
            dataOutput.innerText = `Error: ${error.message}`;
        })
        .finally(() => {
            console.log('Fetch attempt finished.');
        });
});
