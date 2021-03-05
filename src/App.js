import React, { useEffect, useState } from 'react';

// Google Analytics
import ReactGA from 'react-ga';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from './pages/Home';
import FarmerDetails from './pages/FarmerDetails';
import Error from './pages/Error';

// Components
import Navigation from './components/HomePageNavigation/HomePageNavigation';
import Hero from './components/Hero';
import Farmers from './components/Farmers';
import FarmerList from './components/FarmerList/FarmerList';
import Farming from './components/Farming';
import ProcessingExport from './components/ProcessingExport';
import Journey from './components/Journey';
import Roasting from './components/Roasting';
import EconomicsAndTransparency from './components/EconomicsAndTransparency';


const App = () => {

  // Lot History State (for Farming & Processing Sections)
  const [lotHistory, setLotHistory] = useState('fetching data from BEXT');

  // Farming Section State
  const [pickedBy, setPickedBy] = useState('fetching data from BEXT');
  const [pickedCherriesWeight, setPickedCherriesWeight] = useState('fetching data from BEXT');
  const [datePicked, setDatePicked] = useState('fetching data from BEXT');
  const [variety, setVariety] = useState('fetching data from BEXT');
  const [pickerImage, setPickerImage] = useState('fetching data from BEXT');
  const [dePulpingVideo, setDePulpingVideo] = useState('fetching data from BEXT');

  // Processing & Export Section State
  const [catrachaIntakeImage, setSatrachaIntakeImage] = useState('fetching data from BEXT');
  const [milledOnDate, setMilledOnDate] = useState('fetching data from BEXT');
  const [miller, setMiller] = useState('fetching data from BEXT');
  const [lotCurrentWeight, setLotCurrentWeight] = useState('fetching data from BEXT');
  const [millingLocation, setMillingLocation] = useState('fetching data from BEXT');
  const [millingVideo, setMillingVideo] = useState('fetching data from BEXT');
  const [millingImage, setMillingImage] = useState('fetching data from BEXT');

  // Journey Highlights Section State
  // Green Export
  const [exportedFrom, setExportedFrom] = useState('fetching data from BEXT');
  const [greenExportDate, setGreenExportDate] = useState('fetching data from BEXT');
  const [greenExportWeight, setGreenExportWeight] = useState('fetching data from BEXT');
  const [greenExportVideo, setGreenExportVideo] = useState('fetching data from BEXT');
  // Green Import
  const [greenImportLocation, setGreenImportLocation] = useState('fetching data from BEXT');
  const [greenImportDate, setGreenImportDate] = useState('fetching data from BEXT');
  const [greenImportImage, setGreenImportImage] = useState('fetching data from BEXT');
  // Green Intake
  const [intakeGreenLocation, setIntakeGreenLocation] = useState('fetching data from BEXT');
  const [intakeGreenDate, setIntakeGreenDate] = useState('fetching data from BEXT');
  const [intakeGreenWeight, setIntakeGreenWeight] = useState('fetching data from BEXT');
  const [intakeGreenCollector, setIntakeGreenCollector] = useState('fetching data from BEXT');
  const [intakeGreenVideo, setIntakeGreenVideo] = useState('fetching data from BEXT');

  // Roasting State
  const [roastingCounty, setRoastingCounty] = useState('fetching data from BEXT');
  const [roastingState, setRoastingState] = useState('fetching data from BEXT');
  const [roastingCity, setRoastingCity] = useState('fetching data from BEXT');
  const [cuppersNotes, setCuppersNotes] = useState('fetching data from BEXT');
  const [roastDate, setRoastDate] = useState('fetching data from BEXT');
  const [roasterName, setRoasterName] = useState('fetching data from BEXT');
  const [roastingImage, setRoastingImage] = useState('fetching data from BEXT');

  useEffect(() => {

    // // Render test
    // console.log('Hello From App.js');

    // // Google Analytics initiazation
    // ReactGA.initialize(`${process.env.REACT_APP_GA_ID}`);

    // // Page View Report
    // ReactGA.pageview('/');

    // // Dev Test getNode
    // fetch(`https://bext360api.azure-api.net/retaildev/v1/getnode/a4c8bf16-7c5b-44d9-a25b-2635bc9d803e`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': ``
    //   }
    // }).then(res => {
    //   return res.json();
    // })
    //   .then(json => {
    //     setDevTestgetNode(json.nodeId);
    //   });

    // // Getting all the nodes
    // fetch(`https://bext360api.azure-api.net/retaildev/v1/getnodes`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': ``
    //   }
    // }).then(res => {
    //   return res.json();
    // })
    //   .then(json => {
    //     setFarmers([
    //       ...json,
    //       {
    //         id: json.nodeId,
    //       }
    //     ]);
    //     // setFarmers(json => [...json]);
    //     // setResult(result => [...result, response]);
    //   });

    // // Lot History Call
    // fetch(`${process.env.REACT_APP_GET_LOT_HISTORY}/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => {
    //   return res.json();
    // })
    //   .then(json => {
    //     setLotHistory(json);
    //   });

    // // Farming Section Call
    // fetch(`${process.env.REACT_APP_GET_LOT}/5c955a2e-90ef-6bf4-fa8a-1813ee5d4687`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setPickedBy(json.customData['FarmerName.Measure'].value);
    //     setPickedCherriesWeight(json.customData['TotalValue.Measure'].value + ' lbs');
    //     setDatePicked(json.customData['HarvestDate.MeasureTime'].dateTimeValue);
    //     setVariety(json.customData['Varietal.Measure'].value);
    //     setPickerImage(json.customData['LotFarmerProductImage.Measure'].value);

    //   });
    // // Farming Section - Video Call
    // fetch(`${process.env.REACT_APP_GET_VIDEO}/df5e4e96-5133-4c85-ad5f-032d65182723`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {
    //     setDePulpingVideo('data:video/mp4;base64,' + json);
    //   });
    // // Farming Calls End

    // // Processing & Export Calls
    // // Catracha Intake Parchment - Image
    // fetch(`${process.env.REACT_APP_GET_IMAGE}/2d79f311-eb5f-4a4a-96b8-ec9adfca1617`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {
    //     setSatrachaIntakeImage('data:image/jpg;base64,' + json);
    //   });
    // // Milling Calls - date, miller, weight
    // fetch(`${process.env.REACT_APP_GET_LOT}/b0c1846f-8cef-410e-a2ec-f6d9f3843e9f`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setMilledOnDate(json.customData['MillingDate.MeasureTime'].dateTimeValue.split('T')[0]);
    //     setMiller(json.customData['FarmerName.Measure'].value);
    //     setLotCurrentWeight(json.currentWeight + ' lbs');

    //   });
    // // Milling Location
    // fetch(`${process.env.REACT_APP_GET_NODE}/8a14226b-873b-4893-bedc-a9699dc28472`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json()).then(json => {

    //   setMillingLocation(`${json.defaultLocation.city}, ${json.defaultLocation
    //     .state}, ${json.defaultLocation.country}`);

    // });
    // // Milling Video
    // fetch(`${process.env.REACT_APP_GET_VIDEO}/5b80c8dc-1dac-4eaf-8674-75052d83d0c5`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setMillingVideo('data:video/mp4;base64,' + json);

    //   });
    // // Milling Image
    // fetch(`${process.env.REACT_APP_GET_IMAGE}/14d5be6c-8f0e-48dd-88ca-46a1958a2fcf`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setMillingImage('data:image/jpg;base64,' + json);

    //   });
    // // Processing & Export Calls End

    // // Journey Calls
    // // Green Export - Exported From
    // fetch(`${process.env.REACT_APP_GET_NODE}/c51f7616-5fb6-4416-be83-c98dc0d25df1`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json()).then(json => {

    //   setExportedFrom(`${json.defaultLocation.city}, ${json.defaultLocation
    //     .state}, ${json.defaultLocation.country}`);

    // });
    // // Green Export - Date & Weight
    // fetch(`${process.env.REACT_APP_GET_LOT}/f1222ba7-0c10-4abf-b49f-c197be1ec8e1`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setGreenExportDate(`${json.customData['ExportDate.MeasureTime'].dateTimeValue.split('T')[0]}`);
    //     setGreenExportWeight(` ${json.absorbedWeight} Lbs`);

    //   });
    // // Green Export - Video
    // fetch(`${process.env.REACT_APP_GET_VIDEO}/c8bf9e23-1ae9-4422-8e00-984566d5663a`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {
    //     setGreenExportVideo('data:video/mp4;base64,' + json);
    //   });
    // // Green Import - Imported At
    // fetch(`${process.env.REACT_APP_GET_NODE}/b2d1d8b3-498b-424e-87df-3050aa237115`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json()).then(json => {

    //   setGreenImportLocation(`${json.defaultLocation.city}, ${json.defaultLocation
    //     .state}, ${json.defaultLocation.country}`);

    // });
    // // Green Import - Date
    // fetch(`${process.env.REACT_APP_GET_LOT}/8f43a6a8-52aa-45d6-9bba-cbf8f823037d`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {
    //     setGreenImportDate(`${json.customData['ImportDate.MeasureTime'].dateTimeValue.split('T')[0]}`);
    //   });
    // // Green Import - Image
    // fetch(`${process.env.REACT_APP_GET_IMAGE}/4aa16929-f043-4520-809d-d1f62cfb106d`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {
    //     setGreenImportImage('data:image/jpg;base64,' + json);
    //   });
    // // CIntake Green - Roaster Received in
    // fetch(`${process.env.REACT_APP_GET_NODE}/1dc41db1-f7b5-45f1-8810-432e6be023cb`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json()).then(json => {
    //   setIntakeGreenLocation(`${json.defaultLocation.city}, ${json.defaultLocation.state}, ${json.defaultLocation.country}`);
    // });
    // // Intake Green - Date, Weight, & Received by
    // fetch(`${process.env.REACT_APP_GET_LOT}/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setIntakeGreenDate(`${json.customData['TransportDate.MeasureTime'].dateTimeValue.split('T')[0]}`);
    //     setIntakeGreenWeight(`${json.currentWeight} Lbs`);
    //     setIntakeGreenCollector(`${json.customData['CollectorName.Measure'].value}`);

    //   });
    // // Intake Green - Video
    // fetch(`${process.env.REACT_APP_GET_VIDEO}/6d48b0b4-25d3-469e-9d60-a657724ca296`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {
    //     setIntakeGreenVideo('data:video/mp4;base64,' + json);
    //   });
    // // Journey Calls End

    // // Roasting Calls
    // fetch(`${process.env.REACT_APP_GET_NODE}/73427e9e-e29d-4b33-9a27-95244bdb0370`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json()).then(json => {

    //   setRoastingCounty(json.defaultLocation.country);
    //   setRoastingState(json.defaultLocation.state);
    //   setRoastingCity(json.defaultLocation.city);

    // });

    // fetch(`${process.env.REACT_APP_GET_LOT}/50933c21-a1b8-4774-b023-0b7ec19063f4`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setCuppersNotes(json.customData['CuppersNotes.Measure'].value);
    //     setRoastDate(json.customData['RoastDate.MeasureTime'].dateTimeValue);
    //     setRoasterName(json.customData['FarmerName.Measure'].value);

    //   });

    // fetch(`${process.env.REACT_APP_GET_IMAGE}/3ba5c81b-076c-4db4-a235-67a6b8b8e90f`, {
    //   method: 'GET',
    //   headers: {
    //     'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
    //   }
    // }).then(res => res.json())
    //   .then(json => {

    //     setRoastingImage('data:image/jpg;base64,' + json);

    //   });
    // Roasting Calls End

  }, [])


  // Testing
  // for (let i = 0; i < farmers.length; i++) {
  //   console.log(`Hello from App.js - farmers: ${farmers[i].nodeId}`);
  // }
  // console.log(`Hello from App.js - farmers: ${farmers}`);
  // console.log(`Hello from App.js - dev test node: ${devTestgetNode}`);



  return (
    <>
      {/* <Navigation /> */}
      {/* <Hero /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/farmer/:id/:index">
          <FarmerDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>

      {/* <FarmerList farmers={farmers} /> */}
      {/* <Farmers farmers={farmers} /> */}
      {/* <Farming
        lotHistory={lotHistory}
        pickedBy={pickedBy}
        pickedCherriesWeight={pickedCherriesWeight}
        datePicked={datePicked}
        variety={variety}
        pickerImage={pickerImage}
        dePulpingVideo={dePulpingVideo}
      />
      <ProcessingExport
        lotHistory={lotHistory}
        catrachaIntakeImage={catrachaIntakeImage}
        milledOnDate={milledOnDate}
        miller={miller}
        lotCurrentWeight={lotCurrentWeight}
        millingLocation={millingLocation}
        millingVideo={millingVideo}
        millingImage={millingImage}
      />
      <Journey
        // Green Export 
        exportedFrom={exportedFrom}
        greenExportDate={greenExportDate}
        greenExportWeight={greenExportWeight}
        greenExportVideo={greenExportVideo}
        // Green Import
        greenImportLocation={greenImportLocation}
        greenImportDate={greenImportDate}
        greenImportImage={greenImportImage}
        // Green Intake
        intakeGreenLocation={intakeGreenLocation}
        intakeGreenDate={intakeGreenDate}
        intakeGreenWeight={intakeGreenWeight}
        intakeGreenCollector={intakeGreenCollector}
        intakeGreenVideo={intakeGreenVideo}
      />
      <Roasting
        roastingCounty={roastingCounty}
        roastingState={roastingState}
        roastingCity={roastingCity}
        cuppersNotes={cuppersNotes}
        roastDate={roastDate}
        roasterName={roasterName}
        roastingImage={roastingImage}
      />
      <EconomicsAndTransparency /> */}
    </>
  );
};

