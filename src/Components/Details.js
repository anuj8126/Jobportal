import React,{ useState, useEffect } from 'react';
import { Card, Col, Row,Input, Button   } from 'antd';
import 'antd/dist/antd.css';
import { Link ,withRouter } from 'react-router-dom';
import Userdetail from './Userdetail';

const { Meta } = Card;
const { Search } = Input;

function Details (){
 const [jobData , setjobData] = useState("");
 const[data,setData]=useState("");
 const[clickedData,setClickedData] = useState("");
  const API_URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
  
  useEffect(() => {
      loadData();  
    },[]);
	
  //function to make API Call
  const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      if(data){
        setjobData(data);
        setData(data);
        
      }
    }
	
	 //SearchFunction
    const searchfunc = (e)=>{
      const results = data.filter(name =>
        name.name.toLowerCase().includes(e.target.value)
      );
      setjobData(results);
      }
    
   const onclickuser = (e,index)=>{
       debugger;
       setClickedData(jobData[index]);
   } 
	return(
	  <>
  <Search
      placeholder="Search By Name"
      onChange={ e => searchfunc(e)}
      style={{ width: 500 , margin:40}}
    />

<Link to="/rejected">
    <Button  style={{ marign: 10}}>Rejeted List</Button>
    </Link>
<Link to="/shortlisted">
    <Button style={{ marign: 10}}>Shortlisted List</Button>
    </Link>


  { jobData.length>0 &&
    <div className="site-card-wrapper">
          <Row gutter={16}>
        { jobData.map((jobData,index)=>(
             <Link to={{ 
                pathname: `/${jobData.id}`, 
                state:{job:jobData} 
              }} >
  <Col className="gutter-row" span={6}>   
  
    <Card
    hoverable
    style={{ width: 240 , marign: 10}}
    cover={<img alt="example" style={{ height: 240 }} src={jobData.Image} />}
    key={jobData.id}
    onClick={(e)=>{onclickuser(e,index)}}
  >
   <Meta title={jobData.name} /> 
  </Card>  
 
  </Col>
 </Link>
))

    }
      </Row>
     
    </div>

}

   </>
	
	)

}
export default Details;