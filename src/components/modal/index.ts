import Component from "utils/component";
import Form, { Header, Footer, Body, Group, Label, Control } from "components/form";
import Wrapper from "components/wrapper";
import Button from "components/button";
import { setContext } from "utils";
import "./index.css";

type State = {
  className: string;
  formError: string | null;
  title?: string;
  submitTitle: string;
  cancelTitle: string;
  body?: Component;
  buttons?: Component[];
  onSubmit?: () => void;
  onCancel?: () => void;
};

export default class Modal extends Component {
  constructor(props?: P) {
    super({
      ...props,
      Button,
      Form,
      Wrapper,
      "Form.Header": Header,
      "Form.Body": Body,
      "Form.Footer": Footer,
      "Form.Group": Group,
      "Form.Label": Label,
      "Form.Control": Control,
    });
    this.append("#root");
    document.addEventListener("keydown", this.aboard.bind(this), { once: true });
  }

  aboard(event: KeyboardEvent) {
    if (event.key === "Escape") {
      const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
      if (isNotCombinedKey) {
        this.detach();
      }
    }
  }

  detach() {
    this.element.parentNode?.removeChild(this.element);
  }
  public close() {
    this.detach();
  }
  append(selector: string) {
    const parent = document.querySelector(selector) as HTMLElement;
    parent.append(this.getContent());
  }
  getStateFromProps(): void {
    const onAboard = () => {
      this.detach();
    };
    this.setState({ ...this.props, formError: null, onAboard });
  }
  render(): string {
    const { title, className, body, submitTitle, onSubmit, cancelTitle, onCancel } = this.state as State;
    return /*html*/ `
    <Wrapper className="modal__wrapper">
      <Form className="modal ${className ? className : ""}" error={{formError}}>
        <Button variant="icon" className="modal__close-btn" onClick={{onAboard}}>×</Button>
        <Form.Header className="modal__header">
          ${title}
        </Form.Header>
        <Form.Body className="modal__body">
          ${body ? (typeof body === "string" ? body : `context:${setContext(body)}`) : ""}
        </Form.Body>
        <Form.Footer>
          ${
            onSubmit
              ? `context:${setContext(new Button({ variant: "primary", title: submitTitle, onClick: onSubmit }))}`
              : ""
          }
          ${
            onCancel
              ? `context:${setContext(new Button({ variant: "secondary", title: cancelTitle, onClick: onCancel }))}`
              : ""
          }
        </Form.Footer>
      </Form>
    </Wrapper>`;
  }
}
