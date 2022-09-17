import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import Profile from './Profile';

@Entity()
export default class User {
  @PrimaryColumn()
  userId: string

  @Column()
  username: string

  @OneToOne(() => Profile)
  profile: Profile
}