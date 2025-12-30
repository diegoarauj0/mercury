import type { URLShortenerRepositoryContract } from "@/app/contracts/repositories/URLShortener.repository.contract.js";
import type { Request, Response } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class RedirectController {
	constructor(@inject("URLShortenerRepository") private readonly URLShortenerRepository: URLShortenerRepositoryContract) {}

	public redirect = async (req: Request, res: Response): Promise<void> => {
		const code = req.params.code;

		if (code === undefined || code === null) {
			return res.status(400).render("notFound");
		}
    
		const shortURLEntity = await this.URLShortenerRepository.findByCode(String(code));

		if (shortURLEntity === null) {
			return res.status(400).render("notFound");
		}

		res.status(302).redirect(shortURLEntity.originalUrl);
	};
}
