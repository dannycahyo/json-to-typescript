function attributeMapperPrompt(typescriptType: string): string {
  return `
    I have two different typescript types, the first one is in the snake_case format, and the second one is in the camelCase format. 

    For example:
    
    type StudentListResponse = {
      id: string;
      name: string;
    };
    
    type IGetStudentList =  {
      data: StudentListResponse[];
      status: string;
      pagination: {
        total: number;
        total_data: number;
      };
    }
    
    type IGetStudentListMapped = SnakeToCamel<IGetStudentList>
    
    And I need to create a function mapper for the snake_case data to camelCase data.
    
    For example:
    const getStudentListToJson = (data: IGetStudentList) => ({
      data: data.data?.map((value) => ({
        id: value.id,
        name: value.name,
      })),
      status: data.status,
      pagination: {
        total: data.pagination.total,
        totalData: data.pagination.total_data,
      },
    });
    
    I want you to make the function mapper for this type:
    ${typescriptType}
    `;
}

export { attributeMapperPrompt };
