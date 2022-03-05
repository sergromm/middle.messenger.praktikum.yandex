import Block from "../../utils/templater/constructor/Block";
import messageInputTemplate from "./MessageInput.tmpl";

class MessageInput extends Block {
  render() {
    return this.compile(messageInputTemplate, { ...this.props });
  }
}

const messageInput = new MessageInput({});

export default messageInput;
