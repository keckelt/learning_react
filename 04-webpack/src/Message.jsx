import { Headline } from "./Headline";
import { Paragraph } from "./Paragraph";

export class Message extends React.Component {
  render() {
    return (
      <div>
        <Headline headline={this.props.headline} />
        <Paragraph text={this.props.text} />
      </div>
    );
  }
}