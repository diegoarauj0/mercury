import express from "express";

export class App {
  private app = express();

  constructor(public readonly port: number) {
    this.setup();
  }

  private setup(): void {
    this.setupMiddlewares();
  }

  private setupMiddlewares(): void {
    this.app.use(express.json());
  }

  public start(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.app.listen(this.port, () => {
        console.log("Server on:")
        console.log(` Port: ${this.port}`);
        console.log(` URL: http://localhost:${this.port}`);
        resolve();
      });
    });
  }
}
