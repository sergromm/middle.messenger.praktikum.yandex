const isDoubleBraces: RegExp = /\{\{(.*?)\}\}/gi;
const isSynthax: RegExp = /\[\[(.*?)\]\]/gi;
const parseListArguments: RegExp = /@list-of(.*)from(.+)/gi;

export { isDoubleBraces, parseListArguments, isSynthax };
