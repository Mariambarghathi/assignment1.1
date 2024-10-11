// Function to delete a vendor
function deleteVendor(vendorId) {
    // Replace 'API_ENDPOINT' with the actual API URL
    fetch(`API_ENDPOINT/vendors/${vendorId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Vendor deleted');
            // Remove the vendor from the UI or refresh the list
        } else {
            console.error('Failed to delete vendor');
        }
    })
    .catch(error => {
        console.error('Error deleting vendor:', error);
    });
}
