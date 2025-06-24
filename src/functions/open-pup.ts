export function openClosePopUp(idElement: string) {
    const popUp = document.getElementById(idElement);
    const overlay = popUp?.parentElement?.querySelector('.pop-up-overlay') as HTMLElement;

    if (!popUp || !overlay) return; // Перевірка існування

    const isVisible = popUp.style.display === 'block';

    if (isVisible) {
        popUp.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        popUp.style.display = 'block';
        overlay.style.display = 'block';
    }
}
