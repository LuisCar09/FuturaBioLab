import '../styles/Method.css'

function Method(){
    return (
      <main className='main-method'>
        <section className='sectiontop-method'>
          
        
          <aside className='asidecontainer-info-method'>
          <div className='aside-info-method'>
                        <h2>Tools</h2>
                        <input 
                         id='tools'
                         type='text'
                         required
                        />
                        </div> 
                        <div className='aside-info-method'>
                        <h2>Ambient</h2>
                        <input 
                         id='ambient'
                         type='text'
                         required
                        />
                    </div>
                    <div className='aside-info-method'>
                        <h2>Light Conditions</h2>
                        <input 
                         id='ligth-conditions'
                         type='text'
                         required
                        />
                    </div>
                    
                   <div className='aside-info-method'>
                        <h2>References</h2>
                        <input 
                         id='references'
                         type='text'
                         required
                        />
                    </div>
                    <div className='aside-info-method'>
                        <h2>Bibliography</h2>
                        <input 
                         id='bibliography'
                         type='text'
                         required
                        />
                    </div>
                    <div className='methodcontainer-method'>
                <h2>Method</h2>
                <textarea></textarea>
            </div>
             </aside>       
        </section>
      </main>
    )
}

export default Method