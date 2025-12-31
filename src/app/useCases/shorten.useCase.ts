import type { URLShortenerRepositoryContract } from "../contracts/repositories/URLShortener.repository.contract.js";
import type { ShortenUseCaseContract } from "../contracts/useCases/shorten.useCase.contract.js";
import { ShortURLEntity } from "../../domain/entities/shortURL.entity.js";
import { inject, injectable } from "tsyringe";
import { env } from "../../env.js";
import base62 from "base62";

@injectable()
export class ShortenUseCase implements ShortenUseCaseContract {
	constructor(
		@inject("URLShortenerRepository")
		private URLShortenerRepository: URLShortenerRepositoryContract
	) {}

	public async execute(url: URL): Promise<ShortURLEntity> {
		const countDocuments = (await this.URLShortenerRepository.count()) + env.STARTING_NUMBER;
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
