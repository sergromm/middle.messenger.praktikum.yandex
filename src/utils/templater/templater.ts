/* eslint-disable import/extensions */
/* eslint no-param-reassign: "off" */
import { isDoubleBraces, isSynthax, parseListArguments } from "./helpers";

const get = (dataObject: object, path: string, defaultValue?: unknown) => {
  const keys = path.split(".");
  return keys.reduce(
    (result, key) => (result[key] === undefined ? defaultValue : result[key]),
    dataObject
  );
};

let key: Array<string> | null = null;
const normalizePropName = (prop) => prop.trim();
const compileTemplate = (template: string, data: object) => {
  // eslint-disable-next-line no-cond-assign
  while ((key = isDoubleBraces.exec(template))) {
    if (key[1]) {
      key[1].match(parseListArguments); // WTF??????
      const templateValue = normalizePropName(key[1]);
      const synthaxKeys = isSynthax.exec(template);
      if (synthaxKeys) {
        const generatorKeys = parseListArguments.exec(synthaxKeys[1]);
        if (generatorKeys) {
          const child = normalizePropName(generatorKeys[1]);
          const listName = normalizePropName(generatorKeys[2]);
          const list = get(data, listName);
          const listData = list.reduce((acc, item) => {
            const dataKeys = child
              .match(isDoubleBraces)
              .map((dataKey) => dataKey.replace("{{", "").replace("}}", ""));
            dataKeys.forEach((dataKey) => {
              acc += child.replace(isDoubleBraces, item[dataKey]);
            });
            return acc;
          }, "");
          template = template.replace(`[[${generatorKeys[0]}]]`, listData);
        }
      }
      const templateData = get(data, templateValue);
      template = template.replace(new RegExp(key[0], "gi"), templateData);
    }
  }
  return template;
};

function render(root: HTMLElement | null, template: string, data: object = {}) {
  if (root) {
    root.innerHTML += compileTemplate(template, data);
  }
}

export { render, compileTemplate as compiler };
