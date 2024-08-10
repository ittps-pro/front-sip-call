import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function PhoneApp($config) {}

function App() {
  const [call, setCall] = useState(0);

  if (call !== null) {
    setCall(false);
  } else {
    setCall(true);
  }

  return (
    <>
      <form name={'phone'}>
        <input name={'number'} />
        <button type="submit">Call</button>
      </form>
    </>
  );
}

export default App;
