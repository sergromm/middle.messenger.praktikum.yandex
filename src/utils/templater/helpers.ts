const isDoubleBraces: RegExp = /\{\{(.*?)\}\}/gi;
const isSyntax: RegExp = /\[\[(.*?)\]\]/gi;
const parseListArguments: RegExp = /@list-of(.*)from(.+)/gi;

export default function setLocation(path) {
  window.location.pathname = path;
}

export { isDoubleBraces, parseListArguments, isSyntax };
