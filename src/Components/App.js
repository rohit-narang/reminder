import React, {Component} from 'react';

class App extends Component {
    render(){
        return(
            <div>
            <div className="App">
                <div className="title">Reminder Pro</div>
            </div>
            <div className="form-inline">
                <div className="form-group">
                    <input type="text" placeholder="Enter Reminder..." />
                    <button type="button" className="button btn-success">Add</button>
                </div>
            </div>
            </div>
        );
    }
}

export default App;