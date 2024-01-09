import { FC } from 'react';

interface Props {
  username?: string;
}

export const UserCard: FC<Props> = ({ username }) => {
  return (
    <div style={{ border: '2px solid green', padding: '10px' }}>
      <h2>username: {username ?? 'user'}</h2>
      <p>passsord: 123</p>
    </div>
  );
};
