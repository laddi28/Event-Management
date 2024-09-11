document.getElementById('vendor-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('vendor-name').value;
    const email = document.getElementById('vendor-email').value;

    fetch('/admin/add-vendor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Vendor added successfully!');
        } else {
            alert('Failed to add vendor.');
        }
    });
});

function loadVendors() {
    fetch('/admin/load-vendors')
        .then(response => response.json())
        .then(data => {
            const vendorList = document.getElementById('vendor-list');
            vendorList.innerHTML = '';
            if (data.success) {
                data.vendors.forEach(vendor => {
                    const li = document.createElement('li');
                    li.textContent = `${vendor.name} - ${vendor.email}`;
                    vendorList.appendChild(li);
                });
            } else {
                alert('Failed to load vendors.');
            }
        });
}

// User Management
document.getElementById('user-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;

    fetch('/admin/add-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('User added successfully!');
        } else {
            alert('Failed to add user.');
        }
    });
});

function loadUsers() {
    fetch('/admin/load-users')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';
            if (data.success) {
                data.users.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `${user.name} - ${user.email}`;
                    userList.appendChild(li);
                });
            } else {
                alert('Failed to load users.');
            }
        });
}

// Membership Management
document.getElementById('membership-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const vendorId = document.getElementById('membership-vendor-id').value;
    const membershipType = document.getElementById('membership-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    fetch('/admin/add-membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vendorId, membershipType, startDate, endDate })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Membership added successfully!');
        } else {
            alert('Failed to add membership.');
        }
    });
});
