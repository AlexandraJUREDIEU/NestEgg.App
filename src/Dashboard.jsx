//Imports
import HeaderContainer from "./assets/layout/Header";
import Box from "./assets/components/Box";
import { createGlobalStyle } from "styled-components";
import { ButtonLink } from "./assets/components/Button";
import CircleRadialProgress from "./assets/components/CircleRadialProgress";
import ProgressBar from "./assets/components/ProgressBar";
import { useAuth } from "./auth/AuthWrapper";
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "./config";

//Styles
const DashboardStyle = createGlobalStyle`
  h1{
    height: 8vh;
  }

  .div-container-boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5em;
    flex-wrap: wrap;
    width: 100vw;
    height: 48vh;
    margin: auto;
  }

.fXwZhN{
    margin: auto;
    height: 50%;
  }

  .short-box, .long-box{
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0.25em;
  }

  .short-box button{
    height: 1.5em;
  }

  .short-box a{
    font-size: 0.65em;
    width: 100%;
  }
  .short-box button a{
    margin: 0 auto;
  }

  .last-spent{
    font-size: 0.75em;
  }
  .spent{
    font-size: 0.5em;
  }
  
  .ico-add-transaction,{
    height: 45px;
    width: 45px;
    margin: auto;
}

.ico-incoming-charges{
  height: 35px;
  margin: auto;
}

.text-ico-charges{
  display: flex;
  flex-direction: row;
  margin: auto;
}

.text-ico-charges p{
  font-size: 2em;
  font-weight: 600;
}

  .bottom-dashboard{
    height: 29vh;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    margin-top: 1em;
    width: 320px;
    align-items: end;
    margin: 0 auto;
    justify-content: end;
    padding-bottom: 0.25em;
  }

  .div-progress-bar{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .rectangle1{
    padding: 0 0.5em;
  }
  .ico-progress-bar{
    height: 30px;
    margin-right: 0.5em;
  }
 
  .p-amount-left {
    font-size: 0.5em;
    padding: 0;
    padding-right: 0.5em;
    text-align: right;
    width: 19em;
    display: flex;
    align-items: end;
    justify-content: end;
    margin-bottom: 0.25em;
  }

  .font-300{
    font-weight: 300;
  }
`;

//Fonctions
const links = [
  { to: "/my-account", text: "Mon Compte" },
  { to: "/summary", text: "Synthese" },
  { to: "#add-transaction", text: "Ajouter une transaction" },
];
let string ;

