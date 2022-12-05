import React from 'react';
import './Brands.scss';

export const Brands:React.FC = () => {
 return (
   <section className="section brands-section brands">
     <div className="container brands-container">
       <div className="brands-content">
         <ul className="list list--reset brands-list">
           <li className="brands-list__item">
             <span className="brands--icon bg--image sentinal"></span>
           </li>
           <li className="brands-list__item">
             {" "}
             <span className="brands--icon bg--image del-mar"></span>
           </li>
           <li className="brands-list__item">
             {" "}
             <span className="brands--icon bg--image for-sale"></span>
           </li>
           <li className="brands-list__item">
             {" "}
             <span className="brands--icon bg--image higher"></span>
           </li>
           <li className="brands-list__item">
             {" "}
             <span className="brands--icon bg--image indepth"></span>
           </li>
           <li className="brands-list__item">
             {" "}
             <span className="brands--icon bg--image health"></span>
           </li>
         </ul>
       </div>
     </div>
   </section>
 );
}
