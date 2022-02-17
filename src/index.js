import './styles/index.css';
import { render } from './utils/templater/templater';
import { sidebar } from './components/sidebar.tmpl';
import { chatFeed } from './components/chat-feed.tmpl';
import { fallbackPage } from './components/fallbackPage.tmpl'; 
import { settings } from './components/settings.tmpl';
import { signup } from './components/signup.tmpl';
import { signin } from './components/signin.tmpl';
import { editProfile } from './components/editProfile.tmpl';

const root = document.querySelector('#root');
const routes = ['/messages', '/', '/404', '/settings', '/edit-profile', '/500', '/login', '/signup', '/signin'];
const locationPath = window.location.pathname;
const setLocation = (path) => window.location.pathname = path;

if(!routes.includes(locationPath)) {
  setLocation('/404');
}

if(locationPath === '/') {
  setLocation('/signin')
}

switch(locationPath) {
  case '/signup':
    render(root, signup, {
      handleSignup: () => {
        setLocation('/messages')
      }
    });
    break;
  case '/signin':
    render(root, signin, {
      handleSignin: () => {
        setLocation('/messages')
      }
    });
    break;
  case '/messages':
    render(root, sidebar, {
      moveToSettings: () => {
        setLocation('/settings')
      },
    });
    render(root, chatFeed);
    break;
  case '/settings': 
    render(root, settings, { 
      moveToMessages: () => {
        setLocation('/messages')
      },
      openEditProfile: () => {
        setLocation('/edit-profile')
      },
      handleLogout: () => {
        setLocation('/signin')
      },
      name: 'Дима'
    });
    render(root, chatFeed);
    break;
  case '/edit-profile':
    render(root, settings);
    render(root, chatFeed);
    render(root, editProfile);
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
