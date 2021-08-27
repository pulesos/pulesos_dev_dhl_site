let tab = (headerSelector, tabSelector, contentSelector) => {

    let headers = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove('show');
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = 'inline-block';
        tab[i].classList.add('show');
    }
    hideTabContent();
    showTabContent();

    headers.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('tab__item__header')) {
            tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tab;