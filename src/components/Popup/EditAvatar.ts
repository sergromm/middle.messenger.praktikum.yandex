import Block from "../../utils/constructor/Block";
import Button from "../Button/Button";

const editAvatarTemplate = /* template */ `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  {{closeButton}}
    <fieldset class="form-container">
      <legend class="form-title">Изменить аватар</legend>
      <label class="input-title">
        <input type="file" class="file-input" name="avatar"/>
        <button class="form-button">Сохранить</button>
      </label>
    </fieldset>
  </form>
</div>
`;

class EditAvatar extends Block {
  isVisible: boolean;

  constructor(props) {
    super(props);
    this.isVisible = false;
  }

  render() {
    return this.compile(editAvatarTemplate, { ...this.props });
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

const editAvatar = new EditAvatar({ closeButton });
editAvatar.setIsHidden();

export default editAvatar;
