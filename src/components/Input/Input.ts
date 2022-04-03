import Block from "../../utils/constructor/Block";

interface InputProps {
  placeholder: string;
  type: string;
  className: string;
  pattern?: string;
  required?: string;
  onFocus?: () => {};
  onBlur?: () => {};
  onInput?: () => {};
  onKeydown?: () => {};
}

export default class Input extends Block {
  static componentName = "Input";

  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        focus: props.onFocus,
        blur: props.onBlur,
        input: props.onInput,
        keydown: props.onKeydown,
      },
    });
  }

  render() {
    return /* template */ `
      <input 
        placeholder="{{placeholder}}" 
        class="{{className}}" 
        name="{{name}}"
        type="{{type}}"
        value="{{value}}"
        pattern="{{pattern}}"
        minlength="{{minlength}}"
        maxlength="{{maxlength}}"
        ${this.props.required ? "required" : ""}
      />`;
  }
}
