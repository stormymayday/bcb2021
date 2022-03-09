import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

//Icons
import { FaHandshake, FaShip, FaDollarSign, FaTruck, FaCheck } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { BsStarFill } from 'react-icons/bs';
import { MdSettingsRemote } from 'react-icons/md';
import { GiCoffeeBeans } from 'react-icons/gi';
import { IoMdCube } from 'react-icons/io';
import { IoRocketSharp } from 'react-icons/io5';
import { VscFileBinary } from 'react-icons/vsc';
import { RiVirusFill } from 'react-icons/ri';

//Logos
import qccclogo from '../src/images/qc-logo-p-500.png';
import catratchalogo from '../src/images/catracha-logo.jpg';
import oldsoullogo from '../src/images/oldsoullogo-trans.png';
import royalcoffeelogo from '../src/images/royalcoffeelogo.png';
import posnerlogo from '../src/images/posner-logo.png';

// Images
import ClaudiaAndJuanThirdPayment from '../src/images/WhatsApp Image 2021-02-15 at 12.39.06 PM.jpeg';

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
        },
        {
            mediaName: `Arrow Electronics Update: Technology Project Helps Coffee Growers Increase Revenue`,
            mediaUrl: 'https://www.3blmedia.com/news/arrow-electronics-update-technology-project-helps-coffee-growers-increase-revenue',
            mediaImg: 'https://www.3blmedia.com/sites/www.3blmedia.com/files/images/Juan_and_Claudia_.jpeg'
        },
        {
            mediaName: `Blockchain enables Denver coffee drinkers to support Honduran farmers`,
            mediaUrl: 'https://www.comunicaffe.com/blockchain-enables-denver-coffee-drinkers-to-support-honduran-farmers/',
            mediaImg: 'https://www.3blmedia.com/sites/www.3blmedia.com/files/styles/fmr_page_photos_mm_2_col/public/images/Coffee_Roasting_2.png?itok=aajaOjEF'
        },
        {
            mediaName: `Life on Capitol Hill - Business Matters`,
            mediaUrl: 'https://www.lifeoncaphill.com/stories/business-matters,385516?',
            mediaImg: 'https://www.lifeoncaphill.com/images/nameplates/life-on-capitol-hill.png'
        },
        {
            mediaName: `Doing good through sustainable businesses`,
            mediaUrl: 'https://www.ideglobal.org/story/small-businesses-doing-good',
            mediaImg: 'https://cdn.ideglobal.org/images/photo/_1440x810_crop_center-center/16-9-Catracha.jpg?mtime=20201211224924'
        },
        {
            mediaName: `Podcast: Old Soul Co.'s Jason Griest on Sacramento Coffee Scene`,
            mediaUrl: 'https://www.visitsacramento.com/blog/stories/post/podcast-old-soul-cos-jason-griest-on-sacramento-coffee-scene/',
            mediaImg: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_400,q_75,w_1366/v1/clients/sacramento/Old_Soul_Alley_e571b59a-9a24-49c9-b39b-1d01a9a5be0e.jpg'
        }
    ]);

    const [timelineElements, setTimelineElements] = useState([
        {
            id: 23,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Nov 16 2021',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: IoMdCube,
            title: `First roast of Luis' 2021 blockchained coffee by Old Soul Co.`,
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 22,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Sep 30 2021',
            iconStyle: { background: '#D0A555', color: '#fff' },
            icon: FaHandshake,
            title: 'Old Soul Co. agreed to join!',
            subTitle: 'Sacramento, CA',
            text: '',
            media: oldsoullogo,
            mediaURL: 'https://oldsoulco.com/',
        },
        {
            id: 21,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Sep 2 2021',
            iconStyle: { background: '#D72128', color: '#fff' },
            icon: FaShip,
            title: `Majority of tracked coffee arrives at Royal Coffee warehouse`,
            subTitle: 'Oakland, CA',
            text: '',
            media: royalcoffeelogo,
            mediaURL: 'https://royalcoffee.com/',
        },
        {
            id: 20,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Aug 23 2021',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: FaHandshake,
            title: `Third payment concept introduced by Catracha`,
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 19,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Aug 9 2021',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: IoRocketSharp,
            title: `Version 2 of the blockchaincoffeebeans.com site launched`,
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 18,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Jul 15 2021',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: FaShip,
            title: `Majority of tracked coffee exported`,
            subTitle: 'Puerto Cortes, Honduras',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 17,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Feb 17 2021',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: VscFileBinary,
            title: `Version 2 of the blockchaincoffeebeans.com site in development`,
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 16,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Feb 15 2021',
            iconStyle: { background: '#FFD700', color: '#fff' },
            icon: FaDollarSign,
            title: `3rd payment Money Reached Claudia and Juan in full`,
            subTitle: 'La Paz, Honduras',
            text: 'Farmers in this case made $526 more, which is a 36% increase of the revenue normally would have earned!',
            media: ClaudiaAndJuanThirdPayment,
            mediaURL: '',
        },
        {
            id: 15,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Nov 2 2020',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: IoRocketSharp,
            title: `blockchaincoffeebeans.com site launched`,
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 14,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Oct 1 2020',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: FaTruck,
            title: `Claudia's and Juan's coffee arrived at QCCC`,
            subTitle: 'Denver, CO',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 13,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Aug 20 2020',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: FaShip,
            title: 'Container of coffee arrives in US',
            subTitle: 'Oakland, CA',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 12,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Jul 10 2020',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: FaShip,
            title: 'Coffee exported',
            subTitle: 'Puerto Cortes, Honduras',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 11,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Mar 1 2020',
            iconStyle: { background: '#D72128', color: '#fff' },
            icon: RiVirusFill,
            title: 'Coronavirus began to disrupt lives worldwide',
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 10,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Feb 14 2020',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: GiCoffeeBeans,
            title: 'Last 2020 harvest for Claudia and Juan',
            subTitle: 'Aguanqueterique, La Paz, Honduras',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 9,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Jan 13 2020',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: GiCoffeeBeans,
            title: 'First 2020 harvest for Claudia and Juan',
            subTitle: 'Aguanqueterique, La Paz, Honduras',
            text: 'Information is recorded on a smart phone.',
            media: '',
            mediaURL: '',
        },
        {
            id: 8,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Dec 20 2019',
            iconStyle: { background: '#654321', color: '#fff' },
            icon: GiCoffeeBeans,
            title: 'Last roast of 2019 batch',
            subTitle: 'Denver, CO',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 7,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Dec 3 2019',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: VscFileBinary,
            title: 'Data model confirmed',
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 6,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Oct 9 2019',
            iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
            icon: FaHandshake,
            title: 'All parties confirmed participation in blockchain coffee project!',
            subTitle: '',
            text: '',
            media: '',
            mediaURL: '',
        },
        {
            id: 5,
            contentStyle: { background: '#AF1115', color: '#fff' },
            contentArrowStyle: { borderRight: '7px solid  #AF1115' },
            date: 'Aug 21 2019',
            iconStyle: { background: '#AF1115', color: '#fff' },
            icon: FaHandshake,
            title: 'Catracha agreed to join!',
            subTitle: 'Marcala, La Paz, Honduras',
            text: '',
            media: catratchalogo,
            mediaURL: 'https://www.catrachacoffee.com/',
        },
        {
            id: 4,
            contentStyle: { background: 'rgb(0, 0, 0)', color: '#fff' },
            contentArrowStyle: { borderRight: '7px solid  rgb(0, 0, 0)' },
            date: 'Aug 07 2019',
            iconStyle: { background: 'rgb(0, 0, 0)', color: '#fff' },
            icon: FaHandshake,
            title: 'QCCC agreed to join!',
            subTitle: 'Denver, CO',
            text: '',
            media: qccclogo,
            mediaURL: 'https://queencitycollectivecoffee.com/',
        },
        {
            id: 3,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Jun 18 2019',
            iconStyle: { background: '#654321', color: '#fff' },
            icon: GiCoffeeBeans,
            title: 'Friends-cupping event at iDE annual meeting',
            subTitle: '',
            text: '',
            media: 'https://cdn.ideglobal.org/images/photo/_1440x810_crop_center-center/16x9-hero-coffee-cupping.jpg?mtime=20200720194050',
            mediaURL: '',
        },
        {
            id: 2,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'May 20 2019',
            iconStyle: { background: '#04B2DC', color: '#fff' },
            icon: FaCheck,
            title: 'Posner Center awarded grant to iDE and Bext360 for Blockchain Coffee Bean project',
            subTitle: '',
            text: '',
            media: posnerlogo,
            mediaURL: 'https://posnercenter.org/',
        },
        {
            id: 1,
            contentStyle: { background: 'rgb(255, 255, 255)', color: '#000' },
            contentArrowStyle: { borderRight: '7px solid  rgb(255, 255, 255)' },
            date: 'Jan 1 2019',
            iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
            icon: GiCoffeeBeans,
            title: 'Claudia and Juan picked their first cherries in 2019',
            subTitle: 'Aguanqueterique, La Paz, Honduras',
            text: '',
            media: '',
            mediaURL: '',
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
            value={{ loading, roasters, media, setSearchTerm, farmersMongoDB, timelineElements }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }