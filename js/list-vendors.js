// Function to fetch and display vendor list
function fetchVendors() {
    // Replace 'API_ENDPOINT' with the actual API URL
    fetch('API_ENDPOINT/vendors')
    .then(response => response.json())
    .then(vendors => {
        const vendorList = document.querySelector('#vendorList');
        vendorList.innerHTML = '';  // Clear previous list

        vendors.forEach(vendor => {
            const listItem = document.createElement('li');
            listItem.textContent = `${vendor.name} - ${vendor.contact}`;
            vendorList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching vendors:', error);
    });
}

// Fetch vendors on page load
document.addEventListener('DOMContentLoaded', fetchVendors);







//This is your old code you can uncomment it whenever required

// function handleAction(selectElement) {
//     const selectedValue = selectElement.value;
//     if (selectedValue === "3") { 
//         window.location.href = 'update.html';
//     }
// }

