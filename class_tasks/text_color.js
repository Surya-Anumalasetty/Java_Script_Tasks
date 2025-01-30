document.getElementById('colorInput').addEventListener('input', function() {
    const color = this.value;
    document.getElementById('text').style.color = color;
});