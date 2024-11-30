import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import '../styles/ProjectCard.css';

const UploadProject = () => {
    const [hideElements, setHideElements] = useState(false);
    const { id } = useParams();
   /* const [propertiesOptions, setPropertiesOptions] = useState([]);
    const [toolsOptions, setToolsOptions] = useState([]);
    const [applicationOptions, setApplicationOptions] = useState([])
    const [licenseOptions, setLicenseOptions] =useState([])
    const [lightsconditionsOptions,setLightsconditionsOptions] = useState([])
    const [processesOptions, setProcessesOptions] = useState([])

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                
                const propertiesResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}properties`);
                console.log(import.meta.env.VITE_URL_API_FUTURA_BIOLAB)
                console.log(propertiesResponse)
                const toolsResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}tools`);
                const apllicationResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}application`);
                const licenseResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}license`);
                const lightsconditionsResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}lightsconditions`);
                const processesResponse = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}processes`);

                setPropertiesOptions(propertiesResponse.data)
                setToolsOptions(toolsResponse.data)
                setApplicationOptions(apllicationResponse.data)
                setLicenseOptions(licenseResponse.data)
                setLightsconditionsOptions(lightsconditionsResponse.data)
                setProcessesOptions(processesResponse.data)
               
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
      

        fetchOptions();
    }, []);
    
*/

const licenseOptions = [
    'CreativeCommons:Attribution-NoDerivates4.0Internacional(CCBY-ND4.0)',
    'CreativeCommons:Attribution-ShareAlike4.0Internacional(CCBY-SA4.0)',
    'CreativeCommons:Attribution-NonCommercial4.0Internacional(CCBY-NC4.0)',
    'CreativeCommons:Attribution-NonCommercial-NoDerivates4.0 Internacional(CCBY-NC-ND4.0)', 
    'CreativeCommons:Attribution-NonCommercial-ShareAlike4.0Internacional(CCBY-NC-SA4.0)',
    'CreativeCommons:Attribution4.0Internacional(CCBY4.0)'
];

const applicationOptions = [
    'ConsumerGoods', 'Fabrics', 'Packaging', 'Construction&BuiltEnviroment', 'ProductDesign'
];

const propertiesOptions = [
    'ThermalProperties', 'PhysicalProperties', 'MechanicalProperties-Tension', 'MechanicalProperties-Strength',
    'Chemical-Properties', 'Optical-Properties', 'Barrier-Properties', 'Biocompatibility', 
    'Biodegradability', 'Surface-Properties', 'Porosity', 'Electrical-properties', 
    'Thermal-Stability', 'Antimicrobial-Properties', 'Viscoelastic-Properties'
];

const lightsconditionsOptions = [
    'DirectSunLigth', 'PartlyShadedSunLigth', 'AmbientOverheadLigthing'
];

const toolsOptions = [
    'Cooker/stove/hotplates', 'Teaspoon', 'MeasuringCup', 'CookingPot', 'Scale',
    'Thermometer', 'Oven', 'MicronSieve', 'PressureCooker', 'Gloves', 
    'PlasticFillm','SprayBottle', 'CanningJar', 'Mold', 'Blender', 
    'Brush', 'Ruler', 'LasserCutter', 'MeasuringCylinder', 'Syringe', 
    'Pippete', 'Filter', 'Sponge', 'PaperMould', 'SiliconeMat', 
    '3DPrinter', 'MetalScreenMesh', 'Drainer','Mixer','CentrifugalMixer', 
    'DustMask', 'PetriDish', 'strainer','ContainerWithLid', 
    'Scissors', 'MortarAndPestle', 'FabricCloth', 'PuttyKnife', 
    'Degasser', 'Homogenizer', 'KitchenTools', 'Scooby'
];

const processesOptions = [
    '3Dprinted', 'LaserCut' ,'Ground', 'Molded', 'Cast', 'Cooked',
    'Cut','Baked','Mixed', 'AirDried', 'Freeze-dried', 'Frozen', 
    'Growm', 'Fermented', 'Boiled', 'Fired', 'Kneaded', 'Decant', 
    'OvenDry', 'Crushed', 'Sieved', 'Rinsed', 'Soaked', 
    'Sprayed', 'Dry', 'Mix', 'Warm', 'Grated', 'Heated', 
    'Dyed', 'Painted', 'Extruded', 'Strained', 'Blended', 
    'Peeled', 'Pressed'
];

    return (
        <main className="project-container">
            <section className={!hideElements ? "project-container--section" : "project-container--section hidden"}>
                <article className={!hideElements ? "project-container--article" : "project-container--aside-container moveLeft"}>
                    <div className="project-container--article-top">
                        <div>
                            
                            <input type="text" placeholder="Enter Recipe Title" required />
                        </div>
                    </div>
                    <div className="project-container--article--squarePicture">
                        <div className='image-container-projectcard'>
                            <img src='#' alt='Recipe photo' />
                        </div>
                    </div>
                    <div className="project-container--article-button">
                        <div className='author-container-projectcard'>
                            <h2>Author</h2>
                            
                            <select required>
                                {licenseOptions.map(license => (
                                    <option key={license} value={license}>{license}</option>
                                ))}
                            </select>
                            
                        </div>
                    
                        </div>
                </article>
                <aside className={!hideElements ? "project-container--aside-container" : "project-container--aside-container moveRight"}>
                    <div className='containerinfo-projectcard'>
                        <div className='aside-info-projectcard'>
                            <h2>Description</h2>
                            <textarea  required></textarea>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Ingredients</h2>
                            <textarea  required></textarea>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Properties</h2>
                            <select required>
                                {propertiesOptions.map(property => (
                                    <option key={property} value={property}>{property}</option>
                                ))}
                            </select>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Tools</h2>
                            <select required>
                                {toolsOptions.map(tool => (
                                    <option key={tool} value={tool}>{tool}</option>
                                ))}
                            </select>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Application</h2>
                            <select required>
                                {applicationOptions.map(application => (
                                    <option key={application} value={application}>{application}</option>
                                ))}
                            </select>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Prep Time</h2>
                            <input type="text" placeholder="Enter Prep Time" required />
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Processes</h2>
                            <select required>
                                {processesOptions.map(process => (
                                    <option key={process} value={process}>{process}</option>
                                ))}
                            </select>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Ambient Conditions</h2>
                            <textarea  required></textarea>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Light Conditions</h2>
                            <select required>
                                {lightsconditionsOptions.map(lightCondition => (
                                    <option key={lightCondition} value={lightCondition}>{lightCondition}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='moreinfo-projectcard'>
                        <AddCircleOutlineIcon onClick={() => setHideElements(true)} />
                    </div>
                </aside>

                {hideElements && (
                    <aside className='asidecontainer-info-method showAsideInforMethod'>
                        <div className='methodcontainer-method'>
                            <h2>Method</h2>
                            <textarea placeholder="Describe Method" required></textarea>
                        </div>
                        <div className='aside-info-method'>
                            <h2>References</h2>
                            <input type='text' placeholder="Enter References" required />
                        </div>
                        <div className='aside-info-method'>
                            <h2>Bibliography</h2>
                            <input type='text' placeholder="Enter Bibliography" required />
                        </div>
                       
                        <div className='moreinfo-projectcard'>
                            <RemoveCircleOutlineIcon onClick={() => setHideElements(false)} />
                        </div>
                    </aside>
                )}
            </section>
        </main>
    );
};

export default UploadProject;



