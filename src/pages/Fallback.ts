import Block from "../utils/constructor/Block";

const fallbackTemplate = `<section class="fallback-container">
  <h1 class="fallback-number">{{title}}</h1>
  <span class="fallback-text">{{text}}<a class="fallback-link" href="/"> Вернуться на главную</a></span>
</section>`;

class Fallback extends Block {
  render() {
    return this.compile(fallbackTemplate, {
      ...this.props,
    });
  }
}

const notFound = new Fallback({
  title: "404",
  text: "Упс, кажется, такой страницы не существует.",
});

const serverDown = new Fallback({
  title: "505",
  text: "Упс, серверу поплохело. Сейчас исправим.",
});

export { notFound, serverDown };
