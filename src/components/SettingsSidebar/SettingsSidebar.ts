import Block from "../../utils/constructor/Block";

export default class SettingsSidebar extends Block {
  static componentName = "SettingsSidebar";

  protected getStateFromProps(): void {}

  render() {
    return /* template */ `
      <aside class="sidebar">
        <div class="controls">
          {{{Button 
            className="button menu-icon" 
            type="button"
            onClick=toggleSidebar
          }}}
        </div>
        <div class="sidebar-content">
          <div class="profile">
            <img src='#' alt=' ' class="profile-avatar"/>
            <div class="profile-info">
              <h2 class="profile-name">{{name}}</h2>
              <span class="profile-login">@demon369</span>
            </div>
          </div>
          {{{Button 
            onClick=handlePopup
            className="settings-button edit-avatar" 
            text="Изменить аватар"
            name="edit-avatar"
            type="button"
          }}}
          {{{Button 
            onClick=handlePopup
            className="settings-button edit-profile" 
            text="Редактировать профиль" 
            name="edit-profile"
            type="button"
          }}}
          {{{Button 
            onClick=handlePopup
            className="settings-button change-password" 
            text="Изменить пароль"
            name="change-password"
            type="button"
          }}}
          {{{Button 
            onClick=handleLogout
            className="settings-button logout" 
            text="Выйти"
            type="button"
          }}}
        </div>
      </aside>`;
  }
}
