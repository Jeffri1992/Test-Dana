import { Controller, Post, Body } from '@nestjs/common';
import { QueryService } from './query.service';

@Controller('query')
export class QueryController {
  constructor(private readonly queryService: QueryService) {}

  @Post()
  async handleQuery(@Body() body: { query: string }) {
    const response = await this.queryService.processQuery(body.query);
    return { response };
  }
}
