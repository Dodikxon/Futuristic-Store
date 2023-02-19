import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post('/create')
  create(@Body() productDto: CreateProductDto) {
    return this.productService.createProduct(productDto);
  }

  @Get('')
  getAll() {
    return this.productService.allProducts();
  }
}
