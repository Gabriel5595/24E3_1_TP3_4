pToggle.addEventListener('click', _ => {
    const menuEstaAtivo = uiFooter.classList.contains('navbarFooterActive');
    if (menuEstaAtivo) {
        uiFooter.classList.remove('navbarFooterActive');
        uiFooter.classList.add('navbarFooter');
        pToggle.innerText = 'Menu';
    } else {
        uiFooter.classList.remove('navbarFooter');
        uiFooter.classList.add('navbarFooterActive');
        pToggle.innerText = 'x';
    }
});
