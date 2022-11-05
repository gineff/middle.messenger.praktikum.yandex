import Component from "../../utils/component";
import Wrapper from "../../components/wrapper";
import Button from "../../components/button";
import Sidebar, { Header, Body } from "components/sidebar";
import Main from "components/main";
import { SearchForm, List, Messages, Header as ChatHeader, Footer } from "components/chat";
import { ProfileLink } from "components/user";
import { Link } from "utils/router";
import chats from "static/json/chats.json";
import template from "./index.tem";
import "./index.css";

export default class ChatPage extends Component {
  constructor(props?: P) {
    super({
      ...props,
      template,
      className: "chat-view",
     
      chats,
      Wrapper,
      Sidebar,
      Main,
      Button,
      Link,
      "Sidebar.Header": Header,
      "Sidebar.Body": Body,
      "User.ProfileLink": ProfileLink,
      "Chat.SearchForm": SearchForm,
      "Chat.List": List,
      "Chat.Header": ChatHeader,
      "Chat.Messages": Messages,
      "Chat.Footer": Footer,
    });
  }

  getStateFromProps(): void {
    const searchChat =  () => alert("chat search");
    const { className, chats } = this.props;
    this.state = { className, chats, searchChat };
  }
}
