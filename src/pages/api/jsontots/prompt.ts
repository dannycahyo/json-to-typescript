function jsonToTsPrompt(jsonData: string): string {
  return `
  I want you to convert JSON into TypeScript typing. And if the JSON is nested, please make a separate type. For example: 

  {
    "id": 1,
    "name": "Leanne",
    "address": {
        "street": "Kulas",
        "suite": "Apt"
    }
  }

  type User = {
    id: number;
    name: string;
    address: Address;
  }

  type Address = {
    street: string;
    suite: string; 
  }

  Please convert this JSON data:
  ${jsonData}
  `;
}

export { jsonToTsPrompt };
