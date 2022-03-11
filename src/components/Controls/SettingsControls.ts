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

const menuButton = new Button({
  text: "",
  className: ["button", "menu-button"],
  events: {
    click: handleMenuClick,
  },
});

const settingsControls = new SettingsControls({
  menuButton,
});

export default settingsControls;
