import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Table1 from './Table1'

class TaskList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: [],
      loading: true,
      error: null
    }
  }
  componentDidMount () {
    axios.get(`http://localhost:4000/api/tasks/read/`)
            .then(res => {
              console.log(res)
              this.setState({tasks: res.data.data})
              this.setState({loading: false})
            })
            .catch(err => {
              this.setState({
                loading: false,
                error: err
              })
            })
  }
  renderLoading () {
    return <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
  }
  renderError () {
    return (
      <div>
                Ooops, : {this.state.error.message}
      </div>
    )
  }
  renderTasks () {
    if (this.state.error) {
      return this.renderError()
    }
    return (
      <ul>
        {this.state.tasks.map(task =>
          <li key={task._id}>{task.name}</li>
                )}
      </ul>
    )
  };

  render () {
    if (this.state.loading) {
      return this.renderLoading()
    }
    return (
      <div className='m'>

        <p className='Table-header' align='center'>Tasks</p>
        <Table1 data={this.state.tasks} /> {/*
            As you can see, and bas bdkhl guwa hena el array el gebto men TaskList, mgm3 hena?ahh ana i mean fel app.cs i dont know how to viok stoepw
            */}

      </div>

    )
  }
}
ReactDOM.render(
  <TaskList subreddit='reactjs' />,
    document.getElementById('root')
)

export default TaskList
