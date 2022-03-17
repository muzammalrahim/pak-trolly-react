import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import { FaHeart, FaFacebookF, FaGooglePlusG } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './wishlist-modal.css'
//  import Button from 'react-bootstrap'

class WishlistModal extends React.Component {
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
          <div className='wl-modal'>
             
           <FaHeart onClick={()=>{this.handleModal()}}></FaHeart>
             <Modal show={this.state.show} onHide={()=>{this.handleModal()}}>
               
               <Modal.Header className='wl-header' closeButton>
                 {/* <Modal.Title>Modal heading</Modal.Title> */}
               </Modal.Header>
               <Modal.Body onHide={()=>{this.handleModal()}}>
                 <div className='wl-inner'>
                   {/* <WishlistModal/> */}
                   <h5>Welcome! Please <Link to='#'>Login</Link> to continue</h5>
                   <p>New member? <Link to='#'>Register here.</Link> </p>
                   <div className='wm-form'>
                        <input type='text' placeholder='Phone Number or Email'/>
                        <input type='text' placeholder='Password'/>
                    </div>
                    <div className='form-btn'>
                        <button type="button" class="add-trolley">LogIn</button>
                        <Link className='wl-fp' to='#'>forgot Password?</Link> 
                    </div>
                    <div className='clearfix'></div>
                    <p className='login-with'>Or login with</p>
                    <div className='social-login-btns'>
                        <button type="button" class="f-btn wm-btn">
                            <FaFacebookF/>
                            Facebook
                        </button>
                        <button type="button" class="g-btn wm-btn">
                            <FaGooglePlusG/>
                            Google
                        </button>
                    </div>
                 </div>
                 
               </Modal.Body>
               {/* <Modal.Footer>
               <Button variant="primary" onClick={()=>{this.handleModal()}}>
               close
             </Button>
               </Modal.Footer> */}
           </Modal>
         </div>
      </div>
    )
  }
}

export default WishlistModal ;


