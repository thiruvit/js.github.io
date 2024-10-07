
function greetUser(username) {
    let greetingMessage = 'Welcome to the library!';

    function showGreeting() {
        let notification = 'You have 3 unread messages.';
        console.log('Notification:', notification);
        console.log('Greeting:', greetingMessage);
        console.log('User:', username);
    }
    
    return showGreeting;
}

let libraryUser1 = greetUser('Thiru');
libraryUser1(); // Outputs: Notification, Greeting, and User for Thiru

let libraryUser2 = greetUser('Ajay');
libraryUser2(); // Outputs: Notification, Greeting, and User for Ajay

libraryUser1(); // Outputs: Same as first call for Thiru
