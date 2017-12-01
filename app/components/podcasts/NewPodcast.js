import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class NewPodcast extends Component {
  state = { open: false }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  addPodcast() {
    console.info(this)
  }

  render() {
    const { open } = this.state

    return (
      <div>
        <Button icon='plus' onClick={this.show} />
        <Modal size='small' open={open} onClose={this.close}>
          <Modal.Header>
            Add new podcast
          </Modal.Header>
          <Modal.Content>
            <p>Are</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.close}>
              Cancel
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' onClick={this.addPodcast}/>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default NewPodcast
