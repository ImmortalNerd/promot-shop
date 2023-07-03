import { ThreeDots } from "react-loader-spinner";

export default function Loading({ show }) {
    const style = { position: "absolute", top: "50%", left: "50%"};
    if (!show) return "";
    return (
        <>
        <div className="container">
            <div className="row position-relative">
                <div className="col-12" style={style}>
                    <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#ff2929" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                    />
                </div>
            </div>
        </div>
        
        </>
        
    );
  }
  