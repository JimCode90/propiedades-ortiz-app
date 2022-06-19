

function SearchOverlay(){
    return (
        <div className="search-overlay" id="search-overlay">
            <div className="search-overlay__header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 ml-auto col-4">
                            <div className="search-content text-right">
                                <span className="mobile-navigation-close-icon" id="search-close-trigger"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-overlay__inner">
                <div className="search-overlay__body">
                    <div className="search-overlay__form">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchOverlay