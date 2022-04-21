const isDoubleBraces: RegExp = /\{\{(.*?)\}\}/gi;
const isSyntax: RegExp = /\[\[(.*?)\]\]/gi;
const parseListArguments: RegExp = /@list-of(.*)from(.+)/gi;

export { isDoubleBraces, parseListArguments, isSyntax };
