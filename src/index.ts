/* eslint-disable no-restricted-globals */
import chatPage from "./pages/ChatPage";
import "./styles/index.css";
import { notFound, serverDown } from "./pages/Fallback";
import signup from "./pages/Signup";
import signin from "./pages/Signin";
import popup from "./components/Popup/Popup";
import input from "./components/Input/Input";
// import { render } from "./utils/templater/templater";
// import sidebar from "./components/sidebar.tmpl";
// import chatFeed from "./components/chatFeed.tmpl";
// import fallbackPage from "./components/fallbackPage.tmpl";
// import settings from "./components/settings.tmpl";
// import signup from "./components/signup.tmpl";
// import signin from "./components/signin.tmpl";
// import editProfile from "./components/editProfile.tmpl";
// import changePassword from "./components/changePassword.tmpl";
// import editAvatar from "./components/editAvatar.tmpl";
// import Block from "./utils/templater/constructor/Block";
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
// const root: HTMLElement | null = document.querySelector("#root");
const locationPath = window.location.pathname;

function renderDOM(query, block) {
  const target = document.querySelector(query);
  target.appendChild(block.getContent());
  return target;
}

function setLocation(path) {
  window.location.pathname = path;
}

if (!routes.includes(locationPath)) {
  setLocation("/404");
}

if (locationPath === "/") {
  setLocation("/signin");
}

function render(target) {
  return (block) => renderDOM(target, block);
}

const renderPage = render("#root");

switch (locationPath) {
  // case "/test":
  //   renderPage(page);
  //   break;
  case "/messages":
    renderPage(chatPage);
    break;
  case "/signup":
    renderPage(signup);
    break;
  case "/signin":
    renderPage(signin);
    break;
  // // case "/settings":
  //   render(root, settings, {
  //     moveToMessages: () => {
  //       setLocation("/messages");
  //     },
  //     openEditProfile: () => {
  //       setLocation("/edit-profile");
  //     },
  //     openChangePassword: () => {
  //       setLocation("/change-password");
  //     },
  //     openEditAvatar: () => {
  //       setLocation("/edit-avatar");
  //     },
  //     handleLogout: () => {
  //       setLocation("/signin");
  //     },
  //     name: "Дима",
  //   });
  //   // render(root, chatFeed);
  //   break;
  // case "/edit-avatar":
  //   render(root, settings);
  //   render(root, chatFeed);
  //   render(root, editAvatar, {
  //     handleClosePopup: () => {
  //       history.back();
  //     },
  //   });
  //   break;
  // case "/edit-profile":
  //   render(root, settings);
  //   // render(root, chatFeed);
  //   render(root, editProfile, {
  //     handleClosePopup: () => {
  //       history.back();
  //     },
  //   });
  // break;
  // case "/change-password":
  //   renderPage(popup);
  //   break;
  // case "/404":
  //   renderPage(notFound);
  //   break;
  // case "/500":
  //   renderPage(serverDown);
  //   break;
  default:
    break;
}
