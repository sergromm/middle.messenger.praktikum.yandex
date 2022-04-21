import Block from "../../utils/constructor/Block";
import { formValidationPatterns } from "../../utils/forms/helpers/constants";
import validateInput from "../../utils/forms/validation/validation";
import { handleFormSubmit } from "../../utils/utils";

export default class ChangePasswordPopup extends Block {
  static componentName = "ChangePasswordPopup";

  protected getStateFromProps(): void {
    this.state = {
      values: {
        password: "Asdasd123",
        new_password: "",
      },
      validateInput: (e: FocusEvent) => validateInput(e.type, e.target as HTMLInputElement),
      handleSubmit: (e: SubmitEvent) => handleFormSubmit(this.state, e),
    };
  }

  render() {
    const { values = { password: "", new_password: "" } } = this.state;

    return /* template */ `
      <div class="popup change-password-popup">
        <form class="form change-password-form">
          {{{Button 
            className="popup-close" 
            text="×" 
            type="button"
            name="change-password"
            onClick=handlePopup
            
          }}}
          <fieldset class="form-container">
            <legend class="form-title">Изменить пароль</legend>
            <label class="input-title">
              Старый пароль
              <div class="input-container">
                <span class="input-tooltip"></span>
                {{{Input 
                  className="input"
                  type="password"
                  class="input" 
                  name="password"
                  value="${values.password}"
                  pattern="${formValidationPatterns.password}"
                  onBlur=validateInput
                  onInput=validateInput
                  required=true
                }}}
              </div>
            </label>
            <label class="input-title">
              Новый пароль
              <div class="input-container">
                <span class="input-tooltip"></span>
                {{{Input 
                  className="input"
                  type="password"
                  class="input" 
                  name="new_password"
                  value="${values.new_password}"
                  pattern="${formValidationPatterns.password}"
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
