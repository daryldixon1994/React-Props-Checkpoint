import React from 'react';
import './App.css';
import NavigBar from './profil/NavigBar'
import ActionLink from './profil/ActionLink';
import 'bootstrap/dist/css/bootstrap.min.css';


 const App = () => {
  return (
    <div className="App">
      <NavigBar fullName="Mohamed Anouar Jabri"  />
      <ActionLink />
    </div>
  );
 };
export default App;