import Block from "../../utils/constructor/Block";

export default class ChatItem extends Block {
  static componentName = "ChatItem";

  render() {
    return /* template */ `
      <li class="chat-item chat-item_active">
        <img class="chat-avatar" src="#" alt=" "/>
        <div class="chat=content">
          <h2 class="chat-name">{{name}}</h2>
          <span class="last-message">{{lastMessage}}</span>
        </div>
      </li>`;
  }
}
