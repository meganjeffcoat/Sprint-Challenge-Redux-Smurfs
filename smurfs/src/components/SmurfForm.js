import React, { Component } from 'react';

class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSmurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            newSmurf: {
                ...this.state.newSmurf,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.newSmurf.name === ''){
            alert('Enter name')
        } else if (this.state.newSmurf.height === ''){
            alert('enter a height')
        } else if (this.state.newSmurf.age === ''){
            alert('age must be newborn or older')
        } else {
            this.props.addSmurf(this.state.newSmurf)
            this.setState({
                newSmurf: {
                    name: '',
                    age: '',
                    height: ''
                }
            })
        }
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Smurf Name'
                    value={this.state.newSmurf.name}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Smurf Age'
                    value={this.state.newSmurf.age}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='height'
                    placeholder='Smurf Height'
                    value={this.state.newSmurf.height}
                    onChange={this.handleChange}
                />
                <input background-color='white' type='submit' value='Add Smurf' />
            </form>
        )
    }
}

export default SmurfForm;