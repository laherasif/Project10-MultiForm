import React from 'react'
import './style.css'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

interface props  {
    handleReset : () => void 
}

export const Success:React.FC<props> = ({ handleReset }) => {
    return(
        <div id="form"  style={{marginTop:'5rem'}}>
          <Typography style={{textAlign:'center' , fontSize:'20px'}} >
              Success ! Your Sign Up Form are Successfully Submited 
          </Typography>
            <div style={{ textAlign:'center' , padding:'10px'}}>

           <button onClick={handleReset} className="btn btn-success" style={{maxWidth:'300px'}}>Reset</button>
            </div>
        </div>
    )
}