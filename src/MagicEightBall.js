import React from 'react';

import answers from './answers';

import { Button } from 'react-bootstrap';

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { question: '', answer: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ question: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        const { question } = this.state;

        this.setState({
            question: '', answer: question === '' ? '' : this.answer()
        });
    }
    answer() {
        return answers[Math.floor(Math.random() * answers.length)];
    }
    render() {
        return (
            <div>
                <h1 className="mb-4"> Magic 8-Ball</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input type='text' value={this.state.question} onChange={this.handleChange} className='form-control form-rounded' placeholder='Ask the magic 8-ball anything.' />
                    </div>

                    <Button type="submit">Ask the eight magic 8-ball</Button>
                </form>


                <h3 className='mt-4'>{this.state.answer}</h3>
            </div>
        );
    }
}
export default MagicEightBall;