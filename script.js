document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let userName = document.getElementById('name').value;
    let userAge = document.getElementById('age').value;
    
    if (!userName || !userAge) {
        alert("Please enter valid details.");
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(`Welcome, ${userName}. You can vote.`);
            } else {
                reject(`Oh sorry ${userName}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then(message => alert(message))
    .catch(message => alert(message));
});
