import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formField';
import { validate } from '../../ui/misc';
import { firebasePromotions } from '../../../firebase';
class Enroll extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name:'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMsg: ''
            }
        }
    }
    updateForm (element) {
        const newFormData = {...this.state.formData}
        const newElement = {...newFormData[element.id]}
        newElement.value = element.event.target.value;

        let validData = validate(newElement)
        newElement.valid = validData[0]
        newElement.validationMsg = validData[1]
        newFormData[element.id] = newElement;

        this.setState({
            formError: false,
            formData: newFormData
        })
    }
    resetFormSuccess(type){
        const newFormData = {...this.state.formData}
        for(let key in newFormData){
            newFormData[key].value = '';
            newFormData[key].valid = false;
            newFormData[key].validationMsg = '';

        }
        this.setState({
            formError: false,
            formData: newFormData,
            formSuccess: type ? 'Congratulations!' : 'this email already taken'
        })
        this.successMsg();
    }

    successMsg(){
        setTimeout(() => { 
            this.setState({
                formSuccess: ''
            })
        }, 2000)
    }
    submitForm(event){
        event.preventDefault();
        let dataToSubmit = {};
        let isValid = true;
        
        for( let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
            isValid = this.state.formData[key].valid
        }
        if(isValid){
          firebasePromotions.orderByChild('email').equalTo(dataToSubmit.email).once("value")
          .then(snapshort => {
              if(snapshort.val() === null){
                  firebasePromotions.push(dataToSubmit);
                  this.resetFormSuccess(true)
              } else {
                    this.resetFormSuccess(false)
              }
          })
        } else {
            this.setState({
                formError: true
            })
        }
        

    }
    render() {
        return (
            <Fade>
            <div className="enroll_wrapper">
                <form onSubmit={ (event) => this.submitForm(event)}>
                    <div className="enroll_title">Enter Your Email</div>
                    <div className="enroll_input">
                        <FormField
                        id={'email'}
                        formData={this.state.formData.email}
                        change={(element) => {
                            this.updateForm(element)
                        }}
                        />
                        {this.state.formError ?
                        <div className="error_label">Something is wraong, try again.</div> 
                        :null
                    }
                    <div className="success_label">{this.state.formSuccess}</div>
                        
                        <button onClick={(event) => this.submitForm(event) } >Join</button>
                        <div className="enroll_discl">
                        Please Let us know in advance if you cannot
                        attend the party. Bring your own favorite drink! 
                        We offer afree snack and foods. SeeYa!
                        </div>
                    </div>
                </form>
                
            </div>
            </Fade>
        );
    }
}

export default Enroll;