import './defaultlayout.css'

const DefaultLayout = ({ children }) => {
    return (
        <div className="container">
            <div className={`wrapper`}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
