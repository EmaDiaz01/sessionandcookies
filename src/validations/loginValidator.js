const { check } = require('express-validator');


module.exports = [

    check('email')
    .notEmpty().withMessage('Ingrese un email')
    .isEmail().withMessage('Ingrese un email válido'),

    check('name')
    .isLength({ min : 3, max : 14 }).withMessage('Ingrese un nombre entre 3 y 14 caractéres'),
    

    check('color').notEmpty().withMessage('Seleccione un color'),

    check('edad')
    .notEmpty().withMessage('Ingrese un número')
    .isInt().withMessage('Ingrese un número')
]