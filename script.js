fetch('text.txt')
    .then(response => {
        if (!response.ok) throw new Error('فایل پیدا نشد');
        return response.text();
    })
    .then(text => {
        document.getElementById('content').textContent = text;
    })
    .catch(err => {
        document.getElementById('content').innerHTML =
            '<p style="color:red;">⚠️ خطا در بارگذاری فایل: ' + err.message + '</p>';
    });