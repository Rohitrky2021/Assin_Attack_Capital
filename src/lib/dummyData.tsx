export const DUMMY_POSTS = [
    {
      "_id": "6741c7701e1b4f10f2280d3d",
      "title": "My First Posttt",
      "content": "This is the content of the post.",
      "author": {
        "_id": "6741a5b73e49067683ee0a2f",
        "email": "newuser@examplee.com"
      },
      "createdAt": "2024-11-23T12:15:44.421Z",
      "__v": 0
    },
    {
      "_id": "6741c72ca8a387e968100b7f",
      "title": "My First Postt",
      "content": "This is the content of the post.",
      "author": {
        "_id": "6741a5b73e49067683ee0a2f",
        "email": "newuser@examplee.com"
      },
      "createdAt": "2024-11-23T12:14:36.880Z",
      "__v": 0
    },
    {
      "_id": "6741c6dc53eee86d9fd2ba6d",
      "title": "My First Postt",
      "content": "This is the content of the post.",
      "author": {
        "_id": "6741a5b73e49067683ee0a2f",
        "email": "newuser@examplee.com"
      },
      "createdAt": "2024-11-23T12:13:16.241Z",
      "__v": 0
    },
    {
      "_id": "6741a90a779f1e2bae53f0ea",
      "title": "My First Post",
      "content": "This is the content of the post.",
      "author": {
        "_id": "6741a5b73e49067683ee0a2f",
        "email": "newuser@examplee.com"
      },
      "createdAt": "2024-11-23T10:06:02.717Z",
      "__v": 0
    }
  ];
  
  // Optional: Add type definition for better TypeScript support
  export interface Post {
    _id: string;
    title: string;
    content: string;
    author: {
      _id: string;
      email: string;
    };
    createdAt: string;
    __v: number;
  }