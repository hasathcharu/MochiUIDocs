import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/blog.module.scss';
import Form from '../components/Form';
import Link from '../components/Link';
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
        <span>Updated on 6th Aug 2023</span>
        <SubHeading left={true} anchor='introduction'>
          Introduction
        </SubHeading>
        <p className={styles.description}>
          Welcome to Mochi UI: A visionary library curated with a delightful
          blend of squishy, fluid design language, reminiscent of the
          mesmerizing Japanese rice cake it's named after.
        </p>
        <p className={styles.description}>
          Crafted entirely with pure CSS, Mochi UI redefines user interface
          design, offering a seamless fusion of aesthetics and functionality.
          Enriching the experience further, the library harnesses the power of
          Framer Motion to infuse animations with a mesmerizing fluidity.
        </p>
        <p className={styles.description}>
          Initially, Mochi UI was created as a set of components for a personal
          project. However, as the project grew, so did the need for a
          comprehensive library of components. Thus, Mochi UI was born.
        </p>
        <p className={styles.description}>
          The library is currently in its infancy, with only a handful of
          components available. However, the library will be updated regularly
          with new components and features. I hope you enjoy using Mochi UI as
          much as I enjoyed creating it.
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
        <CodeBlock language='bash' Language='Bash / ZSh' narrow>
          npm i mochi-ui
        </CodeBlock>
        <SubHeading left={true} anchor='usage'>
          Usage
        </SubHeading>
        <p className={styles.description}>
          To use the components, you need to import them from the package.
        </p>
        <CodeBlock language='javascript' Language='JS / TS' narrow>
          {`import { Button, Input } from 'mochi-ui';`}
        </CodeBlock>
        <p className={styles.description}>
          Then you can use them in your code as shown in the examples below.
        </p>
        <p className={styles.description}>
          IMPORTANT: You need to add the "light" or "dark" class to the html
          tag.
        </p>
        <CodeBlock language='html' Language='HTML' narrow>
          {`<html class="light">`}
        </CodeBlock>
        <SubHeading left={true} anchor='support'>
          Supported In
        </SubHeading>
        <ul className={styles.list}>
          <li>React 17 & Above</li>
          <li>NextJS 12 & Above</li>
        </ul>
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
          <div className={styles.codeBlockCont}>
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
          <div className={styles.demoContainer}>
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
        <PropHeading title='margin' type='boolean' anchor='button-margin' />
        <p className={styles.description}>
          This is a boolean value to remove the margin from the button. Set to{' '}
          <i>true</i> by default.
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
          <div className={styles.codeBlockCont}>
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
          <div className={styles.demoContainer}>
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
          <div className={styles.codeBlockCont}>
            <CodeBlock language='javascript' Language='JSX'>
              {`<DatePicker
  domName='Birthday'
  name='birthday'
  value={date}
  onChange={(e) => setDate(e)}
/>`}
            </CodeBlock>
          </div>
          <div className={styles.demoContainer}>
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
          <div className={styles.codeBlockCont}>
            <CodeBlock language='javascript' Language='JSX'>
              {`<TimePicker
  domName='Time'
  name='time'
  value={time}
  onChange={(e) => setTime(e)}
/>`}
            </CodeBlock>
          </div>
          <div className={styles.demoContainer}>
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
          <div className={styles.codeBlockCont}>
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
          <div className={styles.demoContainer}>
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
          invalid. Only works when the <code>touched</code> prop is set to{' '}
          <i>true</i>.
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
          <div className={styles.codeBlockCont}>
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
          <div className={styles.demoContainer}>
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
          <div className={styles.codeBlockCont}>
            <CodeBlock language='javascript' Language='JSX'>
              {`<CheckBox 
  domName='Fried Chicken 🍗'
  value={friedChicken}
  onChange={() => setFriedChicken(!friedChicken)}
  name='friedChicken'
/>`}
            </CodeBlock>
          </div>
          <div className={styles.demoContainer}>
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
          <div className={styles.codeBlockCont}>
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
          <div className={styles.demoContainer}>
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
          <div className={styles.codeBlockCont}>
            <CodeBlock language='javascript' Language='JSX'>
              {`<Radio 
  domName='Pizza 🍕'
  value={pizza}
  name='pizza'
  onChange={() => setPizza(!pizza)}
/>`}
            </CodeBlock>
          </div>
          <div className={styles.demoContainer}>
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
      <motion.section
        className='about'
        id='customize-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='customization'>
          Customization
        </SubHeading>
        <p className={styles.description}>
          You can customize the components by changing the css variables in your
          global css file. Here is an example of how you can do it. You can copy
          the code below and paste it in your global css file and change the
          colors to your heart's content.
        </p>
        <CodeBlock language='css' Language='CSS'>
          {`html {
  .mochiCustom {
    --mainfont: 'Poppins' !important;
    --light-e: #eeeeee !important;
    --light-d: #dddddd !important;
    --light-bg: #ffffff !important;
    --dark-1: #111111 !important;
    --dark-2: #222222 !important;
    --dark-3: #333333 !important;
    --dark-4: #444444 !important;
    --dark-5: #555555 !important;
    --dark-8: #888888 !important;
    --secondary: #6ec2f7 !important;
    --tertiary: #a686fc !important;
    --danger: #ff7276 !important;
    --warning: #fffaa0 !important;

    --btn-color: var(--dark-3) !important;
    --contrast-btn-color: var(--mainfont-color) !important;

    --secondary-lighter: #6ec2f740 !important;
    --tertiary-lighter: #a686fc40 !important;
    --danger-lighter: #ff727640 !important;
    --warning-lighter: #efcb6840 !important;
  }
}
html.light {
  .mochiCustom {
    --primary: #7adc7a !important;
    --primary-lighter: #7adc7a40 !important;
    --background: var(--light-bg) !important;
    --mainfont-color: var(--dark-3) !important;
    --input-box: var(--light-e) !important;
    --input-box-hover: var(--light-d) !important;
    --menu-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2) !important;
  }
}
html.dark {
  .mochiCustom {
    --primary: #9bfdcc !important;
    --primary-lighter: #9bfdcc40 !important;
    --background: var(--dark-1) !important;
    --mainfont-color: var(--light-d) !important;
    --input-box: var(--dark-2) !important;
    --input-box-hover: var(--dark-3) !important;
    --menu-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.5) !important;
    ::placeholder {
      color: var(--dark-8) !important;
    }
  }
}
.mochiCustom {
  font-family: var(--mainfont) !important;
  color: var(--mainfont-color) !important;
}`}
        </CodeBlock>
      </motion.section>
      <motion.section
        className='about'
        id='example-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='example'>
          Example
        </SubHeading>
        <p className={styles.description}>
          Here is an example of how you can use the components in your project.
          I have used Formik to handle the form state. Please see the code below
          the form for more details.
        </p>
        <Form />

        <CodeBlock language='javascript' Language='JSX'>
          {`import React from 'react';
import {
  Input,
  DatePicker,
  Button,
  DropDown,
  CheckBoxGroup,
} from 'mochi-ui';
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

`}
        </CodeBlock>
      </motion.section>
      <div className={styles.separator}></div>
      <motion.section
        className='about'
        id='conclude-section'
        variants={inView}
        initial='hidden'
        whileInView='enter'
        viewport={{ once: true }}
      >
        <SubHeading left={true} anchor='conclusion'>
          Conclusion
        </SubHeading>
        <p className={styles.description}>
          I hope you found this library useful. If you have any suggestions or
          feedback, please feel free to contact me. You can reach out to me by
          filling the contact form at{' '}
          <Link href='https://hasathcharu.com' target='_blank'>
            hasathcharu.com.
          </Link>
          Thank you for reading.
        </p>
      </motion.section>
    </div>
  );
}
