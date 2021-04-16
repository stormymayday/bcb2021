import React, { useEffect, useState } from 'react';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import paginate from '../../utils';
import { useParams, useHistory, Link } from 'react-router-dom';

import { useGlobalContext } from '../../context';

// Components
import HarvestSectionPagination from '../HarvestSectionPagination/HarvestSectionPagination';
import LeafletMap from '../LeafletMap/LeafletMap';

const HarvestSection = ({ city, state, longitude, latitude, elevation, harvestNodeLots, totalAbsorbedHarvestWeight, harvestLotIds, harvestLots }) => {

    const { id, index } = useParams();
    const { location } = useHistory();

    const { farmers } = useGlobalContext();

    useEffect(() => {


    }, [])

    const paginate = (items) => {
        const itemsPerPage = 4
        const numberOfPages = Math.ceil(items.length / itemsPerPage)

        const newItems = Array.from({ length: numberOfPages }, (_, index) => {
            const start = index * itemsPerPage
            return items.slice(start, start + itemsPerPage)
        })

        return newItems
    }

    return (
        <section>
            <Container>
                <h2>Harvest</h2>
                <Row id='harvest' style={{ 'padding-top': '4em' }}>
                    <Col md='12' lg='6'>
                        <p>City: {city}</p>

                        <p>State: {state}</p>

                        <p>Longitude: {longitude}</p>

                        <p>Latitude: {latitude}</p>

                        <p>Elevation: {elevation}</p>
                        <p>
                            Total number of harvest lots: {harvestNodeLots ? harvestNodeLots.lots.length : ''}
                        </p>
                        <p>
                            Total Absorbed Weight: {totalAbsorbedHarvestWeight}
                        </p>

                    </Col>
                    {/* <Col md='12' lg='6'>
                    {
                        farmers[index].farmerName && farmers[index].harvestGeneralNodeID && longitude && latitude

                            ?

                            <LeafletMap farmer={farmers[index].farmerName} nodeId={farmers[index].harvestGeneralNodeID} longitude={longitude} latitude={latitude} />

                            :

                            ''

                    }
                </Col> */}
                </Row>

                <Row>
                    <Container>

                        {/* <Pagination
                        // numberOfLots={farmers[index].harvestLotIds.length}
                        harvestLotIds={paginate(farmers[index].harvestLotIds)}

                        harvestLots={harvestLotIDs ? paginate(harvestLotIDs) : []}

                    // numberOfLots={harvestNodeLots ? harvestNodeLots.lots.length : ''}
                    // harvestLotIds={paginate(harvestNodeLots ? harvestNodeLots.lots : '')}
                    /> */}

                    </Container>
                </Row>
                <HarvestSectionPagination

                // harvestLotIds={paginate(farmers[index].harvestLotIds)}
                // harvestLots={harvestLotIDs ? paginate(harvestLotIDs) : []}
                />
            </Container>
        </section>
    );
}

export default HarvestSection;