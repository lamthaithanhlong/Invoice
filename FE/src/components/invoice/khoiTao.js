import Invoice from '../template/Invoice/Invoice';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
                <Carousel>
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                </Carousel>
                    {/* <Invoice />
                    <Invoice />
                    <Invoice /> */}
            </div>
        );
    }
}