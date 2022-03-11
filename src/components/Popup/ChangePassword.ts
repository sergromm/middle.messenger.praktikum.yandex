import Block from "../../utils/constructor/Block";
import { formValidationPatterns } from "../../utils/templater/helpers";
import Button from "../Button/Button";
import EditInput from "../Input/EditInput";

const changePasswordTemplate = /* template */ `
<div class="popup change-password-popup">
  <form class="form change-password-form">
  {{closeButton}}
    <fieldset class="form-container">
      <legend class="form-title">Изменить пароль</legend>
      {{oldPasswordInput}}
      {{newPassowrdInput}}
      <button class="form-button">Сохранить</button>
    </fieldset>
  </form>
</div>
`;

class ChangePassword extends Block {
  isVisible: boolean;

  constructor(props) {
    super(props);
    this.isVisible = false;
  }

  render() {
    return this.compile(changePasswordTemplate, { ...this.props });
  }

  setIsVisible() {
    this.element.style.visibility = "visible";
    this.element.style.opacity = "1";
  }

  setIsHidden() {
    this.element.style.visibility = "hidden";
    this.element.style.opacity = "0";
  }

  toggleVisibility() {
    if (this.isVisible) {
      this.setIsHidden();
    } else {
      this.setIsVisible();
    }
  }
}

const closeButton = new Button({
  text: "&times;",
  className: "popup-close",
  tupe: "button",
  events: {
    click: (e) => {
      e.preventDefault();
      const element = e.target;
      const popup = element.closest(".popup");
      popup.style.opacity = "0";
      popup.style.visibility = "hidden";
    },
  },
});

const oldPasswordInput = new EditInput({
  label: "Старый пароль",
  name: "password",
  type: "password",
  value: "1234567890",
  pattern: formValidationPatterns.password,
});

const newPassowrdInput = new EditInput({
  label: "Новый пароль",
  name: "password",
  type: "password",
  value: "",
  pattern: formValidationPatterns.password,
});

const changePassword = new ChangePassword({
  closeButton,
  oldPasswordInput,
  newPassowrdInput,
});
changePassword.setIsHidden();

export default changePassword;
