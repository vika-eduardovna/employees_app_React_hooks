import './add-form.css'

const EmployeesAddForm = () => {
    return (
        <div className='app-add-form'>
            <h3>Add an employee</h3>
            <form className="add-form d-flex">
                <input 
                    type="text" 
                    className="form-control new-post-label"
                    placeholder='Name' 
                />

                <input 
                    type="text" 
                    className="form-control new-post-label"
                    placeholder='Salary $' 
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

export default EmployeesAddForm;