import React, { useEffect } from 'react';
import { Buttons } from '../../../../components/Buttons';
import { Icon } from '../../../../components/icons/Icon';
import { Input } from '../../../../components/Input';

export const MyProfile = () => {
 return (
  <div className="profile-info__wrap">
   <div className="profile-info__wrap--head df">
    <div className="profile-info__head--title">
     <h3>My profile</h3>
    </div>
    <div className="profile-info__head--icon df">
     <Icon icon="delete" className="delete--icon" />
     <span className="profile-info__head--icon__text">Delete account</span>
    </div>
   </div>
   <div className="profile-info__body">
    <form action="#" className="profile-info__form">
     <table className="profile-info__table--box">
      <tbody>
       <tr>
        <td>
         <label
          htmlFor="firstname"
          className="profile-info--field__name"
         >
          First Name
         </label>
         <Input
          type="text"
          clasname="profile-info--field"
          id="firstname"
         />
        </td>
        <td>
         <label
          htmlFor="lastname"
          className="profile-info--field__name"
         >
          Last Name
         </label>

         <Input
          type="text"
          clasname="profile-info--field"
          id="lastname"
         />
        </td>
       </tr>
       <tr>
        <td>
         <label htmlFor="email" className="profile-info--field__name">
          email
         </label>
         <Input
          type="email"
          clasname="profile-info--field"
          id="email"
         />
        </td>
        <td>
         <label htmlFor="phone" className="profile-info--field__name">
          phone
         </label>

         <Input
          type="phone"
          clasname="profile-info--field"
          id="phone"
         />
        </td>
       </tr>
       <tr>
        <td>
         <label
          htmlFor="password"
          className="profile-info--field__name"
         >
          password
         </label>
         <Input
          type="password"
          clasname="profile-info--field"
          id="password"
         />
        </td>
        <td>
         <label
          htmlFor="confirmPassword"
          className="profile-info--field__name"
         >
          confirm password
         </label>

         <Input
          type="password"
          clasname="profile-info--field"
          id="confirmPassword"
         />
        </td>
       </tr>
       <tr>
        <td>
         <label
          htmlFor="country"
          className="profile-info--field__name"
         >
          password
         </label>
         <Input
          type="text"
          clasname="profile-info--field"
          id="country"
         />
        </td>
        <td>
         <label htmlFor="city" className="profile-info--field__name">
          city
         </label>

         <Input type="city" clasname="profile-info--field" id="city" />
        </td>
       </tr>
       <tr>
        <td>
         <label
          htmlFor="address"
          className="profile-info--field__name"
         >
          address
         </label>
         <Input
          type="text"
          clasname="profile-info--field"
          id="address"
         />
        </td>
        <td>
         <label
          htmlFor="zipCode"
          className="profile-info--field__name"
         >
          zip code
         </label>

         <Input
          type="text"
          clasname="profile-info--field"
          id="zipCode"
         />
        </td>
       </tr>
      </tbody>
     </table>
     <Buttons
      type="submit"
      clasname="profile-info--btn"
      text="Save changes"
     />
    </form>
   </div>
  </div>
 );
};
