import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');

    const [farmersMongoDB, setFarmersMongoDB] = useState({});

    let requestBody = {

        query: `

        query {
            farmers {

                _id

                farmerName
                producerName

                harvestNode {

                    _id

                    harvestNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    harvestLots {

                        _id

                        harvestLotId
                        harvestNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        value
                        asset
                        timestamp

                        coffeeVarietal

                        harvestDate
                    }
                }


                wetMillNode {

                    _id

                    wetMillNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    wetMillLots {

                        _id

                        wetMillLotId
                        wetMillNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        value
                        asset
                        timestamp

                        processingDate

                    }
                }

                exporterIntakeNode {

                    _id

                    exporterIntakeNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    exporterIntakeLots {

                        _id

                        exporterIntakeLotId
                        exporterIntakeNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        value
                        asset
                        timestamp

                        processingDate
                    }
                }

                
                dryMillNode {

                    _id

                    dryMillNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    dryMillLots {

                        _id

                        dryMillLotId
                        dryMillNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        value
                        asset
                        timestamp

                        processingDate

                    }
                }

                exportNode {

                    _id

                    exportNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    exportLots {

                        _id

                        exportLotId
                        exportNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        secondPaymentValue
                        secondPaymentAsset
                        secondPaymentTimeStamp
                        secondPaymentNotes
                        spousePaymentValue
                        spousePaymentAsset
                        spousePaymentTimestamp
                        spousePaymentNotes
                        ihcafePaymentValue
                        ihcafePaymentAsset
                        ihcafePaymentTimeStamp
                        ihcafePaymentNotes
                        
                        numberOfBags

                    }
                }

                importNode {

                    _id

                    importNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    importLots {

                        _id

                        importLotId
                        importNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        fobBasePaymentValue
                        fobBasePaymentAsset
                        fobBasePaymentTimeStamp
                        fobBasePaymentNotes

                        fobPremiumPaymentValue
                        fobPremiumPaymentAsset
                        fobPremiumPaymentTimestamp
                        fobPremiumPaymentNotes

                        catrachaCommunityContributionPaymentValue
                        catrachaCommunityContributionPaymentAsset
                        catrachaCommunityContributionPaymentTimeStamp
                        catrachaCommunityContributionPaymentNotes

                        numberOfBags
                        damage
                        transferDate

                    }
                }

                roasterIntakeNode {

                    _id

                    tagline
                    websiteUrl

                    roasterIntakeNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    value
                    valueUnit
                    unitValue
                    unitValueUnit

                    locationId
                    name
                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    address

                    roasterIntakeLots {

                        _id

                        roasterIntakeLotId
                        roasterIntakeNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        numberOfBags
                        damage
                        transferDate
                        receivedDate

                        fobPaymentValue
                        fobPaymentAsset
                        fobPaymentTimestamp
                        fobPaymentNotes

                        importCostValue
                        importCostAsset
                        importCostTimestamp
                        importCostNotes

                        freightCostValue
                        freightCostAsset
                        freightCostTimetamp
                        freightCostNotes

                        roastingCostValue
                        roastingCostAsset
                        roastingCostTimestamp
                        roastingCostNotes

                    }

                }

                roastingNode {

                    _id

                    roastingNodeId

                    totaAbsorbedWeight
                    totalAbsorbedWeightUnit

                    organizationId
                    marketplaceId
                    defaultLocationId
                    nodeName
                    nodeType
                    nodeDetailType
                    createdDate
                    lastModifiedDate
                    organizationName

                    images
                    videos
                    documents

                    value
                    valueUnit
                    unitValue
                    unitValueUnit

                    locationId
                    name
                    country
                    city
                    state
                    latitude
                    longitude
                    elevation
                    elevationUnit

                    address

                    roastingLots {

                        _id

                        roastingLotId
                        roastingNodeId

                        organizationId
                        marketplaceId
                        productId
                        lotName
                        lotType
                        lotDetailType
                        createdDate
                        lastModifiedDate
                        productName
                        productToken
                        productSku
                        organizationName
                        currentWeight
                        currentWeightUnit
                        absorbedWeight
                        absorbedWeightUnit
                        quality
                        lotIsOpen

                        images
                        documents
                        videos

                        roasterActor
                        roastDate
                        chargeTemperature
                        dropTemperature
                        totalRoastTime
                        roastType
                        roastLossQuantity
                        roastingNotes
                        tastingNotes

                        cuppingScore

                    }

                }

            }
        }

      `
    };


    const [roasters, setRoasters] = useState([
        {
            roasterName: 'Queen City',
            roasterUrl: 'https://queencitycollectivecoffee.com/',
            logo: '../../images/slideTwo.jpg'
        },
        {
            roasterName: 'Old Soul Co.',
            roasterUrl: 'https://oldsoulco.com/',
            logo: '../../images/oldsoullogo-trans.png'
        },
        {
            roasterName: 'Andytown',
            roasterUrl: 'https://www.andytownsf.com/',
            logo: '../../images/oldsoullogo-trans.png'
        }
    ]);

    const [media, setMedia] = useState([
        {
            mediaName: `Catracha Coffee: Single Origin`,
            mediaUrl: 'https://www.youtube.com/watch?v=xnv6MRVwcgM',
            mediaImg: 'https://img.youtube.com/vi/xnv6MRVwcgM/maxresdefault.jpg'
        },
        {
            mediaName: `Updates from Catracha Coffee Pt. 1: Maria Adela's Coffee`,
            mediaUrl: 'https://www.andytownsf.com/andytown-blog/2021/10/21/updates-from-catracha-coffee-pt-1-maria-adelas-coffee',
            mediaImg: 'https://images.squarespace-cdn.com/content/v1/5254408ae4b007332ef69d54/1635784499039-EB6B28PVFPERWG6D2I87/Catracha+Maria+Adela+Portrait.jpg?format=750w'
        },
        {
            mediaName: `Updates from Catracha Coffee Pt. 2: The Blockchain Project`,
            mediaUrl: 'https://www.andytownsf.com/andytown-blog/2021/11/2/updates-from-catracha-coffee-pt-2-the-blockchain-project',
            mediaImg: 'https://images.squarespace-cdn.com/content/v1/5254408ae4b007332ef69d54/1634837606602-Q2YMVIXXVO1K9QXKTIJ6/QR+blockchain_Catracha+Atown.png?format=500w'
        },
        {
            mediaName: `Updates from Catracha Coffee Pt.3: Crafts from Catracha Colectivo`,
            mediaUrl: 'https://www.andytownsf.com/andytown-blog/2021/11/24/updates-from-catracha-coffee-pt3-crafts-from-catracha-collectivo',
            mediaImg: 'https://images.squarespace-cdn.com/content/v1/5254408ae4b007332ef69d54/c5ad1f98-4800-4605-bbd3-df12b7186342/Jiny%2C+Azarael%2C+Gladys.jpg?format=750w'
        },
        {
            mediaName: `Project Summary: Blockchain Beans`,
            mediaUrl: 'https://www.ideglobal.org/key-project/blockchain-coffee-beans',
            mediaImg: 'https://cdn.ideglobal.org/images/photo/_1920x1080_crop_center-center/16x9-hero-coffee-in-hand.jpg?mtime=20200720193128'
        },
        {
            mediaName: `Partnerships Turn Local into Global`,
            mediaUrl: 'https://www.ideglobal.org/story/queen-city-partnership',
            mediaImg: 'https://cdn.ideglobal.org/images/hero/article/_1920x640_crop_center-center/3x1-qc-coffee-partnership.jpg?mtime=20211102203922'
        },
        {
            mediaName: `Bext360 CEO Daniel Jones on "The Evolution of Innovation"`,
            mediaUrl: 'https://www.youtube.com/watch?v=VIEKC7ZNRyA',
            mediaImg: 'https://img.youtube.com/vi/VIEKC7ZNRyA/sddefault.jpg'
        },
        {
            mediaName: `Bext360 Allyson Quijano - Techstars/The Nature Conservancy Event`,
            mediaUrl: 'https://www.youtube.com/watch?v=nCp-7XGZkvE',
            mediaImg: 'https://img.youtube.com/vi/nCp-7XGZkvE/sddefault.jpg'
        },
        {
            mediaName: `Forging linkages in value chain with blockchain - iDE's Experience`,
            mediaUrl: 'https://vimeo.com/673382286',
            mediaImg: 'https://vumbnail.com/673382286.jpg'
        }
    ]);

    useEffect(() => {

        fetch(`${process.env.REACT_APP_GRAPHQL_URL}`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error('Failed!');
                }
                return res.json();
            })
            .then(resData => {

                console.log(resData.data.farmers);

                setFarmersMongoDB(resData.data.farmers);

            })
            .catch(err => {
                console.log(err);
            });

    }, [])

    return (
        <AppContext.Provider
            value={{ loading, roasters, media, setSearchTerm, farmersMongoDB }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }