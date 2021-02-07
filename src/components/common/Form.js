import React, { useRef, useEffect } from "react";
import * as typeformEmbed from "@typeform/embed";

const MyTypeform = () => {
    const typeformRef = useRef(null);

    useEffect(() => {
        typeformEmbed.makeWidget(
            typeformRef.current,
            "https://tu6s6xuakuw.typeform.com/to/wGd96IFk",
            {
                hideFooter: true,
                hideHeaders: true,
                opacity: 50,
            }
        );
    }, [typeformRef]);

    return (
        <div ref={typeformRef} style={{ height: "500px", width: "100%" }}></div>
    );
};

export default Form;