import template from "./index.tem";
import { Link } from "utils/router";
import Component from "../../utils/component";
import Wrapper from "../../components/wrapper";
import Button from "../../components/button";
import "./index.css";

export default class Home extends Component {
  constructor(props?: P) {
    super({ ...props, template, Wrapper, Button, Link });
  }

  getStateFromProps(): void {
    const pages = [
      { name: "login", href: "/login", title: "Страница авторизации", src: "/images/login.png" },
      { name: "register", href: "/register", title: "Страница регистрации", src: "/images/register.png" },
      { name: "chat", href: "/chat", title: "Чат", src: "/images/chat.png" },
      { name: "profile", href: "/profile", title: "Профиль", src: "/images/profile.png" },
      { name: "404", href: "/404", title: "404", src: "/images/404.png" },
      { name: "500", href: "/500", title: "500", src: "/images/500.png" },
    ];

    const pagesLink = pages
      .map(
        ({ href, src, title }) => `
        <div class="page-home__page">
          <Link to="${href}">
            <image class="page-home__image" src="${src}" onclick="goToPage(this)"/>
            ${title}
            </Link>
        </div>`
      )
      .join("\n");

    this.setState({ pagesLink });
  }
}
