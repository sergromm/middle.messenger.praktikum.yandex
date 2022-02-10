import { isDoubleBraces } from './helpers';

const get = (dataObject, path) => {
  const keys = path.split(".");
  return keys.reduce((result, key) => result[key], dataObject);
};

let key = null;

const compileTemplate = (template, data) => {
  
  while ((key = isDoubleBraces.exec(template))) {
    if (key[1]) {
      const templateValue = key[1].trim();
      const templateData = get(data, templateValue);
      if(templateData) {
        template = template.replace(new RegExp(key[0], "gi"), templateData);
      }
    }
  }
  return template;
};


export const render = (root, template, data = {}) =>
  (root.innerHTML += compileTemplate(template, data));
