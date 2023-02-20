import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() productDto: CreateProductDto) {
    return this.productService.createProduct(productDto);
  }

  @Get('')
  getAll() {
    return this.productService.allProducts();
  }
}
