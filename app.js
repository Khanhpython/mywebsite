document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('ClickButton');
    const buttonMn = document.getElementById('ButtonMn');
    let isShown = false;

    button.addEventListener('click', () => {
        if (isShown) {
            buttonMn.style.height = '0';
            setTimeout(() => buttonMn.style.display = 'none', 500);
        } else {
            buttonMn.style.display = 'block';
            const height = buttonMn.scrollHeight + 'px';
            buttonMn.style.height = height;
        }
        isShown = !isShown;
    });
});