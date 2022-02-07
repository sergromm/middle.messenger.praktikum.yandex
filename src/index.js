import './styles/index.css';
import { render } from "./utils/templater/templater";
import { sidebar } from './components/sidebar.tmpl';
import { chatFeed } from './components/chat-feed.tmpl';

const root = document.querySelector("#root");

render(root, sidebar, {});
render(root, chatFeed, {});
