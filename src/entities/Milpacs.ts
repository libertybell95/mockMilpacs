// A JSON archive of the entirety of milpacs

import { Column, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class Milpacs {
  @PrimaryColumn('date')
  date: Date

  @Column('json')
  milpac: object
}