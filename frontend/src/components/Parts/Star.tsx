import React from 'react';
const starElem = "&#9733;"

export const Star:React.FC<{classname?:string,color?:string,count:number}> = ({classname,color,count}) => {
 return (
   <div className={`star--box ${classname}`}>
     {Array(count)
       .fill(starElem)
       .map((star, index) => (
         <i style={{ color: color }} key={index} className="star--img">
         </i>
       ))}
   </div>
 );
}
