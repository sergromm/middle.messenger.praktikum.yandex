import Block from "../utils/templater/constructor/Block";
import ChatFeed from "../blocks/ChatFeed";
import sidebar from "../blocks/Sidebar";
import chatHeader from "../components/ChatHeader/ChatHeader";
import messages from "../components/Messages/Messages";
import messageInput from "../components/MessagesInput/MessageInput";

const chatPageTemplate = `
<section class="page-container">
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

const chatFeed = new ChatFeed({ chatHeader, messages, messageInput });

const chatPage = new ChatPage({ sidebar, chatFeed });

export default chatPage;
