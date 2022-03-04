const signin = `
  <form class="form signin-form">
    <fieldset class="form-container">
      <legend class="form-title">Войти</legend>
      <input placeholder="Логин" type="text" class="input sigin-login"/>
      <input placeholder="Пароль" type="password" class="input sigin-password"/>
      <button type="button" class="form-button" onclick="{{handleSignin}}">Войти</button>
      <p class="form-text">
        Нет аккаунта?
        <a class="form-link" href="/signup">Зарегистрироваться</a>
      </p>
    </fieldset>
  </form>
`;

export default signin;
