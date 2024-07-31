import { Module } from '@nestjs/common';
import { GraphController } from './graph.controller';
import { Neo4jModule } from '../neo4j/neo4j.module';

@Module({
  imports: [Neo4jModule],
  controllers: [GraphController],
})
export class GraphModule {}
