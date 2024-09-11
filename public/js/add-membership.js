document.getElementById("addMembershipForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const membershipData = {
        vendorId: document.getElementById("vendorId").value,
        membershipDuration: document.getElementById("membershipDuration").value
    };

    fetch('/admin/add-membership', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(membershipData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Membership added successfully!");
        } else {
            alert("Error adding membership: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
