document.addEventListener('DOMContentLoaded', () => {
    const tradeButtons = document.querySelectorAll('.trade-button');

    tradeButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Trade functionality will be implemented here.');
        });
    });
});
