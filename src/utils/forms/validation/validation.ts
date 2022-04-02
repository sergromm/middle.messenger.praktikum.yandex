import { errorMessages } from "../helpers/constants";
import showError from "../helpers/helpers";

const validateInput = (eventType: string, input: HTMLInputElement) => {
  const tooltip = input.previousElementSibling as HTMLElement;

  if (eventType === "focus" && !input.value.length) {
    return;
  }

  if (input.validity.tooShort || input.validity.tooLong) {
    showError(tooltip, errorMessages[input.name].length);
  } else if (input.validity.valueMissing) {
    showError(tooltip, errorMessages[input.name].empty);
  } else if (input.validity.patternMismatch) {
    showError(tooltip, errorMessages[input.name].pattern);
  }

  if (input.validity.valid) {
    tooltip.classList.remove("visible");
  }
};

export default validateInput;
