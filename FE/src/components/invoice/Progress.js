import React, {Component} from 'react';
import {Steps} from 'primereact/steps';
import {Growl} from "primereact/growl";
import "../StepsDemo.css"

export class StepsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        };

        this.items = [
            {
                label: 'Khởi tạo mẫu hoá đơn',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Lâp̣ quyết định HDDT',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Lâp Thông Báo phát hành HDDT',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Nộp Hô Sơ Cơ quan thuế',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Bắt đầu dung̀ HDDT',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
    }

    render() {
        return (
            <div>
            <div className="card card-w-title">
            <Growl ref={(el) => {this.growl = el}}></Growl>
                        <h1>Bước sử dụng</h1>
                        <Steps model={this.items} style={{Left: 500}} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false}  />
                    </div>
            </div>
        );
    }
}