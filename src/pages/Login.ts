import ButtonElement from "../components/element/element";
import Block from "../utils/constructor/Block";
import template from "./Login.hbs";

export default class LoginPage extends Block {
  static componentName = "LoginPage";

  protected initChildren(): void {
    this.children.button = new ButtonElement({
      text: "sss",
      className: "form-button",
    });
    setTimeout(() => {
      this.children.button.setProps({
        text: "hey",
        className: "form-button",
      });
    }, 2000);
  }

  render() {
    return /* template */ `
    <form class="form signin-form">
      <fieldset class="form-container">
        <legend class="form-title">Войти</legend>
        {{{button}}}
        <button type="submit" class="form-button">Войти</button>
        <p class="form-text">
          Нет аккаунта?
          <a class="form-link" href="/signup">Зарегистрироваться</a>
        </p>
      </fieldset>
    </form>`;
  }
}
