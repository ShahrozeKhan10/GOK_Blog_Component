import { useState ,useEffect} from 'react';
import Inner from './Components/Inner'


function App() {
  const [myObjects, setMyObject] = useState({});
  useEffect(() => {
    fetch('http://localhost:5000/content')
      .then((response) => response.json())
      .then((data) => {
        setMyObject(data);
      })
  }, []);
  
 
  return (
    <div className="bg-[#F8F8F8] px-[120px] py-[30px]">
      <Inner myObject={myObjects}/>
    </div>
  );
}

export default App;
