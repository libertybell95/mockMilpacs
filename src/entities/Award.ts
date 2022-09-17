import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Profile from './Profile';

@Entity()
export default class Award {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  awardDetails: string

  @Column()
  awardName: string

  @Column()
  awardDate: Date

  @Column()
  awardImageUrl: string

  @ManyToOne(() => Profile, (profile) => profile.awards)
  profile: Profile
}