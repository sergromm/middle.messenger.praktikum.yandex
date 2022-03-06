import Block from "../../utils/templater/constructor/Block";

const editInputTemplate = /* template */ `
<label class="input-title">
  {{label}}
  <input 
    class="input" 
    value="{{value}}" 
    name="{{name}}"
    type="{{type}}"
    pattern="{{pattern}}"
    required
  />
</label>`;

interface EditInputProps {
  label: string;
  type: string;
  value: string;
  name: string;
  pattern?: string;
}

class EditInput extends Block<EditInputProps> {
  render() {
    return this.compile(editInputTemplate, { ...this.props });
  }

  setAttribute(name: string, value: string) {
    this.element.setAttribute(name, value);
  }
}

export default EditInput;
