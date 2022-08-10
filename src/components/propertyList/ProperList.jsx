import './ProperList.css'
import img1 from '../../pics/p1.png';
import img2 from '../../pics/p2.png';
import img3 from '../../pics/p3.png';
import img4 from '../../pics/p4.png';
import img5 from '../../pics/p5.png';

const ProperList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
        <img
          src={img1}
          alt="p1"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img2}
          alt="p2"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img3}
          alt="p3"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img4}
          alt="p4"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src={img5}
          alt="p5"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default ProperList;