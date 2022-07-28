

import './App.css';
  const grand=[{
    name:"FREE",
    dollar:"$0",
    user:"✔️Single",
   storage:"✔️5GB",
   projects:"✔️Unlimited Public Projects",
   access:"✔️Community Access",
  privates :"❌ Unlimited Private Projects",
  support:"❌Dedicated Phone Support",
  subdomain :"❌Free Subdomain",
  statusReports:"❌Monthly Status Reports",
},
{name:"PLUS",
dollar:"$9",
user:"✔️5 Users",
storage:"✔️50GB Storage",
projects :"✔️Unlimited Public Projects",
access:"✔️Community Access",
privates :"✔️ Unlimited Private Projects",
support:"✔️Dedicated Phone Support",
subdomain :"✔️Free Subdomain",
statusReports:"❌Monthly Status Reports",

},{name:"PRO",
dollar:"$49",
user:"✔️Unlimited Users",
storage:"✔️150GB Storage",
projects :"✔️Unlimited Public Projects",
access:"✔️Community Access",
privates :"✔️ Unlimited Private Projects",
support:"✔️Dedicated Phone Support",
subdomain :"✔️Unlimited Free Subdomain",
statusReports:"✔️Monthly Status Reports",
}]

 

function App() {
  return (
    <div className="app">{grand.map((oops)=>(
      <Data name={oops.name} dollar={oops.dollar} user={oops.user} storage={oops.storage} projects={oops.projects} access={oops.access} 
      privates={oops.privates} support={oops.support} subdomain={oops.subdomain} statusReports={oops.statusReports}/>
    ))}
   
    </div>
  );
}

function Data({name,dollar,user,storage,projects,access,privates,support,subdomain,statusReports}){
  return(
    <div className="you">
      <div>
        <h3 className="name">{name}</h3>
      </div>
      <div>
        <h2 className='dollar'>{dollar}<span className='month'>/month</span></h2>
      </div>
     
      
      <div> <h3>{user}</h3></div>
      <div> <h3>{storage}</h3></div>
      <div> <h3>{projects}</h3></div>
      <div> <h3>{access}</h3></div>
      <div> <h3>{privates}</h3></div>
      <div> <h3>{support}</h3></div>
      <div> <h3>{subdomain}</h3></div>
      <div> <h3>{statusReports}</h3></div>
      <div>
        <button className='button'>button</button>
      </div>


   
    </div>
  )
}

export default App;
