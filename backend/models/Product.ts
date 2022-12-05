import { model, Schema, SchemaDefinitionProperty } from "mongoose";
export interface IProduct {
  sku: string;
  name: string;
  slug: string;
  category: SchemaDefinitionProperty<string> | string;
  comments: SchemaDefinitionProperty<string> | string;
  sale: {
    is: boolean;
    current: { type: Number; default: 0 };
  };
  manufact_details: {
    desc: string;
    feature: string;
    property: { specificity: string; charcter: string; parametr: string };
    care: {
      wash: string;
      ironing: string;
      laundry_detergent: string;
      tumble_dry: string;
    };
  };
  product_details: {
    price: number;
    size: string[];
    colors: string[];
    currency: string;
    gender: SchemaDefinitionProperty<string>;
    quantity: number;
    brand: string;

    imageUrl: SchemaDefinitionProperty<string>;
    title: string;
    description: string;
    rating: SchemaDefinitionProperty<string> | undefined;
    material: SchemaDefinitionProperty<string> | undefined;
    createdAt:Date,
  };
}

const ProductSchema = new Schema<IProduct>(
  {
    slug: { type: String },
    sku: String,
    comments: { type: Schema.Types.ObjectId, ref: "comments" },
    category: { type: Schema.Types.ObjectId, ref: "category" },
    sale: {
      is: Boolean,
      current: { type: Number, default: 0 },
    },
    name: {
      type: String,
      required: true,
    },
    manufact_details: {
      desc: String,
      feature: String,
      property: { specificity: String, charcter: String, parametr: String },
      care: {
        wash: String,
        ironing: String,
        laundry_detergent: String,
        tumble_dry: String,
      },
    },
    product_details: {
      price: Number,
      size: [{ type: String }],
      colors: [{ type: String }],
      currency: String,
      gender: { type: Schema.Types.ObjectId, ref: "gender" },
      quantity: Number,
      imageUrl: { type: Schema.Types.ObjectId, ref: "upload" },
      title: String,
      description: String,
      rating: { type: Schema.Types.ObjectId, ref: "rating" },
      brand: { type: String },
      material: { type: Schema.Types.ObjectId, ref: "material" },
      sale: { type: Number, default: 0 },
      createdAt:Date,
    },
  },
  {
    timestamps: true,
  }
);
ProductSchema.pre("save", function (next) {
  this.slug = this.name + "-" + new Date().getDate();
  this.product_details.createdAt=new Date()
  next();
});

export const Product = model<IProduct>("product", ProductSchema);
