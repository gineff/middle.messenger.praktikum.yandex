import Component from "utils/component";
import ProfileLink from "./components/profile_link";

export { ProfileLink };

const template = "<div class='user'>{{children}}</div>";
export default class User extends Component {
  constructor(props: P) {
    super({ ...props, template });
  }
}
