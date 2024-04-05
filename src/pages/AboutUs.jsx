import CardCollaborator from "../assets/components/CardCollaborator"
import Text from "../assets/components/Text"
import Slider from "../assets/components/Slider"

function AboutUs2(){
    let slidesQuiSommesNous = [];
    slidesQuiSommesNous.push(
        <CardCollaborator 
        src="https://placehold.co/100"
        name="Alexandra"
        spanName="JUREDIEU"
        description=" Lorem ipsum dolor sit amet, consectetur adipisci elit,  sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrum exercitationem ullam corporis suscipit  laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur." 
    />
    );
    slidesQuiSommesNous.push(
        <CardCollaborator 
        src="https://placehold.co/100"
        name="Sofien"
        spanName="TEBOURBI"
        description=" Aliquet lectus proin nibh nisl condimentum id venenatis. Dolor magna eget est lorem ipsum. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Feugiat pretium nibh ipsum consequat nisl vel pretium." 
    />
    );
    slidesQuiSommesNous.push(
        <CardCollaborator 
                src="https://placehold.co/100"
                name="Luca"
                spanName="LEROY"
                description=" Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Consequat id porta nibh venenatis cras sed felis eget. Non nisi est sit amet. At elementum eu facilisis sed odio morbi quis." 
            />
    );
    slidesQuiSommesNous.push(
        <CardCollaborator 
                src="https://placehold.co/100"
                name="Romain"
                spanName="Meese"
                description=" Maecenas pharetra convallis posuere morbi. Sit amet nulla facilisi morbi tempus iaculis urna. Nulla facilisi etiam dignissim diam quis." 
            />
    );


    return (<>
        <section id="about-us">
            <h2>Qui sommes-nous ?</h2>
            <Text className="intro-about-us" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus molestiae sequi consequuntur nesciunt voluptatibus, quam nobis perspiciatis nostrum at eaque esse neque, corrupti dolore quibusdam, impedit obcaecati? Enim, veritatis commodi?"/>
            <Slider pages={slidesQuiSommesNous} index={0} />
        </section> 
    </>)
}

export default AboutUs2
