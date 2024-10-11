// Function to add a new vendor
function addVendor(vendorData) {
    // Replace 'API_ENDPOINT' with the actual API URL
    fetch('API_ENDPOINT/vendors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vendorData)  // Send the vendor data as JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Vendor added:', data);
        // Update the UI or show a success message
    })
    .catch(error => {
        console.error('Error adding vendor:', error);
        // Handle the error in the UI
    });
}

// Example usage with form submission
const form = document.querySelector('#addVendorForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const vendorData = {
        name: form.name.value,
        contact: form.contact.value
        // Add other fields as necessary
    };
    addVendor(vendorData);
});






// Previous code if above code doesn't work for you then you can delete it or comment out and you can run the below code

// //add vendor 

// document.getElementById('new-vendor-iscreating').addEventListener('submit', async function (e) {
//     e.preventDefault(); 

//     const vendorName = document.getElementById('vendorName').value;
//     const vendorDescription = document.getElementById('vendorDescription').value;
//     console.log('name:', vendorName);
//     console.log('description:', vendorDescription);


//     try {
//         const response = await fetch('http://localhost:8000/vendor', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you have a token saved from login
//             },
//             body: JSON.stringify({
//                 Name: vendorName,
//                 Description: vendorDescription
//             })
//         });

//         const result = await response.json();

//         if (response.ok) {
//             document.getElementById('formStatus').innerHTML = `<div class="alert alert-success">Vendor added successfully!</div>`;
//         } else {
//             document.getElementById('formStatus').innerHTML = `<div class="alert alert-danger">${result.message}</div>`;
//         }

//     } catch (error) {
//         console.error('Error:', error);
//         document.getElementById('formStatus').innerHTML = `<div class="alert alert-danger">An error occurred while adding the vendor.</div>`;
//     }
// });
