import "./styles/index.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import SigninPage from "./pages/Sigin";
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
import SignupPage from "./pages/Signup";

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
const routes = ["/messages", "/", "/404", "/500", "/signup", "/signin"];
const locationPath = window.location.pathname;
const signinPage = new SigninPage();
const signupPage = new SignupPage();
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
      render(signinPage);
      break;
    case "/signup":
      render(signupPage);
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
