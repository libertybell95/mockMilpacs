import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import Profile from './Profile';

@Entity()
export default class Rank {
  @PrimaryColumn()
  rank_id: number

  @Column()
  rank_short: string

  @Column()
  rank_full: string

  @Column()
  rank_image_url: string

  @OneToMany(() => Profile, (profile) => profile.Rank)
  profiles: Profile[]
}