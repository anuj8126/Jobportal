import React,{ useState, useEffect } from 'react';
import { Card, Col, Row,Input,Button   } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Search } = Input;


function Shortlist (props){
return(
    <>
    <Link to="/"><button>Back Home</button></Link>
    <Row gutter={16}>
    { props.shortlisted.map((item,index)=>(
        
<Col className="gutter-row" span={6}>   

<Card
hoverable
style={{ width: 240 , marign: 10}}
cover={<img alt="example" style={{ height: 240 }} src={item.Image} />}
key={item.id}
>
<Meta title={item.name} /> 
</Card>  

</Col>

))

}
  </Row>
  </>
)
}

export default Shortlist;