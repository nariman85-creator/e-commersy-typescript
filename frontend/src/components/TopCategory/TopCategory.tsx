import React from 'react'
import { Link } from 'react-router-dom';
import './TopCategory.scss';
import women from '../../assets/images/category/image (6).png';
import men from '../../assets/images/category/image (7).png';
import kids from '../../assets/images/category/image (8).png';

export const TopCategory = () => {
 return (
   <section className="top-category">
     <div className="container top-category__container">
       <ul className="top-category-list list--reset df">
         <li className="category-list__item">
           <Link to={"#"} className="link--reset">
             <article className="category-card">
               <div className="card-body">
                 <div className="card-img-top">
                   <img src={women} alt="" className="card-img img--reset" />
                 </div>
               </div>
               <div className="card-bottom">
                 <span className="card-title">Women’s</span>
               </div>
             </article>
           </Link>
         </li>
         <li className="category-list__item">
           <Link to={"#"} className="link--reset">
             {" "}
             <article className="category-card">
               <div className="card-body">
                 <div className="card-img-top">
                   <img src={men} alt="" className="card-img img--reset" />
                 </div>
               </div>
               <div className="card-bottom">
                 <span className="card-title">Men’s</span>
               </div>
             </article>
           </Link>
         </li>
         <li className="category-list__item">
           <Link to={"#"} className="link--reset">
             {" "}
             <article className="category-card">
               <div className="card-body">
                 <div className="card-img-top">
                   <img src={kids} alt="" className="card-img img--reset" />
                 </div>
               </div>
               <div className="card-bottom">
                 <span className="card-title">Kids’s</span>
               </div>
             </article>
           </Link>
         </li>
       </ul>
     </div>
   </section>
 );
}
