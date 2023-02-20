export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  readonly userId: number;
  readonly image: string;
  readonly game: string;
  readonly price: number;
  readonly rating: string;
}