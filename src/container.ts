import type { URLShortenerRepositoryContract } from "./app/contracts/repositories/URLShortener.repository.contract.js";
import { URLShortenerRepository } from "./app/repositories/URLShortener.repository.js";
import type { ShortenUseCaseContract } from "./app/contracts/useCases/shorten.useCase.contract.js";
import { ShortenUseCase } from "./app/useCases/shorten.useCase.js";
import { container } from "tsyringe";

container.register<URLShortenerRepositoryContract>("URLShortenerRepository", {
	useClass: URLShortenerRepository,
});
container.register<ShortenUseCaseContract>("ShortenUseCase", { useClass: ShortenUseCase });