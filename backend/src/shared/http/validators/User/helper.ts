/* eslint-disable no-useless-escape */
export default {
  forEmailValidation: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  forPasswordValidation:
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
};

/* forPasswordValidation:

  (?=.*\d)             - deve conter ao menos um dígito
  (?=.*[a-z])          - deve conter ao menos uma letra minúscula
  (?=.*[A-Z])          - deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#])        - deve conter ao menos um caractere especial
  [0-9a-zA-Z$*&@#]{8,} - deve conter ao menos 8 dos caracteres mencionados
  
*/
