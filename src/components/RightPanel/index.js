import React, { Component } from 'react';
import { Spin, Card, Row, Col } from 'antd';
import { connect } from 'react-redux';

import './_RightPanel.css'

class LeftPanel extends Component {

    renderCars = () => {
        const {cars} = this.props;
        return (
            cars.map( (carInfo, i) => {
                return (
                    <div key={i} className="cardWrapper" onClick={()=> window.open(carInfo.DeepLink, "_blank")}>
                        <Card title={carInfo.CarTypeCode} style={{ width: "100%" }}>
                            <Row type="flex" justify="space-around" align="middle">
                                <Col span={8} type="flex" justify="center" align="middle">
                                    <h2>Total: ${carInfo.TotalPrice}</h2>
                                    <h4>SubTotal: {carInfo.SubTotal}</h4>
                                    <h5>Tax: {carInfo.TaxesAndFees}</h5>
                                </Col>
                                <Col span={16}>
                                    <h3>Location: {carInfo.LocationDescription}</h3>
                                    <h4>Mileage: {carInfo.MileageDescription}</h4>
                                    <h4>Days: {carInfo.RentalDays}</h4>
                                    <h4>Pickup: {carInfo.PickupDay}{carInfo.PickupTime}</h4>
                                    <h4>Dropoff: {carInfo.DropoffTime}</h4>
                                </Col>  
                            </Row>
                        </Card>
                    </div>
                    
                )
            })
        )
    }
    render() {
        const { loading } = this.props;

        return (
            <div className="container flex-center">
                <Spin spinning={loading} size={"large"} wrapperClassName="container">
                    {this.renderCars()}
                </Spin>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cars: state.searchRes.cars,
        loading: state.searchRes.loading
    }
}
export default connect(mapStateToProps)(LeftPanel);