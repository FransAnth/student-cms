export const NavigationToolDescription = [
  {
    name: "navigateToPage",
    description: "Use this tool when you need to navigate to a page",
    parameters: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: `The path you need to navigate into. The only acceptable values are the following 
            along with there decriptions. \n 1. '/students' this path is when you need to redirect 
            to the student management page. \n 2. '/classrooms' use this path when you need to redirect to the 
            classrooms management page. \n 3. '/courses' use this path when you need to redirect 
            to the courses management page.`,
        },
      },
      required: ["path"],
    },
  },
];
