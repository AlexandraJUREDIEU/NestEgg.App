import CardPrice from "../assets/components/CardPricing"
import Slider from "../assets/components/Slider"

function Pricing(){
    let slidesTarifs = [];
    slidesTarifs.push(
        <>
          <CardPrice offerName="SMART" description="Offre gratuite" price="GRATUIT"/>
        </>
      );
    slidesTarifs.push(
        <>
          <CardPrice offerName="MAX" description="Offre max" price="2.99/ MOIS"/>
        </>
      );
    slidesTarifs.push(
        <>
          <CardPrice offerName="BUSINESS" description="Offre business" price="5.99/ MOIS"/>
        </>
      );
    
    return (<>
    <section >
        <h1>NOS TARIFS</h1>
        <Slider pages={slidesTarifs} index={0} />
    </section>
    </>)
}

export default Pricing