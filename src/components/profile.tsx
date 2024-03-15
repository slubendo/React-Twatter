import Link from 'next/link';
import * as fakeDatabase from "@/fakeDatabase"

interface ProfileProps {
  username: string;
}

export default function Profile({ username }: ProfileProps) {
  const user = fakeDatabase.getUser(username);

  return (
    <div key={user?.id} className="flex flex-wrap border-b-2">
      <div className="w-2/3">
        <h2>{user?.firstName} {user?.lastName}</h2>
        <p>{user?.username}</p>
      </div>
      <div className="flex justify-end w-1/3 h-10">
        <img className="rounded-full overflow-hidden" src={user?.avatar} alt="" />
      </div>
      <p className="w-full">{user?.followers}</p>
      <p className="w-full">Posts</p>
    </div>
  )
}