import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/blog.module.scss';
import { SubHeading, PropHeading, SubHeading2 } from '../components/Headings/';
import {
  Button,
  DatePicker,
  DropDown,
  Input,
  TimePicker,
  CheckBoxGroup,
  CheckBox,
  Radio,
  RadioGroup,
} from 'mochi-ui';
import {
  faUpRightFromSquare,
  faMagicWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const [food, setFood] = React.useState('');
  const [foods, setFoods] = React.useState(['dumplings']);
  const [radio, setRadio] = React.useState('');
  const [friedChicken, setFriedChicken] = React.useState(false);
  const [pizza, setPizza] = React.useState(false);
  const inView = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring',
      },
    },
  };
  return (
    <div className='App'>
      <Head>
        <title>Mochi UI</title>
      </Head>
      <motion.section className='hero' id='home-section'>
        <Hero />
      </motion.section>
      <motion.section
        className='about'
        id='introduction-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <a className={styles.anchor} id='documentation'></a>
        <h1 className={styles.mainTitle}>Mochi UI Documentation</h1>
        <span>Updated on 5rd Aug 2023</span>
        <SubHeading left={true} anchor='introduction'>
          Introduction
        </SubHeading>
        <p className={styles.description}>
          This is a small UI library that I created to help me with my projects.
          It is a collection of components that I use frequently. I have
          published it on NPM so that others can use it as well.
        </p>
        <Button
          iconRight={<FontAwesomeIcon icon={faUpRightFromSquare} />}
          title='View Source Code'
          onClick={() => {
            window.open('https://github.com/hasathcharu/MochiUI', '_blank');
          }}
        />
        <SubHeading left={true} anchor='installation'>
          Installation
        </SubHeading>
        <CodeBlock language='bash' Language='Bash / ZSh'>
          npm i mochi-ui
        </CodeBlock>
        <SubHeading left={true} anchor='usage'>
          Usage
        </SubHeading>
        <p className={styles.description}>
          To use the components, you need to import them from the package.
        </p>
        <CodeBlock language='javascript' Language='JS / TS'>
          {`import { Button, Input } from 'mochi-ui';`}
        </CodeBlock>
        <p className={styles.description}>
          Then you can use them in your code as shown in the examples below.
        </p>
        <p className={styles.description}>
          IMPORTANT: You need to add the "light" or "dark" class to the html
          tag.
        </p>
        <CodeBlock language='html' Language='HTML'>
          {`<html class="light">`}
        </CodeBlock>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='button-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='button'>
          Button
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<Button
  title='Click Me'
  iconRight={<FontAwesomeIcon icon={faWandMagic} />}
  onClick={() => {console.log('Click')}}
  size='large'
  color='primary'
/>`}
            </CodeBlock>
          </div>
          <div>
            <Button
              title='Click Me'
              iconRight={<FontAwesomeIcon icon={faMagicWandSparkles} />}
            />
            <Button
              title='Me Too'
              color='secondary'
              iconRight={<FontAwesomeIcon icon={faMagicWandSparkles} />}
            />
            <Button
              title='Click Me'
              iconRight={<FontAwesomeIcon icon={faMagicWandSparkles} />}
              size='medium'
            />

            <Button
              title='Me Too'
              color='tertiary'
              icon={<FontAwesomeIcon icon={faMagicWandSparkles} />}
              size='icon'
            />
            <Button title='Me Too' color='warning' size='small' />
          </div>
        </div>
        <SubHeading2 left={true} anchor='button-props'>
          Button Props
        </SubHeading2>
        <PropHeading title='title' type='string' anchor='button-title' />
        <p className={styles.description}>
          This is the text that will be displayed on the button.
        </p>
        <PropHeading
          title='icon'
          type='<FontAwesomeIcon>'
          anchor='button-icon'
        />
        <p className={styles.description}>
          The icon that is displayed on the left side of <code>title</code>{' '}
          text. As this is a react component, you can pass in any react icon
          component you want.
        </p>
        <PropHeading
          title='iconRight'
          type='<FontAwesomeIcon>'
          anchor='button-iconRight'
        />
        <p className={styles.description}>
          The icon that is displayed on the right side of <code>title</code>{' '}
          text. As this is a react component, you can pass in any react icon
          component you want.
        </p>
        <PropHeading
          title='onClick'
          type='(() => Promise<any>) | (() => void)'
          anchor='button-onClick'
        />
        <p className={styles.description}>
          The function that will be called when the button is clicked. If passed
          an async function, the button will be disabled until the function is
          resolved. While the function is running, the button will display a
          loading animation.
        </p>
        <PropHeading
          title='fullWidth'
          type='boolean'
          anchor='button-fullWidth'
        />
        <p className={styles.description}>
          Boolean value that will make the button take up the full width of the
          container.
        </p>
        <PropHeading title='size' type='string' anchor='button-size' />
        <p className={styles.description}>
          <code>large | medium | small | icon</code>
          <br />
          <br />
          This is the size of the button. The default value is{' '}
          <code>large</code>
        </p>
        <PropHeading title='color' type='boolean' anchor='button-color' />
        <p className={styles.description}>
          <code>primary | secondary | tertiary | danger | warning</code>
          <br />
          <br />
          This is the color of the button. The default value is{' '}
          <code>primary</code>. These colors can be changed by changing the css
          variables in your global css file.
        </p>
        <PropHeading title='shaded' type='boolean' anchor='botton-shaded' />
        <p className={styles.description}>
          This is a boolean value that will make the button have a shaded
          background.
        </p>
        <PropHeading title='disabled' type='boolean' anchor='button-disabled' />
        <p className={styles.description}>
          This is a boolean value that will make the button disabled.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='input-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='input'>
          Input
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<Input
  domName='Name'
  name='name'
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder='enter your name'
/>`}
            </CodeBlock>
          </div>
          <div>
            <Input
              domName='Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='enter your name'
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='input-props'>
          Input Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='input-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='type' type='string' anchor='input-type' />
        <p className={styles.description}>
          <code>
            text | password | email | number | tel | search | week | textarea
          </code>
          <br />
          <br />
          This is the type of the input. The default value is <code>text</code>.
        </p>
        <PropHeading title='name' type='string' anchor='input-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='input-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='(e: React.ChangeEvent<HTMLInputElement>) => void'
          anchor='input-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='input-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='input-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid. Only works when the <code>touched</code> prop is set to{' '}
          <i>true</i>.
        </p>
        <PropHeading title='touched' type='boolean' anchor='input-touched' />
        <p className={styles.description}>
          The boolean value that will be set to <i>true</i> when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='() => void'
          anchor='input-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading title='disabled' type='boolean' anchor='input-disabled' />
        <p className={styles.description}>
          This is a boolean value to disable the input.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='datepicker-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='datepicker'>
          DatePicker
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<DatePicker
  domName='Birthday'
  name='birthday'
  value={date}
  onChange={(e) => setDate(e)}
