import Block from "../utils/constructor/Block";

const chatFeedTemplate = `<section class="chat-feed">
  {{chatHeader}}
  {{messages}}
  {{messageInput}}
</section>`;

class ChatFeed extends Block {
  render() {
    return this.compile(chatFeedTemplate, {
      ...this.props,
    });
  }
}

export default ChatFeed;
