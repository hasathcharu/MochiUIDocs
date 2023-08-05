import React from 'react';
import { Input, DatePicker, Button, DropDown, CheckBoxGroup } from 'mochi-ui';
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
const schema = yup.object({
  fname: yup
    .string()
    .required('First name is required')
    .min(3, 'Min length is 3'),
  dob: yup
    .date()
    .required('Date of birth is required')
    .max(
      new Date(
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)).setDate(
          new Date().getDate() + 1
        )
      ),
      'You should be atleast 18 years old'
    ),
  color: yup.string().required('Color is required'),
  favoriteFood: yup
    .array()
    .required('Favorite food is required')
    .min(1, 'Select atleast one food'),
});
function App() {
  const [values, setValues] = React.useState();
  const form = useFormik({
    initialValues: {
      fname: '',
      dob: new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      color: '',
      favoriteFood: ['rice'],
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      await dummyWait();
      setValues(values);
    },
  });
  async function dummyWait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done');
      }, 1000);
    });
  }
  return (
    <div className={styles.box}>
      <div className='normal'>
        <h1 style={{ fontWeight: 500 }}>Sample Form</h1>
        <div>
          <Input
            name='fname'
            domName='First Name'
            value={form.values.fname}
            placeholder='enter your first name'
            onChange={form.handleChange}
            error={form.errors.fname}
            touched={form.touched.fname}
            setTouched={() => form.setFieldTouched('fname')}
          />
          <DatePicker
            domName='Your Birthday'
            name='dob'
            value={form.values.dob}
            onChange={(date) => form.setFieldValue('dob', date)}
            error={form.errors.dob}
            touched={form.touched.dob}
            setTouched={() => form.setFieldTouched('dob')}
            endYear={new Date().getFullYear() - 18}
          />
          <DropDown
            domName='Favorite Color'
            name='color'
            value={form.values.color}
            onChange={(value) => form.setFieldValue('color', value)}
            // unSelectable={true}
            values={[
              {
                key: 'r',
                label: 'Red',
              },
              { key: 'g', label: 'Green' },
              { key: 'b', label: 'Blue' },
            ]}
            touched={form.touched.color}
            setTouched={() => form.setFieldTouched('color')}
            error={form.errors.color}
          />
          <CheckBoxGroup
            values={[
              {
                key: 'rice',
                label: 'Rice',
                disabled: true,
              },
              {
                key: 'noodles',
                label: 'Noodles',
              },
              {
                key: 'hoppers',
                label: 'Hoppers',
              },
              {
                key: 'bread',
                label: 'Bread',
              },
            ]}
            value={form.values.favoriteFood}
            onChange={(value) => form.setFieldValue('favoriteFood', value)}
            touched={form.touched.favoriteFood}
            setTouched={() => form.setFieldTouched('favoriteFood')}
            error={form.errors.favoriteFood}
            domName='Favorite Food'
          />
        </div>
        <br />
        <Button
          title='Sign In'
          iconRight={<FontAwesomeIcon icon={faArrowRight} />}
          onClick={form.submitForm}
        />
        <br />
        <AnimatePresence>
          <br />
          {values && values.fname && (
            <motion.div className={styles.result}>
              <span>First Name: </span>
              <span>{values.fname}</span>
              <span>Date of Birth: </span>
              <span>{values.dob.toISOString()}</span>
              <span>Color: </span>
              <span>{values.color}</span>
              <span>Favorite Food: </span>
              <span>{JSON.stringify(values.favoriteFood)}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
