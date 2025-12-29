import type { URLShortenerRepositoryContract } from "../contracts/repositories/URLShortener.repository.contract.js";
import type { ShortURLEntity } from "@/domain/entities/shortURL.entity.js";
import { shortURLMapper } from "../persistence/mappers/shortURL.mapper.js";
import { shortURLModel } from "../persistence/models/shortURL.model.js";

export class URLShortenerRepository implements URLShortenerRepositoryContract {
  async save(shortURLEntity: ShortURLEntity) {
    const shortURLDocument = await shortURLMapper.entityToDocument(
      shortURLEntity
    );
    const savedDoc = await shortURLModel.create(shortURLDocument);
    return shortURLMapper.documentToEntity(savedDoc);
  }

  async findByID(id: string) {
    const shortURLDocument = await shortURLModel.findOne({ id: id });

    if (shortURLDocument === null) return null;

    return shortURLMapper.documentToEntity(shortURLDocument);
  }

  async findByCode(code: string) {
    const shortURLDocument = await shortURLModel.findOne({ code: code });

    if (shortURLDocument === null) return null;

    return shortURLMapper.documentToEntity(shortURLDocument);
  }

  async count() {
    return shortURLModel.countDocuments();
  }
}
