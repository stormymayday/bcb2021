import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');




    const [roasters, setRoasters] = useState([
        {
            roasterName: 'Queen City',
            roasterUrl: 'https://queencitycollectivecoffee.com/'
        }
    ]);



    const [farmers, setFarmers] = useState([
        {
            farmerName: 'Claudia & Juan',
            farmerPicture: '',
            harvestGeneralNodeID: '702079e1-62c8-4087-bc82-544acf15d141',
            harvestLotIds: [],
            processingLotIds: ["04601f12-8060-45ec-9b31-5c3dc1c206de",
                "86bfef75-9ffe-4984-a9f8-be370fdbc309",
                "d6dcfac5-0610-44bb-a53b-3ba19a4b4a0b",
                "db3457a8-4262-4170-b7d0-ff0f04325805",
                "0bedef98-c38a-430b-b848-843504d90029",
                "36be097a-8f71-4136-90c1-8fdf80dea971",
                "8978b880-2e04-4fef-a252-0aca0c19e172",
                "5e957345-e657-442a-804d-f342de4b85d7",
                "6c4af25b-c0e6-4ac0-9597-89809fdeb122",
                "476fc798-b1fe-4f34-a8af-3ad7ce0eecf7",
                "8dc1ef52-2e4b-4e04-b8e4-7fb8bed63174",
                "3671514d-0de8-4f00-8db6-e1e070036e80",
                "793b5552-03ba-44d4-91d2-c0801de689cc",
                "b1f2c43d-7a10-4dc2-8d3e-5151f6f0af70",
                "24995ef1-64eb-4e6d-96ca-5d0391f5f2bc",
                "fca23d55-c571-454e-964c-fbe3c7992941",
                "7a29756d-48c6-4586-be82-eef1a97e65bd",
                "0264a7f1-fae7-4c01-aeef-c863cf6fd610"],
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []

        },
        {
            farmerName: 'Mirian Vasquez',
            farmerPicture: '',
            harvestGeneralNodeID: '1dd07753-5a46-4151-a720-badaa9462153',
            harvestLotIds: [],
            processingLotIds: [],
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'David',
            farmerPicture: 'https://robohash.org/4?set=set4',
            harvestGeneralNodeID: 'f5b260cf-afd8-4525-9533-4562a8741f0a',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Fidelina',
            farmerPicture: 'https://robohash.org/8?set=set4',
            harvestGeneralNodeID: '77073017-c640-4822-ad6d-7e6fd51da0f8',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Jose Antonio Nolasco',
            farmerPicture: 'https://robohash.org/5?set=set4',
            harvestGeneralNodeID: '8c8a341d-112d-43a0-bc28-8d7b5eceb697',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Luis',
            farmerPicture: 'https://robohash.org/2?set=set4',
            harvestGeneralNodeID: '5b10dd8f-2d9b-4595-98ab-4896ece46466',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Atanacio',
            farmerPicture: 'https://robohash.org/3?set=set4',
            harvestGeneralNodeID: '174a5f0c-0a98-46b9-b1af-c3fee2e78470',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Rigoberto',
            farmerPicture: 'https://robohash.org/10?set=set4',
            harvestGeneralNodeID: 'c0cd6532-86dd-4693-843a-5825cabb4e8e',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Maria Adela',
            farmerPicture: 'https://robohash.org/11?set=set4',
            harvestGeneralNodeID: '9efb04d1-76ab-4dae-94dd-29f0b0105fcc',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Gloria',
            farmerPicture: 'https://robohash.org/1?set=set4',
            harvestGeneralNodeID: 'a4c8bf16-7c5b-44d9-a25b-2635bc9d803e',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Adan Hernandez',
            farmerPicture: 'https://robohash.org/6?set=set4',
            harvestGeneralNodeID: 'd7a3d524-d8fa-4f0d-b695-e5c7dfbc09a2',
            harvestLotIds: [],
            processingLotIds: '',
            MarcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            MarcalaIntakeLotIds: []
        },
        {
            farmerName: 'Gumercindo',
            farmerPicture: 'https://robohash.org/12?set=set4',
            harvestGeneralNodeID: '6e374ca1-ea5f-4cc4-863e-ece4143cad48',
            harvestLotIds: [],
            processingLotIds: '',
            marcalaIntakeNodeId: 'c32bae0b-daae-465b-92d0-b9e5fdbbf9ee',
            marcalaIntakeLotIds: []
        }
    ]);

    return (
        <AppContext.Provider
            value={{ loading, roasters, farmers, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }