//Imports
import HeaderContainer from "./assets/layout/Header";
import Box from "./assets/components/Box"
import { createGlobalStyle } from "styled-components";
import Button from "./assets/components/Button";
import { useEffect, useState } from "react";
import axios from "axios";

//Styles
const DashboardStyle = createGlobalStyle`
  h1{
    padding: 1em;
  }

  .div-container-boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.5em;
    flex-wrap: wrap;
    width: 70vw;
    margin: auto;
  }

 
  .short-box{
    width: 25%;
  }

  .long-box{ 
    width: 40%;
  }
`;


//Fonctions
const links = [
  { to: "/my-account", text: "Mon Compte" },
  { to: "/summary", text: "Synthese" },
  { to: "#add-transaction", text: "Ajouter une transaction" }
];


function Dashboard() {
  //State
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const userEmail = encodeURIComponent("romain.meese@hotmail.fr");
    const apiUrl = 'http://localhost:5000';
    try {
      const response = await axios.get(`${apiUrl}/user/${userEmail}`);
      const jsonData = response.data; // Avec axios, les données sont directement accessibles via `response.data`
      setData(jsonData);
      console.log(jsonData); // Log ici si vous voulez voir les données immédiatement après la mise à jour
    } catch (error) {
      console.error("Échec de la récupération des données", error);
      // Avec axios, les erreurs contiennent également une réponse (`error.response`),
      // qui peut être utile pour le débogage.
      if (error.response) {
        // La requête a été faite et le serveur a répondu avec un code d'état
        // qui sort de la plage de 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // La requête a été faite mais aucune réponse n'a été reçue
        console.log(error.request);
      } else {
        // Quelque chose s'est produit lors de la mise en place de la requête
        // qui a déclenché une erreur
        console.log('Error', error.message);
      }
    }
  };


  const logData = () => {
    console.log(data);
    console.log("Data logged");
  };

  //Comportement
  const handleBoxClick = (id) => {
    console.log(`La boîte ${id} a été cliquée.`);
  };

  //Render
  return (
    <>
      <DashboardStyle />
      <HeaderContainer links={links} />
      <h1 onClick={() => logData()}>Tableau de bord</h1>
      <section className="div-container-boxes">
        <Box id={1} href="/profile" onClickAction={handleBoxClick} className="short-box" children={<><h3>Salut lekip</h3> <Button content="Actualiser mes charges" /></>} />
        <Box id={2} href="/settings" onClickAction={handleBoxClick} className="short-box" children={<><h3>Box 2</h3></>} />
        <Box id={3} href="/transactions" onClickAction={handleBoxClick} className="long-box" children={<><h3>Box 3</h3></>} />
        <Box id={4} href="/addTransaction" onClickAction={handleBoxClick} className="short-box" children={<><h3>Box 4</h3></>} />
        <Box id={5} href="/incoming" onClickAction={handleBoxClick} className="short-box" children={<><h3>Box 5</h3></>} />
        <Box id={6} href="/incoming" onClickAction={handleBoxClick} className="long-box" children={<><h3>Box 6</h3></>} />
      </section>
    </>
  )
}

export default Dashboard;