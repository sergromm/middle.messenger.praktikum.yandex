/* eslint-disable no-useless-escape */
import Block from "../utils/constructor/Block";
import Input from "../components/Input/Input";
import setLocation, {
  formValidationPatterns,
} from "../utils/templater/helpers";

const signupTemplate = `
<form class="form signup-form">
  <fieldset class="form-container">
    <legend class="form-title">Регистрация</legend>
    {{firstNameInput}}
    {{secondNameInput}}
    {{loginInput}}
    {{emailInput}}
    {{phoneInput}}
    {{passwordInput}}
    <button type="submit" class="form-button">Зарегистрироваться</button>
    <p class="form-text">
      Уже есть аккаунт?
      <a class="form-link" href="/signin">Войти</a>
    </p>
  </fieldset>
</form>
`;

class Signup extends Block {
  render() {
    return this.compile(signupTemplate, {
      ...this.props,
    });
  }
}

const firstNameInput = new Input({
  className: ["input"],
  placeholder: "Имя",
  name: "first_name",
  type: "text",
  pattern: formValidationPatterns.first_name,
});

const secondNameInput = new Input({
  className: ["input"],
  placeholder: "Фамилия",
  name: "second_name",
  type: "text",
  pattern: formValidationPatterns.second_name,
});

const loginInput = new Input({
  className: ["input"],
  placeholder: "Логин",
  name: "login",
  type: "text",
  pattern: formValidationPatterns.login,
});

const emailInput = new Input({
  className: ["input"],
  placeholder: "E-mail",
  name: "email",
  type: "email",
  pattern: formValidationPatterns.email,
});

const phoneInput = new Input({
  className: ["input"],
  placeholder: "Номер",
  name: "phone",
  type: "text",
  pattern: formValidationPatterns.phone,
});

const passwordInput = new Input({
  className: ["input"],
  placeholder: "Пароль",
  name: "password",
  type: "password",
  pattern: formValidationPatterns.password,
});

const handleSubmit = (event) => {
  event.preventDefault();
  if (event.target) {
    const { target } = event;
    const inputs = target.querySelectorAll(".input");
    const inputsArray = [...inputs];
    const formData = inputsArray.map(({ name, value }) => ({ [name]: value }));
    console.dir(formData);
    setTimeout(() => {
      setLocation("/messages");
    }, 2000);
  }
};

const signup = new Signup({
  firstNameInput,
  secondNameInput,
  loginInput,
  emailInput,
  phoneInput,
  passwordInput,
  events: {
    submit: handleSubmit,
  },
});
