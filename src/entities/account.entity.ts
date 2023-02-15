import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Entry from './entry.entity';

@Entity({ name: 'account' })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  uid: string;

  @Column({ type: 'boolean' })
  is_trans_expense: boolean;

  @Column({ type: 'bigint' })
  value: BigInt;

  @OneToMany(type => Entry, entry => entry.account)
  entry: Entry[];

  @OneToMany(type => Entry, entry => entry.toAssetId)
  entryTransfer: Entry[]; 
}

export default Account;
