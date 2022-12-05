import { Schema, model ,SchemaDefinitionProperty} from 'mongoose';
interface IAddress {
 user_id: SchemaDefinitionProperty<string>;
  city: string;
  zipCode: string;
  country: string;
  street: string;
  phone:string
}
const AddressSchema = new Schema<IAddress>({
  user_id: { type: Schema.Types.ObjectId, ref: "user" },
  city: String,
  zipCode: String,
  country: String,
  street:String,
  phone:String,

});

export const Address = model('Address', AddressSchema);