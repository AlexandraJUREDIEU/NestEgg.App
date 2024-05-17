import styled from "styled-components"

const HeaderFormStyle = styled.div`
font-size: 1.25em;

img{
    height: 120px;
}

`

function HeaderForm({content, className}){
    return(<>
    <HeaderFormStyle>
        <img src="public\logo-sans-texte.png" alt="" />
        <p className={className}>{content}</p>
        </HeaderFormStyle>
    </>)
}

export default HeaderForm