/>`}
            </CodeBlock>
          </div>
          <div>
            <DatePicker
              domName='Birthday'
              value={date}
              onChange={(e) => setDate(e)}
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='datepicker-props'>
          DatePicker Props
        </SubHeading2>
        <PropHeading
          title='domName'
          type='string'
          anchor='datepicker-domName'
        />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='datepicker-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='Date' anchor='datepicker-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='(date: Date) => void'
          anchor='datepicker-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading title='time' type='boolean' anchor='datepicker-time' />
        <p className={styles.description}>
          This is a boolean value that will let you choose the time as well.
        </p>
        <PropHeading title='date' type='boolean' anchor='datepicker-date' />
        <p className={styles.description}>
          Set to <i>true</i> by default. This is a boolean value that will let
          you choose the date as well. Setting this to <i>false</i> will only
          let you choose the month.
        </p>
        <PropHeading
          title='endYear'
          type='number'
          anchor='datepicker-endYear'
        />
        <p className={styles.description}>
          This is the last year that will be displayed in the year dropdown.
        </p>
        <PropHeading
          title='startYear'
          type='number'
          anchor='datepicker-startYear'
        />
        <p className={styles.description}>
          This is the first year that will be displayed in the year dropdown.
        </p>
        <PropHeading title='error' type='string' anchor='datepicker-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid. Only works when the <code>touched</code> prop is set to{' '}
          <i>true</i>.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='datepicker-touched'
        />
        <p className={styles.description}>
          The boolean value that will be set to <i>true</i> when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='() => void'
          anchor='datepicker-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='datepicker-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='timepicker-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='timepicker'>
          TimePicker
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<TimePicker
  domName='Time'
  name='time'
  value={time}
  onChange={(e) => setTime(e)}
/>`}
            </CodeBlock>
          </div>
          <div>
            <TimePicker
              domName='Arrival Time'
              value={time}
              onChange={(e) => setTime(e)}
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='timepicker-props'>
          TimePicker Props
        </SubHeading2>
        <PropHeading
          title='domName'
          type='string'
          anchor='timepicker-domName'
        />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='timepicker-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='Date' anchor='timepicker-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='(date: Date) => void'
          anchor='timepicker-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading title='error' type='string' anchor='timepicker-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid. Only works when the <code>touched</code> prop is set to{' '}
          <i>true</i>.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='timepicker-touched'
        />
        <p className={styles.description}>
          The boolean value that will be set to <i>true</i> when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='() => void'
          anchor='timepicker-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='timepicker-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='dropdown-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='dropdown'>
          DropDown
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<DropDown
  domName='Favorite Food'
  name='food'
  value={food}
  onChange={(e) => setFood(e)}
  defaultValue='-- Choose your meal'
  values={[
    {
      key: 'pizza',
      label: 'Pizza 🍕',
    },
    {
      key: 'burger',
      label: 'Burger 🍔',
    },
    {
      key: 'friedChicken',
      label: 'Fried Chicken 🍗',
    },
  ]}
  unSelectable