function Dashboard() {
  //State
  //Récupérer l'utilisateur
    const [activeUser, setActiveUser] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [chargesFixes, setChargesFixes] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const idUser = new URLSearchParams(location.search).get('userId');
          const userListResponse = await axios.get(`${API_URL}/users/list`);
          const user = userListResponse.data.find(user => user.id === idUser);
          if (user) {
            setActiveUser(user);
            getChargesFixes(user.id);
            fetchTransactions(user.id);
            string= "http://localhost:5173/my-account/profil?userId=" + user.id;
          } else {
            console.log('User not found');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures this effect runs only once after initial render
  
    const getChargesFixes = async (userId) => {
      try {
        const userChargesFixe = await axios.get(`${API_URL}/dashboard/fixedCharges?userid=${userId}`);
        const data = userChargesFixe.data[0];
        setChargesFixes(data);
      } catch (error) {
        console.error('Error fetching fixed charges:', error);
      }
    };
  
    const fetchTransactions = async (userId) => {
      try {
        const response = await axios.get(`${API_URL}/dashboard/transactions?userid=${userId}`);
        const data = response.data[0].transactions;
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
  
    const handleBoxClick = (id) => {
      console.log(`La boîte ${id} a été cliquée.`);
    };


  //Render
  return (
    <>
    {// Affichage des différentes data récupérés du back-end
      /*{activeUser && (
        <>
          <p>User found: {activeUser.name}</p>
          {chargesFixes.length != 0 ? (
            <>Voici ton premier goal: {chargesFixes.goals[0].nameGoal}
            <br></br>Voici ta première transaction: {transactions[0].name}</>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
      */}

      <DashboardStyle />
      <HeaderContainer links={links} />
      <h1>Tableau de bord</h1>

      <section className="div-container-boxes">
        <Box
          id={1}
          href="/profile"
          onClickAction={handleBoxClick}
          className="short-box"
          children={
            <>
              <h3 className="font-300">
                Salut
                {<div>{activeUser.name}</div>}
              </h3>{" "}
                <ButtonLink to={string} content="Actualiser mes charges" />
            </>
          }
        />
        <Box
          id={2}
          href="/settings"
          onClickAction={handleBoxClick}
          className="short-box"
          children={
            <>
              <h3 className="font-300">Votre objectif</h3>
              <CircleRadialProgress
                progress="10"
                width="50px"
                color1="darkred"
                color2="purple"
                height="40px"
              />
            </>
          }
        />
        <Box
          id={3}
          href="/transactions"
          onClickAction={handleBoxClick}
          className="long-box"
          children={
            <>
              <h3 className="font-300">Votre épargne</h3>
              <p>697.02€</p>
            </>
          }
        />
        <Box
          id={4}
          href="/addTransaction"
          onClickAction={handleBoxClick}
          className="short-box"
          children={
            <>
              <h3 className="last-spent">Vos dernières dépenses</h3>
              {transactions.length > 0 && (
                <div className="spent">
                  {transactions[0].typeCategory}
                  {transactions[0].date}
                  {transactions[0].name}
                  {transactions[0].montant}
                </div>
              )}
              {transactions.length > 0 && (
                <div className="spent">
                  {transactions[1].typeCategory}
                  {transactions[1].date}
                  {transactions[1].name}
                  {transactions[1].montant}
                </div>
              )}
              {transactions.length > 0 && (
                <div className="spent">
                  {transactions[2].typeCategory}
                  {transactions[2].date}
                  {transactions[2].name}
                  {transactions[2].montant}
                </div>
              )}
            </>
          }
        />
        <Box
          id={5}
          href="/incoming"
          onClickAction={handleBoxClick}
          className="short-box"
          children={
            <>
              <img
                src="ico-add-transaction.png"
                alt="image carte banquaire"
                className="ico-add-transaction"
              />
              <h3 className="font-300">Ajouter une transaction</h3>
            </>
          }
        />
        <Box
          id={6}
          href="/incoming"
          onClickAction={handleBoxClick}
          className="long-box"
          children={
            <>
              <div className="text-ico-charges">
                <p>3</p>
                <img
                  src="ico-charges.png"
                  alt="ico charges à venir"
                  className="ico-incoming-charges"
                />
              </div>
              <h3 className="font-300">Charges à venir</h3>
            </>
          }
        />
      </section>

      <section className="bottom-dashboard">
        <div className="div-progress-bar">
          <img
            src="ico-vital.png"
            alt="ico vital"
            className="ico-progress-bar"
          />
          <ProgressBar
            type="Vital"
            progress="70"
            width="280"
            color1="#F5A483"
            color2="#fff2"
            height="20px"
          />
        </div>
        <p className="p-amount-left">
          Il vous reste 90€ pour finir la semaine, soit 22.50€ par jour
        </p>
        <div className="div-progress-bar">
          <img
            src="ico-loisirs.png"
            alt="ico loisirs"
            className="ico-progress-bar"
          />
          <ProgressBar
            type="Loisirs"
            progress="80"
            width="280"
            color1="#43A9B6"
            color2="#fff2"
            height="20px"
          />
        </div>
        <p className="p-amount-left">
          Il vous reste 90€ pour finir la semaine, soit 22.50€ par jour
        </p>
        <div className="div-progress-bar">
          <img
            src="ico-savings.png"
            alt="ico épargne"
            className="ico-progress-bar"
          />
          <ProgressBar
            type="Épargne"
            progress="80"
            width="280"
            color1="#B243B6"
            color2="#fff2"
            height="20px"
          />
        </div>
        <p className="p-amount-left">
          Il vous reste 90€ pour finir la semaine, soit 22.50€ par jour
        </p>
      </section>
    </>
  );
}

export default Dashboard;
