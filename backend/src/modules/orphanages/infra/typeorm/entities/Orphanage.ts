import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  name: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column('text')
  about: string;

  @Column('text')
  instructions: string;

  @Column('varchar')
  openingHours: string;

  @Column('boolean')
  openOnWeekends: boolean;
}
