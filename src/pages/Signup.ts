import Block from "../utils/constructor/Block";
import { formValidationPatterns } from "../utils/forms/helpers/constants";
import validateInput from "../utils/forms/validation/validation";
import { handleFormSubmit } from "../utils/utils";

export default class SignupPage extends Block {
  static componentName = "SignupPage";

  protected getStateFromProps() {
    this.state = {
      values: {
        first_name: "",
        display_name: "",
        second_name: "",
        login: "",
        email: "",
        phone: "",
        password: "",
      },
      singInButtonText: "Войти",
      validateInput: (e: FocusEvent) => validateInput(e.type, e.target as HTMLInputElement),
      handleSubmit: (e: SubmitEvent) => handleFormSubmit(this.state, e),
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
            className="input"
            name="first_name"
            type="text"
            placeholder="Имя"
            value="${values.first_name}"
            pattern= "${formValidationPatterns.firstName}"
            onBlur=validateInput
            onInput=validateInput
            required=true
          }}}
        </div>
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input
            className="input"
            name="display_name"
            type="text"
            placeholder="Отображаемое имя"
            value="${values.display_name}"
            pattern="${formValidationPatterns.firstName}"
            onBlur=validateInput
            onInput=validateInput
            required=true
          }}}
        </div>
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input
            className="input"
            name="second_name"
            type="text"
            placeholder="Фамилия"
            value="${values.second_name}"
            pattern="${formValidationPatterns.secondName}"
            onBlur=validateInput
            onInput=validateInput
            required=true
          }}}
        </div>         
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input
            className="input"
            name="login"
            type="text"
            placeholder="Логин"
            minlength="3"
            maxlength="20"
            value="${values.login}"
            pattern="${formValidationPatterns.login}"
            onBlur=validateInput
            onInput=validateInput
            required=true
          }}}
        </div>    
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input
            className="input"
            name="email"
            type="email"
            placeholder="E-mail"
            value="${values.email}"
            pattern="${formValidationPatterns.email}"
            onBlur=validateInput
            onInput=validateInput
            required=true
          }}}
        </div>
        <div class="input-container">
          <span class="input-tooltip"></span>
          {{{Input
            className="input"
            name="phone"
            type="text"
            placeholder="Номер"
            value="${values.phone}"
            pattern="${formValidationPatterns.phone}"
            minlength="8"
            maxlength="40"
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
        {{{Button 
          type="submit" 
          className="form-button" 
          text=singInButtonText 
          onClick=handleSubmit
        }}}
        <p class="form-text">
          Нет аккаунта?
          <a class="form-link" href="/signin">Зарегистрироваться</a>
        </p>
      </fieldset>
    </form>`;
  }
}
