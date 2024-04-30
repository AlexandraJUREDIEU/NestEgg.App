import styled from "styled-components";
import { Button } from "./Button";

//styles

const FooterFormStyle = styled.div`
.btn-signin{
    width: 11.75em;
    margin-top: 3.5em;
    justify-content: center;
}

p{
    font-size: 0.75em;
    margin-top: 1em;
}
`


function FooterForm({className, classNameP, contentP, contentSpan, content, href}){
    return(<>
    <FooterFormStyle>
    
    <Button className="btn-auth balmy" content={content} />
    <p className={className}>{contentP} <a href={href}>{contentSpan}</a></p>

    </FooterFormStyle>

    </>)
}

export default FooterForm;