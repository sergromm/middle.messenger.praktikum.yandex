import Block from "../utils/constructor/Block";
// !временная заглушка!
// TODO: разобраться как ререндерить одинаковые компоненты на разных URL
const settingsBackgroundTemplate = /* template */ `
<section class="chat-feed">
  <header class="chat-header">
    <a href="/500" class="chat-title">{{name}}</a>
    <button class="button contact-about"></button>
  </header>
  <ul class="messages">
    <li class="message">Привет</li>
  </ul>
  <input class="message-input" placeholder="Введите сообщение" type="text" name="message"/>
</section>`;

class SettingsBackground extends Block {
  render() {
    return this.compile(settingsBackgroundTemplate, {
      ...this.props,
    });
  }
}

const settingsBackground = new SettingsBackground({
  name: "Вася",
  messages: [
    {
      name: "Вася",
      text: "Привет",
    },
  ],
});
