import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [farmers, setFarmers] = useState([
        {
            farmerName: 'Gloria',
            farmerPicture: 'https://robohash.org/1?set=set4',
            harvestGeneralNodeID: 'a4c8bf16-7c5b-44d9-a25b-2635bc9d803e',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Luis',
            farmerPicture: 'https://robohash.org/2?set=set4',
            harvestGeneralNodeID: '5b10dd8f-2d9b-4595-98ab-4896ece46466',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Atanacio',
            farmerPicture: 'https://robohash.org/3?set=set4',
            harvestGeneralNodeID: '174a5f0c-0a98-46b9-b1af-c3fee2e78470',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'David',
            farmerPicture: 'https://robohash.org/4?set=set4',
            harvestGeneralNodeID: 'f5b260cf-afd8-4525-9533-4562a8741f0a',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Jose Antonio Nolasco',
            farmerPicture: 'https://robohash.org/5?set=set4',
            harvestGeneralNodeID: '8c8a341d-112d-43a0-bc28-8d7b5eceb697',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Adan Hernandez',
            farmerPicture: 'https://robohash.org/6?set=set4',
            harvestGeneralNodeID: 'd7a3d524-d8fa-4f0d-b695-e5c7dfbc09a2',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Mirian Vasquez',
            farmerPicture: 'https://robohash.org/7?set=set4',
            harvestGeneralNodeID: '1dd07753-5a46-4151-a720-badaa9462153',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Fidelina',
            farmerPicture: 'https://robohash.org/8?set=set4',
            harvestGeneralNodeID: '77073017-c640-4822-ad6d-7e6fd51da0f8',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Claudia & Juan',
            farmerPicture: 'https://robohash.org/9?set=set4',
            harvestGeneralNodeID: '702079e1-62c8-4087-bc82-544acf15d141',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Rigoberto',
            farmerPicture: 'https://robohash.org/10?set=set4',
            harvestGeneralNodeID: 'c0cd6532-86dd-4693-843a-5825cabb4e8e',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Maria Adela',
            farmerPicture: 'https://robohash.org/11?set=set4',
            harvestGeneralNodeID: '9efb04d1-76ab-4dae-94dd-29f0b0105fcc',
            processingNodeID: '',
            intakeNodeID: ''
        },
        {
            farmerName: 'Gumercindo',
            farmerPicture: 'https://robohash.org/12?set=set4',
            harvestGeneralNodeID: '6e374ca1-ea5f-4cc4-863e-ece4143cad48',
            processingNodeID: '',
            intakeNodeID: ''
        }
    ]);

    return (
        <AppContext.Provider
            value={{ loading, farmers, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }