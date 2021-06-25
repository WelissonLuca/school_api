import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Question } from './Questions';

@Entity('alternatives')
class Alternative {
  @PrimaryColumn()
  readonly id: string;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  questions: Question;

  @Column()
  alternative: string;

  @Column()
  correct: boolean;

  @Column()
  question_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    this.id = this.id ?? uuid();
  }
}

export { Alternative };
