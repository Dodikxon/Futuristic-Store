import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Products } from './products.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [SequelizeModule.forFeature([Products, User]), AuthModule],
  exports: [ProductsService],
})
export class ProductsModule {}
