import Block from "../utils/constructor/Block";
import { formValidationPatterns } from "../utils/forms/helpers/constants";
import validateInput from "../utils/forms/validation/validation";
import { handleFormSubmit } from "../utils/utils";

export default class LoginPage extends Block {
  static componentName = "LoginPage";

  protected getStateFromProps() {
    this.state = {
      values: {
        login: "",
        password: "",
      },
      singInButtonText: "Войти",
      validateInput: (e: FocusEvent) => validateInput(e.type, e.target as HTMLInputElement),
      handleLogin: (e: SubmitEvent) => handleFormSubmit(this.state, e),
    };
  }

  render() {
    const { values = { login: "", password: "" } } = this.state;

    return /* template */ `
    <form class="form signin-form">
      <fieldset class="form-container">
        <legend class="form-title">Войти</legend>
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input 
            type="text"
            placeholder="Логин" 
            className="input" 
            name="login" 
            ref="login"
            value="${values.login}"
            pattern="${formValidationPatterns.login}" 
            minlength="3"
            maxlength="30"
            onFocus=validateInput
            onBlur=validateInput
            onInput=validateInput
            required=true 
          }}}
        </div>
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input 
            type="password"
            placeholder="Пароль" 
            className="input" 
            name="password"
            ref="password"
            value="${values.password}"
            pattern="${formValidationPatterns.password}" 
            minlength="8"
            onFocus=validateInput
            onBlur=validateInput
            onInput=validateInput
            required=true
          }}}
        </div>
        {{{ButtonElement 
          type="submit" 
          className="form-button" 
          text=singInButtonText 
          onClick=handleLogin
        }}}
        <p class="form-text">
          Нет аккаунта?
          <a class="form-link" href="/signup">Зарегистрироваться</a>
        </p>
      </fieldset>
    </form>`;
  }
}
