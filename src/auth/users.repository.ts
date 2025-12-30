import { DataSource, Repository } from 'typeorm';
import { user } from './user.entity';

export class UserRepository extends Repository<user> {
  constructor(private datasource: DataSource) {
    super(user, datasource.createEntityManager());
  }
}
