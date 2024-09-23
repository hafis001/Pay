document.addEventListener('DOMContentLoaded', () => {
    const tradeButtons = document.querySelectorAll('.trade-button');

    tradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Trade functionality will be implemented here.');
        });
    });
});

// Disable right-click
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Disable keyboard shortcuts for saving (e.g., Ctrl+S)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                
            }
        });

        // Disable text selection
        document.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });

        // Prevent drag-and-drop
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });

        // Prevent copy-pasting
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            
        });

        // Prevent image saving using a canvas trick
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                });
            });
        });
