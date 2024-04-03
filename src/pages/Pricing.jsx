import CardPrice from "../assets/components/CardPricing"

function Pricing(){
    return (<>
    <section >
        <h1>NOS TARIFS</h1>
        <CardPrice offerName="SMART" description="Offre gratuite" price="GRATUIT"/>
        <CardPrice offerName="MAX" description="Offre max" price="2.99/ MOIS"/>
        <CardPrice offerName="BUSINESS" description="Offre business" price="5.99/ MOIS"/>
    </section>
    </>)
}

export default Pricing