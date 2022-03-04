const editProfile = `
<div class="popup edit-profile-popup">
  <form class="form edit-profile-form">
  <a href="/settings" class="popup-close">&times;</a>
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

export default editProfile;
