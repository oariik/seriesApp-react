import React, { Component } from "react";
import { Col, Thumbnail } from "react-bootstrap";

class Series extends Component {
  
  componentDidMount() {
    this.setState({
      items: this.props
    });
  }
  
  render() {
      //console.log(this.props)
    
    const itemsList = this.props.items.slice(0,14).map(item => {
     
      return (
        
        //Bu kısım render ediliyor 
        <div key={item.title} >
       
          <Col  xs={2} md={2}>
          <div  className="img">
            
          <Thumbnail  style={{  width: '130px', height:'100px'}}
              responsive="true"
               src={item.images["Poster Art"].url} 
              alt="102x100"
            >
            
            </Thumbnail>
           
           </div>
           <p  className="item-title"> {item.title}</p>

           </Col>
            
        </div>
        // Bu render ediliyor
      );
    });
 
    return <div > {itemsList}</div>;
  }
}

export default Series;
