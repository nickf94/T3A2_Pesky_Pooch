import React, { Component } from 'react';
import EventForm from '../forms/EventForm'
import EventControlPanel from '../components/EventControlPanel';

export class Services extends Component {
  render() {
    return (
      <>
        <div>
          <h1>Services page</h1>
          { this.props.user ? (
            <div>
              <EventForm />
              <EventControlPanel />
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
