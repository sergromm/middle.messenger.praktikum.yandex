import './styles/index.css';
import { render } from './utils/templater/templater';
import { sidebar } from './components/sidebar.tmpl';
import { chatFeed } from './components/chat-feed.tmpl';
import { fallbackPage } from './components/fallbackPage.tmpl'; 
import { settings } from './components/settings.tmpl';
import { signup } from './components/signup.tmpl';
import { signin } from './components/signin.tmpl';

const root = document.querySelector('#root');
const routes = ['/messages', '/', '/404', '/settings', '/500', '/login', '/signup', '/signin'];
const locationPath = window.location.pathname; 

if(!routes.includes(locationPath)) {
  window.location.pathname = '/404';
}

switch(locationPath) {
  case '/signup':
    render(root, signup);
    break;
  case '/signin':
    render(root, signin);
    break;
  case '/messages':
    render(root, sidebar);
    render(root, chatFeed);
    break;
  case '/settings': 
    render(root, settings);
    render(root, chatFeed);
    break;
  case '/404':
    render(root, fallbackPage, {
      title: '404', 
      text: 'Упс, похоже такой страницы не существует'
    });
    break;
  case '/500':
    render(root, fallbackPage, {
      title: '500', 
      text: 'Упс, серверу поплохело. Сейчас восстановим.'
    });
    break;
}
