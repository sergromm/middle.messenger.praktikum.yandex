import Block from "../utils/templater/constructor/Block";
import Input from "../components/Input/Input";

const signinTemplate = /* template */ `
<form class="form signin-form">
  <fieldset class="form-container">
    <legend class="form-title">Войти</legend>
    {{loginInput}} 
    {{passwordInput}}
    <button type="submit" class="form-button">Войти</button>
    <p class="form-text">
      Нет аккаунта?
      <a class="form-link" href="/signup">Зарегистрироваться</a>
    </p>
  </fieldset>
</form> 
`;

class Signin extends Block {
  render() {
    return this.compile(signinTemplate, {
      ...this.props,
    });
  }
}

const loginInput = new Input({
  placeholder: "Логин",
  type: "input",
  className: ["input", "sigin-login"],
  name: "login",
});

loginInput.setAttribute("minlength", "4");

const passwordInput = new Input({
  placeholder: "Пароль",
  type: "input",
  className: ["input", "sigin-password"],
  name: "password",
});

const handleSubmit = (e) => {
  e.preventDefault();
  const inputs = [...e.target.querySelectorAll(".input")];
  const formData = inputs.map(({ name, value }) => ({ [name]: value }));
  console.dir(formData);
};

const signin = new Signin({
  events: {
    submit: handleSubmit,
  },
  loginInput,
  passwordInput,
});

export default signin;
