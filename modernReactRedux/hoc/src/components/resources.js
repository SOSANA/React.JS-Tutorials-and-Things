import React from 'react';

export default () => {
  return (
    <div>
      Super Special Secret Recipe
      <ul>
        <li>1 Cup Sugar</li>
        <li>1 Cup Pepper</li>
        <li>1 Cup Salt</li>
      </ul>
    </div>
  );
};


/**
 * if we wanted every instance of resources to be authenticated, here is an alternative
 * and we would remove the requireAuth in our routes.js or src/index
   const Resources = () => {
   return (
     <div>
       Super Special Secret Recipe
       <ul>
         <li>1 Cup Sugar</li>
         <li>1 Cup Pepper</li>
         <li>1 Cup Salt</li>
       </ul>
     </div>
   );
 };

 export default requireAuth(Resources);
 */
