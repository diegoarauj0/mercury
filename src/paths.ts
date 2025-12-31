import { fileURLToPath } from "url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const paths = {
	public: path.join(`${__dirname}/../public`),
	views: path.join(`${__dirname}/../views`)
};
