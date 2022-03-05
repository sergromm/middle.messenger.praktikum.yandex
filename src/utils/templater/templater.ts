/* eslint-disable import/extensions */
/* eslint no-param-reassign: "off" */
import { isDoubleBraces, isSyntax, parseListArguments } from "./helpers";

const get = (dataObject: object, path: string, defaultValue?: unknown) => {
  const keys = path.split(".");
  return keys.reduce(
    (result, key) => (result[key] === undefined ? defaultValue : result[key]),
    dataObject
  );
};

const normalizePropName = (prop) => prop.trim();
const getDataKey = (dataKey) => dataKey.replace("{{", "").replace("}}", "");

const generateList = (keys, data) => {
  const child = normalizePropName(keys[1]);
  const listName = normalizePropName(keys[2]);
  const list = get(data, listName);
  const listData = list.reduce((acc, item) => {
    const dataKeys = child.match(isDoubleBraces).map(getDataKey);
    dataKeys.forEach((dataKey) => {
      acc += child.replace(isDoubleBraces, item[dataKey]);
    });
    return acc;
  }, "");

  return listData;
};

let key: Array<string> | null = null;
const compileTemplate = (template: string, data: object) => {
  // eslint-disable-next-line no-cond-assign
  while ((key = isDoubleBraces.exec(template))) {
    if (key[1]) {
      key[1].match(parseListArguments); // WTF??????
      const templateValue = normalizePropName(key[1]);
      const synthaxKeys = isSyntax.exec(template);
      if (synthaxKeys) {
        const generatorKeys = parseListArguments.exec(synthaxKeys[1]);
        if (generatorKeys) {
          const listData = generateList(generatorKeys, data);
          template = template.replace(`[[${generatorKeys[0]}]]`, listData);
        }
      }
      const templateData = get(data, templateValue);
      if (Array.isArray(templateData)) {
        template = template.replace(
          new RegExp(key[0], "gi"),
          templateData.join(" ")
        );
      } else {
        template = template.replace(new RegExp(key[0], "gi"), templateData);
      }
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
