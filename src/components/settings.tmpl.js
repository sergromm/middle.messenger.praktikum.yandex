// TODO: вернуть альт для изображений, когда добавлю ссылки на аватары

export const settings = `
  <aside class="sidebar">
    <div class="controls">
      <button onclick="{{moveToMessages}}" class="button menu-button"></button>
    </div>
    <div class="profile">
      <img src='#' alt=' ' class="profile-avatar"/>
      <div class="profile-info">
        <h2 class="profile-name">{{name}}</h2>
        <span class="profile-login">@demon369</span>
      </div>
    </div>
    <button class="settings-button change-avatar" onclick="{{openEditAvatar}}">Изменить аватар</button>
    <button class="settings-button edit-profile" onclick="{{openEditProfile}}">Редактировать профиль</button>
    <button class="settings-button change-password" onclick="{{openChangePassword}}">Изменить пароль</button>
    <button class="settings-button logout" onclick="{{handleLogout}}">Выйти</button>
  </aside>
`;