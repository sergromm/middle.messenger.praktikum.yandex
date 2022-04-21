import Block from "../utils/constructor/Block";

export default class Fallback extends Block {
  static componentName = "Fallback";

  protected getStateFromProps(): void {}

  render() {
    return /* template */ `
    <main class="fallback-container">
      <h1 class="fallback-number">{{title}}</h1>
      <span class="fallback-text">
        {{text}}
        <a class="fallback-link" href="/"> Вернуться на главную</a>
      </span>
    </main>`;
  }
}
