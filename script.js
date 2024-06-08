document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.querySelector('.first');
    getStartedButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('You are registered');
        // You can replace the alert with a custom popup if needed.
    });
});
