import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Products } from './products.model';
import { CreateProductDto } from './dto/create-product.dto';
import { Between } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Products) private productRepository: typeof Products,
  ) {}

  async createProduct(dto: CreateProductDto, file) {
    const imageName = file ? file.filename : '';
    dto.image = imageName;
    const product = await this.productRepository.create({ ...dto });
    return product;
  }

  async allProducts() {
    const product = await this.productRepository.findAll({
      include: { all: true },
    });
    return product;
  }

  async getProductByTitle(title: string) {
    const product = await this.productRepository.findOne({
      where: { title },
      include: { all: true },
    });
    return product;
  }

  async getProductByGame(game: string) {
    if (game == 'select game') {
      const product = await this.productRepository.findAll({
        include: { all: true },
      });
      return product;
    } else {
      const product = await this.productRepository.findAll({
        where: { game },
        include: { all: true },
      });
      return product;
    }
  }
}
