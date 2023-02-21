import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';

interface ProductCreationAttrs {
  title: string;
  description: string;
  userId: number;
  game: string;
  rating: string;
}

@Table({ tableName: 'products' })
export class Products extends Model<Products, ProductCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  rating: string;

  @Column({ type: DataType.STRING, allowNull: false })
  game: string;

  @Column({ type: DataType.STRING, allowNull: false })
  image: string;
  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
