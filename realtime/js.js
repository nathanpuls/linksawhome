

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCauN-vsgUfQJXc5b41NoCnYzi6FIn86MQ",
    authDomain: "linkshare-eb70b.firebaseapp.com",
    databaseURL: "https://linkshare-eb70b-default-rtdb.firebaseio.com",
    projectId: "linkshare-eb70b",
    storageBucket: "linkshare-eb70b.appspot.com",
    messagingSenderId: "284502085616",
    appId: "1:284502085616:web:3f24e3fb844320eef85735"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Get reference to the textarea element
const realertimeInput = document.getElementById('textInput');

// Listen for changes in real-time and update the input field
database.ref('realertime').on('value', (snapshot) => {
    const newValue = snapshot.val();
    realertimeInput.value = newValue || '';
});

// Add event listener for input changes in textarea
realertimeInput.addEventListener('input', (event) => {
    const newRealertime = event.target.value;
    console.log('Saving to database:', newRealertime);
    // Update the value in the database
    database.ref('realertime').set(newRealertime)
        .then(() => {
            console.log('Realertime saved to database successfully');
        })
        .catch(error => console.error('Error saving realertime to database:', error));
});

// Add event listener for copy button click
document.getElementById('copyButton').addEventListener('click', function() {
    var textarea = document.getElementById('textInput');
    textarea.select();
    document.execCommand('copy');
});

