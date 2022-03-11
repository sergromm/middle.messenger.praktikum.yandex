import Block from "../utils/constructor/Block";
import settingsBackground from "../blocks/SettingsBackground";
import settingsSidebar from "../blocks/SettingsSidebar";
import changePassword from "../components/Popup/ChangePassword";
import editProfile from "../components/Popup/EditProfile";
import editAvatar from "../components/Popup/EditAvatar";

const settingsPageTemplate = `<section class="page-container">
  {{settingsSidebar}}
  {{settingsBackground}}
  {{editAvatar}}
  {{editProfile}}
  {{changePassword}}
</section>`;

class SettingsPage extends Block {
  render() {
    return this.compile(settingsPageTemplate, {
      ...this.props,
    });
  }
}

const settingsPage = new SettingsPage({
  settingsSidebar,
  settingsBackground,
  changePassword,
  editProfile,
  editAvatar,
});

export default settingsPage;
