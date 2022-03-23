import React from "react";
interface Props {
  value: number;
}
interface State {
  text: string;
}
class MyComponent extends React.Component<Props, State> {
  static defaultProps: Props = {
    value: 0,
  };
  state: State = { text: "Example" };

  render() {
    return (
      <div>
        Syntax {this.props.value} {this.state.text}
      </div>
    );
  }
}
