import chatHeader from "../components/ChatHeader/ChatHeader";
import messageInput from "../components/MessagesInput/MessageInput";
import messages from "../components/Messages/Messages";
import Block from "../utils/templater/constructor/Block";

class ChatFeed extends Block {
  render() {
    return this.compile(
      `<section class="chat-feed">
        {{chatHeader}}
        {{messages}}
        {{messageInput}}
      </section>`,
      {
        ...this.props,
      }
    );
  }
}

const chatFeed = new ChatFeed({ chatHeader, messages, messageInput });
export default chatFeed;
