import React from 'react';
import ReactDOM from 'react-dom/client';

import apps from "./Apps"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {apps.map(([AppComponent, title], index) => (
      <React.Fragment key={index}>
        <h5 style={{color: 'darkblue'}}>Arkusz: {title}</h5>
        <AppComponent />
        <hr style={{ borderTop: "double 10px" }} />
      </React.Fragment>
    ))}
  </>
); 

