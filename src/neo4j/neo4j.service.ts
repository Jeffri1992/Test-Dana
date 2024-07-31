import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import neo4j from 'neo4j-driver';

@Injectable()
export class Neo4jService implements OnModuleInit, OnModuleDestroy {
  private driver;
  private session;

  onModuleInit() {
    this.driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('username', 'password'));
    this.session = this.driver.session();
  }

  onModuleDestroy() {
    this.session.close();
    this.driver.close();
  }

  async runQuery(query: string, params: any) {
    const result = await this.session.run(query, params);
    return result.records.map(record => record.toObject());
  }

  // Add other functions to handle specific queries
}
