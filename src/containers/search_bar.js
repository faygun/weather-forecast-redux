import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term : '', errors:{} };
        this.onIputChange = this.onIputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    onIputChange(event){
        this.setState({term:event.target.value});
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                placeholder = "Just German cities"
                onChange={this.onIputChange}
                value={this.state.term}
                className='form-control'/>
                <span className='input-group-btn'>
                    <button type='Submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

 export default connect(null, mapDispatchToProps)(SearchBar);