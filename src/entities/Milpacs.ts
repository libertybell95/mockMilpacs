// A JSON archive of the entirety of milpacs

import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export default class Milpacs {
  @PrimaryGeneratedColumn()
  id: number

  @UpdateDateColumn({
    unique: true
  })
  date: Date

  @Column('json')
  milpac: object
}