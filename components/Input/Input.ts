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

export default class Input extends Block<InputProps> {
  render() {
    return /* template */ `
    <input 
      placeholder="{{placeholder}}" 
      class="{{className}}" 
      name="{{name}}"
      type="{{type}}"
      pattern="{{pattern}}" 
      required
    />`;
  }
}
