import Block from "../../utils/constructor/Block";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
  name?: string;
}

export default class Button extends Block {
  static componentName = "Button";

  constructor(props: ButtonProps) {
    super({ ...props, events: { click: props?.onClick } });
  }

  render() {
    return /* template */ `
      <button class="{{className}}" type="{{type}}" name="{{name}}">{{text}}</button>`;
  }
}
