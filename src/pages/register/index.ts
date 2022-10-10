import Component from "../../utils/component";
import { goToElementHref, stringifyProps } from "../../utils";
import Wrapper from "../../components/wrapper";
import Form, { Header, Footer, Body, Group, Label, Control } from "../../components/form";
import Button from "../../components/button";
import validator from "utils/validator";
import template from "./index.tem";
import "./index.css";

const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const loginRegExp = /^[a-zA-Z0-9.$_]{4,256}$/;
const textRegExp = /^[a-zA-Zа-яА-Я.$_]{4,256}$/;
const phoneRegExp = /^(\+\d|8)[ ()\d-]{10,16}$/;


function submit(event: {target: HTMLButtonElement}) {
  const { target } = event;
  const form: HTMLElement = target!.closest(".form")!;
  const controls : HTMLInputElement[] = form.querySelectorAll(".form__control");
  let result = true;
  controls.forEach((el) => {
    result = valiateFormInput(el) || false;
  });
  if (result) goToElementHref(event);
}

function validate(event: Event) {
  const {target} = event;
  validator(target);
}

export default class Register extends Component {
  template = template;
  constructor(props: P) {
    super({
      ...props,
      Wrapper,
      Button,
      Form,
      "Form.Header": Header,
      "Form.Body": Body,
      "Form.Footer": Footer,
      "Form.Group": Group,
      "Form.Label": Label,
      "Form.Control": Control,
      goToElementHref,
      validate,
      submit,
    });
    const inputs = [
      {
        name: "email",
        type: "email",
        placeholder: "pochta@yandex.ru",
        label: "Почта",
      },
      { name: "login", type: "text", placeholder: "ivanivanov", label: "Логин" },
      { name: "name", type: "text", placeholder: "Иван", label: "Имя" },
      {
        name: "secondname",
        type: "text",
        placeholder: "Иванов",
        label: "Фамилия",
      },
      {
        name: "phone",
        type: "tel",
        placeholder: "+7 (***) *** ** **",
        label: "Телефон",
      },
      {
        name: "password",
        type: "password",
        placeholder: "••••••••••••",
        label: "Пароль",
      },
      {
        name: "password2",
        type: "password",
        placeholder: "••••••••••••",
        label: "Пароль (еще раз)",
      },
    ];

    this.state.inputsView = inputs
      .map(
        ({ label, ...rest }) => `
          <Form.Group>
            <Form.Label>${label}</Form.Label>
            <Form.Control ${stringifyProps({ ...rest, required: true })} />
          </Form.Group>
        `
      )
      .join("\n");

    const ninjaData = [
      {
        variant: "primary",
        href: "/chat",
        className: "login-form__apply-button",
        title: "Зарегистрироваться",
        onClick: submit,
      },
      {
        variant: "link",
        href: "/login",
        className: "login-form__alternative-button",
        title: "Войти",
        onClick: goToElementHref,
      },
    ];

    this.state.buttons = ninjaData.map((data) => new Button(data));
  }

  render() {
    return super.render();
  }
}