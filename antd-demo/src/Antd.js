import React, { PureComponent } from "react";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

import RocDiv from "./AntdStyled";

export default class Antd extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            loadings: []
        }
    }
    render() {
        const { loadings } = this.state;
        return (
            <RocDiv>
                <div>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                </div>
                <div>
                    <Button type="primary" loading={loadings[0]} >
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                    >
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                    />
                </div>
            </RocDiv>
        )
    }
}