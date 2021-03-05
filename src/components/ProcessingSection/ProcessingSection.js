import React, { useEffect, useState } from 'react';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// Components
import ProcessingSectionPagination from '../ProcessingSectionPagination/ProcessingSectionPagination';

const ProcessingSection = (props) => {

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
            <h2>Processing</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis necessitatibus molestias, sint, sed similique provident eveniet delectus a nobis maiores vitae sunt quia quod assumenda eligendi deserunt non excepturi repellat!</p>
            <ProcessingSectionPagination numberOfLots={props.numberOfLots} processingLotIds={paginate(props.processingLotIds)} ></ProcessingSectionPagination>
        </section>
    );
}

export default ProcessingSection;