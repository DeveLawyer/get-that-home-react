import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateAccountForm from './CreateAccountForm'

const TypeSelector = ({ typeName, typeDescription, typeImg, onSelect }) => {
  const handleClick = () => {
    onSelect(typeName);
  }
  
  return (
    <div onClick={handleClick} role="button">{typeName}</div>
  )
}

const SignUpFlowSuccess = () => {
  return (
    <div>
      Success
    </div>
  )
}

const SignUpFlow = () => {
  const [type, setType] = React.useState("");

  // const handleTypeClick = (e) => {
  //   console.log(e);
  //   // setType()
  // }
  
  return (
    <Switch>
      <Route exact path="/signup">
        <TypeSelector typeName='HomeSeeker' onSelect={(type) => setType(type)} />
        <TypeSelector typeName='LandLord' />
      </Route>

      <Route exact path="/signup/form">
        <CreateAccountForm type={type} />
      </Route>

      <Route exact path="/signup/success">
        <SignUpFlowSuccess />
      </Route>
    </Switch>
  );
}

export default SignUpFlow
