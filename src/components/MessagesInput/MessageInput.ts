import Block from "../../utils/templater/constructor/Block";

const messageInputTemplate = `<input class="message-input" placeholder="Введите сообщение" type="text" name="message"/>`;

class MessageInput extends Block {
  render() {
    return this.compile(messageInputTemplate, { ...this.props });
  }
}

const messageInput = new MessageInput({});

export default messageInput;
