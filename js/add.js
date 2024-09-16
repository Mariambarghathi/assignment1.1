//add vendor 

document.getElementById('new-vendor-iscreating').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const vendorName = document.getElementById('vendorName').value;
    const vendorDescription = document.getElementById('vendorDescription').value;
    console.log('name:', vendorName);
    console.log('description:', vendorDescription);


    try {
        const response = await fetch('http://localhost:8000/vendor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming you have a token saved from login
            },
            body: JSON.stringify({
                Name: vendorName,
                Description: vendorDescription
            })
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('formStatus').innerHTML = `<div class="alert alert-success">Vendor added successfully!</div>`;
        } else {
            document.getElementById('formStatus').innerHTML = `<div class="alert alert-danger">${result.message}</div>`;
        }

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('formStatus').innerHTML = `<div class="alert alert-danger">An error occurred while adding the vendor.</div>`;
    }
});
