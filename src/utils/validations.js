export const formValidationsTypes = {
    email: 'email',
    message: 'message',
    nombre: 'nombre',
};

const formValidations = {
    email: [
        (value) => {
            const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
            return regex.test(value);
        },
        'El correo debe tener el formato mail@dominio.com',
    ],
    message: [
        (value) => value.length >= 10 && value.length <= 200,
        'El mensaje debe tener al menos 10 caracteres y no más de 200',
    ],
    nombre: [
        (value) => value.length >= 2 && value.length <= 30,
        'El nombre debe tener al menos 2 caracteres y no más de 30',
    ],
};

export const getFormValidations = (validationTypes = []) => {
    const validations = {};

    for (const validationType of validationTypes) {
        validations[validationType] = formValidations[validationType];
    }

    return validations;
};
