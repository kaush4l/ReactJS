import React, { PureComponent } from "react";

export default class P extends PureComponent {

    render() {
        const { value } = this.props.children[0].props['children'] ? this.props.children[0].props['children'] : this.props.children[0].props['alt'];
        console.log(this.props.children[0].props['children'] ? this.props.children[0].props['children'] : this.props.children[0].props['alt']);
        return (
            <p className="w3-red">
                {value}
            </p>
        );
    }
}