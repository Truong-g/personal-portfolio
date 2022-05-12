import './defaultlayout.css'

const DefaultLayout = ({ paddingNone = false, children }) => {
    return (
        <div className="container">
            <div className={`wrapper ${paddingNone ? "padding-0" : ""}`}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
