/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
import { nanoid } from "nanoid";
import Handlebars from "handlebars";
import EventBus from "./EventBus";

interface meta {
  props?: object;
}

class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  static componentName = "Block";

  public id: string;

  private _element: HTMLElement;

  private _meta: meta;

  public props: any;

  public eventBus: Function;

  public compiler: Function;

  public children: Record<string, Block>;

  constructor(propsAndChildren: any) {
    const { children, props } = this._getChildren(propsAndChildren);
    const eventBus = new EventBus();
    this._meta = { props };
    this.children = children;
    this.initChildren();
    this.id = nanoid(8);
    this.props = this._makePropsProxy({ ...props, __id: this.id });
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren(propsAndChildren: any) {
    const props: any = {};
    const children: any = {};
    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { props, children };
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected initChildren() {}

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidMount(oldProps = {}) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _makePropsProxy(props) {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldProps = { ...target };
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет прав");
      },
    });
  }

  compile(templateString: string, context: any) {
    const propsAndStubs = { ...context };
    const fragment = this._createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="id-${child.id}"></div>`;
    });

    const template = Handlebars.compile(templateString);

    const htmlString = template({ ...propsAndStubs, children: this.children });

    fragment.innerHTML = htmlString;

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

      if (!stub) {
        return;
      }

      stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  _render() {
    const templateString = this.render();
    const fragment = this.compile(templateString, { ...this.props });
    const newElement = fragment.firstChild as HTMLElement;
    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
  }

  render(): string {
    return "";
  }

  getContent() {
    return this.element;
  }

  getProps() {
    return this.props;
  }

  _addEvents() {
    const { events }: Record<string, () => void> = this.props as any;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener);
    });
  }

  _removeEvents() {
    const { events }: Record<string, () => void> = this.props as any;

    if (!events) {
      return;
    }
    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  _createDocumentElement(tagName) {
    const element = document.createElement(tagName);

    if (this.id) {
      element.setAttribute("data-id", this.id);
    }

    return element;
  }
}

export default Block;
