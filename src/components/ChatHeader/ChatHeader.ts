import Block from "../../utils/templater/constructor/Block";
import chatHeaderTemplate from "./ChatHeader.tmpl";

class ChatHeader extends Block {
  render() {
    return this.compile(chatHeaderTemplate, { ...this.props });
  }
}

const chatHeader = new ChatHeader({ name: "Вася" });

export default chatHeader;
