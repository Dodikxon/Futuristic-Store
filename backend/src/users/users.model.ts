import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Products } from '../products/products.model';
import { Chat } from '../chat/chat.model';

interface UserCreationAttrs {
  username: string;
  email: string;
  password: string;
}

@Table
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  username: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Products)
  products: Products[];

  @HasMany(() => Chat)
  chat: Chat[];
}
