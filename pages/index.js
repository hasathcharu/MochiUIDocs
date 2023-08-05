import React from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/blog.module.scss';
import { SubHeading, PropHeading, SubHeading2 } from '../components/Headings/';
import { Button, Input } from 'mochi-ui';
import {
  faDownload,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import CodeBlock from '../components/CodeBlock';

export default function Home() {
  const [name, setName] = React.useState('');
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
        <span>Updated on 3rd Aug 2023</span>
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
          npm i soft-inputs
        </CodeBlock>
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
        <SubHeading2 left={true} anchor='text-input-props'>
          Button Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
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
        <SubHeading2 left={true} anchor='text-input-props'>
          Input Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
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
        <SubHeading2 left={true} anchor='text-input-props'>
          DatePicker Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
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
        <SubHeading2 left={true} anchor='text-input-props'>
          TimePicker Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
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
        <SubHeading2 left={true} anchor='text-input-props'>
          DropDown Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
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
        <SubHeading left={true} anchor='checkbox'>
          CheckBox
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
        <SubHeading2 left={true} anchor='text-input-props'>
          CheckBox Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
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
        <SubHeading left={true} anchor='radio'>
          Radio
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
        <SubHeading2 left={true} anchor='text-input-props'>
          Radio Props
        </SubHeading2>
        <PropHeading title='domName' type='string' anchor='textinput-domName' />
        <p className={styles.description}>
          This is the name that will be displayed on the label.
        </p>
        <PropHeading title='name' type='string' anchor='textinput-name' />
        <p className={styles.description}>
          This is the name that will be used to identify the input.
        </p>
        <PropHeading title='value' type='string' anchor='textinput-value' />
        <p className={styles.description}>
          This is the value of the input. A react state.
        </p>
        <PropHeading
          title='onChange'
          type='function'
          anchor='textinput-onChange'
        />
        <p className={styles.description}>
          This is the function that will be called when the value of the input
          changes.
        </p>
        <PropHeading
          title='placeholder'
          type='string'
          anchor='textinput-placeholder'
        />
        <p className={styles.description}>
          This is the placeholder text that will be displayed when the input is
          empty.
        </p>
        <PropHeading title='error' type='string' anchor='textinput-error' />
        <p className={styles.description}>
          This is the error message that will be displayed when the input is
          invalid.
        </p>
        <PropHeading
          title='touched'
          type='boolean'
          anchor='textinput-touched'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          touched.
        </p>
        <PropHeading
          title='setTouched'
          type='boolean'
          anchor='textinput-setTouched'
        />
        <p className={styles.description}>
          This is a function that will be called when the input is touched.
        </p>
        <PropHeading
          title='disabled'
          type='boolean'
          anchor='textinput-disabled'
        />
        <p className={styles.description}>
          This is a boolean value that will be set to true when the input is
          disabled.
        </p>
        <div className={styles.separator}></div>
      </motion.section>
    </div>
  );
}
