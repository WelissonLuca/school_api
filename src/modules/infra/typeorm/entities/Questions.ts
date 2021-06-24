import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { SchoolTest } from './SchoolTest';

@Entity('questions')
class Question {
  @PrimaryColumn()
  readonly id: string;

  @ManyToMany(() => SchoolTest)
  @JoinColumn({ name: 'test_id' })
  schoolTest: SchoolTest;

  @Column()
  name: string;

  @Column()
  test_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id ?? uuid();
  }
}

export { Question };
