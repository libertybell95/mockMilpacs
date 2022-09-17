import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import Position from './Position';
import Rank from './Rank';
import Roster from './Roster';
import User from './User';
import Record from './Record';
import Award from './Award';

@Entity()
export default class Profile {
  @PrimaryColumn()
  id: number

  @OneToOne(() => User)
  @JoinColumn()
  User: User
  
  @ManyToOne(() => Rank, (rank) => rank.profiles)
  Rank: Rank

  @Column()
  real_name: string

  @Column()
  uniform_url: string

  @ManyToOne(() => Roster, (roster) => roster.profile)
  roster: Roster

  @ManyToOne(() => Position, (position) => position.profilePrimary)
  primary: Position

  @ManyToMany(() => Position)
  @JoinColumn()
  secondaries: Position[]

  @OneToMany(() => Record, (record) => record.profile)
  records: Record[]

  @OneToMany(() => Award, (award) => award.profile)
  awards: Award[]

  @Column()
  join_date: Date

  @Column()
  promotion_date: Date

  @Column()
  keycloak_id: string
}