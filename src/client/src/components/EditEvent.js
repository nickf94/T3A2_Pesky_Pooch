import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'

export default function EditEvent() {
  const [events, setEvents] = useState([])
  const [subject, setSubject] = useState(null)
  const [submit, setSubmit] = useState(false)
  const token = sessionStorage.getItem('token')

  const fetchEvents = () => {
    axios.get("http://localhost:7002/api/events", {
      headers: {
        'Authorization': token
      }})
    .then(res => {
      setEvents(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const stateReducer = (event) => {
    let newSubject = {...subject, [event.target.name]: event.target.value}
    setSubject(newSubject)
    console.log(subject)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting:", e)

    axios.put("http://localhost:7002/api/events/update", subject, {
      headers: {
        'Authorization': token
      },
      id: subject._id
      })
    .then(res => {
      fetchEvents()
      return res
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if (submit) {
      fetchEvents()
      setSubmit(false)
    }
  }, [submit])

  return (
    <>
    <div>
      {events.map((event) => {
        return (<button onClick={() => {setSubject(event)}}></button>)
      })}
    </div>

    {subject ? (
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>Name of event</label>
          <input type="text" 
                 name="name" 
                 onChange={(e) => stateReducer(e)} 
                 value={subject.name}>
          </input>
        </fieldset>
        <fieldset>
          <label>Description of event</label>
          <input type="text"
                 name="description"
                 onChange={(e) => stateReducer(e)}
                 value={subject.description}>
          </input>
        </fieldset>
        <fieldset>
          <label>Location of event</label>
          <input type="text"
                 name="location"
                 onChange={(e) => stateReducer(e)}
                 value={subject.location}>
          </input>
        </fieldset>
        <button type="submit">Submit updated event</button>
      </form>
    ):
    (null)}
    </>
  )
}

// export default class EditEvent extends Component {
//   state = {
//     name: "",
//     description: "",
//     location: "",
//     events: this.props.events,
//     subject: {},
//     subName: '',
//     subDesc: '',
//     subLoc: '',
//     subId: ''
//   }

//   onNameChange = (event,) => {
//     this.setState({ subName: event.target.value })
//   }

//   onDescriptionChange = (event) => {
//     this.setState({ subDesc: event.target.value })
//   }

//   onLocationChange = (event) => {
//     this.setState({ subLoc: event.target.value })
//   }

//   updateEvent = (event) => {
//     event.preventDefault()
//     const {subName, subDesc, subLoc, subId} = this.state 
//     const params = {name: subName, description: subDesc, location: subLoc, id:subId}
//     let token = sessionStorage.getItem('token')
//     axios.put('http://localhost:7002/api/events/update', params, {
//     headers: {
//     'Authorization': token
//     }})
//     .then(()=> this.props.updateControlEvents())
//     .catch(err => console.log(err))
//   }

//   setSubject = (subject) => {
//     this.setState({ subject, subName: subject.name, subDesc: subject.description, subLoc: subject.location, subId: subject._id })
//   }

//   componentDidMount() {
//     this.setState({ events: this.props.events })
//   }

//   render() {
//     console.log(this.state)
//     return (
//       <>
//        <h3>Which event would you like to edit?</h3>
//        <div id="event-edit"></div>
//       {this.state.events.map(targetEvent => (
//         <button onClick={() => this.setSubject(targetEvent)} key={targetEvent._id}>{targetEvent.name}</button>
//         )   
//       )}
//       {this.state.subject.name ? 
//       (
//         <>
//         <p>{this.state.subject.name}</p>
//         <form onSubmit={this.updateEvent}>
//           <fieldset>
//             <label>Name of event</label>
//             <input type="text" name="name" onChange={this.onNameChange} value={this.state.subName}></input>
//           </fieldset>
//           <fieldset>
//             <label>Description of event</label>
//             <input type="text" name="description" onChange={this.onDescriptionChange} value={this.state.subDesc}></input>
//           </fieldset>
//           <fieldset>
//             <label>Location of event</label>
//             <input type="text" name="location" onChange={this.onLocationChange} value={this.state.subLoc}></input>
//           </fieldset>

//           <button type="submit">Submit updated event</button>
//         </form>


//         </>
//       ):
//       (
//         <p>No current subject.</p>
//       )}
//       </>
//     )
//   }
// }

