import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigation = useNavigate()
    const { id } = useParams();
    const userUid = localStorage.getItem('uid')
    
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/projects/${id}`);
                console.log(response)
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
                const response = await axios.get(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}users/`);
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
    const handleDeleteToggle = async  () => {
        
        
        try {
            await axios.delete(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}projects/${project._id}`)
            navigation('/profile')
        
        } catch (error) {
            console.error(error.message);
            
        }
        
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    };

    const handleUpdateProject = async () => {
        try {
            await axios.put(`${import.meta.env.VITE_URL_API_FUTURA_BIOLAB}projects/${id}`, project);
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
                                {userUid && currentUser.id === project.ownerId && isEditing ? (
                                    <input
                                        type="text"
                                        name="nameproject"
                                        value={project.nameproject}
                                        onChange={handleInputChange}
                                         className="editing-input"
                                    />
                                ) : (
                                    <h2>{project.nameproject}</h2>
                                )}
                                {userUid === project.uid && !isEditing ?  (
                                    <>
                                    <button onClick={handleEditToggle}>Edit</button>
                                    <button onClick={handleDeleteToggle}>Delete</button>
                                    </>
                                ): null}
                                {isEditing && (
                                    <button onClick={handleUpdateProject}>Save</button>
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
                                <p>{project.license}</p>
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
                                {project.properties.map((prop, index) => (
                                    currentUser && currentUser.id === project.ownerId && isEditing ? (
                                        <input
                                            key={index}
                                            type="text"
                                            name={`properties-${index}`}
                                            value={prop.properties}
                                            onChange={handleInputChange}
                                             className="editing-input"
                                        />
                                    ) : (
                                        <p key={index}>{prop}</p>
                                    )
                                ))}
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Tools</h2>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <input
                                        type="text"
                                        name="tools"
                                        value={project.tools}
                                        onChange={handleInputChange}
                                         className="editing-input"
                                    />
                                ) : (
                                    <p>{project.tools}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Application</h2>
                                {project.application ? (
                                    project.application.map((proc, index) => (
                                        currentUser && currentUser.id === project.ownerId && isEditing ? (
                                            <input
                                                key={index}
                                                type="text"
                                                name={`application-${index}`}
                                                value={proc}
                                                onChange={handleInputChange}
                                                 className="editing-input"
                                            />
                                        ) : (
                                            <p key={index}>{proc}</p>
                                        )
                                    ))
                                ) : (
                                    <p>No application available</p>
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
                                         className="editing-input"
                                    />
                                ) : (
                                    <p>{project.preptime}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Processes</h2>
                                {project.processes ? (
                                    project.processes.map((proc, index) => (
                                        currentUser && currentUser.id === project.ownerId && isEditing ? (
                                            <input
                                                key={index}
                                                type="text"
                                                name={`processes-${index}`}
                                                value={proc}
                                                onChange={handleInputChange}
                                                 className="editing-input"
                                            />
                                        ) : (
                                            <p key={index}>{proc}</p>
                                        )
                                    ))
                                ) : (
                                    <p>No processes available</p>
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
                                         className="editing-input"
                                    />
                                ) : (
                                    <p>{project.ambientconditions}</p>
                                )}
                            </div>
                            <div className='aside-info-projectcard'>
                                <h2>Lights conditions</h2>
                                {currentUser && currentUser.id === project.ownerId && isEditing ? (
                                    <input
                                        type="text"
                                        name="lightsconditions"
                                        value={project.lightsconditions}
                                        onChange={handleInputChange}
                                         className="editing-input"
                                    />
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
                                     className="editing-input"
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
                                     className="editing-input"
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
                                     className="editing-input"
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

