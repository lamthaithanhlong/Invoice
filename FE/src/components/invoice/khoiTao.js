import Invoice from '../template/Invoice/Invoice';

import React, {Component} from 'react';

export class KhoiTao extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                        <Invoice />
            </div>
        );
    }
}