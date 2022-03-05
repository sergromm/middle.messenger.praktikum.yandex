import Block from "../../utils/templater/constructor/Block";

const controlsTemplate = `<div class="controls">
<button class="button menu-button"></button>
<button class="button settings" onclick="{{moveToSettings}}"></a>
</div>`;

class Controls extends Block {
  render() {
    return this.compile(controlsTemplate, {
      ...this.props,
    });
  }
}

const controls = new Controls();

export default controls;
