import '../styles/Project.css'
const ProjectCard = () => {
    return (

        <main className="project-container">
            <section className="project-container--section">
                <article className="project-container--article" >
                   
                        <div className="project-container--article-top">
                            <div>
                                <p>Wendnesday</p>
                                <p>15 june</p>
                            </div>
                        </div>
                        <div className="project-container--article--squarePicture">
                            <div>DIV</div>
                        </div>
                        <div className="project-container--article-button">
                            <div>
                                <h2>Project Title</h2>
                                <p>something here</p>
                            </div>
                            <p>Create by</p>
                            <p>LuisCar</p>
                        </div>
                   
                    
                </article>
                <aside className="project-container--aside-container">
                    <h2 className="aside-container--title">LuisCar's Project Title</h2>
                    <p className="aside-container--parragraph">@luisCar</p>
                    <div className="aside-container--tagsContainer" >
                        <span>#bio</span>
                        <span>#bio</span>
                        <span>#bio</span>
                        <span>#bio</span>
                    </div>
                    <div className="aside-container--user">
                        <div className="aside-container--user--picture">
                            <img src="" alt="" ></img>
                        </div>
                        <div>
                            <h3>Luis Car</h3>
                            <p> 222 seguidores</p>
                        </div>
                    </div>
                    <div className="project-container--aside-infoProject-container">
                        <div >

                            <p><strong>Description:</strong> 'a description'</p>
                            <p><strong>Composition:</strong> 'Composition' </p>
                            <p><strong>Contributors:</strong> 'Contributors names' </p>
                            <p><strong>License:</strong> license name </p>
                            <p><strong>References:</strong> references </p>
                            <p><strong>Bibliography:</strong> Bibliography </p>
                            <p><strong>Application:</strong> Application</p>
                            <p><strong>Ingredients:</strong> Ingredients </p>
                            <p><strong>Properties:</strong> Properties </p>
                            <p><strong>Ambient Conditions:</strong> Ambient Conditions</p>
                            <p><strong>Light Conditions:</strong> Light Conditions: </p>
                            <p><strong>Tools:</strong></p>
                        </div>

                    </div>
                </aside>
            </section>
        </main>

    )
}

export default ProjectCard