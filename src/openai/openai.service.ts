import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OpenAIService {
  private endpoint = 'https://dana-automation-copilot-temp2.openai.azure.com/';
  private apiKey = '721573afda5c447dbee0a11f80b5d452';
  private deploymentName = 'gpt-35-turbo';

  async queryGPT(prompt: string): Promise<string> {
    const response = await axios.post(
      `${this.endpoint}/openai/deployments/${this.deploymentName}/completions?api-version=2023-03-15-preview`,
      {
        prompt: prompt,
        max_tokens: 150
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      }
    );
    return response.data.choices[0].text;
  }
}
