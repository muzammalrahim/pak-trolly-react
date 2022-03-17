 import React from 'react'
 import {Modal, Button} from 'react-bootstrap'
//  import Button from 'react-bootstrap'
 
class ViewModal extends React.Component {
    constructor()
    {
        super()
        this.state={
            show:false
        }
    }
    handleModal()
    {
        this.setState({show:!this.state.show})
    }
    
   render() {
     return (
       <div>
           <div>
              <Button variant="primary" onClick={()=>{this.handleModal()}}>
        Launch demo modal
      </Button>
              <Modal show={this.state.show} onHide={()=>{this.handleModal()}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body onHide={()=>{this.handleModal()}}>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=>{this.handleModal()}}>
        close
      </Button>
        </Modal.Footer>
      </Modal>
          </div>
       </div>
     )
   }
 }
 
 export default ViewModal;


//  import { render } from '@testing-library/react'
// import React from 'react'
// import Modal from 'react-bootstrap/Modal'


// class ViewModal extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={
//             show:false
//         }
//     }
// };
//   render() {
//       return(
//           <div>
//               <Button variant="primary" onClick={()=>{this.handleModal()}}>
//         Launch demo modal
//       </Button>
//               <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//           </div>
//       )
//   }

//   export default ViewModal