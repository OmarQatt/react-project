import React, { useState } from 'react';
import HornedBeast from "./HornedBeast";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show:false,
       
    }
   
  }
  openModal() {
    this.setState( prevState => (
    {show: !prevState.show}))
  }
  closeModal(e) {
    
      this.setState({show: false})
    
  }
   
        render() {
          
        return(
            <>
            <Button variant="primary" onClick={() => this.openModal()}>
              More Detail
            </Button>
      
            <Modal show={this.state.show} onHide={this.state.showset} >
              <Modal.Header closeButton onClick={(e) => this.closeModal(e)}>
              <img src={this.props.image_url} width="100%"/>
              
              </Modal.Header>
              <Modal.Title> 
              {this.props.title}
               </Modal.Title>
              <Modal.Body>
               {this.props.description}
               {this.props.keywords}
               {this.props.hoorns}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={(e) => this.closeModal(e)}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            
          </>
        )
      
        } 
      }   
      export default SelectedBeast; 