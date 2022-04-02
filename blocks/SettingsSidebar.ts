import Block from "../utils/constructor/Block";
import settings from "../components/Settings/Settings";
import settingsControls from "../components/Controls/SettingsControls";

const settingsSidebarTemplate = `<aside class="sidebar">
    {{settingsControls}}
    {{settings}}
  </aside>`;

class SettingsSidebar extends Block {
  render() {
    return this.compile(settingsSidebarTemplate, {
      ...this.props,
    });
  }
}

const settingsSidebar = new SettingsSidebar({
  settingsControls,
  settings,
});
