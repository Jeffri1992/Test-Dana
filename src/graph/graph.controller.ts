import { Controller, Get } from '@nestjs/common';
import { Neo4jService } from '../neo4j/neo4j.service';

@Controller('graph')
export class GraphController {
  constructor(private readonly neo4jService: Neo4jService) {}

  @Get()
  async getGraphData() {
    const nodesQuery = 'MATCH (n) RETURN n';
    const edgesQuery = 'MATCH (n)-[r]->(m) RETURN n, r, m';

    const nodes = await this.neo4jService.runQuery(nodesQuery, {});
    const edges = await this.neo4jService.runQuery(edgesQuery, {});

    return { nodes, edges };
  }
}
