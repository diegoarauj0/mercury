import type { ShortenUseCaseContract } from "@/app/contracts/useCases/shorten.useCase.contract.js";
import type { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import Joi from "joi";

const shortenObject = Joi.object({
	URL: Joi.string().required().uri().min(1),
});

@injectable()
export class ShortenController {
	constructor(@inject("ShortenUseCase") private readonly shortenUseCase: ShortenUseCaseContract) {}

	public view(req: Request, res: Response): void {
		res.status(200).render("shorten");
	}

	public shorten = async (req: Request, res: Response): Promise<void> => {
		const { value, error } = shortenObject.validate({ URL: req.body?.URL });

		if (error) {
			console.log(req)
			return res.status(400).render("shorten", { error: error.details[0]?.message.replaceAll('"', "") });
		}

		const shortURL = await this.shortenUseCase.execute(new URL(value.URL));

		res.status(201).render("shorten", { shortURL, host: req.host });
	};
}
