import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { Neo4jService } from '../neo4j/neo4j.service';

@Injectable()
export class QueryService {
  constructor(
    private readonly openAIService: OpenAIService,
    private readonly neo4jService: Neo4jService
  ) {}

  async processQuery(query: string) {
    // Get response from OpenAI
    const response = await this.openAIService.queryGPT(query);

    // Optionally update the knowledge graph
    await this.updateKnowledgeGraph(query, response);

    return response;
  }

  private async updateKnowledgeGraph(query: string, response: string) {
    const queryStr = `CREATE (q:Query {text: $query})-[:RESPONDED_WITH]->(r:Response {text: $response})`;
    await this.neo4jService.runQuery(queryStr, { query, response });
  }
}
