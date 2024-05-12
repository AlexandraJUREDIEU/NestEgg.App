

import SectionInWrapper from "../../assets/components/SectionInWrapper";
import Wrapper from "../../assets/components/Wrapper";

function Ressources() {
    //State
    //Comportement
    //Render
    return (
      <>
      


          {/*Ressources */}
          <Wrapper
            initial={<div>SOSO LE PELICAN</div>}
            deroule={<><SectionInWrapper
              title="Salaire N°1"
              text="Arrive vers le"
              listOptions={['01', '02', '03']}
            />
            <SectionInWrapper
              title="Salaire N°2"
              text="Arrive vers le"
              listOptions={['01', '02', '03']}
            />
            <SectionInWrapper
              title="Salaire N°3"
              text="Arrive vers le"
              listOptions={['01', '02', '03']}
            /></>
          }
        >
        </Wrapper>








      </>
    )
  }
  
  export default Ressources;