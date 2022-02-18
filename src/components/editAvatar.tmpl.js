export const editAvatar = `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  <button class="popup-close" onclick="{{handleClosePopup}}">&times;</button>
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