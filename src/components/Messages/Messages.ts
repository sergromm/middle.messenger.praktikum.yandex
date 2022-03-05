import Block from "../../utils/templater/constructor/Block";
import messagesTemplate from "./MessagesTemplate.tmpl";

class Messages extends Block {
  render() {
    return this.compile(messagesTemplate, { ...this.props });
  }
}

const messages = new Messages({
  messages: [
    {
      name: "Вася",
      text: "Привет",
    },
  ],
});

// messagesData.push({
//   name: "Вася",
//   text: "Привет",
// });

setTimeout(() => {
  messages.setProps({
    messages: [
      {
        name: "Вася",
        text: "Привет",
      },
      {
        name: "Вася",
        text: "Пока",
      },
    ],
  });
}, 1500);

export default messages;
