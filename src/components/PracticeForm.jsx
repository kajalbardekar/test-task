import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup" 


const onSubmit = values => {
  console.log("Form Data", values);
}
// const validate=values=>{
//   let errors={}
//   if (!values.name){
//        errors.name="required"
//   }
//   if(!values.sex){
//     errors.sex="required"
//   }
//   return errors
// }
const initialValues={
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



const validationSchema=Yup.object({
  myname:Yup.string().required('Required'),
  sex:Yup.string().required('Required')
})


const PracticeForm = () => {
  const formik = useFormik({
    initialValues,
    // :{
    //   myname: '',
    //   mobile: '',
    //   DOB: '',
    //   id: '',
    //   govtid: '',
    //   sex: '',
    //   guardian: '',
    //   guardianname: '',
    //   email: '',
    //   emnumber: '',
    //   address: '',
    //   country: '',
    //   state: '',
    //   city: '',
    //   pin: '',
    //   occupation: '',
    //   nationality: '',
    //   religion: '',
    //   mariatalstatus: '',
    //   bloodgroup: ''

    // }
    onSubmit,
    // :values => {
    //   console.log("Form Data", values);
    // },
    validationSchema

  })
  //console.log('Form Values',formik.values)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Personal Details</h1>

        <label htmlFor="firstName"> Name:</label>
        <input onChange={formik.handleChange} value={formik.values.myname} id="name" type="text" name="myname" placeholder="name.." />

        <label htmlFor="mobile">Mobille:</label>
        <input onChange={formik.handleChange} value={formik.values.mobile} type="text" id="mobile" name="mobile" placeholder="mobile.." />

        <label htmlFor="DOB">DOB:</label>
        <input onChange={formik.handleChange} value={formik.values.DOB} id="DOB" name="DOB" type="date" placeholder="DOB..." />

        <label htmlFor="id"> ID:</label>
        <input onChange={formik.handleChange} value={formik.values.id} type="text" id="id" name="id" placeholder="ID.." />

        <label htmlFor="govtid"> ID NO:</label>
        <input onChange={formik.handleChange} value={formik.values.govtit} type="text" id="govtid" name="govtid" placeholder="govtid.." />

        <label htmlFor="sex"> Sex:</label>
        <input onChange={formik.handleChange} value={formik.values.sex} type="text" id="sex" name="sex" placeholder="sex.." />
        <h1>Contact Details</h1>
        <label htmlFor="guardian"> Guardian:</label>
        <input onChange={formik.handleChange} value={formik.values.guardian} type="text" id="guardian" name="guardian" placeholder="guardian.." />


        <label htmlFor="guardianname"> Guardian NAme:</label>
        <input onChange={formik.handleChange} value={formik.values.guardianname} type="text" id="guardianname" name="guardianname" placeholder="guardianname.." />

        <label htmlFor="email"> Email:</label>
        <input onChange={formik.handleChange} value={formik.values.email} type="text" id="email" name="email" placeholder="email.." />

        <label htmlFor="emnumber">Emergency Number:</label>
        <input onChange={formik.handleChange} value={formik.values.emnumber} type="text" id="emnumber" name="emnumber" placeholder="emnumber.." />

        <h1>Address details</h1>
        <label htmlFor="address"> Address:</label>
        <input onChange={formik.handleChange} value={formik.values.address} type="text" id="address" name="address" placeholder="address.." />

        <label htmlFor="country"> Country:</label>
        <input onChange={formik.handleChange} value={formik.values.country} type="text" id="country" name="country" placeholder="country.." />

        <label htmlFor="state"> State:</label>
        <input onChange={formik.handleChange} value={formik.values.state} type="text" id="state" name="state" placeholder="state.." />

        <label htmlFor="city"> City:</label>
        <input onChange={formik.handleChange} value={formik.values.city} type="text" id="city" name="city" placeholder="city.." />
        <h1>Other Details</h1>
        <label htmlFor="occupation"> Occupation:</label>
        <input onChange={formik.handleChange} value={formik.values.occupation} type="text" id="occupation" name="occupation" placeholder="occupation.." />

        <label htmlFor="pin"> Pin:</label>
        <input onChange={formik.handleChange} value={formik.values.pin} type="text" id="pin" name="pin" placeholder="pin.." />

        <label htmlFor="nationality"> Nationality:</label>
        <input onChange={formik.handleChange} value={formik.values.nationality} type="text" id="nationality" name="nationality" placeholder="nationality.." />

        <label htmlFor="religion"> Religion:</label>
        <input onChange={formik.handleChange} value={formik.values.religion} type="text" id="religion" name="religion" placeholder="religion.." />

        <label htmlFor="mariatalstatus"> Mariatal Status:</label>
        <input onChange={formik.handleChange} value={formik.values.mariatalstatus} type="text" id="mariatalstatus" name="mariatalstatus" placeholder="mariatalstatus.." />

        <label htmlFor="bloodgroup"> Blood Group:</label>
        <input onChange={formik.handleChange} value={formik.values.bloodgroup} type="text" id="bloodgroup" name="bloodgroup" placeholder="bloodgroup.." />


        <button type='submit'>Submit</button>
      </form>
    </div>


  )
}

export default PracticeForm
