import Block from "../../utils/templater/constructor/Block";
import Button from "../Button/Button";

const changePasswordTemplate = /* template */ `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  {{closeButton}}
    <fieldset class="form-container">
      <legend class="form-title">Изменить пароль</legend>
      <label class="input-title">
        Старый пароль
        <input class="input" value="123987123" type="password" name="oldPassword"/>
      </label>
      <label class="input-title">
        Новый пароль
        <input class="input" value="2222222" type="password" name="newPassword"/>
      </label>
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

const changePassword = new ChangePassword({ closeButton });
changePassword.setIsHidden();

export default changePassword;
