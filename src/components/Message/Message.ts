import Block from "../../utils/constructor/Block";

export default class Message extends Block {
  static componentName = "Message";

  render() {
    return /* template */ `<li class="message">{{this.text}}</li>`;
  }
}
