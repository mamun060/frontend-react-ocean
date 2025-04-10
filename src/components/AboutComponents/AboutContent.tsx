import { useEffect , useState } from "react"

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

function AboutContent() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  },[])
  return (
    <div>
      <ul>
        {
          users.map((user)=>(
            <li className="py-2" key={user.id}>
              {user.id} -{user.name} - {user.email} - {user.phone} - {user.website}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AboutContent
