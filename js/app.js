let alert = document.getElementById('alert');
let x = document.getElementById('cancel');
let send = document.getElementById('send');
let search = document.getElementById('userSearch');
let msg = document.getElementById('userMessage');
let bell = document.getElementById('bell');
let email = document.getElementById('email');
let profile = document.getElementById('profile');




// ========================================================== hides the top alert message
x.addEventListener('click', function() { 
    alert.style.display = 'none';
});

// ========================================================== send button field submission - user search

send.addEventListener('click', function() {
    if (search.value === '') {
        window.alert('Please add a user.');
    } 

});
// ========================================================== send button field submission - message
send.addEventListener('click', function() {
    if (msg.value === '') {
        window.alert('Please add a message.');
    } 

    else if (search.value === '') {
        return
    }

    else {
        window.alert('Message sent!');
        msg.value = '';
    }
});

// ========================================================== notifications

bell.addEventListener('click', function() {
    let drop = document.getElementById('drop');

        if (drop.style.display === 'none') {
            console.log('show');
            drop.style.display = '';
            return
        }

        if (drop.style.display === '') {
            console.log('hidden');
            drop.style.display = 'none';
            return
        }   
});

