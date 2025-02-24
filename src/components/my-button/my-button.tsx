import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true
})
export class MyButton {
  @Prop() text: string = 'Click Me';

  render() {
    return <button>{this.text}</button>;
  }
}