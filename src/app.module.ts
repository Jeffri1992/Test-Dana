import { Module } from '@nestjs/common';
import { QueryModule } from './query/query.module';
import { Neo4jModule } from './neo4j/neo4j.module';
import { OpenAIModule } from './openai/openai.module';
import { GraphModule } from './graph/graph.module';

@Module({
  imports: [
    QueryModule,
    Neo4jModule,
    OpenAIModule,
    GraphModule,
  ],
})
export class AppModule {}
