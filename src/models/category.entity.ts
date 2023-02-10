import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Entry } from './entry.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  uid: string;

  @Column({ type: 'varchar', length: 300 })
  pUid: string;

  @OneToMany(type => Entry, entry => entry.category)
  entry: Entry[]; 
}
