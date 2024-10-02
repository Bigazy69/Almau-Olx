function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.item-card');

    items.forEach(item => {
        const title = item.querySelector('h2').innerText.toLowerCase();
        if (title.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
