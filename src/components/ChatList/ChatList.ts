import Block from "../../utils/constructor/Block";
import addButton from "../AddButton/AddButton";

const chatItemTemplate = /* template */ `
<li class="chat-item chat-item_active">
  <img class="chat-avatar" src="#" alt=" "/>
  <div class="chat=content">
    <h2 class="chat-name">{{name}}</h2>
    <span class="last-message">{{lastMessage}}</span>
  </div>
</li>`;

const chatListTemplate = `<ul class="chat-list">
[[@list-of ${chatItemTemplate.replace(/\r?\n|\r/g, "")} from chats]]
{{addButton}}
</ul>`;

class ChatList extends Block {
  render() {
    return this.compile(chatListTemplate, { ...this.props });
  }
}

const chatList = new ChatList({
  chats: [
    {
      name: "Вася",
      lastMessage: "Пока",
      avatar: "#",
      imageAlt: " ",
    },
    {
      name: "Вася",
      lastMessage: "Привет",
      avatar: "#",
      imageAlt: " ",
    },
  ],
  addButton,
});

export default chatList;
