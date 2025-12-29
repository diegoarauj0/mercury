import type { URLShortenerRepositoryContract } from "../contracts/repositories/URLShortener.repository.contract.js";
import type { ShortenUseCaseContract } from "../contracts/useCases/shorten.useCase.contract.js";
import { ShortURLEntity } from "@/domain/entities/shortURL.entity.js";
import base62 from "base62/index.js";
import { env } from "@/env.js";

export class ShortenUseCase implements ShortenUseCaseContract {
  constructor(private URLShortenerRepository: URLShortenerRepositoryContract) {}

  public async execute(url: URL): Promise<ShortURLEntity> {
    const countDocuments =
      (await this.URLShortenerRepository.count()) + env.STARTING_NUMBER;
    const code = base62.encode(countDocuments);

    const shortURL = this.URLShortenerRepository.save(
      new ShortURLEntity({
        id: crypto.randomUUID(),
        originalUrl: url.href,
        createdAt: new Date(),
        code: code,
      })
    );

    return shortURL;
  }
}