/>`}
            </CodeBlock>
          </div>
          <div>
            <DropDown
              value={food}
              onChange={(i) => setFood(i)}
              domName='Your Favorite Food'
              defaultValue='-- Choose your meal'
              values={[
                {
                  key: 'pizza',
                  label: 'Pizza 🍕',
                },
                {
                  key: 'burger',
                  label: 'Burger 🍔',
                },
                {
                  key: 'friedChicken',
                  label: 'Fried Chicken 🍗',
                },
              ]}
              unSelectable
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='dropdown-props'>
          DropDown Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='dropdown-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='dropdown-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='dropdown-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='values'
          type='{ key: string; label: string }[]'
          anchor='dropdown-values'
        />
        <p className={styles.description}>
          This is an array of objects that will be displayed in the dropdown.
          Each object should have a <code>key</code> and a <code>label</code>.
        </p>
        <PropHeading
          title='onChange'
          type='(item: string) => void'
          anchor='dropdown-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading title='error' type='string' anchor='dropdown-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading title='touched' type='boolean' anchor='dropdown-touched' />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='() => void'
          anchor='dropdown-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='defaultValue'
          type='string'
          anchor='dropdown-defaultValue'
        />
        <p className={styles.description}>
          This is the default value that will be displayed when the input is
          empty.
        </p>
        <PropHeading
          title='unSelectable'
          type='boolean'
          anchor='dropdown-unSelectable'
        />
        <p className={styles.description}>
          This is a boolean value that will make the value of the input
          unselectable.
        </p>

        <PropHeading
          title='disabled'
          type='boolean'
          anchor='dropdown-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='checkbox-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='checkboxGroup'>
          CheckBoxGroup
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<CheckBoxGroup
  values={[
    {
      key: 'friedChicken',
      label: 'Fried Chicken 🍗',
    },
    {
      key: 'pizza',
      label: 'Pizza 🍕',
    },
    {
      key: 'dumplings',
      label: 'Dumplings 🥟',
      disabled: true,
    },
    {
      key: 'tempura',
      label: 'Tempura 🍤',
      disabled: true,
    },
  ]}
  containerClassName={styles.checkBoxGroup}
  value={foods}
  onChange={(value) => setFoods(value)}
  domName='What foods do you like?'
/>`}
            </CodeBlock>
          </div>
          <div>
            <CheckBoxGroup
              values={[
                {
                  key: 'friedChicken',
                  label: 'Fried Chicken 🍗',
                },
                {
                  key: 'pizza',
                  label: 'Pizza 🍕',
                },
                {
                  key: 'dumplings',
                  label: 'Dumplings 🥟',
                  disabled: true,
                },
                {
                  key: 'tempura',
                  label: 'Tempura 🍤',
                  disabled: true,
                },
              ]}
              containerClassName={styles.checkBoxGroup}
              value={foods}
              onChange={(value) => setFoods(value)}
              domName='What foods do you like?'
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='checkboxGroup-props'>
          CheckBoxGroup Props
        </SubHeading2>
        <PropHeading
          title='domName'
          type='string'
          anchor='checkboxGroup-domName'
        />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='checkboxGroup-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading
          title='values'
          type='{ key: string; label: string; disabled?: boolean }[]'
          anchor='checkboxGroup-values'
        />
        <p className={styles.description}>
          This is the array of objects that will be displayed in the checkbox
          group. Each object should have a <code>key</code> and a{' '}
          <code>label</code>. The <code>disabled</code> property is optional.
        </p>
        <PropHeading
          title='value'
          type='string[]'
          anchor='checkboxGroup-value'
        />
        <p className={styles.description}>
          This is the value of the input. A react state. This is an array of
          strings.
        </p>
        <PropHeading
          title='onChange'
          type='(keys: string[]) => void'
          anchor='checkboxGroup-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes. <code>keys</code> is an array of strings.
        </p>
        <PropHeading title='error' type='string' anchor='checkboxGroup-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid. Only works when the <code>touched</code> prop is set to{' '}
          <i>true</i>.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='checkboxGroup-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='() => void'
          anchor='checkboxGroup-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='containerClassName'
          type='string'
          anchor='checkboxGroup-containerClassName'
        />
        <p className={styles.description}>
          This is the class name that will be applied to the container of the
          checkbox group. You can use this to style the checkbox group. A
          default style is applied if this prop is not passed.
        </p>
        <SubHeading left={true} anchor='checkbox'>
          CheckBox
        </SubHeading>
        <p className={styles.description}>
          This is the CheckBox component that is used in the CheckBoxGroup
          component. You can use it separately as well, but it is recommended
          that you use the CheckBoxGroup component.
        </p>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<CheckBox 
  domName='Fried Chicken 🍗'
  value={friedChicken}
  onChange={() => setFriedChicken(!friedChicken)}
  name='friedChicken'
