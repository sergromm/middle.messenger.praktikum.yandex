import Block from "../../utils/templater/constructor/Block";
import Button from "../Button/Button";

const editProfileTemplate = /* template */ `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  {{closeButton}}
    <fieldset class="form-container">
      <legend class="form-title">Редактировать профиль</legend>
      <label class="input-title">
        Имя
        <input class="input" value="Дима" name="first_name"/>
      </label>
      <label class="input-title">
        Фамилия
        <input class="input" value="Дмитров" name="second_name"/>
      </label>
      <label class="input-title">
        Отображаемое имя
        <input class="input" value="Дима" name="display_name"/>
      </label>
      <label class="input-title">
        Логин
        <input class="input" value="demon369" name="login"/>
      </label>
      <label class="input-title">
        E-mail
        <input class="input" value="demon@ya.ru" name="email"/>
      </label>
      <label class="input-title">
        Номер
        <input class="input" value="+7(999)123-45-67" name="phone"/>
      </label>
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

const editProfile = new EditProfile({ closeButton });
editProfile.setIsHidden();

export default editProfile;
