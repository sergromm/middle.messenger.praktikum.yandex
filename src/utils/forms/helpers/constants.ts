interface ErrorMessages {
  [key: string]: {
    [key: string]: string;
  };
}

const errorMessages: ErrorMessages = {
  login: {
    pattern: "Логин должен состоять из латинских букв и цифр",
    length: "Логин должен быть больше 3 и меншье 30 символов",
    empty: "Вы пропустили логин",
  },
  password: {
    pattern: `Логин должен состоять из латинских букв и цифр, 
    и минимум одной буквы в верхнем регистре`,
    length: "Пароль должен состоять минимум из 8 символов",
    empty: "Вы забыли указать пароль",
  },
};

const formValidationPatterns = {
  first_name: "^[A-ZА-Я][A-zА-я-]+[A-zА-я]$",
  second_name: "^[A-ZА-Я][A-zА-я-]+[A-zА-я]$",
  login: "[A-z0-9-_]{3,20}",
  email: `^(.+)@(.+)[.](.+)$`,
  phone: "^[+]?[0-9]{10,15}$",
  password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,40}$",
};

export { errorMessages, formValidationPatterns };
