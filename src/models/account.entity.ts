import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Entry } from './entry.entity';

@Entity({ name: 'account' })
export class Account extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  uid: string;

  @Column({ type: 'boolean', length: 300 })
  is_trans_expense: boolean;

  @Column({ type: 'bigint', length: 300 })
  value: BigInt;

  @OneToMany(type => Entry, entry => entry.account)
  entry: Entry[];

  @OneToMany(type => Entry, entry => entry.toAssetId)
  entryTransfer: Entry[]; 
}
