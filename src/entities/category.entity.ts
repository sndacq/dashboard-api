import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Entry from './entry.entity';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  uid: string;

  @Column({ type: 'varchar', length: 300 })
  pUid: string;

  @OneToMany(type => Entry, entry => entry.category)
  entry: Entry[]; 
}

export default Category;
