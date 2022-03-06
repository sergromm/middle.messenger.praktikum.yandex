/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/extensions
import { nanoid } from "nanoid";
import { compiler } from "../templater";
import EventBus from "./EventBus";

interface meta {
  props?: object;
}

class Block<PropsT = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  private _id: string | null;

  private _element: HTMLElement;

  private _meta: meta;

  public props: PropsT;

  public eventBus: Function;

  public compiler: Function;

  public children: object;

  constructor(propsAndChildren: any = { withEternalId: true }) {
    const { children, props } = this._getChildren(propsAndChildren);
    const eventBus = new EventBus();
    this._meta = { props };
    this.children = children;
    if (propsAndChildren.withEternalId) {
      this._id = nanoid();
    }
    this.props = this._makePropsProxy({ ...props, __id: this._id });
    this.eventBus = () => eventBus;
    this.compiler = compiler;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren(propsAndChildren) {
    const props = {};
    const children = {};
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
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет прав");
      },
    });
  }

  compile(template, props) {
    const propsAndStubs = { ...props };
    const fragment = this._createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="id-${child._id}"></div>`;
    });

    const htmlString = compiler(template.trim(), propsAndStubs);

    fragment.innerHTML = htmlString;

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(
        `[data-id="id-${child._id}"]`
      );

      if (!stub) {
        return;
      }

      stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  _render() {
    const fragment = this.render();
    if (this._element) {
      this._removeEvents();
    }
    const newElement = fragment.firstChild as HTMLElement;
    if (this._element) {
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
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

    if (this._id) {
      element.setAttribute("data-id", this._id);
    }

    return element;
  }
}

export default Block;
