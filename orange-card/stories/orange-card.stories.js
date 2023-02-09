import { html } from 'lit';
import '../src/orange-card.js';

export default {
  title: 'OrangeCard',
  component: 'orange-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <orange-card
      style="--orange-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </orange-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
