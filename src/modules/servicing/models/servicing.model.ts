import { Column, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Servicing {
  @PrimaryColumn()
  id: string;
  @Column({ unique: true })
  id_empresa: string;
  @Column({ unique: true })
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  beforeSave() {
    this.id = randomUUID();
  }
}
