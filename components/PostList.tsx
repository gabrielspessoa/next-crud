import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';
import { Post } from './Post';

interface PostType {
  email: string;
  name: string;
  text: string;
  image: string;
}

const fetcher = async (url: string) => {
  const { data } = await axios.get<PostType[]>(url);
  console.log('AXIOS: ', data);

  return data;
};

export const PostList = () => {
  const { data, error, isLoading } = useSWR('/api/posts', fetcher);

  useEffect(() => console.log(data), [data]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro</div>;
  }

  return (
    <div className='flex flex-col gap-3'>
      {/* {data?.map(({ email, image, name, text }, index) => (
        <Post author={{ email, image, name }} text={text} key={index} />
      ))} */}
    </div>
  );
};
