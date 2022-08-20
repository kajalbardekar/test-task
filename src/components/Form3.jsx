import React from 'react';
import { Formik, Field, Form } from 'formik';
import "./Form3.css"

const Form3 = () => (
    <div className='body'>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                
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
                marialtalstatus: '',
                bloodgroup: ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                console.log(values)
            }}
        >
            <Form>
                <h1>Personal Details</h1>
                <label htmlFor="firstName">First Name</label>
                <Field type="text" id="firstName" name="firstName" placeholder=" First Name.." />

                <label htmlFor="lastName">Last Name</label>
                <Field  type="text"  id="lastName" name="lastName" placeholder="last name.." />

                <label htmlFor="email">Email</label>
                <Field  type="email" id="email" name="email" placeholder="Enter Email"  type="email"
                />
                 <label htmlFor="firstName"> Name:</label>
                <Field id="name" type="text"  name="name" placeholder="name.." />

                <label htmlFor="mobile">Mobille</label>
                <Field  type="text"  id="mobile" name="mobile" placeholder="mobile.." />
                
                <label htmlFor="DOB">DOB</label>
                <Field  type="text"  id="DOB" name="DOB" type="date" placeholder="DOB..." />

                <label htmlFor="id"> ID:</label>
                <Field type="text" id="id" name="id" placeholder="ID.." />

                <label htmlFor="govtid"> ID NO:</label>
                <Field type="text"  id="govtid" name="govtid" placeholder="govtid.." />

                <label htmlFor="sex"> Sex:</label>
                <Field type="text"  id="sex" name="sex" placeholder="sex.." />
      <h1>Contact Details</h1>
                <label htmlFor="guardian"> Guardian:</label>
                <Field type="text"  id="guardian" name="guardian" placeholder="guardian.." />


                <label htmlFor="guardianname"> Guardian NAme:</label>
                <Field  type="text"  id="guardianname" name="guardianname" placeholder="guardianname.." />

                <label htmlFor="email"> Email:</label>
                <Field  type="text"  id="email" name="email" placeholder="email.." />
 <h1>Address details</h1>
                <label htmlFor="address"> Address:</label>
                <Field type="text"  id="address" name="address" placeholder="address.." />

                <label htmlFor="country"> Country:</label>
                <Field type="text"  id="country" name="country" placeholder="country.." />

                <label htmlFor="state"> State:</label>
                <Field type="text"  id="state" name="state" placeholder="state.." />

                <label htmlFor="city"> City:</label>
                <Field type="text"  id="city" name="city" placeholder="city.." />
          <h1>Other Details</h1>
                <label htmlFor="occupation"> Occupation:</label>
                <Field type="text"  id="occupation" name="occupation" placeholder="occupation.." />
                
                <label htmlFor="pin"> Pin:</label>
                <Field type="text"  id="pin" name="pin" placeholder="pin.." />

                <label htmlFor="nationality"> Nationality:</label>
                <Field type="text"  id="nationality" name="nationality" placeholder="nationality.." />

                <label htmlFor="religion"> Religion:</label>
                <Field type="text"  id="religion" name="religion" placeholder="religion.." />

                <label htmlFor="mariatalstatus"> Mariatal Status:</label>
                <Field type="text"  id="mariatalstatus" name="mariatalstatus" placeholder="mariatalstatus.." />

                <label htmlFor="bloodgroup"> Blood Group:</label>
                <Field type="text"  id="bloodgroup" name="bloodgroup" placeholder="bloodgroup.." />

               
                        <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
);

export default Form3;
