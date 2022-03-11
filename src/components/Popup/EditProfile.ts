import Block from "../../utils/constructor/Block";
import { formValidationPatterns } from "../../utils/templater/helpers";
import Button from "../Button/Button";
import EditInput from "../Input/EditInput";

const editProfileTemplate = /* template */ `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  {{closeButton}}
    <fieldset class="form-container">
      <legend class="form-title">Редактировать профиль</legend>
      {{firstNameInput}}
      {{displayNameInput}}
      {{secondNameInput}}
      {{loginInput}}
      {{emailInput}}
      {{phoneInput}}
      <button class="form-button">Сохранить</button>
    </fieldset>
  </form>
</div>
`;

class EditProfile extends Block {
  isVisible: boolean;

  constructor(props) {
    super(props);
    this.isVisible = false;
  }

  render() {
    return this.compile(editProfileTemplate, { ...this.props });
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

const firstNameInput = new EditInput({
  label: "Имя",
  name: "first_name",
  type: "text",
  value: "Дима",
  pattern: formValidationPatterns.first_name,
});

const displayNameInput = new EditInput({
  label: "Отображаемое имя",
  name: "display_name",
  type: "text",
  value: "Дима",
  pattern: formValidationPatterns.first_name,
});

const secondNameInput = new EditInput({
  label: "Фамилия",
  name: "second_name",
  type: "text",
  value: "Дмитров",
  pattern: formValidationPatterns.second_name,
});

const loginInput = new EditInput({
  label: "Логин",
  name: "login",
  type: "text",
  value: "demon369",
  pattern: formValidationPatterns.login,
});

const emailInput = new EditInput({
  label: "E-mail",
  name: "email",
  type: "email",
  value: "demon@mail.com",
  pattern: formValidationPatterns.email,
});

const phoneInput = new EditInput({
  label: "Номер",
  name: "phone",
  type: "text",
  value: "1234567890",
  pattern: formValidationPatterns.phone,
});

const editProfile = new EditProfile({
  closeButton,
  firstNameInput,
  displayNameInput,
  secondNameInput,
  loginInput,
  emailInput,
  phoneInput,
});

editProfile.setIsHidden();

export default editProfile;
