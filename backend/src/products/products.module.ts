import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Products } from './products.model';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SequelizeModule.forFeature([Products, User])],
  exports: [ProductsService],
})
export class ProductsModule {}
