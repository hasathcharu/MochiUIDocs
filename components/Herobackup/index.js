import React from 'react';
import styles from './hero.module.scss';

import {
  Input,
  Button,
  DatePicker,
  TimePicker,
  DropDown,
} from 'soft-inputs/dist/';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
function dummyWait() {}
export default function About() {
  return <div></div>;
}
// return (
//   <>
//     <div></div>
//     <div className={styles.background}>
//       <div>
//         <Input
//           name='fname'
//           domName='Name'
//           // value={name}
//           placeholder='enter your first name'
//           onChange={(e) => {
//             // setName(e.target.value);
//           }}
//         />
//         <Input
//           name='lname'
//           domName='Last Name'
//           // value={name}
//           placeholder='enter your last name'
//           onChange={(e) => {
//             // setName(e.target.value);
//           }}
//           error='Please enter your last name'
//         />
//         <Input
//           name='password'
//           domName='Password'
//           // value={name}
//           type='password'
//           placeholder='choose a password'
//           onChange={(e) => {
//             // setName(e.target.value);
//           }}
//         />
//       </div>
//       <div>
//         <DatePicker domName='Your Birthday' startYear={1700} />
//         <DatePicker date={false} domName='Your Birth Month' />
//         <DropDown
//           // value={dropDown}
//           onChange={(i) => setDropDown(i)}
//           values={[
//             {
//               key: '1',
//               label: 'One',
//             },
//             {
//               key: '2',
//               label: 'Two',
//             },
//             {
//               key: '3',
//               label: 'Three',
//             },
//             {
//               key: '4',
//               label: 'Four',
//             },
//             {
//               key: '5',
//               label: 'Five',
//             },
//             {
//               key: '6',
//               label: 'Six',
//             },
//           ]}
//         />
//         <DatePicker
//           time={true}
//           domName='Your Birthdate and Time'
//           // value={date}
//           // onChange={setDate}
//         />
//         <TimePicker domName='Arrival Time' />
//         {/* <div className={'buttons'}>
//           <div>
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='primary'
//               iconRight={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='secondary'
//               iconRight={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='tertiary'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='warning'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='danger'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//           </div>
//           <div>
//             <Button onClick={dummyWait} size='large' color='primary' />
//             <Button onClick={dummyWait} size='large' color='secondary' />
//             <Button onClick={dummyWait} size='large' color='tertiary' />
//             <Button onClick={dummyWait} size='large' color='warning' />
//             <Button onClick={dummyWait} size='large' color='danger' />
//           </div>
//           <div>
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='primary'
//               shaded={true}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='secondary'
//               shaded={true}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='tertiary'
//               shaded={true}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='warning'
//               shaded={true}
//             />
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='danger'
//               shaded={true}
//             />
//           </div>
//           <div>
//             <Button onClick={dummyWait} size='medium' color='primary' />
//             <Button onClick={dummyWait} size='medium' color='secondary' />
//             <Button onClick={dummyWait} size='medium' color='tertiary' />
//             <Button onClick={dummyWait} size='medium' color='warning' />
//             <Button onClick={dummyWait} size='medium' color='danger' />
//           </div>
//           <div>
//             <Button onClick={dummyWait} size='small' color='primary' />
//             <Button onClick={dummyWait} size='small' color='secondary' />
//             <Button onClick={dummyWait} size='small' color='tertiary' />
//             <Button onClick={dummyWait} size='small' color='warning' />
//             <Button onClick={dummyWait} size='small' color='danger' />
//           </div>
//           <div>
//             <Button
//               onClick={dummyWait}
//               size='icon'
//               color='primary'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='icon'
//               color='secondary'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='icon'
//               color='tertiary'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='icon'
//               color='warning'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//             <Button
//               onClick={dummyWait}
//               size='icon'
//               color='danger'
//               icon={<FontAwesomeIcon icon={faComputerMouse} />}
//             />
//           </div>
//           <div>
//             <Button
//               onClick={dummyWait}
//               size='large'
//               color='primary'
//               iconRight={<FontAwesomeIcon icon={faComputerMouse} />}
//               fullWidth={true}
//             />
//           </div> */}
//         {/* </div> */}
//       </div>
//     </div>
//   </>
// );
