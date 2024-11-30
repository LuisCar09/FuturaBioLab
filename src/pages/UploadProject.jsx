import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Select } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import '../styles/ProjectCard.css';
import '../styles/UploadProject.css';

const UploadProject = () => {
    const [hideElements, setHideElements] = useState(false);
    const [properties,setProperties] = useState([])
    const [tools,setTools] = useState([])
    const [application, setApplication] = useState([])
    const [processes, setProcesses] = useState([])
    const { id } = useParams();

    const addInputsFunctions = {
        addProperties :  (event) => {
            setProperties(prev => {
                if (!prev.includes(event.target.value)) {
                    return [...prev,event.target.value]    
                }
                return(prev)
                
            })
        },addTools :  (event) => {
            setTools(prev => {
                if (!prev.includes(event.target.value)) {
                    return [...prev,event.target.value]    
                }
                return(prev)
                
            })
        },
        addApplication :  (event) => {
            setApplication(prev => {
                if (!prev.includes(event.target.value)) {
                    return [...prev,event.target.value]    
                }
                return(prev)
                
            })
        },
        addProcesses :  (event) => {
            setProcesses(prev => {
                if (!prev.includes(event.target.value)) {
                    return [...prev,event.target.value]    
                }
                return(prev)
                
            })
        }
    }
    const addValues = (propert,event) => {
        return  addInputsFunctions[propert] ?  addInputsFunctions[propert](event) : null
    }
  
    
    const removeItemProperties = (event) => {
        const itemToDelete = event.target.textContent
        console.log(itemToDelete);
        setProperties(prev => {
            if (prev.includes(itemToDelete)) {
                return prev.filter(item => item !== itemToDelete)
            }
        })
        
    } 


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
                    <div className="project-container--article--squarePicture project-container-article-upload">
                        <div className='image-container-projectcard'>
                            <img src='#' alt='Recipe photo' />
                        </div>
                    </div>
                    <div className="project-container--article-button">
                        <div className='author-container-projectcard author-container-projectuploadcard'>
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
                            <select required onChange={(event) => addValues('addProperties',event) }  >
                                {propertiesOptions.map(property => (
                                    <option  key={property} value={property}>{property}</option>
                                ))}
                            </select>

                            <div className='properties-values' >
                                {properties.map(prop => <span key={crypto.randomUUID()} onClick={removeItemProperties} className='properties-value-span' >{prop}</span>)}
                            </div>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Tools</h2>
                            <select onChange={(event) => addValues('addTools',event) } required >
                                {toolsOptions.map(tool => (
                                    <option key={tool} value={tool}>{tool}</option>
                                ))}
                            </select>
                            <div className='properties-values' >
                                {tools.map(prop => <span key={crypto.randomUUID()} onClick={removeItemProperties} className='properties-value-span' >{prop}</span>)}
                            </div>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Application</h2>
                            <select onChange={(event) => addValues('addApplication',event) } required>
                                {applicationOptions.map(application => (
                                    <option key={application} value={application}>{application}</option>
                                ))}
                            </select>
                            <div className='properties-values' >
                                {application.map(prop => <span key={crypto.randomUUID()} onClick={removeItemProperties} className='properties-value-span' >{prop}</span>)}
                            </div>
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Prep Time</h2>
                            <input type="text" placeholder="Enter Prep Time" required />
                        </div>
                        <div className='aside-info-projectcard'>
                            <h2>Processes</h2>
                            <select onChange={(event) => addValues('addProcesses',event) }  required>
                                {processesOptions.map(process => (
                                    <option key={process} value={process}>{process}</option>
                                ))}
                            </select>
                            <div className='properties-values' >
                                {processes.map(prop => <span key={crypto.randomUUID()} onClick={removeItemProperties} className='properties-value-span' >{prop}</span>)}
                            </div>
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



