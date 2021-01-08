import React,{ useState, useEffect } from 'react';
import Details from './Components/Details';
import Userdetail from './Components/Userdetail';
import Reject from './Components/Reject';
import Shortlist from './Components/Shortlist';
import { Card, Col, Row,Divider  } from 'antd';
import {  Route, Switch } from 'react-router-dom';

function App() {
  const [rejectedList,setrejected] = useState([]);
  const [shortlisted,setshortlisted] = useState([]);

  const shortlist = (value) =>{
    let shortlistedList = [...shortlisted, value];
setshortlisted(shortlistedList);
  }
  const rejectlist = (value) =>{
   
    let rejectedList1 = [...rejectedList, value]
    setrejected(rejectedList1);
      }
  return (
    <div>     
     <Route exact path  ="/" component = {Details}></Route>
     <Route path  ="/:id"  render={(props) => <Userdetail  {...props} handleshortlist={shortlist} handlerejectlist={rejectlist}/>}></Route> 
     <Route path  ="/rejected"  render={(props) => <Reject  {...props} rejected={rejectedList}/>} ></Route> 
     <Route path  ="/shortlisted"  render={(props) => <Shortlist  {...props} shortlisted={shortlisted} />}></Route> 
    </div>
  );
}

export default App;
