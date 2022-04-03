import Block from "../utils/constructor/Block";
import { setLocation } from "../utils/utils";

type Message = {
  text: string;
};

type Messages = Array<Message>;

const messagesMock: Messages = [
  {
    text: "Привет",
  },
];

type ChatData = {
  name: string;
  lastMessage: string;
};

type ChatItems = Array<ChatData>;

const chatsMock: ChatItems = [
  {
    name: "Вася",
    lastMessage: "Привет",
  },
];

export default class ChatPage extends Block {
  static componentName = "ChatPage";

  protected getStateFromProps(): void {
    this.state = {
      messages: messagesMock,
      chats: chatsMock,
      handleSend: (e: KeyboardEvent) => {
        const input = e.target as HTMLInputElement;
        if (e.key === "Enter" && input.value) {
          this.setState({
            messages: [...this.state.messages, { text: input.value }],
          });
        }
        input.focus();
      },
      isSettings: false,
      toggleSidebar: () => {
        const newState = {
          isSettings: !this.state.isSettings,
        };
        this.setState(newState);
      },
      handlePopup: (e: Event) => {
        const target = e.target as HTMLButtonElement;
        const popup = document.querySelector(`.${target.name}-popup`) as HTMLElement;
        popup.classList.toggle("visible");
      },
      handleLogout: () => setLocation("/signin"),
    };
  }

  render() {
    return /* template */ `
    <main class="page-container">
      {{#if isSettings}}
        {{{SettingsSidebar
          toggleSidebar=toggleSidebar 
          handlePopup=handlePopup 
          handleLogout=handleLogout
        }}}
      {{else}}
        {{{ChatsSidebar chats=chats toggleSidebar=toggleSidebar}}}
      {{/if}}
      <section class="chat-feed">
        <header class="chat-header">
          <a href="/500" class="chat-title">Вася</a>
          {{{Button className="button contact-about"}}}
        </header>
        <ul class="messages">
          {{#each messages}}
            {{{Message text=this.text}}}
          {{/each}}
        </ul>
        {{{Input 
          className="message-input" 
          placeholder="Введите сообщение" 
          type="text"
          name="message"
          minlength="1"
          onKeydown=handleSend
        }}}
      </section>
      {{{EditAvatarPopup handlePopup=handlePopup}}}
      {{{EditProfilePopup handlePopup=handlePopup}}}
      {{{ChangePasswordPopup handlePopup=handlePopup}}}
    </main>`;
  }
}
