import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Products } from './products.model';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('game/:game')
  async getProductsByGame(@Param('game') game: string) {
    return this.productService.getProductByGame(game);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './dist/uploads/files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(
    @Body() productDto: CreateProductDto,
    @UploadedFile() file,
  ): Promise<Products> {
    return this.productService.createProduct(productDto, file);
  }

  @Get('')
  getAll() {
    return this.productService.allProducts();
  }
  @Get('/:filename')
  async getFile(@Param('filename') filename: string, @Res() res: any) {
    res.sendFile(filename, { root: 'dist/uploads/files' });
  }
}
