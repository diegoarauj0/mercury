export class ShortURLEntity {
  readonly originalUrl!: string;
  readonly createdAt!: Date;
  readonly code!: string;
  readonly id!: string;

  constructor(props: ShortURLEntity) {
    Object.assign(this, props);
  }
}
