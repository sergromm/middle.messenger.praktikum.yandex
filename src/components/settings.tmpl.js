// TODO: вернуть альт для изображений, когда добавлю ссылки на аватары

export const settings = `
  <aside class="sidebar">
    <div class="controls">
      <a href="/messages" class="button menu-button"></a>
    </div>
    <div class="profile">
      <img src='#' alt=' ' class="profile-avatar"/>
      <div class="profile-info">
        <h2 class="profile-name">Дима</h2>
        <span class="profile-login">@demon369</span>
      </div>
    </div>
    <button class="settings-button change-avatar">Изменить аватар</button>
    <a href="/edit-profile" class="settings-button edit-profile">Редактировать профиль</a>
    <button class="settings-button change-password">Изменить пароль</button>
    <a href="/signin" class="settings-button logout">Выйти</a>
  </aside>
`;