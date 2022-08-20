import React,{useEffect} from 'react'
import {  Formik, Form, Field } from 'formik';
import * as Yup from "yup"
import "./PracticeForm.css"
import FormikControl from './FormikControl';



const initialValues = {
  myname: '',
  mobile: '',
  DOB: '',
  id: '',
  govtid: '',
  sex: '',
  guardian: '',
  guardianname: '',
  email: '',
  emnumber: '',
  address: '',
  country: '',
  state: '',
  city: '',
  pin: '',
  occupation: '',
  nationality: '',
  religion: '',
  mariatalstatus: '',
  bloodgroup: ''

}



const onSubmit = values => {
  console.log("Form Data", values);
}

const validationSchema = Yup.object({
  myname: Yup.string().required('Required!'),
  sex: Yup.string().required('Required!')
})



const PracticeForm = () => {


  
  useEffect(()=>{
    localStorage.setItem('Form',JSON.stringify)
  },[values])
  
  const dropdownOptions= [
    {key:"select an option",value:""},
    {key:"option 1",value:"Single "},
    {key:"option 2",value:"Married"},
    {key:"option 3",value:"Engaged"}
  ]
  

return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='outermost'>

        <div className="first">
          <h1>Personal Details</h1>
          <label htmlFor="firstName"> Name:</label>
          <Field id="name" type="text" name="myname" placeholder="name.." />

          <label htmlFor="mobile">Mobille:</label>
          <Field type="text" id="mobile" name="mobile" placeholder="mobile.." />

          <label htmlFor="DOB">DOB:</label>
          <Field id="DOB" name="DOB" type="date" placeholder="DOB..." />

          <label htmlFor="id"> ID:</label>
          <Field type="text" id="id" name="id" placeholder="ID.." />

          <label htmlFor="govtid"> ID NO:</label>
          <Field type="text" id="govtid" name="govtid" placeholder="govtid.." />


          <label htmlFor="sex"> Sex:</label>
          <Field type="text" id="sex" name="sex" placeholder="sex.." />

        </div>

        <div className="second">
          <h1>Contact Details</h1>
          <label htmlFor="guardian"> Guardian:</label>
          <Field type="text" id="guardian" name="guardian" placeholder="guardian.." />


          <label htmlFor="guardianname"> Guardian NAme:</label>
          <Field type="text" id="guardianname" name="guardianname" placeholder="guardianname.." />

          <label htmlFor="email"> Email:</label>
          <Field type="text" id="email" name="email" placeholder="email.." />

          <label htmlFor="emnumber">Emergency Number:</label>
          <Field type="text" id="emnumber" name="emnumber" placeholder="emnumber.." />

        </div>

        <div className="third">
          <h1>Address details</h1>
          <label htmlFor="address"> Address:</label>
          <Field type="text" id="address" name="address" placeholder="address.." />

          <label htmlFor="country"> Country:</label>
          <Field type="text" id="country" name="country" placeholder="country.." />

          <label htmlFor="state"> State:</label>
          <Field type="text" id="state" name="state" placeholder="state.." />

          <label htmlFor="city"> City:</label>
          <Field type="text" id="city" name="city" placeholder="city.." />

        </div>

        <div className="four">
          <h1>Other Details</h1>
          <label htmlFor="occupation"> Occupation:</label>
          <Field type="text" id="occupation" name="occupation" placeholder="occupation.." />

          <label htmlFor="pin"> Pin:</label>
          <Field type="text" id="pin" name="pin" placeholder="pin.." />

          <label htmlFor="nationality"> Nationality:</label>
          <Field type="text" id="nationality" name="nationality" placeholder="nationality.." />

          <label htmlFor="religion"> Religion:</label>
          <Field type="text" id="religion" name="religion" placeholder="religion.." />

          <label htmlFor="mariatalstatus"> Mariatal Status:</label>
          <Field type="text" id="mariatalstatus" name="mariatalstatus" placeholder="mariatalstatus.." />
{/* 
            <FormikControl 
            control='select'  
            label='Mariatalstatus:' 
            name="mariatalstatus"
            options={dropdownOptions}
            />       */}



          <label htmlFor="bloodgroup"> Blood Group:</label>
          <Field type="text" id="bloodgroup" name="bloodgroup" placeholder="bloodgroup.." />
          <button type='submit'>Submit</button>
        </div>

       </Form>

    </Formik>




  )
}

export default PracticeForm
