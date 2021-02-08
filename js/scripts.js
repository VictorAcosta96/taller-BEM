/*localizamos el menu donde se va a hacer click */
const mainMenu = document.getElementById('main-menu');
const mainMenuLinks = document.querySelectorAll('.main-menu__link');

/*hacemos el evento de escucha sobre el menu*/
mainMenu.addEventListener('click', e => {
    /*validamos que se haga click en uno de los elementos del menu y no fuera de el*/
    if (e.target.classList.contains('main-menu__link')) {
        /*recorremos los elementos del menu*/
        mainMenuLinks.forEach(item=> {
            /*quitamos el modificador de todos los elementos*/
            item.classList.remove('main-menu__link--active');

        });
        /*aqui lo agregamos al que se le halla echo click*/
        e.target.classList.add('main-menu__link--active');
    }
});