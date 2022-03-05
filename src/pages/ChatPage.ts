import Block from "../utils/templater/constructor/Block";
import chatFeed from "../blocks/ChatFeed";
import sidebar from "../blocks/SIdebar";

const chatPageTemplate = `<section class="page-container">
  {{sidebar}}
  {{chatFeed}}
</section>`;

class ChatPage extends Block {
  render() {
    return this.compile(chatPageTemplate, {
      ...this.props,
    });
  }
}

const chatPage = new ChatPage({ sidebar, chatFeed });

export default chatPage;