/>`}
            </CodeBlock>
          </div>
          <div>
            <CheckBox
              domName='Fried Chicken 🍗'
              value={friedChicken}
              onChange={() => setFriedChicken(!friedChicken)}
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='checkbox-props'>
          CheckBox Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='checkbox-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='checkbox-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='boolean' anchor='checkbox-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='() => void'
          anchor='checkbox-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='checkbox-disabled'
        />
        <p className={styles.description}>
          A boolean value that will disable the checkbox.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
      <motion.section
        className='about'
        id='radio-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='radioGroup'>
          RadioGroup
        </SubHeading>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<RadioGroup
  values={[
    {
      key: 'friedChicken',
      label: 'Fried Chicken 🍗',
    },
    {
      key: 'pizza',
      label: 'Pizza 🍕',
    },
    {
      key: 'dumplings',
      label: 'Dumplings 🥟',
    },
    {
      key: 'tempura',
      label: 'Tempura 🍤',
      disabled: true,
    },
  ]}
  containerClassName={styles.checkBoxGroup}
  value={radio}
  onChange={(value) => setRadio(value)}
  domName={\`What's your favorite?\`}
/>`}
            </CodeBlock>
          </div>
          <div>
            <RadioGroup
              values={[
                {
                  key: 'friedChicken',
                  label: 'Fried Chicken 🍗',
                },
                {
                  key: 'pizza',
                  label: 'Pizza 🍕',
                },
                {
                  key: 'dumplings',
                  label: 'Dumplings 🥟',
                },
                {
                  key: 'tempura',
                  label: 'Tempura 🍤',
                  disabled: true,
                },
              ]}
              containerClassName={styles.checkBoxGroup}
              value={radio}
              onChange={(value) => setRadio(value)}
              domName={`What's your favorite?`}
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='radioGroup-props'>
          RadioGroup Props
        </SubHeading2>
        <PropHeading
          title='domName'
          type='string'
          anchor='radioGroup-domName'
        />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='radioGroup-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading
          title='values'
          type='{ key: string; label: string; disabled?: boolean }[]'
          anchor='radioGroup-values'
        />
        <p className={styles.description}>
          This is the array of objects that will be displayed in the checkbox
          group. Each object should have a <code>key</code> and a{' '}
          <code>label</code>. The <code>disabled</code> property is optional.
        </p>
        <PropHeading title='value' type='string' anchor='radioGroup-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='(keys: string) => void'
          anchor='radioGroup-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading title='error' type='string' anchor='radioGroup-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid. Only works when the <code>touched</code> prop is set to{' '}
          <i>true</i>.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='radioGroup-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='() => void'
          anchor='radioGroup-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='containerClassName'
          type='string'
          anchor='radioGroup-containerClassName'
        />
        <p className={styles.description}>
          This is the class name that will be applied to the container of the
          radio group. You can use this to style the radio group. A default
          style is applied if this prop is not passed.
        </p>
        <SubHeading left={true} anchor='radio'>
          Radio
        </SubHeading>
        <p className={styles.description}>
          This is the Radio component that is used in the RadioGroup component.
          You can use it separately as well, but it is recommended that you use
          the RadioGroup component.
        </p>
        <div className={styles.playground}>
          <div>
            <CodeBlock language='javascript' Language='JSX'>
              {`<Radio 
  domName='Pizza 🍕'
  value={pizza}
  name='pizza'
  onChange={() => setPizza(!pizza)}
/>`}
            </CodeBlock>
          </div>
          <div>
            <Radio
              domName='Pizza 🍕'
              value={pizza}
              name='pizza'
              onChange={() => setPizza(!pizza)}
            />
          </div>
        </div>
        <SubHeading2 left={true} anchor='radio-props'>
          Radio Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='radio-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='radio-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='boolean' anchor='radio-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='() => void'
          anchor='radio-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading title='disabled' type='boolean' anchor='radio-disabled' />
        <p className={styles.description}>
          A boolean value that will disable the checkbox.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
    </div>
  );
}
