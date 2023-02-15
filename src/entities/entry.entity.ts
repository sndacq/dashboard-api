import { Entity, Column, CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Account from './account.entity';
import Category from './category.entity';

enum ActionEnum {
  INCOME = "0",
  EXPENSE = "1",
  TRANSFER = "3",
  SAVINGS = "4",
}

@Entity({ name: 'entry' })
class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('enum', { nullable: false, enum: ActionEnum })
  action: ActionEnum;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column({ type: 'bigint' })
  amount: BigInt;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @ManyToOne(type => Account, account => account.entry)
  account: Account;

  @ManyToOne(type => Account, account => account.entryTransfer)
  toAssetId: Account;

  @ManyToOne(type => Category, category => category.entry)
  category: Category;
}

export default Entry;
