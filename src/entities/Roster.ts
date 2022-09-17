import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import Profile from './Profile';

@Entity()
export default class Roster {
  @PrimaryColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Profile, (profile) => profile.roster)
  profile: Profile[]
}