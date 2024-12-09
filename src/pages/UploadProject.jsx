import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
//import '../styles/ProjectCard.css';
import '../styles/UploadProject.css';

const UploadProject = () => {
    const [hideElements, setHideElements] = useState(false);
    const [properties,setProperties] = useState([])
    const [tools,setTools] = useState([])
    const [application, setApplication] = useState([])
    const [processes, setProcesses] = useState([])
    const [lightConditions, setLightConditions] = useState([])
    const [ambientConditionts,setAmbientConditionts] = useState('')
    const [projectTitle,setProjectTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [description,setDescription] = useState('')
    const [ingredients,setIngredients] = useState('')
    const [method,setMethod] = useState('')
    const [references, setReferences] = useState('')
    const [bibliography, setBibliography] = useState('')
    const [images,setImages] = useState('')
    const [license,setLicense] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const token = localStorage.getItem('authToken')
    const navigate = useNavigate()
    
    

    const createProject = async () => {
        
        
        try {
            const body = {
                nameproject: projectTitle,
                owner :author,
                description,
                license,
                references,
                bibliography,
                application,
                ingredients,
                properties,
                ambientconditions: ambientConditionts,
                lightsconditions: lightConditions,
                tools,
                processes,
                preptime: prepTime,
                image: images,
                uid :localStorage.getItem('uid'),
                method,
            }
           
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            const projectResponse = await axios.post(import.meta.env.VITE_URL_API_FUTURA_BIOLAB + 'projects/new',body,{
                headers:{Authorization : `Bearer ${token}`}
            })
 
            navigate('/profile')
        } catch (error) {
            console.error(error.message);
            
        }
    }
    
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
       
        setProperties(prev => {
            if (prev.includes(itemToDelete)) {
                return prev.filter(item => item !== itemToDelete)
            }
        })
        
    } 
    const removeItemTools = (event) => {
        const itemToDelete = event.target.textContent
        
        setTools(prev => {
            if (prev.includes(itemToDelete)) {
                return prev.filter(item => item !== itemToDelete)
            }
        })
        
    } 
    const removeApplication = (event) => {
        const itemToDelete = event.target.textContent
        
        setApplication(prev => {
            if (prev.includes(itemToDelete)) {
                return prev.filter(item => item !== itemToDelete)
            }
        })
        
    } 
    const removeProccesses = (event) => {
        const itemToDelete = event.target.textContent
        
        setProcesses(prev => {
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
        <main className="uploadproject-main">
            <section className={!hideElements ? "uploadproject-container--section" : "uploadproject-container--section hidden"}>
                <article className={!hideElements ? "uploadproject-container--article" : "uploadproject-container--aside-container moveLeft"}>
                    <div className="uploadproject-container--article-top">
                        <div className='author-container-projectupload'>
                            
                            <input id='putoinput' type="text" placeholder="Enter Recipe Title" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} required />
                        </div>
                    </div>
                    <div className='info-container-uploadproject'> 

                    <div className='aside-info-textarea-uploadproject'>
                            <h2 className='title-aside--uploadproject'>Description</h2>
                            <textarea  value={description} onChange={(e) => setDescription(e.target.value) } required></textarea>
                    </div>
                   <div className='aside-info-textarea-uploadproject'>
                            <h2 className='title-aside--uploadproject'>Ingredients</h2>
                            <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)}  required></textarea>
                    </div>

                    </div>
                    <div className="uploadproject-container--article-button">
                        <div className='author-container-projectupload'>
                            <input  className='author-name'  placeholder='Type author name' value={author}  onChange={(e) => setAuthor(e.target.value) } required />
                            <select  onChange={(e) => setLicense(e.target.value)} required>
                                {licenseOptions.map(license => (
                                    <option key={license} value={license}>{license}</option>
                                ))}
                            </select>
                            
                        </div>
                    
                        </div>
                </article>
                <aside className={!hideElements ? "uploadproject-container--aside-container" : "uploadproject-container--aside-container moveRight"}>
                    <div className='containerinfo-uploadproject'>
                       
                        <div className='aside-info-uploadproject'>
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
                        <div className='aside-info-uploadproject'>
                            <h2>Tools</h2>
                            <select onChange={(event) => addValues('addTools',event) } required >
                                {toolsOptions.map(tool => (
                                    <option key={tool} value={tool}>{tool}</option>
                                ))}
                            </select>
                            <div className='properties-values' >
                                {tools.map(tool => <span key={crypto.randomUUID()} onClick={removeItemTools} className='properties-value-span' >{tool}</span>)}
                            </div>
                        </div>
                        <div className='aside-info-uploadproject'>
                            <h2>Application</h2>
                            <select onChange={(event) => addValues('addApplication',event) } required>
                                {applicationOptions.map(application => (
                                    <option key={application} value={application}>{application}</option>
                                ))}
                            </select>
                            <div className='properties-values' >
                                {application.map(prop => <span key={crypto.randomUUID()} onClick={removeApplication} className='properties-value-span' >{prop}</span>)}
                            </div>
                        </div>
                        <div className='aside-info-uploadproject'>
                            <h2>Prep Time</h2>
                            <input onChange={(e) => setPrepTime(e.target.value)} type="text" placeholder="Enter Prep Time" required />
                        </div>
                        <div className='aside-info-uploadproject'>
                            <h2>Processes</h2>
                            <select onChange={(event) => addValues('addProcesses',event) }  required>
                                {processesOptions.map(process => (
                                    <option key={process} value={process}>{process}</option>
                                ))}
                            </select>
                            <div className='properties-values' >
                                {processes.map(prop => <span key={crypto.randomUUID()} onClick={removeProccesses} className='properties-value-span' >{prop}</span>)}
                            </div>
                        </div>
                        <div className='aside-info-uploadproject'>
                            <h2>Ambient Conditions</h2>
                            <textarea value={ambientConditionts} onChange={(e) => setAmbientConditionts(e.target.value)}  required></textarea>
                        </div>
                        <div className='aside-info-uploadproject'>
                            <h2>Light Conditions</h2>
                            <select value={lightConditions} onChange={(e) => setLightConditions(e.target.value)} required>
                                {lightsconditionsOptions.map(lightCondition => (
                                    <option key={lightCondition} value={lightCondition}>{lightCondition}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='moreinfo-projectcard'>
                        <AddCircleOutlineIcon onClick={() => setHideElements(prev => !prev)} />
                    </div>
                    
                </aside>

                {hideElements && (
                    <aside className='asidecontainer-info-method showAsideInforMethod'>
                        <div className='methodcontainer-uploadproject'>
                            <h2>Method</h2>
                            <textarea value={method} onChange={(e) => setMethod(e.target.value)} placeholder="Describe Method" required></textarea>
                        </div>
                        <div className='info-method-upload'>
                            <h2>References</h2>
                            <input type='text' placeholder="Enter References" value={references} onChange={(e) => setReferences(e.target.value)} required />
                        </div>
                        <div className='info-method-upload'>
                            <h2>Bibliography</h2>
                            <input type='text' placeholder="Enter Bibliography" value={bibliography} onChange={(e) => setBibliography(e.target.value)} required />
                        </div>
                        <div className='info-method-upload'>
                            <h2>Images</h2>
                            <input type='text' placeholder="Example: image1.jpg,image2.png,image3.webp, separated by comma." value={images} onChange={(e) => setImages(e.target.value.split(','))} required />
                        </div>
                        <div className='moreinfo-projectcard'>
                            <RemoveCircleOutlineIcon onClick={() => setHideElements(prev => !prev)} />
                        </div>
                        <div className='button-container-upload'>

                           <button onClick={createProject} type='button' className='button-uploadproject'>Create</button>
                        </div>
                    </aside>
                )}
            </section>
        </main>
    );
};

export default UploadProject;



