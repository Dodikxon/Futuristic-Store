import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';

interface ChatCreationAttrs {
  FirtsUserId: number;
  SecondUserId: number;
  message: [string, number];
}

@Table
export class Chat extends Model<Chat, ChatCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  FirtsUserId: number;

  @BelongsTo(() => User)
  FirstUser: Promise<User>[];

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  SecondUserId: number;

  @BelongsTo(() => User)
  SecondUser: Promise<User>[];
}
