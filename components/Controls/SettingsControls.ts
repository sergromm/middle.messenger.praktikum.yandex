import Block from "../../utils/constructor/Block";
import Button from "../Button/Button";

const controlsTemplate = /* template */ `
  <div class="controls">
    {{menuButton}}
  </div>
`;

class SettingsControls extends Block {
  render() {
    return this.compile(controlsTemplate, {
      ...this.props,
    });
  }
}

function setLocation(path) {
  window.location.pathname = path;
}

const handleMenuClick = () => setLocation("/messages");