/*

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isLoaded: false,

      lotHistory: {},

      // Farming Section - Harvest & De-Pupling
      farmerHarvest: {
        pickedBy: '',
        pickedCherriesWeight: '',
        datePicked: '',
        variety: '',
        pickerImage: ''
      },
      farmerDePulping: {
        dePulpingVideo: ''
      },

      // Processed and Exported by Catracha Coffee - Intake & Milling
      catrachaIntakeImage: '',
      milling: {
        milledOnDate: '',
        miller: '',
        lotCurrentWeight: ''
      },
      millingLocation: '',
      millingVideo: '',
      millingImage: '',

      // Journey Highlights
      // Green Export
      exportedFrom: '',
      greenExportDate: '',
      greenExportWeight: '',
      greenExportVideo: '',
      // Green Import
      greenImportLocation: '',
      greenImportDate: '',
      greenImportImage: '',
      // Intake Green
      intakeGreenLocation: '',
      intakeGreenDate: '',
      intakeGreenWeight: '',
      intakeGreenCollector: '',
      intakeGreenVideo: '',

      // Roasting
      roasting: {

      },
      roastingCounty: '',
      roastingState: '',
      roastingCity: '',

      cuppersNotes: '',
      roastDate: '',
      roasterName: '',

      roastingImage: '',
    }
  }

  componentDidMount() {

    // Get Lot History
    fetch(`https://bext360api.azure-api.net/retail/v1/getlothistory/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146`, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        lotHistory: json
      })
    });

    // Farmer Harvest, 'Picked by', 'Picked Cherries Weight', 'Date picked', 'Variety' and Image
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/5c955a2e-90ef-6bf4-fa8a-1813ee5d4687', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({

          farmerHarvest: {

            pickedBy: json.customData['FarmerName.Measure'].value,
            pickedCherriesWeight: json.customData['TotalValue.Measure'].value + ' lbs',
            datePicked: json.customData['HarvestDate.MeasureTime'].dateTimeValue,
            variety: json.customData['Varietal.Measure'].value,
            pickerImage: json.customData['LotFarmerProductImage.Measure'].value

          }

        })
      });

    // De-Pulping Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/df5e4e96-5133-4c85-ad5f-032d65182723', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({

          farmerDePulping: {
            dePulpingVideo: json
          }

        })
      });

    // Roasting Node
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/73427e9e-e29d-4b33-9a27-95244bdb0370', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        roastingCounty: json.defaultLocation.country,
        roastingState: json.defaultLocation.state,
        roastingCity: json.defaultLocation.city,
        isLoaded: true,
      })
    });

    // Roasting Lot
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/50933c21-a1b8-4774-b023-0b7ec19063f4', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          cuppersNotes: json.customData['CuppersNotes.Measure'].value,
          roastDate: json.customData['RoastDate.MeasureTime'].dateTimeValue,
          roasterName: json.customData['FarmerName.Measure'].value,
        })
      });

    // Roasting Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/3ba5c81b-076c-4db4-a235-67a6b8b8e90f', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          roastingImage: json,
        })
      });

    // Catracha Intake Parchment, Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/2d79f311-eb5f-4a4a-96b8-ec9adfca1617', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          catrachaIntakeImage: json,
        })
      });

    // Milling
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/b0c1846f-8cef-410e-a2ec-f6d9f3843e9f', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          milling: {
            milledOnDate: `${json.customData['MillingDate.MeasureTime'].dateTimeValue.split('T')[0]}`,
            miller: `${json.customData['FarmerName.Measure'].value}`,
            lotCurrentWeight: `${json.currentWeight} Lbs`
          }
        })
      });
    // Milling Location
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/8a14226b-873b-4893-bedc-a9699dc28472', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        millingLocation: `${json.defaultLocation.city}, ${json.defaultLocation
          .state}, ${json.defaultLocation.country}`
      })
    });
    // Milling Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/5b80c8dc-1dac-4eaf-8674-75052d83d0c5', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          millingVideo: json
        })
      });
    // Milling Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/14d5be6c-8f0e-48dd-88ca-46a1958a2fcf', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          millingImage: json,
        })
      });

    // Journey Highlights
    // Green Export - Exported From
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/c51f7616-5fb6-4416-be83-c98dc0d25df1', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        exportedFrom: `${json.defaultLocation.city}, ${json.defaultLocation
          .state}, ${json.defaultLocation.country}`
      })
    });
    // Green Export - Date & Weight
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/f1222ba7-0c10-4abf-b49f-c197be1ec8e1', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenExportDate: `${json.customData['ExportDate.MeasureTime'].dateTimeValue.split('T')[0]}`,
          greenExportWeight: ` ${json.absorbedWeight} Lbs`
        })
      });
    // Green Export - Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/c8bf9e23-1ae9-4422-8e00-984566d5663a', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenExportVideo: json
        })
      });
    // Green Import - Imported At
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/b2d1d8b3-498b-424e-87df-3050aa237115', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        greenImportLocation: `${json.defaultLocation.city}, ${json.defaultLocation
          .state}, ${json.defaultLocation.country}`
      })
    });
    // Green Import - Date
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/8f43a6a8-52aa-45d6-9bba-cbf8f823037d', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenImportDate: `${json.customData['ImportDate.MeasureTime'].dateTimeValue.split('T')[0]}`
        })
      });
    // Green Import - Image
    fetch('https://bext360api.azure-api.net/retail/v1/getimage/4aa16929-f043-4520-809d-d1f62cfb106d', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          greenImportImage: json,
        })
      });
    // CIntake Green - Roaster Received in
    fetch('https://bext360api.azure-api.net/retail/v1/getnode/1dc41db1-f7b5-45f1-8810-432e6be023cb', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json()).then(json => {
      this.setState({
        intakeGreenLocation: `${json.defaultLocation.city}, ${json.defaultLocation.state}, ${json.defaultLocation.country}`
      })
    });
    // Intake Green - Date, Weight, & Received by
    fetch('https://bext360api.azure-api.net/retail/v1/getlot/a58fc3bf-94fd-4f0f-bd37-0947d8ba4146', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          intakeGreenDate: `${json.customData['TransportDate.MeasureTime'].dateTimeValue.split('T')[0]}`,
          intakeGreenWeight: `${json.currentWeight} Lbs`,
          intakeGreenCollector: ` ${json.customData['CollectorName.Measure'].value}`
        })
      });
    // Intake Green - Video
    fetch('https://bext360api.azure-api.net/retail/v1/getvideo/6d48b0b4-25d3-469e-9d60-a657724ca296', {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': `${process.env.REACT_APP_API_KEY}`
      }
    }).then(res => res.json())
      .then(json => {
        this.setState({
          intakeGreenVideo: json
        })
      });

  }
  // Component Did Mount

  render() {

    var { isLoaded, roastingCity, roastingCounty, roastingState, cuppersNotes, roastDate, roasterName, roastingImage } = this.state;


    // console.log(this.state.farmerDePulping.dePulpingVideo);


    if (!isLoaded) {
      return (
        <div>Loading</div>
      );
    } else {

      return (
        <>

          <Navigation />
          <Hero />
          <Farming
            farmerHarvest={this.state.farmerHarvest}
            farmerDePulping={this.state.farmerDePulping.dePulpingVideo}
            lotHistory={this.state.lotHistory}
          />
          <ProcessingExport
            lotHistory={this.state.lotHistory}
            catrachaIntakeImage={this.state.catrachaIntakeImage}
            milling={this.state.milling}
            millingLocation={this.state.millingLocation}
            millingVideo={this.state.millingVideo}
            millingImage={this.state.millingImage}
          />
          <Journey
            // Green Export 
            exportedFrom={this.state.exportedFrom}
            greenExportDate={this.state.greenExportDate}
            greenExportWeight={this.state.greenExportWeight}
            greenExportVideo={this.state.greenExportVideo}
            // Green Import
            greenImportLocation={this.state.greenImportLocation}
            greenImportDate={this.state.greenImportDate}
            greenImportImage={this.state.greenImportImage}
            // Green Intake
            intakeGreenLocation={this.state.intakeGreenLocation}
            intakeGreenDate={this.state.intakeGreenDate}
            intakeGreenWeight={this.state.intakeGreenWeight}
            intakeGreenCollector={this.state.intakeGreenCollector}
            intakeGreenVideo={this.state.intakeGreenVideo}
          />
          <Roasting
            country={roastingCounty}
            state={roastingState}
            city={roastingCity}
            cuppersNotes={cuppersNotes}
            roastDate={roastDate}
            roasterName={roasterName}
            roastingImage={roastingImage}
          />
          <EconomicsAndTransparency />

        </>
      );
    }

    // Render
  }

  // App Component
}

*/

export default App;
