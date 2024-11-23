import '../styles/Upload.css';

const Upload = () => {
  return (
    <main className='main-upload'>
        <section className='section-upload'>
            <form className='form-upload'>
                <h1>Project Submission</h1>
                
                <label htmlFor='nameproject' className='label-upload'>Recipe Title:</label>
                <input 
                    type="text" 
                    name="nameproject" 
                    required
                />

                <label htmlFor='description' className='label-upload'>Recipe Description:</label>
                <textarea 
                    name="description" 
                    required 
                />

                <label htmlFor='composition' className='label-upload'>Composition:</label>
                <input 
                    type="text" 
                    name="composition" 
                    required
                />

                <label htmlFor='contributors' className='label-upload'>Contributors:</label>
                <input 
                    type="text" 
                    name="contributors" 
                    required 
                />

                <label htmlFor='license' className='label-upload'>License Type:</label>
                <select 
                    name="license" 
                    required
                >
                    <option value=""></option>
                    <option value="CreativeCommons:Attribution-NoDerivates4.0Internacional(CCBY-ND4.0)">CC BY-ND 4.0</option>
                    <option value="CreativeCommons:Attribution-ShareAlike4.0Internacional(CCBY-SA4.0)">CC BY-SA 4.0</option>
                    <option value="CreativeCommons:Attribution-NonCommercial4.0Internacional(CCBY-NC4.0)">CC BY-NC 4.0</option>
                    <option value="CreativeCommons:Attribution-NonCommercial-NoDerivates4.0Internacional(CCBY-NC-ND4.0)">CC BY-NC-ND 4.0</option>
                    <option value="CreativeCommons:Attribution-NonCommercial-ShareAlike4.0Internacional(CCBY-NC-SA4.0)">CC BY-NC-SA 4.0</option>
                    <option value="CreativeCommons:Attribution4.0Internacional(CCBY4.0)">CC BY 4.0</option>
                </select>

                <label htmlFor='references' className='label-upload'>References:</label>
                <input 
                    type="text" 
                    name="references" 
                    required 
                />

                <label htmlFor='bibliography' className='label-upload'>Bibliography:</label>
                <input 
                    type="text" 
                    name="bibliography" 
                />

                <label htmlFor='application' className='label-upload'>Application Type:</label>
                <select 
                    name="application" 
                    required
                >
                    <option value="">Select one...</option>
                    <option value="ConsumerGoods">Consumer Goods</option>
                    <option value="Fabrics">Fabrics</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Construction&BuiltEnviroment">Construction & Built Environment</option>
                    <option value="ProductDesign">Product Design</option>
                </select>

                <label htmlFor='ingredients' className='label-upload'>Ingredients:</label>
                <input 
                    type="text" 
                    name="ingredients" 
                    required 
                />

                <label htmlFor='properties' className='label-upload'>Properties:</label>
                <input 
                    type="text" 
                    name="properties" 
                    required 
                />

                <label htmlFor='ambientconditions' className='label-upload'>Ambient Conditions:</label>
                <input 
                    type="text" 
                    name="ambientconditions" 
                    required 
                />

                <label htmlFor='lightsconditions' className='label-upload'>Light Conditions:</label>
                <input 
                    type="text" 
                    name="lightsconditions" 
                    required 
                />

                <label htmlFor='tools' className='label-upload'>Tools:</label>
                <input 
                    type="text" 
                    name="tools" 
                    required 
                />

                <label htmlFor='processes' className='label-upload'>Processes:</label>
                <input 
                    type="text" 
                    name="processes" 
                    required 
                />

                <label htmlFor='preptime' className='label-upload'>Prep Time:</label>
                <input 
                    type="text" 
                    name="preptime" 
                    required 
                />

                <label htmlFor='image' className='label-upload'>Images:</label>
                <input 
                    type="text" 
                    name="image" 
                    required 
                />

                <label htmlFor='video' className='label-upload'>Video Links:</label>
                <input 
                    type="text" 
                    name="video" 
                />
            </form>
            <div className='buttoncontainer-upload'>

                <button className='button-upload'>Submit project</button>
            </div>
        </section> 
    </main> 
  );
};

export default Upload;

