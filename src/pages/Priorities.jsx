import '../styles/Priorities.css'

const Priorities = () => {
    return (
        <main className='main-priorities'>
        <section className="section-priorities">
            <h1 className="title-priorities">Guidelines for Preparing Safe Recipes and Ingredients</h1>
            
            <h2 className="subtitle-priorities">Priorities</h2>
            <p className="text-priorities">
                Our aim is to create a resource library where all materials are safe for humans and ecological systems, 
                underpinned by proper handling, concentration, and disposal practices.
            </p>
            <p className="text-priorities">
                Under no circumstances will we allow materials or ingredients that:
            </p>
            <div className="listcontainer-priorities">
                <p>1. Are carcinogenic, have genotoxic effects, exhibit developmental toxicity,
                    reproductive toxicity, or act as endocrine disruptors.</p>
                <p>2. Are highly toxic to mammals or aquatic species.</p>
                <p>3.Bioaccumulate in terrestrial or marine ecosystems.</p>
                <p>4. Are not considered biodegradable (persistent) or biobenign.</p>
            </div>
            
            <h2 className="subtitle-priorities">Our Principles</h2>
            <p className="text-priorities">
            Futura Biolab's recipes adhere to green chemistry principles. They should be assessed in the following manner:
            </p>
            
            <h3 className="title-list-priorities">Principles of Green Chemistry</h3>
            <ol className="principles-list-priorities">
                <li>Prevention: It is preferable to avoid waste creation rather than deal with it post-production.</li>
                <li>Atomic Economy: Synthetic methods should be designed to maximize the incorporation of all materials used into the final product.</li>
                <li>Less Hazardous Chemical Syntheses: Where possible, synthetic methods should be developed to utilize and create substances with minimal or no toxicity to human health and the environment.</li>
                <li>Design Safer Chemicals: Chemicals should be designed to maintain their effective function while reducing toxicity.</li>
                <li>Safer Solvents and Auxiliaries: The need for auxiliary substances (e.g., solvents, separating agents, etc.) should be minimized when possible, and when used, they should be non-hazardous.</li>
                <li>Energy Efficiency Design: Energy requirements should be acknowledged for their environmental and economic impacts and minimized. Synthetic methods should ideally be performed at room temperature and pressure.</li>
                <li>Use of Renewable Raw Materials: A raw material should be renewable rather than depletable when technically and economically feasible.</li>
                <li>Minimize Derivatization: Unnecessary derivatization should be minimized or avoided when possible, as these steps require additional reagents and can produce waste.</li>
                <li>Catalysis: Catalytic reagents (as selective as possible) are preferable to stoichiometric reagents.</li>
                <li>Design for Degradation: Chemicals should be designed to break down into innocuous degradation products at the end of their use and do not persist in the environment.</li>
                <li>Real-Time Analysis for Pollution Prevention: Further analytical methodologies are needed to allow for real-time monitoring and control of processes before hazardous substances are formed.</li>
                <li>Inherently Safer Chemistry for Accident Prevention:The substances and their forms used in a chemical process should be chosen to minimize the potential for chemical accidents, including releases, explosions, and fires.</li>
            </ol>
        </section >
        </main>
    );
};

export default Priorities;
