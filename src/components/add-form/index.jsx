import { Component } from 'react';
import './add-form.css'

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            salary: ''
        }
    }

    submit = e => {
        e.preventDefault();
        const { addToDo } = this.props;
        const { title } = e.target;
        addToDo(title.value);
        title.value = '';
    }

    onSubmit = e => {
        e.preventDefault();
        const {addEmployee} = this.props;
        const {first_name,last_name, salary } = e.target;
        addEmployee(first_name.value, last_name.value,salary.value);
    

    }
    render() {

        
        return (
            <div className='app-add-form'>
                <h3>Add an employee</h3>
                <form 
                className="add-form d-flex"
                onSubmit = {this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder='Name'
                        name='first_name'
                        
                        
                    />
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder='Lastname'
                        name='last_name'
                       
                        
                        
                    />

                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder='Salary $'
                        name='salary'
                        
                        
                    />

                    <button
                        className="btn btn-outline-light"
                        type="submit">
                        Add
                    </button>

                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;