import Component from "../../../../utils/component";
import MessageTime from "../../../date";
import template from "./index.tem";
import "./index.css";

export default class Message extends Component {
  template = template;
  constructor(props: P) {
    super({ ...props, MessageTime});
  }

  render() {
    const { content, file } = this.props;
    this.props = {
      ...this.props,
      content: content.replace(/\n/g, "<br>"),
      hasMedia: file ? "hasMedia" : null,
      hasContent: content ? "hasContent" : null,
    };
    return super.render();
  }
}
