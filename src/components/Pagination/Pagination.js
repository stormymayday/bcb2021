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
} from './Pagination.styles';

import HarvestLotCard from '../HarvestLotCard/HarvestLotCard';

// import { useFetch } from './useFetch'
// import Follower from './Follower'

const Pagination = (props) => {

    // const data = props.harvestLotIds;

    // console.log(props.harvestLotIds, props.harvestLots);

    const [data, setData] = useState(props.harvestLotIds);
    // const [data, setData] = useState(
    //     [["266b83d3-0a8d-4e8e-b380-a58487988f13", "aee0370c-214e-422d-8d3f-32fdc006b652", "368e6e57-8432-44dd-8e1d-5e9eeb25c046", "48ab0129-8bea-477c-bbf8-3a6cff4a8b15"]],
    //     [["7ab506ff-57c1-48a7-8e0e-bd8a73ce3512", "a3d9df53-e520-4f0d-b2a8-e2e13f744a32", "5d48512e-6b6d-41bc-90e3-a3396937f97a", "b874f685-0cc8-4d80-b9f3-1dbaceddd5c9"]],
    //     [["75548348-afe9-4cd5-b05b-3e261d0a36df", "588fc370-80eb-44a4-97df-a5cebca0a039", "932c3acf-943a-4a5e-b972-84071dfee949", "3e767b37-6374-4263-aa78-d58908302400"]],
    //     [["856899eb-d96f-411c-b82d-4761af23c3f4", "95d070b6-57b8-4b79-a6eb-92b7da4a8fd6", "83f694a4-5ed8-43bb-86de-1636c5d13b99", "e3b4fe4a-5aba-4c08-b469-4e3bbe2b4479"]]);
    const [page, setPage] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {

        // if (props.harvestLots) {
        //     setData(props.harvestLots);
        // }
        setItems(data[page]);

    }, [data, page])

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

    console.log(props.harvestLotIds);

    return (
        <div>
            <SectionTitleContainer>
                {/* <h2>Pagination Component ({props.numberOfLots} Harvest Lots)</h2> */}
                {/* <Underline /> */}
            </SectionTitleContainer>
            <CardsSection>
                {/* <CardContainer>
                    {props.harvestLotIds.map((harvestLot) => {
                        return <HarvestLotCard key={harvestLot.id} harvestLot={harvestLot} />
                    })}
                </CardContainer> */}


                <CardContainer>
                    {
                        data ?

                            items.map((item) => {
                                return <HarvestLotCard key={item.id} harvestLot={item} />
                            })

                            : 'hello'

                    }
                </CardContainer>

                <ButtonContainer>
                    {

                        data ?

                            data.map((item, index) => {
                                return (
                                    <PageButton
                                        key={index}
                                        onClick={() => handlePage(index)}
                                    >
                                        {index + 1}
                                    </PageButton>
                                )
                            })

                            : 'hello'

                    }
                    {/* {data.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={`page-btn ${index === page ? 'active-btn' : null}`}
                                onClick={() => handlePage(index)}
                            >
                                {index + 1}
                            </button>
                        )
                    })} */}
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
        </div>
    )
}

export default Pagination;