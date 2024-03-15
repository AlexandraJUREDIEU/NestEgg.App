// Import
    import HeaderVisitor from '../components/HeaderVisitor';
    import '../styles/home.css';
    import ProfileCard from '../components/AboutUs';

// Function
    export default function Home() {
        
        return(
            <>
            <HeaderVisitor/>
            <p>#Atterissage</p>
            <p>#Concept</p>
            <p>#Qui sommes nous?</p>
            <p>#Tarifs</p>
            <p>#Footer</p>

            <ProfileCard/>
            </>

        );        
    }