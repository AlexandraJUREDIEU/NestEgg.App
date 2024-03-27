import styled from "styled-components";

const HeaderStyle = styled.header`
header{
    display: flex;
    justify-content: center;
    background: red;
}

img{
    width: 10.1em;
    height: 10.1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.75em 1em 0.75em 0em;
    z-index: 1;
}

ul{
    width: 80vw;
    display: flex;
    justify-content: end;
    gap: 2em;
}

a{
    text-decoration: none;
}
`

export default HeaderStyle