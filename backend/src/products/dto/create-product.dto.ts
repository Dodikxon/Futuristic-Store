export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  readonly userId: number;
  readonly game: string;
  readonly rating: string;

  image: string;
  readonly price: number;
}
