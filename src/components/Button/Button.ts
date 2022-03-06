import Block from "../../utils/templater/constructor/Block";

const buttonTemplate = /* template */ `<button class="{{className}}">{{text}}</button>`;

class Button extends Block {
  render() {
    return this.compile(buttonTemplate, {
      ...this.props,
    });
  }
}

export default Button;
