import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getAllPosts } from '../../../lib/firebase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const POSTS = [
  //   {
  //     name: 'Gabriel Pessoa',
  //     email: 'gabrielsouzapessoa@gmail.com',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  //     text: 'Opa, tranquilao',
  //   },
  //   {
  //     name: 'Gabriel Pessoa',
  //     email: 'gabrielsouzapessoa@gmail.com',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  //     text: 'Mt foda vei',
  //   },
  //   {
  //     name: 'Pedro Felipe',
  //     email: 'pedrofcrespao@gmail.com',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  //     text: 'foda-se',
  //   },
  //   {
  //     name: 'Pedro Felipe',
  //     email: 'pedrofcrespao@gmail.com',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  //     text: 'kkkk',
  //   },
  // ];
  const posts = await getAllPosts();
  res.status(200).json(posts);
};

export default handler;
