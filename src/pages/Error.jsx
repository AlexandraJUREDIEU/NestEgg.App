import { useRouteError } from "react-router-dom";

function Error() {
    const error = useRouteError();
    return (<>
        {error?.error?.toString() ?? error?.toString()}
    </>
    );
}

export default Error;
