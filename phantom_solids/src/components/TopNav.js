import './_top-nav.scss';

const TopNav=()=>{
    return(
        <div>
            <div className='header'>
                <div className='row top-nav-row'>
                        <div className='brand-container my-1'>
                            <div className='image-container'>
                                <a href='#'>
                                <img src={require('../assets/web-title.png')} height="auto"/>
                                </a>
                            </div>
                        </div>

                        <div className='menu-options'>
                            <div className='options'>
                                <h2><a href='#'>Colección</a></h2> <h2>|</h2>
                                <h2><a href='#'>Servicios</a></h2> <h2>|</h2>
                                <h2><a href='#'>FAQs</a></h2> <h2>|</h2>
                                <h2><a href='#'>Contacto</a></h2>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default TopNav;
