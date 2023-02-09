import { Column, Entity, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Company {
  @PrimaryColumn()
  id: string;
  @Column({ unique: true })
  id_empresa: string;
  @Column({ unique: true })
  name: string;
  @Column()
  fantasy_name: string;
  @Column()
  cnpj_cpf: string;
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
  @Column()
  url_photo: string;
  beforeSave() {
    this.id = randomUUID();
  }
}
