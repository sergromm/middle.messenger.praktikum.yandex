import addButton from "../components/AddButton/AddButton";
import chatList from "../components/ChatList/ChatList";
import controls from "../components/Controls/Controls";
import Block from "../utils/templater/constructor/Block";

const sidebarTemplate = `<aside class="sidebar">
    {{controls}}
    {{chatList}}
    {{addButton}}
  </aside>`;

class Sidebar extends Block {
  render() {
    return this.compile(sidebarTemplate, {
      ...this.props,
    });
  }
}

const sidebar = new Sidebar({ controls, chatList, addButton });

export default sidebar;
