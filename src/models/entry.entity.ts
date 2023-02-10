import { Entity, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Account } from './account.entity';
import { BaseEntity } from './base.entity';
import { Category } from './category.entity';

enum ActionEnum {
  INCOME = "0",
  EXPENSE = "1",
  TRANSFER = "3",
  SAVINGS = "4",
}

@Entity({ name: 'entry' })
export class Entry extends BaseEntity {

  @Column({ type: 'enum' })
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
