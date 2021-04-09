import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [farmers, setFarmers] = useState([
        // {
        //     farmerName: 'Gloria',
        //     farmerPicture: 'https://robohash.org/1?set=set4',
        //     harvestGeneralNodeID: 'a4c8bf16-7c5b-44d9-a25b-2635bc9d803e',
        //     harvestLotId: '1f102274-00be-4074-b6e8-19688f4901a6',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Luis',
        //     farmerPicture: 'https://robohash.org/2?set=set4',
        //     harvestGeneralNodeID: '5b10dd8f-2d9b-4595-98ab-4896ece46466',
        //     harvestLotId: 'c966a77d-ab37-4bc5-90be-9f8bc5b29a2c',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Atanacio',
        //     farmerPicture: 'https://robohash.org/3?set=set4',
        //     harvestGeneralNodeID: '174a5f0c-0a98-46b9-b1af-c3fee2e78470',
        //     harvestLotId: '60c7d78f-02cd-4d55-ae37-1092ffaf74a7',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'David',
        //     farmerPicture: 'https://robohash.org/4?set=set4',
        //     harvestGeneralNodeID: 'f5b260cf-afd8-4525-9533-4562a8741f0a',
        //     harvestLotId: '4b8d3aae-d07e-462a-abb8-ea09e2145d18',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Jose Antonio Nolasco',
        //     farmerPicture: 'https://robohash.org/5?set=set4',
        //     harvestGeneralNodeID: '8c8a341d-112d-43a0-bc28-8d7b5eceb697',
        //     harvestLotId: '73fa79db-200b-4e0a-9ae1-8d3b9bb7967c',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Adan Hernandez',
        //     farmerPicture: 'https://robohash.org/6?set=set4',
        //     harvestGeneralNodeID: 'd7a3d524-d8fa-4f0d-b695-e5c7dfbc09a2',
        //     harvestLotId: '6c99f5eb-baf1-4ecc-a06c-4541198a2563',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        {
            farmerName: 'Claudia & Juan',
            farmerPicture: '../../src/images/slideOne.jpg',
            harvestGeneralNodeID: '702079e1-62c8-4087-bc82-544acf15d141',
            harvestLotIds: ["266b83d3-0a8d-4e8e-b380-a58487988f13",
                "aee0370c-214e-422d-8d3f-32fdc006b652",
                "368e6e57-8432-44dd-8e1d-5e9eeb25c046",
                "48ab0129-8bea-477c-bbf8-3a6cff4a8b15",
                "7ab506ff-57c1-48a7-8e0e-bd8a73ce3512",
                "a3d9df53-e520-4f0d-b2a8-e2e13f744a32",
                "5d48512e-6b6d-41bc-90e3-a3396937f97a",
                "b874f685-0cc8-4d80-b9f3-1dbaceddd5c9",
                "75548348-afe9-4cd5-b05b-3e261d0a36df",
                "588fc370-80eb-44a4-97df-a5cebca0a039",
                "932c3acf-943a-4a5e-b972-84071dfee949",
                "3e767b37-6374-4263-aa78-d58908302400",
                "856899eb-d96f-411c-b82d-4761af23c3f4",
                "95d070b6-57b8-4b79-a6eb-92b7da4a8fd6",
                "83f694a4-5ed8-43bb-86de-1636c5d13b99",
                "e3b4fe4a-5aba-4c08-b469-4e3bbe2b4479",
                "0b5dd230-394b-4a13-9e0a-53f01ad14efc",
                "19097575-3f74-4055-a2aa-fc0bbd3220e1",
                "e1c77b43-941d-4059-9930-916877ba9958",
                "4bdf98f9-82e4-44e5-967c-747873842c04",
                "ed6edf9d-6386-4722-8aae-6686d23efe86",
                "62576b00-92ab-41c0-94aa-1ca1f3961687",
                "100a8b39-3cb9-4ceb-b0f7-81ae722b867a",
                "e05d3f7d-2046-4d64-9060-ad81d1a3cb34",
                "ac154ed3-fa5a-4fa5-abbc-9883b4d9163f",
                "c58220b1-ef17-4506-beb8-09ad5522f08d",
                "03522d55-7be4-4af7-ad9d-d1e5d465060c",
                "dc16a566-a30b-46b4-bd23-407faec4a381",
                "aa3e0a4c-5f9d-4729-b673-069ab4d82c2d",
                "9b38d480-c54c-4bc7-ae64-a57a10e1d5d5",
                "77f23537-a676-4674-9830-c6ca9ac4e7e3",
                "aecef73d-7cb9-45b8-a879-5fd6f9067b8c",
                "bd489413-53cf-4610-bd7b-84cba5cc4fe7",
                "a7f24803-e14d-4ccc-97d7-7e36d3f1920b",
                "fc7e7ee5-cdf1-4e7b-a539-2ff23080e36c",
                "05a53125-e75c-4471-bbd6-51e89d7dd0a0",
                "a9564c0c-01b4-422d-8eeb-7373f173b44c",
                "a972494c-a338-4a79-b098-0ea05f2f636c",
                "e49a9dbb-f01a-477a-8e09-ddade3eb8511",
                "400dd108-aea4-4fd5-8490-b92d21eaa52a",
                "967731e3-3d14-4c3d-a095-020e820cef0d",
                "d6386279-13b3-40fe-aa0a-854cfa1791de",
                "155a3099-5d42-4039-b028-629899c26319",
                "ba0528b4-0539-469b-9da9-5c54426ad26a",
                "b91765d6-7c4b-442f-b627-a561f9c6f0f5",
                "9eb85492-9076-4945-9526-5cd7687838d3",
                "edb07e9a-12d7-4ae9-914e-1b41a02432de",
                "a086ec37-1652-4d58-987e-07ff645f63b4",
                "1bb090d3-c7ae-4e8d-9f15-52dc43b8d0e8",
                "6130723c-63b6-43e8-afeb-41e3eec9e3b7",
                "e15f40a1-1459-41be-89ce-b2d5ddaf2289",
                "45f41808-f897-4a55-92e3-e7eeae2d5eef",
                "11801240-2c0b-4197-a903-5ad09f961219",
                "f0edf4dd-eac2-4f60-8e2b-bfaf70dd7e54",
                "f83be741-e587-45e4-8db2-363f39dd7082",
                "cf363d82-1525-42b3-9a12-aa2baf3a83ee",
                "940ccb64-f688-4bae-ab73-7f1446cf1f75",
                "bb2dc393-75f2-4d7d-9a26-8a21205cc3a8",
                "a6001887-59b3-4ed1-b7ad-e9adbf146f3c",
                "39f45766-26ba-4cc1-b272-c6c962fa05c3",
                "8055f078-a44c-4c1e-82a0-0eebee924216",
                "bbee5522-3de6-48d9-8cd9-e5e380eee7ef",
                "ab10e713-87c7-4445-9fb1-6db9473931d6",
                "4f9fadc1-69c1-4208-bff9-cd23c05f049e",
                "2274e4be-0e63-4074-b114-5a36d20a61e6",
                "b5722a59-9c20-494a-81a1-66e9b14a0072",
                "41f2a111-3378-4499-ae7a-8ed1532b86fb"],
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
            intakeNodeIds: ["95769a1b-93b2-4f60-b6f6-2725c4784a37",
                "0b35f4d3-bb85-4c2c-8d29-e655a09bd03c",
                "cf89d142-cff8-49c1-bed3-e3cb729de9e1",
                "a72b07ca-7269-4535-8a3c-fe86eec71047",
                "8dab8f8f-ddb4-4e63-a8ae-9449a0eb0e71"]
        },
        {
            farmerName: 'Mirian Vasquez',
            farmerPicture: 'https://robohash.org/7?set=set4',
            harvestGeneralNodeID: '1dd07753-5a46-4151-a720-badaa9462153',
            harvestLotIds: ["e6d2169c-1832-4d6c-99f0-ef7ce201814f", "bca0833a-5ca8-4ab9-9a09-f865b3e83fb4", "fb23bd3c-0e7d-43bb-a19b-7662fe200b4f", "cf8be016-e1fe-4599-ae95-67ad0f0953a7", "be21e722-c84b-4b59-823b-8556be2cfbbd", "81594155-075b-4d2c-b8e5-c2a1e7bab24c", "7c4d9215-f8ba-47f2-abaf-3a605583c9ed", "41607094-0602-4d83-a1c6-72f3673158b0", "5fac7aec-4e7e-47bf-bf5a-3d33d4109fd9", "d67682b3-421f-45e6-a8ae-9a55b453c67e", "d6a87e15-fb8e-4e26-8160-3e360d929786", "8b639ef4-0e29-4a39-a245-dc2c9cce1335", "bbe52a53-b237-4398-a9d5-9453fd36a837"],
            processingLotIds: ["04601f12-8060-45ec-9b31-5c3dc1c206de"],
            intakeNodeIds: ''
        },
        // {
        //     farmerName: 'Fidelina',
        //     farmerPicture: 'https://robohash.org/8?set=set4',
        //     harvestGeneralNodeID: '77073017-c640-4822-ad6d-7e6fd51da0f8',
        //     harvestLotId: 'be0ae838-c8e1-4c82-9812-7dcec972cc16',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Rigoberto',
        //     farmerPicture: 'https://robohash.org/10?set=set4',
        //     harvestGeneralNodeID: 'c0cd6532-86dd-4693-843a-5825cabb4e8e',
        //     harvestLotId: 'e6d2169c-1832-4d6c-99f0-ef7ce201814f',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Maria Adela',
        //     farmerPicture: 'https://robohash.org/11?set=set4',
        //     harvestGeneralNodeID: '9efb04d1-76ab-4dae-94dd-29f0b0105fcc',
        //     harvestLotId: '4ab062aa-d308-44bb-bf69-0d6a837a27f7',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // },
        // {
        //     farmerName: 'Gumercindo',
        //     farmerPicture: 'https://robohash.org/12?set=set4',
        //     harvestGeneralNodeID: '6e374ca1-ea5f-4cc4-863e-ece4143cad48',
        //     harvestLotId: 'e6d2169c-1832-4d6c-99f0-ef7ce201814f',
        //     processingNodeID: '',
        //     intakeNodeID: ''
        // }
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