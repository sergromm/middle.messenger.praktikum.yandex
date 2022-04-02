import Block from "../../utils/constructor/Block";

const chatHeaderTemplate = `<header class="chat-header">
<a href="/500" class="chat-title">{{name}}</a>
<button class="button contact-about"></button>
</header>`;

class ChatHeader extends Block {
  render() {
    return this.compile(chatHeaderTemplate, { ...this.props });
  }
}
