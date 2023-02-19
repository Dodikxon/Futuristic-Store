import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products) private productRepository: typeof Products,
  ) {}

  async createProduct(dto: CreateProductDto) {
    const product = await this.productRepository.create({ ...dto });
    return product;
  }

  async allProducts() {
    const product = await this.productRepository.findAll({
      include: { all: true },
    });
    return product;
  }
}
