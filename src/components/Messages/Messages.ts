import Block from "../../utils/templater/constructor/Block";

// TODO разобраться почему шаблонизатор перестал генерировать списки сообщений
const messageTemplate = `<li class="message">Привет</li>`;
const messagesTemplate = `<ul class="messages">${messageTemplate}</ul>`;
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
      className: "messages",
    },
  ],
});

// setTimeout(() => {
//   messages.setProps({
//     messages: [
//       {
//         name: "Вася",
//         text: "Привет",
//       },
//       {
//         name: "Вася",
//         text: "Пока",
//       },
//     ],
//   });
// }, 1500);

export default messages;
