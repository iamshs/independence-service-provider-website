import React from 'react';

const Blogs = () => {
    return (
        <div className='display-fluid p-4'>
           <h2 className='fw-bold text-primary'>#1 Difference between Authorization and Authentication</h2>
           <p className='fs-5'>In simple terms  <span className='fw-bolder'>Authentication</span> is the way of verifying who is the user.On the other hand <span className='fw-bolder'>Authorization</span> is the process of verifying what they have access to.Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. <span className='fw-bolder'>Authentication Example:</span>Employees in a company are required to authenticate through the network before accessing their company email.  <span className='fw-bolder'>Authorization Example:</span> After an employee successfully authenticates, the system determines what information the employees are allowed to access.Usernames and passwords are the most common factors. If a user enters the correct data, the system assumes the identity is valid and grants access. </p>

           <h2 className='fw-bold text-primary'>##2 Why are you using firebase? What other options do you have to implement authentication?</h2>

           <p className="fs-5">Google Firebase is a platform that now offers active backend as a service  for building dynamic web and mobile apps.Firebase is a less technical and time-saving option to writing full-fledged backend code for dynamic apps.As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.Firebase is a good choice if you want to deploy a working product on the cloud rapidly. Plus, as mentioned, you might want to try it out if you need a backend but don't have a backend development background. <br />
           There are several authentication options available to authenticate users and provide access to resources.Such as,
           <ul>
               <li> Token Authentication</li>
               <li> Standard Authentication</li>
               <li> Multi-Factor Authentication (MFA)</li>
               <li>Passwordless Authentication</li>
           </ul>
            </p>
        </div>
    );
};

export default Blogs;