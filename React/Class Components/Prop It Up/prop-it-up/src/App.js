import logo from './logo.svg';
import './App.css';

import PersonCard from './components/MyNewComponent';
import Counter from './components/Counter';


function App() {
  return (
    <div>
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <Counter age={45}/>
      <PersonCard firstName="John" lastName="Smith" hairColor="Brown"/>
      <Counter age={88}/>
      <PersonCard firstName="Millard" lastName="Fillmore" hairColor="Brown"/>
      <Counter age={50}/>
      <PersonCard firstName="Maria" lastName="Smith" hairColor="Brown"/>
      <Counter age={62}/>
    </div>
  );
}

export default App;
