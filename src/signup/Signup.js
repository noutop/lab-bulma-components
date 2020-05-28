import React from "react";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/Formfield";
import CoolButton from "../coolbutton/Coolbutton";

const App = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <FormField label="Password" type="text" placeholder="Password" />
      <CoolButton className="is-rounded my-class" />  
    </div>
  );
};

export default App;