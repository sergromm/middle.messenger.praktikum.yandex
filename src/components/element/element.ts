import template from "./button.hbs";
import Block from "../../utils/constructor/Block";

interface ButtonProps {
  text: string;
  className?: string;
  events?: {
    click: () => void;
  };
}

export default class ButtonElement extends Block {
  static componentName = "ButtonElement";

  // eslint-disable-next-line no-useless-constructor
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
