import React, { Component } from "react";
import { Col, Thumbnail } from "react-bootstrap";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    
  }
  componentDidMount() {
    this.setState({
      items : this.props

    })
  }
  render() {
    
    const itemsList = this.props.items.slice(5,13).map(item => {
      return (
       
        
        <div key={item.title } >
       
        <Col  xs={2} md={2}>
        <div className="img" >
          
        <Thumbnail  style={{ float:'left' , width: '120px', height:'100px'}}
            responsive="true"
             src={item.images["Poster Art"].url} 
            alt="102x100"
          >
          </Thumbnail>
               
         </div>      
         <p className="item-title"> {item.title}</p>   
         </Col>
          
      </div>
     
      );
    });
   

    return <div > {itemsList}</div>;
  }
}

export default Movies;
