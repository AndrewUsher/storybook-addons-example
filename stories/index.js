import React from 'react'
import { addDecorator, storiesOf } from '@storybook/react'
import { Button } from '@storybook/react/demo'

const styles = {
  textAlign: 'center'
}
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>

addDecorator(CenterDecorator)
storiesOf('Button', module)
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
