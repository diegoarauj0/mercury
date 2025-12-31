import type { ShortURLEntity } from "../../../domain/entities/shortURL.entity.js";

export interface URLShortenerRepositoryContract {
	save(shortURLEntity: ShortURLEntity): Promise<ShortURLEntity>;
	findByCode(code: string): Promise<ShortURLEntity | null>;
	findByID(id: string): Promise<ShortURLEntity | null>;
	count(): Promise<number>;
}
