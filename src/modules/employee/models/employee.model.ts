import { Column, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Employee {
  @PrimaryColumn()
  id: string;
  @Column({ unique: true })
  id_empresa: string;
  @Column({ unique: true })
  name: string;
  @Column()
  cpf: string;
  @Column()
  address: string;
  @Column()
  number: string;
  @Column()
  cep: string;
  @Column()
  neighborhood: string;
  @Column()
  cellphone: string;
  beforeSave() {
    this.id = randomUUID();
  }
}
