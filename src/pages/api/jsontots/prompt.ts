function jsonToTsPrompt(jsonData: string): string {
  return `
  I want you to convert JSON into TypeScript typing. For example:
  From:
  {
    "userId": "1",
    "age": 20,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit "
  }

  To:

  type User = {
    userId: string;
    age: number;
    title: string;
    body: string;
  }

  Please convert this: 
  ${jsonData}
  `;
}

export { jsonToTsPrompt };
