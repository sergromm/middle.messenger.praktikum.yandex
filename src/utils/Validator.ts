/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */

interface Selectors {
  formSelector?: string;
  inputSelector?: string;
  submitButtonSelector?: string;
  inactiveButtonClass?: string;
  inputErrorClass?: string;
  errorClass?: string;
}

class FormValidator {
  private _selectors: Selectors;

  private _form: HTMLFormElement;

  constructor(selectors: Selectors, form: HTMLFormElement) {
    this._selectors = selectors;
    this._form = form;
  }

  _showError(
    formElement: HTMLElement,
    inputElement: HTMLElement,
    errorMessage: string,
    selectors: Selectors
  ) {
    // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(selectors.inputErrorClass!);
    // errorElement!.textContent = errorMessage;
    // errorElement!.classList.add(selectors.errorClass!);
  }

  _hideError(formElement, inputElement, selectors) {
    // const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(selectors.inputErrorClass);
    // errorElement.classList.remove(selectors.errorClass);
    // errorElement.textContent = "";
  }

  _checkValidity(formElement, inputElement, selectors) {
    if (!inputElement.validity.valid) {
      this._showError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        selectors
      );
    } else {
      this._hideError(formElement, inputElement, selectors);
    }
  }

  _hasInvalidInput(inputList: any[]) {
    return inputList.some(
      (inputElement: HTMLInputElement) => !inputElement.validity.valid
    );
  }

  _toggleButtonState(
    inputList: any[],
    buttonElement: HTMLButtonElement,
    selectors: Selectors
  ) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(selectors.inactiveButtonClass!);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(selectors.inactiveButtonClass!);
      buttonElement.removeAttribute("disabled");
    }
  }

  _setEventListeners(formElement: HTMLFormElement, selectors) {
    const inputList: any[] = Array.from(
      formElement.querySelectorAll(selectors.inputSelector)
    );
    const submitButtonElement = formElement.querySelector(
      selectors.submitButtonSelector
    );

    console.log(formElement, submitButtonElement);
    this._toggleButtonState(inputList, submitButtonElement, selectors);

    inputList.forEach((inputElement: HTMLElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(formElement, inputElement, selectors);
        this._toggleButtonState(inputList, submitButtonElement, selectors);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._form, this._selectors);
  }

  resetValidation() {
    const inputs = Array.from(
      this._form.querySelectorAll(this._selectors.inputSelector!)
    );
    const submitButton = this._form.querySelector(
      this._selectors.submitButtonSelector!
    ) as HTMLButtonElement;
    console.log(submitButton);
    inputs.forEach((input) =>
      this._hideError(this._form, input, this._selectors)
    );
    this._toggleButtonState(inputs, submitButton, this._selectors);
  }
}

export default FormValidator;
