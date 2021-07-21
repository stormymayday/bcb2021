import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

// import './ProcessingExport.css';

// Components
import ProcessingSectionPagination from '../ProcessingSectionPagination/ProcessingSectionPagination';



export const ProcessingExport = (props) => {


    // const paginate = (items) => {
    //     const itemsPerPage = 4
    //     const numberOfPages = Math.ceil(items.length / itemsPerPage)

    //     const newItems = Array.from({ length: numberOfPages }, (_, index) => {
    //         const start = index * itemsPerPage
    //         return items.slice(start, start + itemsPerPage)
    //     })

    //     return newItems
    // }

    // const substring = props.farmerIndex.farmerName.toLowerCase().split(" ")[0];

    let filteredMarcalaIntakeLots = [];

    // MarcalaIntake
    const [marcalaIntakeLots, setMarcalaIntakeLots] = useState('');

    // const [marcalaIntakeLotIds, setMarcalaIntakeLotIds] = useState([]);


    useEffect(() => {

        // fetch(`${process.env.REACT_APP_GET_NODE_LOT}/${props.farmerIndex.MarcalaIntakeNodeId}`, {
        //     method: 'GET',
        //     headers: {
        //         'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
        //     }
        // }).then(res => {
        //     return res.json();
        // })
        //     .then(json => {

        //         setMarcalaIntakeLots(json);

        //     });

    }, [
        marcalaIntakeLots,
        filteredMarcalaIntakeLots
    ])

    // if (marcalaIntakeLots) {


    //     for (let i = 0; i < marcalaIntakeLots.lots.length; i++) {

    //         if (marcalaIntakeLots.lots[i].lotName.toLowerCase().includes(substring)) {

    //             filteredMarcalaIntakeLots.push(marcalaIntakeLots.lots[i]);

    //         }
    //     }
    // }

    console.log(filteredMarcalaIntakeLots);

    return (
        <section className="processing-section-bg" style={{ 'padding-top': '4em', 'padding-bottom': '1em', 'min-height': '50vh' }}>

            <Container>

                <h2 style={{ color: 'white' }}>Processed and Exported by Catracha Coffee</h2>
                <p style={{ color: 'white' }}>A social enterprise dedicated to accessing the specialty coffee market for coffee farmers in Santa Elena, La Paz, Honduras.</p>

                {/* {
                    marcalaIntakeLots && filteredMarcalaIntakeLots

                        ?
                        <ProcessingSectionPagination

                            farmerName={props.farmerIndex.farmerName}

                            numberOfLots={filteredMarcalaIntakeLots}
                            processingLotIds={paginate(filteredMarcalaIntakeLots)}

                        />

                        :

                        ''

                } */}

            </Container>


        </section>
    );
}

export default ProcessingExport;