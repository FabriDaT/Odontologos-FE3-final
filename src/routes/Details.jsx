import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CardDetails from "../components/card/CardDetails"

function Details() {

    const [user, setUser] = useState()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      const data = await response.json()
      setUser(data)
    }
    fetchData()

  }, [params.id])

  function handleGoBack() {
    navigate(-1)
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
  <div className="d-flex f-dir-colum align-center section-details">
    <CardDetails user={user}></CardDetails>
    <button onClick={handleGoBack}><i className="fa-regular fa-arrow-left"></i> Volver</button>
  </div>
  );
}

export default Details;