import './styles/index.css';
import { render } from "./utils/templater/templater";
import { sidebar } from './components/sidebar.tmpl';
import { chatFeed } from './components/chat-feed.tmpl';
import { fallbackPage } from './components/fallbackPage.tmpl'; 

const root = document.querySelector("#root");
const routes = ['/messages', '/', '/404', '/settings', '/500', '/login', '/signup'];
const locationPath = window.location.pathname; 


if(!routes.includes(locationPath)) {
  window.location.pathname = '/404';
}

if(locationPath === '/messages') {
  render(root, sidebar, {});
  render(root, chatFeed, {});
}

if(locationPath === '/settings') {

}

if(locationPath === '/404') {
  render(root, fallbackPage, {title: '404', text: 'Упс, похоже такой страницы не существует'});
}

if(locationPath === '/500') {
  render(root, fallbackPage, {title: '500', text: 'Упс, серверу поплохело. Сейчас восстановим.'});
}
