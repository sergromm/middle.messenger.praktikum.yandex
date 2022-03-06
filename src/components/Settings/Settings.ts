import Block from "../../utils/templater/constructor/Block";
import changePassword from "../Popup/ChangePassword";
import Button from "../Button/Button";
import editProfile from "../Popup/EditProfile";
import editAvatar from "../Popup/EditAvatar";
import setLocation from "../../utils/templater/helpers";

const settingsTemplate = /* template */ `
<div class="sidebar-content">
  <div class="profile">
    <img src='#' alt=' ' class="profile-avatar"/>
    <div class="profile-info">
      <h2 class="profile-name">{{name}}</h2>
      <span class="profile-login">@demon369</span>
    </div>
  </div>
  {{editAvatarButton}}
  {{editProfileButton}}
  {{changePasswordButton}}
  {{logoutButton}}
</div>`;

class Settings extends Block {
  render() {
    return this.compile(settingsTemplate, { ...this.props });
  }
}

const changePasswordButton = new Button({
  className: ["settings-button", "change-password"],
  text: "Изменить пароль",
  events: {
    click: () => changePassword.toggleVisibility(),
  },
});

const editProfileButton = new Button({
  className: ["settings-button", "edit-profile"],
  text: "Редактировать профиль",
  events: {
    click: () => editProfile.toggleVisibility(),
  },
});

const editAvatarButton = new Button({
  className: ["settings-button", "edit-avatar"],
  text: "Изменить аватар",
  events: {
    click: () => editAvatar.toggleVisibility(),
  },
});

const logoutButton = new Button({
  className: ["settings-button", "logout"],
  text: "Выйти",
  events: {
    click: () => setLocation("/signin"),
  },
});

const settings = new Settings({
  name: "Дима",
  editAvatarButton,
  editProfileButton,
  changePasswordButton,
  logoutButton,
});

export default settings;
