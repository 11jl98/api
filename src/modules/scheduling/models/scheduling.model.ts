import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Scheduling {
  @PrimaryColumn()
  id: string;
  @Column({ foreignKeyConstraintName: 'id_empresa' })
  id_empresa: string;
  @Column({ foreignKeyConstraintName: 'id_emplyoee' })
  id_emplyoee: string;
  @Column({ foreignKeyConstraintName: 'id_servicing' })
  id_servicing: string;
  @Column()
  name_customer: string;
  @Column()
  tel_number_customer: string;
  @CreateDateColumn()
  create_at: Date;
  beforeSave() {
    this.id = randomUUID();
  }
}
