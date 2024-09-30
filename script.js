document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=2Vv-BfVoq4g&pp=ygUHcGVyZmVjdA%3D%3D'; // Change this to your desired URL
});

document.getElementById('noButton').addEventListener('mouseenter', function() {
    const noButton = this;
    const x = Math.random() * 100; // Random position in the range of 0-100px
    const y = Math.random() * 100; // Random position in the range of 0-100px

    noButton.style.transform = `translate(${x}px, ${y}px)`; // Move button to random position
});
