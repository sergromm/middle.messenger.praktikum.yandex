import Handlebars, { HelperOptions } from "handlebars";
import Block from "./Block";

export default function registerComponent(Component: typeof Block) {
  Handlebars.registerHelper(
    Component.componentName,
    ({ hash: { ref, ...hash }, data }: HelperOptions) => {
      if (!data.root.children) {
        data.root.children = {};
      }

      if (!data.root.refs) {
        data.root.refs = {};
      }

      const { children, refs } = data.root;

      const component = new Component(hash);

      children[component.id] = component;

      if (ref) {
        refs[ref] = component.getContent();
      }

      return `<div data-id="id-${component.id}"></div>`;
    }
  );
}
