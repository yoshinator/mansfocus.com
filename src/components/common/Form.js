import React from "react";
import * as typeformEmbed from "@typeform/embed";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.el = null;
    }
    componentDidMount() {
        if (this.el) {
            typeformEmbed.makeWidget(
                this.el,
                "https://tu6s6xuakuw.typeform.com/to/wGd96IFk",
                {
                    hideFooter: true,
                    hideHeaders: true,
                    opacity: 0,
                }
            );
        }
    }
    render() {
        return (
            <div
                ref={(el) => (this.el = el)}
                style={{ width: "100%", height: "600px" }}
            />
        );
    }
}

export default Form;