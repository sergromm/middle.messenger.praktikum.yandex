const changePassword = `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  <button class="popup-close" onclick="{{handleClosePopup}}">&times;</button>
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

export default changePassword;
