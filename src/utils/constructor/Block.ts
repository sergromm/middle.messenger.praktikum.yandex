/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { nanoid } from "nanoid";
import Handlebars from "handlebars";
import EventBus from "./EventBus";

class Block<P = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  static componentName = "Block";

  public id: string;

  protected _element: HTMLElement;

  protected props: P;

  protected state: any = {};

  protected refs: { [key: string]: HTMLElement } = {};

  public eventBus: Function;

  public compiler: Function;

  protected children: Record<string, Block>;

  public constructor(propsAndChildren: any) {
    const { children, props } = this._getChildren(propsAndChildren);
    const eventBus = new EventBus();
    this.children = children;
    this.getStateFromProps(props);
    this.initChildren();
    this.id = nanoid(8);
    this.props = this._makePropsProxy({ ...props, __id: this.id });
    this.state = this._makePropsProxy(this.state);
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

  _registerEvents(eventBus: EventBus) {
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

  componentDidMount(_oldProps = {}) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(_oldProps: P, _newProps: P) {
    return true;
  }

  protected getStateFromProps(_props: any): void {
    this.state = {};
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  setState = (nextState: any) => {
    if (!nextState) {
      return;
    }
    Object.assign(this.state, nextState);
  };

  get element() {
    return this._element;
  }

  // eslint-disable-next-line arrow-body-style
  _makePropsProxy(props: any): any {
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
    const fragment = this._createDocumentElement("template") as HTMLTemplateElement;

    const template = Handlebars.compile(templateString);
    const htmlString = template({
      ...context,
      children: this.children,
      refs: this.refs,
    });

    fragment.innerHTML = htmlString;

    Object.values(this.children).forEach((child: Block) => {
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

    const fragment = this.compile(templateString, {
      ...this.props,
      ...this.state,
    });
    const newElement = fragment.firstElementChild as HTMLElement;
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

  getState() {
    return this.state;
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

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);

    if (this.id) {
      element.setAttribute("data-id", this.id);
    }

    return element;
  }
}

export default Block;
