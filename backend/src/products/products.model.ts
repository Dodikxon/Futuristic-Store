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
  image: string;
  game: string;
  rating: string;
  price: number;
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

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  rating: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  game: string;

  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @Column({ type: DataType.NUMBER, allowNull: false })
  price: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
