import React, { useState, useEffect } from 'react';

// Styled Components
import {
    PaginationContainer,
    SectionTitleContainer,
    Underline,
    CardsSection,
    CardContainer,
    ButtonContainer,
    PageButton
} from './ProcessingSectionPagination.styles';

import ProcessingLotCard from '../ProcessingLotCard/ProcessingLotCard';
import { Container } from 'react-bootstrap';

const ProcessingSectionPagination = (props) => {

    // console.log(props);

    const data = props.processingLotIds;
    // console.log(props.processingLotIds);

    const [page, setPage] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data[page]);
    }, [page])

    const handlePage = (index) => {
        setPage(index)
    }

    // useEffect(() => {
    //     if (loading) return
    //     setFollowers(data[page])
    // }, [loading, page])

    // const nextPage = () => {
    //     setPage((oldPage) => {
    //         let nextPage = oldPage + 1
    //         if (nextPage > data.length - 1) {
    //             nextPage = 0
    //         }
    //         return nextPage
    //     })
    // }

    // const prevPage = () => {
    //     setPage((oldPage) => {
    //         let prevPage = oldPage - 1
    //         if (prevPage < 0) {
    //             prevPage = data.length - 1
    //         }
    //         return prevPage
    //     })
    // }

    // const handlePage = (index) => {
    //     setPage(index)
    // }

    // let string = props.harvestLot.lotName.toLowerCase();

    // let substring = props.farmerName.toLowerCase().split(" ")[0];

    // let condition = string.includes(substring, 0);

    return (

        <div>
            <SectionTitleContainer>
                {/* <h2>Processing Pagination Component ({props.numberOfLots} Lots)</h2> */}
            </SectionTitleContainer>
            <CardsSection>
                {
                    items ?

                        <CardContainer>
                            {

                                items.map((item) => {
                                    return <ProcessingLotCard key={item.id} harvestLot={item} farmerName={props.farmerName} />
                                })

                            }
                        </CardContainer>

                        :

                        'Coming Soon'

                }
                <ButtonContainer>
                    {data.map((item, index) => {
                        return (
                            <PageButton
                                key={index}
                                onClick={() => handlePage(index)}
                            >
                                {index + 1}
                            </PageButton>
                        )
                    })}
                </ButtonContainer>
            </CardsSection>
            {/* <div className='section-title'>
                <h1>{loading ? 'loading...' : 'pagination'}</h1>
                <div className='underline'></div>
            </div>
            <section className='followers'>
                <div className='container'>
                    {followers.map((follower) => {
                        return <Follower key={follower.id} {...follower} />
                    })}
                </div>
                {!loading && (
                    <div className='btn-container'>
                        <button className='prev-btn' onClick={prevPage}>
                            prev
            </button>
                        {data.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`page-btn ${index === page ? 'active-btn' : null}`}
                                    onClick={() => handlePage(index)}
                                >
                                    {index + 1}
                                </button>
                            )
                        })}
                        <button className='next-btn' onClick={nextPage}>
                            next
            </button>
                    </div>
                )}
            </section> */}

        </div >
    )
}

export default ProcessingSectionPagination;