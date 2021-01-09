import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const isFlag1: boolean = true;
  const isFlag2: boolean = false;

  const num1: number = 10;
  const num2: number = -10;

  const str1: string = 'aaa';

  let temp: string[] = ['adf', 'kdk', 'iku'];
  let temp2: Array<string> = ['adf', 'kdk', 'iku'];

  let taple: [string, number] = ['sakuragi', 1125];

  let profile1: any = 123456;
  let profile2: any = 'test';
  let profile3: any = false;

  const test = (): void => {
  };

  const test1 = (): null => {
    return null
  };
  const test2 = (): undefined => {
    return undefined
  };

  // const error = (number: string): never => {
  //   throw new Error();
  // };
  // console.log(error('hello'));

  let object1: object = { id: 1, name: 'sakuragi' }
  let object2: {
    id: number;
    name: string;
  } = { id: 1, name: 'sakuragi' };

  type TestType = {
    id: number;
    name: string;
    age: number;
  }

  let object3: TestType = { id: 1, name: 'sakuragi', age: 20 }
  let object4: { id: number, name: string } = { id: 1, name: 'sakuragi' };

  interface ObjectInterface {
    id: number;
    name: string;
  }

  let object5: ObjectInterface = { id: 1, name: 'sakuragi' };

  const kansu = (): number => 43;

  let numberAny: any = kansu();
  let numberUnkown: unknown = kansu();

  let sum1 = 10 + numberAny;
  //let sum2 = 10 + numberUnkown;

  type Pitcher1 = {
    throwingSpeed: number;
  };
  type Batter1 = {
    battingAverage: number;
  };

  type TwoWayPlayer = Pitcher1 & Batter1;

  let maaya: TwoWayPlayer = {
    throwingSpeed: 154,
    battingAverage: 3.65
  };

  let name: string | number = 'sakuragi'
  name = 100
  //name = false

  let nitiyoubi: '日' = '日';
  let yes: true = true;
  let week: '日' | '月' | '火' | '水' | '木' | '金' | '土' | '日' = '日';

  enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    November,
    December,
  }

  console.log(Month.April);







  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
