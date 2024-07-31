import { Module } from '@nestjs/common';
import { QueryService } from './query.service';
import { QueryController } from './query.controller';
import { Neo4jModule } from '../neo4j/neo4j.module';
import { OpenAIModule } from '../openai/openai.module';

@Module({
  imports: [Neo4jModule, OpenAIModule],
  providers: [QueryService],
  controllers: [QueryController],
})
export class QueryModule {}
