import Block from "../../utils/constructor/Block";

const addButtonTemplate = `<button class="add-chat">Добавить чат</button>`;

class AddButton extends Block {
  render() {
    return this.compile(addButtonTemplate, { ...this.props });
  }
}

const addButton = new AddButton({});

export default addButton;
