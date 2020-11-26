import React from 'react';
import CustomizedSteppers from './componentes/Register/Addtodo';
import SearchAppBar from './componentes/Register/Header'

const App: React.FC = () => {
 
  return (<>
         <SearchAppBar/>  
        <div className="container">
       <CustomizedSteppers/>

          </div>
          </>

  );
}

export default App;
