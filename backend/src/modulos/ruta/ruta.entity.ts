import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'rutas', synchronize: false })
export class Ruta {
  @PrimaryColumn({ type: 'varchar', length: 12 })
  id: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  padreid: string;

  @Column({ type: 'varchar', length: 55, nullable: false })
  nombre: string;
}
