import * as React from 'react';
import Group from './Components/GroupItems/Group';
import Main from './Components/Main/Main';
import { useAppDispatch, useAppSelector } from './redux/Store/store';

function App() {
  return (
    <div className='section'>
      <Group />
      <Main />
    </div>
  )
}



export default App;
