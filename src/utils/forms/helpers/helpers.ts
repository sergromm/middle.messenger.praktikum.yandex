const showError = (element: HTMLElement, message: string): void => {
  element.classList.add("visible");
  element.textContent = message;
};

export default showError;
