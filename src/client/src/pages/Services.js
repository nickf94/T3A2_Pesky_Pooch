import React, { Component } from 'react';
import EventForm from '../forms/EventForm'
import EventControlPanel from '../components/EventControlPanel';

export class Services extends Component {
    state = {
    events: {}
  }

  setEvents = (response) => {
  }

  render() {
    return (
      <>
        <div>
          <h1>Services page</h1>
          { this.props.user ? (
            <div>
              < EventControlPanel setParentEvents={this.setEvents} />
            </div>
            ) : (
            <div>
              <p>Not logged in.</p>
            </div>
            )
          }
        </div>
      </>
    )
  }
}
