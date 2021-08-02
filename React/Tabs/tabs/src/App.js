
import './App.css';
import Tabs from './components/Tabs';
import OtherTabs from './components/OtherTabs';
import DisplayContant from './components/DisplayContant';
import React,{useState} from "react";

function App() {
  const [tabContant, setTabContant] = useState("");
  const displayContant = (cont) =>{
    setTabContant(cont);
  }
  return (
    <div className="App">
      <Tabs items={[{label:"Tab1",Contant:"This is th 1 tab content"},{label:"Tab2",Contant:"This is th 2 tab content"},{label:"Tab3",Contant:"This is th 3 tab content"}]}/>
      <OtherTabs selectedContant={displayContant} items={[{label:"Tab1",Contant:"This is th 1 tab content"},{label:"Tab2",Contant:"This is th 2 tab content"},{label:"Tab3",Contant:"This is th 3 tab content"}]}/>
      <DisplayContant contant={tabContant}/>
    </div>
  );
}

export default App;
