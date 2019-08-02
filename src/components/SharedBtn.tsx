import React from 'react';
import Button from '@material-ui/core/Button'

interface SharedBtnProps {
  buttonText: string;
  emitEvent: () => void;
}

type Props = SharedBtnProps;

export class SharedBtn extends React.Component<Props> {

  submitEvent() {
    if(this.props.emitEvent) {
      this.props.emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;

    return (
      <Button
        data-test="buttonComponent"
        onClick={() => this.submitEvent()}>
        {buttonText}
      </Button>
    );
  }

}