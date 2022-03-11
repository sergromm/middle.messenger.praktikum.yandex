import Block from "../../utils/constructor/Block";

const inputTemplate = /* template */ `
<input 
  placeholder="{{placeholder}}" 
  class="{{className}}" 
  name="{{name}}"
  type="{{type}}"
  pattern="{{pattern}}" 
  required
/>`;

interface InputProps {
  placeholder: string;
  type: string;
  className: string;
  pattern?: string;
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
