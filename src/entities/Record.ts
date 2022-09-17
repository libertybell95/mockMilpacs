import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Profile from './Profile';

@Entity()
export default class Record {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  recordDetails: string

  @Column()
  recordType: string

  @Column()
  recordDate: Date

  @ManyToOne(() => Profile, (profile) => profile.records)
  profile: Profile
}