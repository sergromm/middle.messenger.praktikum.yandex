import './styles/index.css';
import { render } from "./utils/templater/templater";
import { sidebar } from './components/sidebar.tmpl';

const root = document.querySelector("#root");

render(root, sidebar, {});

