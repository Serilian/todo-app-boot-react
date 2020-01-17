import React from 'react';
import axios from "axios";
import moment from "moment";
import {Formik, Form, Field, ErrorMessage} from "formik";


class Todo extends React.Component {

    state = {
        id: this.props.match.params.id,
        description: "Test description",
        targetDate: moment(new Date()).format('YYYY-MM-DD')
    };

    onSubmit = (values) => {
        console.log(values);
    };

    validate = (values) => {
       let errors = {};
       if(!values.description) {
           errors.description = "Enter a description"
       } else if(values.description.length < 5) {
           errors.description = "Description must be more than 5 chars"
       }

       if(!moment(values.targetDate).isValid()) {
           errors.targetDate = "Enter a correct value"
       }
       return errors;
    };

    render() {
        let {description, targetDate} = this.state;
        return (
            <div className="container">
                <h1>Edit Todo</h1>
                <Formik
                    initialValues={{
                        description,
                        targetDate
                    }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name={"description"} component={"div"} className={"alert alert-warning"}/>
                                <fieldset className="form-group">
                                    <label>Description
                                    </label>
                                    <Field className="form-control" type="test" name="description"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date
                                    </label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button type={"submit"} className={"btn btn-success"}>Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    };
}

export default Todo;