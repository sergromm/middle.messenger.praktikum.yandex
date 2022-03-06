const isDoubleBraces: RegExp = /\{\{(.*?)\}\}/gi;
const isSyntax: RegExp = /\[\[(.*?)\]\]/gi;
const parseListArguments: RegExp = /@list-of(.*)from(.+)/gi;

export default function setLocation(path) {
  window.location.pathname = path;
}

const formValidationPatterns = {
  first_name: "^[A-ZА-Я][A-zА-я-]+[A-zА-я]$",
  second_name: "^[A-ZА-Я][A-zА-я-]+[A-zА-я]$",
  login: "[A-z0-9-_]{3,20}",
  email: `^(.+)@(.+)[.](.+)$`,
  phone: "^[+]?[0-9]{10,15}$",
  password: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,40}$",
};

const validatorSelectors = {
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".form-button",
  inactiveButtonClass: "form-button_disabled",
  inputErrorClass: "input-error",
  errorClass: ".input-error_active",
};

export {
  isDoubleBraces,
  parseListArguments,
  isSyntax,
  formValidationPatterns,
  validatorSelectors,
};
