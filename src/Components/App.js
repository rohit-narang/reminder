import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder, deleteReminder} from '../actions';
import moment from 'moment';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            dateTime:''
        }
    }

    addReminder(){
        this.props.addReminder(this.state.text, this.state.dateTime);
    }

    deleteReminder(id){
         console.log('delete reminder id' + id);
        this.props.deleteReminder(id);
       
    }

    renderReminders(){
        const {reminders} = this.props;
        return(
            <ul>
                {
                reminders.map(reminder => {
                return(
                    <li key={reminder.id} className="list-group-item">
                        <div className="list-item"><div>{reminder.text}</div> <div>{moment(new Date(reminder.dateTime)).fromNow()}</div>
                        <div className="delete-button" aria-label="Close" onClick={() => this.deleteReminder(reminder.id)}><span aria-hidden="true">&times;</span></div></div>
                    </li>
                )   
            })
                }
            </ul>
        )        
    }
    render(){
        return(
            
            <div className="App">
                <div className="title">Reminder Pro</div>
            <div className="form-inline">
                <div className="form-group">
                    <input 
                        className="form-control" 
                        placeholder="Enter Reminder..." 
                        onChange={event =>  this.setState({text: event.target.value})}/>
                        <input 
                        className="form-control"
                        type="datetime-local" 
                        onChange={event => this.setState({dateTime:event.target.value})}
                        />
                    <button type="button" 
                        className="button btn-success"
                        onClick={ () => this.addReminder() }
                    >
                    Add Reminder
                    </button>
                </div>
                <div className="content">
                    {this.renderReminders()}
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('state', state);
    return {
        reminders: state
    }
}


export default connect(mapStateToProps, {addReminder, deleteReminder})(App);