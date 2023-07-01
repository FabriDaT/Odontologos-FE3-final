import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import 'react-tooltip/dist/react-tooltip.css';

function Home() {

    const [users, setUsers] = useState([])
    const [favs, setFavs] = useState(JSON.parse(localStorage.getItem('odontologosFavs') || '[]'))

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await response.json()
          setUsers(data)
        }
        fetchData()
      }, [])

      const addToFavs = (user) => {
        let newFavs
        if (favs.some((fav) => fav.id === user.id)) {
          newFavs = favs.filter((fav) => fav.id !== user.id)
        } else {
          newFavs = [...favs, user]
        }
        setFavs(newFavs)
        localStorage.setItem('odontologosFavs', JSON.stringify(newFavs))
      }

    return (
        <section className="section-home">
            <h1>Dentistas</h1>
            <div className="d-grid list-card">
            {users.map((user)=>
            (<Card user={user} onClick={addToFavs} key={user.id}></Card>)
            )}
            </div>
        </section>
     );
}

export default Home;