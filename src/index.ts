import "./styles/index.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import LoginPage from "./pages/Login";
import registerComponent from "./utils/constructor/registerComponent";
import { renderCurry, setLocation } from "./utils/utils";
import ChatPage from "./pages/ChatPage";
import Message from "./components/Message/Message";
import ChatItem from "./components/ChatItem/ChatItem";
import Fallback from "./pages/Fallback";
import ChatsSidebar from "./components/ChatsSidebar/ChatsSidebar";
import SettingsSidebar from "./components/SettingsSidebar/SettingsSidebar";
import EditAvatarPopup from "./components/EditAvatarPopup/EditAvatarPopup";
import EditProfilePopup from "./components/EditProfilePopup/EditProfilePopup";
import ChangePasswordPopup from "./components/ChangePasswordPopup/ChangePasswordPopup";

registerComponent(Button);
registerComponent(Input);
registerComponent(Message);
registerComponent(ChatItem);
registerComponent(ChatsSidebar);
registerComponent(SettingsSidebar);
registerComponent(EditAvatarPopup);
registerComponent(EditProfilePopup);
registerComponent(ChangePasswordPopup);

const render = renderCurry("#root");
const routes = [
  "/messages",
  "/",
  "/404",
  "/settings",
  "/edit-profile",
  "/500",
  "/login",
  "/signup",
  "/signin",
  "/change-password",
  "/edit-avatar",
  "/test",
];
const locationPath = window.location.pathname;
const loginPage = new LoginPage();
const chatPage = new ChatPage({});
const serverError = new Fallback({
  title: "500",
  text: "Упс, серверу поплохело. Сейчас исправим.",
});
const notFoundError = new Fallback({
  title: "404",
  text: "Упс, кажется, такой страницы не существует.",
});

if (!routes.includes(locationPath)) {
  setLocation("/404");
}

if (locationPath === "/") {
  setLocation("/signin");
}

document.addEventListener("DOMContentLoaded", () => {
  switch (locationPath) {
    case "/signin":
      render(loginPage);
      break;
    case "/messages":
      render(chatPage);
      break;
    case "/500":
      render(serverError);
      break;
    case "/404":
      render(notFoundError);
      break;
    default:
      break;
  }
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
