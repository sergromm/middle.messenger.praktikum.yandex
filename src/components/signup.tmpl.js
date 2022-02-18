export const signup = `
  <form class="form signup-form">
    <fieldset class="form-container">
      <legend class="form-title">Регистрация</legend>
      <input class="input" placeholder="Имя" name="first_name"/>
      <input class="input" placeholder="Фамилия" name="second_name"/>
      <input class="input" placeholder="Логин" name="login"/>
      <input class="input" placeholder="Почта" name="email"/>
      <input class="input" placeholder="Номер" name="phone"/>
      <input class="input" placeholder="Пароль" name="password"/>
      <button type="button" class="form-button" onclick="{{handleSignup}}">Зарегистрироваться</button>
      <p class="form-text">
        Уже есть аккаунт?
        <a class="form-link" href="/signin">Войти</a>
      </p>
    </fieldset>
  </form>
`;
