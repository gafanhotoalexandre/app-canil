type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

const createMenuObject = (activeMenu: MenuOptions) => {
    let returnedObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    // selecionando menu informado e definindo-o como true
    if (activeMenu !== '') {
        returnedObject[activeMenu] = true;
    }

    return returnedObject;

};

export { createMenuObject };