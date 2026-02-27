const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const warning = document.getElementById('warning');
const MAX_CHARS = 200;

textarea.addEventListener('input', function() {
    const currentLength = this.value.length;
    charCount.textContent = currentLength;
    
    if (currentLength >= MAX_CHARS) {
        warning.classList.remove('hidden');
        textarea.classList.add('limit-reached');
        this.value = this.value.substring(0, MAX_CHARS);
        charCount.textContent = MAX_CHARS;
    } else {
        warning.classList.add('hidden');
        textarea.classList.remove('limit-reached');
    }
});

// Prevent typing when limit reached
textarea.addEventListener('keydown', function(e) {
    if (this.value.length >= MAX_CHARS && 
        e.key !== 'Backspace' && 
        e.key !== 'Delete' && 
        e.key !== 'ArrowLeft' && 
        e.key !== 'ArrowRight') {
        e.preventDefault();
    }
});
