import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1> Custome App !</h1>
    </div>
  )
}
//here we are passing the ojectnot function
//internally render has some properties to create this types of tree using the code
//it cannot understand this format in last time we create this format using the create 
//element method
// const ReactElement ={
//   type : 'a',
//   props: {
//      href: "https://google.com",
//      target:"_blank"
//   },
//   children : "Click me to visit Google" 
//  }

 //it will work

const anotherElement = (
  <a href='https://google.com' target='_blank'>
     visit me to redirect to google</a>
)

//lets see how to create element using react from above trail
const anothername="with Atharva"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com' ,target:'_blank'},
  'click me to visit google',
    anothername
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
 
    reactElement
  // <App/>  
  
)



/*flow of creating elemt--
------important
first pass the type -> directly
pass the property using -> {} 
then pass the children directlt ->'....'
then we are passing the variables dirctly without evaluating expressions -> anothername

-----important to understand about the evaluating expression
we are not possible to passed the if etc because at the end all are converted into object 
and object cannot contain any if else loops
*/
