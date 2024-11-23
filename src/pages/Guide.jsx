import '../styles/Guide.css'
import { Link } from 'react-router-dom';

const Guide = () => {
    return (
        <main className="main-guide">
        <section className="section-guide">
          <article className="article-guide">
            <h2 className="info-title-guide">General Information</h2>
            <p className="info-text-guide">
            Futura Biolab library provides recipes for open-source materials created from renewable biomass and plentiful minerals. We do not permit any ingredients derived from petrochemicals, including byproducts like petrochemical plastics or textiles. For additional details, please visit <Link to="/priorities" className='link-guide'>Ingredient Guidelines and Safe Recipes</Link>.
            </p>


            
          </article>
          
          <article className="article-guide">
            <h2 className="info-title-guide">Literary Attribution</h2>
            <p className="info-text-guide">
            When you upload a recipe to Futura Biolab, it will be automatically connected to your user profile. It will also be associated with the profiles of any co-authors involved in the recipe. If you wish for your recipe to be tied to an organization, such as a research team, a business, or a nonprofit, please set up a user account for that organization and list its name as the author.
            </p>
            <p className="info-text-guide">
            If you want to publish a recipe that you did not create, you need to obtain permission from the original author to share it in Futura Biolab. Additionally, you must give proper credit by including the author's name or organization in the "source" section of the recipe submission form.
            </p>
          </article>
  
          <article className="article-guide">
            <h2 className="info-title-guide">Intellectual Property</h2>
            <p className="info-text-guide">
            All recipes in Futura Biolab are classified as "open source" and are automatically released under a CC-By-SA 4.0 license. If you would like to publish your recipe under a different open-source license, please specify this in the designated comment section on the recipe submission form.
            </p>
            <p className="info-text-guide">
            For each recipe, we will create a timestamped document and upload it to our archive. Our aim with this process is to ensure that each recipe is preserved in the archive and is not subject to any patent claims.
            </p>
            <p className="info-text-guide">
            Furthermore, the ownership information related to the material recipes will be indexed in the Materials Data Facility, with an attached DOI that can be searched and cited.
            </p>
          </article>
          
          <article className="article-guide">
            <h2 className="info-title-guide">Terms and Conditions</h2>
            <p className="info-text-guide">
            Please be aware that it is the user's duty to confirm that all content they submit, including recipes and applications of materials, is eligible for free sharing under the CC-By-SA 4.0 license. Futura Biolab will not take responsibility for any content shared on its platform.
            </p>
            <p className="info-text-guide">
            In addition, any use of information or materials from this website is done at your own risk, and we will not be held accountable. It is your responsibility to verify that any products, services, or information available through this site meet your individual needs. For additional details, please review our terms and conditions.
            </p>
          </article>
        </section>
      </main>
    );
};

export default Guide;
