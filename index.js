// openWindow call
document.getElementById('openWindowButton').addEventListener('click', function() {
    liff.openWindow({
        url: 'https://line.me',
        external: true
    });
});
