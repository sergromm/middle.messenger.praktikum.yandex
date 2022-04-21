import Block from "../../utils/constructor/Block";
import { formValidationPatterns } from "../../utils/forms/helpers/constants";
import validateInput from "../../utils/forms/validation/validation";
import { handleFormSubmit } from "../../utils/utils";

export default class EditProfilePopup extends Block {
  static componentName = "EditProfilePopup";

  protected getStateFromProps(): void {
    this.state = {
      values: {
        first_name: "Дима",
        display_name: "Дима",
        second_name: "Дмитров",
        login: "demon369",
        email: "demon@mail.com",
        phone: "1234567890",
      },
      validateInput: (e: FocusEvent) => validateInput(e.type, e.target as HTMLInputElement),
      handleSubmit: (e: SubmitEvent) => handleFormSubmit(this.state, e),
    };
  }

  render() {
    const {
      values = {
        first_name: "",
        display_name: "",
        second_name: "",
        login: "",
        email: "",
        phone: "",
      },
    } = this.state;

    return /* template */ `
      <div class="popup edit-profile-popup">
        <form class="form edir-profile-form">
          {{{Button 
            className="popup-close" 
            text="×" 
            type="button"
            name="edit-profile"
            onClick=handlePopup
          }}}
          <fieldset class="form-container">
            <legend class="form-title">Редактировать профиль</legend>
            <label class="input-title">
              Имя
              <div class="input-container">
                <span class="input-tooltip"></span>
              {{{Input
                className="input"
                name="first_name"
                type="text"
                value="${values.first_name}"
                pattern= "${formValidationPatterns.firstName}"
                onBlur=validateInput
                onInput=validateInput
                required=true
              }}}
            </div>
            </label>
            <label class="input-title">
              Отображаемое имя
              <div class="input-container">
                <span class="input-tooltip"></span>
              {{{Input
                className="input"
                name="display_name"
                type="text"
                value="${values.display_name}"
                pattern="${formValidationPatterns.firstName}"
                onBlur=validateInput
                onInput=validateInput
                required=true
              }}}
            </div>
            </label>
            <label class="input-title">
              Фамилия
              <div class="input-container">
                <span class="input-tooltip"></span>
                {{{Input
                  className="input"
                  name="second_name"
                  type="text"
                  value="${values.second_name}"
                  pattern="${formValidationPatterns.secondName}"
                  onBlur=validateInput
                  onInput=validateInput
                  required=true
                }}}
              </div>
            </label>
            <label class="input-title">
              Логин
              <div class="input-container">
                <span class="input-tooltip"></span>
                {{{Input
                  className="input"
                  name="login"
                  type="text"
                  value="${values.login}"
                  pattern="${formValidationPatterns.login}"
                  onBlur=validateInput
                  onInput=validateInput
                  required=true
                }}}
              </div>
            </label>
            <label class="input-title">  
              E-mail
              <div class="input-container">
                <span class="input-tooltip"></span>
                {{{Input
                  className="input"
                  name="email"
                  type="email"
                  value="${values.email}"
                  pattern="${formValidationPatterns.email}"
                  onBlur=validateInput
                  onInput=validateInput
                  required=true
                }}}
              </div>
            </label>
            <label class="input-title">
              Номер
              <div class="input-container">
                <span class="input-tooltip"></span>
                {{{Input
                  className="input"
                  name="phone"
                  type="text"
                  value="${values.phone}"
                  pattern="${formValidationPatterns.phone}"
                  minlength="8"
                  maxlength="40"
                  onBlur=validateInput
                  onInput=validateInput
                  required=true
                }}}
              </div>
            </label>
            {{{Button 
              className="form-button" 
              text="Сохранить"
              onClick=handleSubmit
            }}}
          </fieldset>
        </form>
      </div>`;
  }
}
