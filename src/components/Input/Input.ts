import Block from "../../utils/templater/constructor/Block";

const inputTemplate = /* template */ `
<input 
  placeholder="{{placeholder}}" 
  class="{{className}}" 
  name="{{name}}"
  type="{{type}}" 
  required
/>`;

interface InputProps {
  placeholder: string;
  type: string;
  className: string;
  pattern?: RegExp;
}

class Input extends Block<InputProps> {
  render() {
    return this.compile(inputTemplate, { ...this.props });
  }

  setAttribute(name: string, value: string) {
    this.element.setAttribute(name, value);
  }
}

export default Input;
