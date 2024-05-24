export default function UserCard({ userObj }: { userObj: {name: string, age: string, email: string} }){
  return (
    <div>{userObj.name}</div>
  )
}