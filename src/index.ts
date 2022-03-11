import ButtonElement from "./components/element/element";
import LoginPage from "./pages/Login";
import "./styles/index.css";
import registerComponent from "./utils/constructor/registerComponent";

function renderDOM(query, block) {
  const target = document.querySelector(query);
  target.appendChild(block.getContent());
  return target;
}

function renderCurry(target) {
  return (block) => renderDOM(target, block);
}

const render = renderCurry("#root");

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(ButtonElement);
  const loginPage = new LoginPage({});
  render(loginPage);
});

// /* eslint-disable no-restricted-globals */
// import "./styles/index.css";
// import { chatPage } from "./pages/ChatPage";
// import { notFound, serverDown } from "./pages/Fallback";
// import signup from "./pages/Signup";
// import signin from "./pages/Signin";
// import settingsPage from "./pages/SettingsPage";
// import setLocation, { validatorSelectors } from "./utils/templater/helpers";
// import FormValidator from "./utils/Validator";

// const routes = [
//   "/messages",
//   "/",
//   "/404",
//   "/settings",
//   "/edit-profile",
//   "/500",
//   "/login",
//   "/signup",
//   "/signin",
//   "/change-password",
//   "/edit-avatar",
//   "/test",
// ];
// const locationPath = window.location.pathname;

// function renderDOM(query, block) {
//   const target = document.querySelector(query);
//   target.appendChild(block.getContent());
//   return target;
// }

// if (!routes.includes(locationPath)) {
//   setLocation("/404");
// }

// if (locationPath === "/") {
//   setLocation("/signin");
// }

// function render(target) {
//   return (block) => renderDOM(target, block);
// }

// const renderPage = render("#root");

// switch (locationPath) {
//   case "/messages":
//     renderPage(chatPage);
//     break;
//   case "/signup":
//     renderPage(signup);
//     break;
//   case "/signin":
//     renderPage(signin);
//     break;
//   case "/settings":
//     renderPage(settingsPage);
//     break;
//   case "/404":
//     renderPage(notFound);
//     break;
//   case "/500":
//     renderPage(serverDown);
//     break;
//   default:
//     break;
// }

// const validator = (selectors) => (form) => new FormValidator(selectors, form);
// const formValidator = validator(validatorSelectors);
// const signinForm = document.querySelector(".signin-form") as HTMLFormElement;
// const signupForm = document.querySelector(".signup-form") as HTMLFormElement;
// // const editAvatarForm = document.querySelector(
// //   ".edit-avatar"
// // ) as HTMLFormElement;
// const editProfileForm = document.querySelector(
//   ".edit-profile-form"
// ) as HTMLFormElement;
// const changePasswordForm = document.querySelector(
//   ".change-password-form"
// ) as HTMLFormElement;

// if (signinForm) {
//   const signinValidator = formValidator(signinForm);
//   signinValidator.enableValidation();
// }
// if (signupForm) {
//   const signupValidator = formValidator(signupForm);
//   signupValidator.enableValidation();
// }
// if (editProfileForm) {
//   const editProfileValidator = formValidator(editProfileForm);
//   editProfileValidator.enableValidation();
// }
// if (changePasswordForm) {
//   const changePasswordValidator = formValidator(changePasswordForm);
//   changePasswordValidator.enableValidation();
// }
