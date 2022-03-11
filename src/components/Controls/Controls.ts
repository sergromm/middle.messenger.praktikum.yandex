import Block from "../../utils/constructor/Block";
import Button from "../Button/Button";

const controlsTemplate = /* template */ `
  <div class="controls">
    {{menuButton}}
    {{settingsButton}}
  </div>
`;
class Controls extends Block {
  render() {
    return this.compile(controlsTemplate, {
      ...this.props,
    });
  }
}

function setLocation(path) {
  window.location.pathname = path;
}

const handleMenuClick = () => setLocation("/signin");
const handleSettingsClick = () => setLocation("/settings");

const menuButton = new Button({
  text: "",
  className: ["button", "menu-button"],
  events: {
    click: handleMenuClick,
  },
});

const settingsButton = new Button({
  text: "",
  className: ["button", "settings"],
  events: {
    click: handleSettingsClick,
  },
});

const controls = new Controls({
  menuButton,
  settingsButton,
});

export default controls;
