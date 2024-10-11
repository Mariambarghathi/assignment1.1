function updateVendor(id, updatedData) {
    fetch(`http://localhost:3000/api/vendors/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
      alert('Vendor updated successfully');
      window.location.href = 'ListV.html';  // Redirect to vendor list
    })
    .catch(error => console.error('Error updating vendor:', error));
  }
  
  document.querySelector('#updateVendorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.querySelector('#vendorId').value;
    const updatedData = {
      name: document.querySelector('#name').value,
      description: document.querySelector('#description').value,
    };
    updateVendor(id, updatedData);
  });
  
