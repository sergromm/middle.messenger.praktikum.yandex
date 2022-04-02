import Block from "../../utils/constructor/Block";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export default class ButtonElement extends Block {
  static componentName = "ButtonElement";

  constructor(props: ButtonProps) {
    super({ ...props, events: { click: props?.onClick } });
  }

  render() {
    return /* template */ `
      <button class="{{className}}" type="{{type}}">{{text}}</button>`;
  }
}
