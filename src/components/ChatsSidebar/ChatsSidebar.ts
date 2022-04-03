import Block from "../../utils/constructor/Block";

export default class ChatsSidebar extends Block {
  static componentName = "ChatsSidebar";

  protected getStateFromProps(): void {}

  render() {
    return /* template */ `
      <aside class="sidebar">
      <div class="controls">
        {{{Button className="button menu-icon" type="button"}}}
        {{{Button 
          className="button settings-icon" 
          type="button"
          onClick=toggleSidebar
        }}}
      </div>
      <ul class="chat-list">
        {{#each chats}}
          {{{ChatItem name=this.name lastMessage=this.lastMessage}}}
        {{/each}}
        {{{Button className="add-chat" text="Добавить чат"}}}
      </ul>
    </aside>`;
  }
}
