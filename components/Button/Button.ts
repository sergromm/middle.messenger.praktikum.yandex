import Block from "../../utils/constructor/Block";

const buttonTemplate = /* template */ `<button class="{{className}}">{{text}}</button>`;

class Button extends Block {
  render() {
    return this.compile(buttonTemplate, {
      ...this.props,
    });
  }
}
