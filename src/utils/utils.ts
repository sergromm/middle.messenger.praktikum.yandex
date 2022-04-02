import validateInput from "./forms/validation/validation";

const handleFormSubmit = (formState: any, e: Event) => {
  e.preventDefault();

  const target = e.target as HTMLButtonElement;
  const form = target.closest("form");
  const inputs = form?.querySelectorAll(".input") as NodeListOf<HTMLInputElement>;

  inputs.forEach((input) => {
    formState.values[input.name] = input.value;
    validateInput(e.type, input);
  });

  const isFormValid = form?.checkValidity();

  if (isFormValid) {
    console.log({ ...formState.values });
  }
};

function setLocation(path: string) {
  window.location.pathname = path;
}

export { handleFormSubmit, setLocation };
