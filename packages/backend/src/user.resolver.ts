import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { randomUUID } from 'crypto';

@ObjectType()
export class User {
  @Field((_) => String)
  id: string;
}

@Resolver()
export class UserResolver {
  @Query((_) => User)
  user() {
    return { id: randomUUID() };
  }
}
