import './_top-nav.scss';

const TopNav=()=>{
    return(
        <div>
            <div className='header'>
                <div className='row top-nav-row'>

                    <div className='brand-container my-1'>
                        <i className='fa fa-user-circle user-icon'/>
                        <h1>PHANTOM SOLIDS</h1>
                    </div>

                    <div className='menu-option p-0'>
                        <h2><a href='#'>Colección</a></h2> <h2>|</h2>
                        <h2><a href='#'>Servicios</a></h2> <h2>|</h2>
                        <h2><a href='#'>FAQs</a></h2> <h2>|</h2>
                        <h2><a href='#'>Contacto</a></h2>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default TopNav;
