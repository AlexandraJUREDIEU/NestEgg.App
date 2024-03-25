function Button(props) {
  const styleButton = {
    display: "flex",
    padding: "2em",
    backgroundColor: "white",
    borderRadius: "100vh",
    blur: "19%",
    boxShadow: "2em 1em 1em black",
  };
  if (props.image == undefined) {
    //aucune image
    return (
      <button style={styleButton}>
        {props.action} & {props.text}
      </button>
    );
  } else {
    //présence d'une image
    return (
      <button style={styleButton}>
        <a href={props.path}>
          {props.action} & {props.image} & {props.text}
        </a>
      </button>
    );
  }
}

export default Button;
