import { Document, model, Schema } from "mongoose";

export interface IShortURL {
  originalUrl: string;
  createdAt: Date;
  code: string;
  id: string;
}

const shortURLSchema = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },

  code: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },

  id: {
    type: String,
    required: true,
    unique: true,
  },
});

export const shortURLModel = model<IShortURL & Document>(
  "ShortURLs",
  shortURLSchema,
);
