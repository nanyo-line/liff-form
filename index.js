// sendMessages call
document.getElementById('sendMessageButton').addEventListener('click', function() {
    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "You've successfully sent a message! Hooray!"
        }]).then(function() {
            window.alert('Message sent');
        }).catch(function(error) {
            window.alert('Error sending message: ' + error);
        });
    }
});
