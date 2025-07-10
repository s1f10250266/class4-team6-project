document.addEventListener('DOMContentLoaded', function() {
    const enqueteForm = document.getElementById('enqueteForm');
    const messageContainer = document.getElementById('message-container');

    if (enqueteForm) {
        enqueteForm.addEventListener('submit', function(event) {
            event.preventDefault();

            enqueteForm.style.display = 'none';

            messageContainer.textContent = 'アンケート協力ありがとう！！';
            messageContainer.style.display = 'block';

        });
    }
});