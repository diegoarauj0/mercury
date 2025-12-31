import { shortURLModel, type IShortURL } from "../models/shortURL.model.js";
import { ShortURLEntity } from "../../domain/entities/shortURL.entity.js";

export const shortURLMapper = {
  documentToEntity: (document: IShortURL) => {
    return new ShortURLEntity({
      originalUrl: document.originalUrl,
      createdAt: document.createdAt,
      code: document.code,
      id: document.id,
    });
  },
  entityToDocument: (entity: ShortURLEntity) => {
    return shortURLModel.create({
      originalUrl: entity.originalUrl,
      createdAt: entity.createdAt,
      code: entity.code,
      id: entity.id,
    });
  },
};
