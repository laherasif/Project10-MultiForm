import React from 'react';
import { Success } from './componentes/Forms/FormSuccess';
import CustomizedSteppers from './componentes/Register/Addtodo';
import SearchAppBar from './componentes/Register/Header'

const App: React.FC = () => {
 
  return (<>
         <SearchAppBar/>  
        <div className="container">
       <CustomizedSteppers/>

       {/* <Success/> */}
          </div>
          </>

  );
}

export default App;
