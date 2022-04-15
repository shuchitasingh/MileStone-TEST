import React,{useState} from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {


const[content,setContent]=useState("hello newton")
const[fontSize,setFontSize]=useState(10)
const [padding,setPadding]=useState(5)


  return (
    <div id="main">
      <div>
<input  type='text'  id="contentInput" value={content} onChange={(e)=>setContent(e.target.value)} /><br/>
<input type='number' id="fontSizeInput" value={fontSize} onChange={(e)=>setFontSize(e.target.value)} /><br/>
<input type='number' id="paddingInput" value={padding} onChange={(e)=>setPadding(e.target.value)}  />

        {/* add input elememnts inside here */}
      </div>
 <Preview  content={content} padding={padding+'px'} fontSize={fontSize+'px'}  />
 {/* render Preview component here */}
 
    </div>
  )
}


export default App;