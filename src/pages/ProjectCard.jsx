import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import '../styles/ProjectCard.css';

const ProjectCard = () => {
    const [project, setProject] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [hideElements, setHideElements] = useState(false);
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
    const removeItemTools = (event) => {
        const itemToDelete = event.target.textContent
        console.log(itemToDelete);
        setTools(prev => {
            if (prev.includes(itemToDelete)) {
                return prev.filter(item => item !== itemToDelete)
            }
        })
        
    } 
    const removeApplication = (event) => {
        const itemToDelete = event.target.textContent
        console.log(itemToDelete);
        setApplication(prev => {
            if (prev.includes(itemToDelete)) {
                return prev.filter(item => item !== itemToDelete)
            }
        })
        
    } 
    const removeProccesses = (event) => {
        const itemToDelete = event.target.textContent
        console.log(itemToDelete);
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

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/projects/${id}`);
                setProject(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchProject();
    }, [id]);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users/');
                setCurrentUser(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchCurrentUser();
    }, []);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    };

    const handleUpdateProject = async () => {
        try {
            await axios.put(`http://localhost:8080/projects/${id}`, project);
            setIsEditing(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <main className="project-container">
            {project && (
                <section className={!hideElements ? "project-container--section" : "project-container--section hidden"}>
                    <article className={!hideElements ? "project-container--article" : "project-container--aside-container moveLeft"}>
                        <div className="project-container--article-top">
                            <div className='currentuser-input-conatiner-projectcard'>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <input
                                        type="text"
                                        name="nameproject"
                                        value={project.nameproject}
                                        onChange={handleInputChange}
                                         className="editing-input"
                                    />
                                ) : (
                                    <h1>{project.nameproject}</h1>
                                )}
                                {currentUser && currentUser.id === project.ownerId && !isEditing && (
                                    <button onClick={handleEditToggle}>Editar</button>
                                )}
                                {isEditing && (
                                    <button onClick={handleUpdateProject}>Guardar</button>
                                )}
                            </div>
                        </div>
                        <div className="project-container--article--squarePicture">
                            <div className='image-container-projectcard'>
                                <img src={project.image[0]} alt="Project" />
                            </div>
                        </div>
                        <div className="project-container--article-button">
                            <div className='author-container-projectcard'>
                                <Link to={`/members/${id}`} className='author-link-projectcard'>{project.owner}</Link>
                                <h2>License</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <select
                                    name="license"
                                    value={project.license}
                                    onChange={handleInputChange}
                                >
                                    {licenseOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <p>{project.license}</p>
                            )}
                            </div>
                        </div>
                    </article>
                    <aside className={!hideElements ? "project-container--aside-container" : "project-container--aside-container moveRight"}>
                        <div className='containerinfo-projectcard'>
                            <div className='aside-info-projectcard'>
                                <h2>Description</h2>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <textarea
                                        name="description"
                                        value={project.description}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <p>{project.description}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Ingredients</h2>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <textarea
                                        name="ingredients"
                                        value={project.ingredients}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <p>{project.ingredients}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                            <h2>Properties</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <select
                                    name="properties"
                                    value={project.properties}
                                    onChange={handleInputChange}
                                >
                                    {propertiesOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <p>{project.properties}</p>
                            )}
                            </div>
                            <div className='aside-info-projectcard'>
                            <h2>Tools</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <select
                                    name="tools"
                                    value={project.tools}
                                    onChange={handleInputChange}
                                >
                                    {toolsOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <p>{project.tools}</p>
                            )}
                            </div>
                            <div className='aside-info-projectcard'>
                            <h2>Application</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <select
                                    name="application"
                                    value={project.application}
                                    onChange={handleInputChange}
                                >
                                    {applicationOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <p>{project.application}</p>
                            )}
                                   
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Prep time</h2>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <input
                                        type="text"
                                        name="preptime"
                                        value={project.preptime}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <p>{project.preptime}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                            <h2>Processes</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <select
                                    name="processes"
                                    value={project.processes}
                                    onChange={handleInputChange}
                                >
                                    {processesOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <p>{project.processes}</p>
                            )}
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Ambient conditions</h2>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <input
                                        type="text"
                                        name="ambientconditions"
                                        value={project.ambientconditions}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <p>{project.ambientconditions}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                            <h2>Lights conditions</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <select
                                    name="lightsconditions"
                                    value={project.lightsconditions}
                                    onChange={handleInputChange}
                                >
                                    {lightsconditionsOptions.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <p>{project.lightsconditions}</p>
                            )}
                            </div>
                        </div>
                        <div className='moreinfo-projectcard'>
                            <AddCircleOutlineIcon onClick={() => setHideElements(prev => !prev)} />
                        </div>
                    </aside>
                    <aside className={hideElements ? 'asidecontainer-info-method showAsideInforMethod' : 'asidecontainer-info-method'}>
                        <div className='methodcontainer-method'>
                            <h2>Method</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <textarea
                                    name="method"
                                    value={project.method}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{project.method}</p>
                            )}
                        </div>

                        <div className='aside-info-method'>
                            <h2>References</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <input
                                    type="text"
                                    name="references"
                                    value={project.references}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{project.references}</p>
                            )}
                        </div>
                        <div className='aside-info-method'>
                            <h2>Bibliography</h2>
                            {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                <input
                                    type="text"
                                    name="bibliography"
                                    value={project.bibliography}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <p>{project.bibliography}</p>
                            )}
                        </div>
                        <div className='moreinfo-projectcard'>
                            <RemoveCircleOutlineIcon onClick={() => setHideElements(prev => !prev)} />
                        </div>
                    </aside>
                </section>
            )}
        </main>
    );
};

export default ProjectCard;

