document.getElementById('openIframe').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('iframeModal').style.display = 'block';
});

document.getElementById('closeIframe').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('iframeModal').style.display = 'none';
});
