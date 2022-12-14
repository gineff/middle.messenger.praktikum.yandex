import Component from "../../../../utils/component";
import Button from "../../../button";
import { Link } from "utils/router";
import template from "./index.tem";
import "./index.css";

export default class ProfileLink extends Component {
  constructor(props: P) {
    super({ ...props, template, Button, Link });
  }

  getStateFromProps(): void {
    const button = new Button({
      variant: "link",
      href: "/profile",
      className: "user_profile-link-button",
      title: "Профиль   >",
    });
    this.setState({ ...this.props, button });
  }
}
