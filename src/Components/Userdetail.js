import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row,Input,Button   } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;
const { Search } = Input;


function Userdetail(props){
console.log(props.location.state);
const job = props.location.state.job;
    return(
        <>
      <Link to="/"><button>Back Home</button></Link>

      <Card
    hoverable
    style={{ width: 240 , marign: 10}}
    cover={<img alt="example" style={{ height: 240 }} src={job.Image} />}
    key={job.id}
    
  >
   <Meta title={job.name} /> 
  </Card>  
  <Link to="/">
 <Button onClick={()=>props.handlerejectlist(job)} style={{ marign: 10}}>Reject</Button>
 </Link>
 <Link to="/">
 <Button onClick={()=>props.handleshortlist(job)} style={{ marign: 10}}>ShortList</Button>
 </Link>
 
 

        </>
    )
}
export default Userdetail;