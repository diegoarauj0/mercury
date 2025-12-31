import type { ShortURLEntity } from "../../../domain/entities/shortURL.entity.js";

export interface ShortenUseCaseContract {
  execute(url: URL): Promise<ShortURLEntity>;
}
