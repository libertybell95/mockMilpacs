import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import Profile from './Profile';

@Entity()
export default class Position {
  @PrimaryColumn()
  id: number

  @Column()
  position_title: string

  @OneToMany(() => Position, (position) => position.subordinates)
  supervisor: Position

  // This column is supposed to be silent. Only link supervisor
  @ManyToOne(() => Position, (position) => position.supervisor)
  subordinates: Position[]

  // Many-To-Many
  @OneToMany(() => Profile, (profile) => profile.primary)
  profilePrimary: Profile

  @ManyToMany(() => Profile)
  profileSecondaries: Profile[]
}