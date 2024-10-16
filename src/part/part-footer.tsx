import '../App.css'

import logoPart from '../logo/logo-part.png'

export const Part = ()=>{
    return(
        <div>
            <div className="part">
                <h3 className="text-part">PERFUME</h3>
                <img className="logo-part" src={logoPart}></img>
                <h3 className="text-part">PERFUME</h3>
                <img className="logo-part" src={logoPart}></img>
                <h3 className="text-part">PERFUME</h3>
                <img className="logo-part" src={logoPart}></img>
                <h3 className="text-part">PERFUME</h3>
                <img className="logo-part" src={logoPart}></img>
                <h3 id='delete-parts-responsive' className="text-part">PERFUME</h3>
                <img id='delete-parts-responsive' className="logo-part" src={logoPart}></img>
                <h3 id='delete-parts-responsive' className="text-part">PERFUME</h3>
                <img id='delete-parts-responsive' className="logo-part" src={logoPart}></img>
                <h3 id='delete-parts-responsive'className="text-part">PERFUME</h3>
                <img id='delete-parts-responsive' className="logo-part" src={logoPart}></img>
            </div>
        </div>
    )
}