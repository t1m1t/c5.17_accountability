import React, {Component} from 'react';
import './app.css';


class LogInForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log('Called handleFormSubmit', this.state.form);
        const newState = {
            form: {
                email: '',
                password: ''
            }
        }
        this.setState(newState);
    }

    handleChange(event){
        const { name, value } = event.target;
        const { form } = this.state;
        form[name] = value;
        this.setState({form: {...form}});
    }

    render(){
        const {email, password} = this.state.form;
        return(
            <div className="login_page">
                <form onSubmit={ (event) => {this.handleFormSubmit(event)} }>
                    <div>
                        <h6 className="login-subtitles">E-mail</h6>
                        <input name="email" value={email} onChange={ (event) => this.handleChange(event) } />
                    </div>
                    <div>
                        <h6 className="login-subtitles">Password</h6>
                        <input name="password" value={password} onChange={ (event) => this.handleChange(event) } />
                    </div>
                    <button className="login-button">Log In</button>
                </form>
            </div>
        )
    }
}

export default LogInForm;


class Signin extends Component {
    constructor(props) {
        super(props);

        this.formDefault = {
            email: '',
            password: ''
        };

        this.state = {
            form: { ...this.formDefault }
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("handleSubmit called", this.state.form);

        this.resetForm();
    }

    handleChange(e){
        console.log('Event from input', e.target.name);

        const {form} = this.state;
        form[e.target.name] = e.target.value;

        this.setState({form: {...form}});
    }

    resetForm(){
        this.setState({
            form: {...this.formDefault}
        })
    }

    render(){
        return(
            <form onSubmit={ (e) => this.handleSubmit(e)} >
                <div>
                    <label>Email: </label>
                    <input name="email" type="email" onChange={(event) => this.handleChange(event)} value={this.state.form.email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input name="password" type="password" onChange={(event) => this.handleChange(event)} value={this.state.form.password}/>
                </div>
                <br />
                <button>Submit Form</button>
                <button type="button" onClick={() => this.resetForm()}>Reset</button>
            </form>
        )
    }
}