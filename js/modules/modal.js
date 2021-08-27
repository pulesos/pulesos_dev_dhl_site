let modal = () => {
    function bindModal(btnTrigger, modalTrigger, closeTrigger) {
        let btn = document.querySelectorAll(btnTrigger),
            modal = document.querySelector(modalTrigger),
            close = document.querySelector(closeTrigger);

        btn.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';

        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        }); 
    }
    bindModal('.language__contact', '.modal__overlay', '.modal__services .modal__close');
    bindModal('.top__btn_right', '.modal__overlay', '.modal__services .modal__close');
    bindModal('.services__item__btn', '.modal__overlay', '.modal__services .modal__close');
    bindModal('.tab__item__btn', '.modal__overlay__thanks', '.modal__thanks .modal__close');
};

export default modal;