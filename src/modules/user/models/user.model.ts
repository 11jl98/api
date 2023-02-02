import { Column, Entity, PrimaryColumn, BeforeInsert } from 'typeorm';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;
  @Column({ unique: true })
  nameuser: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @BeforeInsert()
  beforeSave() {
    this.id = randomUUID();
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
