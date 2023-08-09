import "./NewsFeed.scss"

// Icons

import { FaRegComment }from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineRetweet, AiOutlineLike } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

const NewsFeed = () => {

 return(
  <section className="news-feed__container">
    <header className="news-feed__header">
      <h3>News Feed</h3>
      <form className="add-tweet__form">
        <div><h3>Profile</h3></div>
        <input className="input__text--full" type="text" placeholder="What's up?" />
      <button className="btn-primary">Submit</button>
      </form>
   </header>

   <div className="news-feed__body">
    
    {/* Map the feed */}

    <div className="card-feed">
      <div>Profile</div>
      <div className="card-feed__right"> 
      <div className="card-feed__heading">
        <div className="card-feed__heading-left">
          <div>username</div>
          <div>1hr</div>
        </div>

        <div className="card-feed__heading-right">
          <BsThreeDots/>
        </div>
        
      </div>
      <div className="card-feed__body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore accusamus dolorem vero sit eius at illum sed tenetur laborum placeat, vitae obcaecati mollitia. Similique ab libero quo nemo magni.</p>
        <div className="card-feed__content"></div>
      </div>
      <div className="card-feed__footer">
        <button><FaRegComment/></button>
        <button><AiOutlineRetweet/></button>
        <button><AiOutlineLike/></button>
        <button><IoStatsChart/></button>
        <button><IoShareOutline/></button>
      </div>
      </div>
    </div>

    <div className="card-feed">
      <div>Profile</div>
      <div className="card-feed__right"> 
      <div className="card-feed__heading">
        <div className="card-feed__heading-left">
          <div>username</div>
          <div>1hr</div>
        </div>

        <div className="card-feed__heading-right">
          <BsThreeDots/>
        </div>
        
      </div>
      <div className="card-feed__body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore accusamus dolorem vero sit eius at illum sed tenetur laborum placeat, vitae obcaecati mollitia. Similique ab libero quo nemo magni.</p>
        <div className="card-feed__content"></div>
      </div>
      <div className="card-feed__footer">
        <button><FaRegComment/></button>
        <button><AiOutlineRetweet/></button>
        <button><AiOutlineLike/></button>
        <button><IoStatsChart/></button>
        <button><IoShareOutline/></button>
      </div>
      </div>
    </div>

    <div className="card-feed">
      <div>Profile</div>
      <div className="card-feed__right"> 
      <div className="card-feed__heading">
        <div className="card-feed__heading-left">
          <div>username</div>
          <div>1hr</div>
        </div>

        <div className="card-feed__heading-right">
          <BsThreeDots/>
        </div>
        
      </div>
      <div className="card-feed__body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore accusamus dolorem vero sit eius at illum sed tenetur laborum placeat, vitae obcaecati mollitia. Similique ab libero quo nemo magni.</p>
        <div className="card-feed__content"></div>
      </div>
      <div className="card-feed__footer">
        <button><FaRegComment/></button>
        <button><AiOutlineRetweet/></button>
        <button><AiOutlineLike/></button>
        <button><IoStatsChart/></button>
        <button><IoShareOutline/></button>
      </div>
      </div>
    </div>

    <div className="card-feed">
      <div>Profile</div>
      <div className="card-feed__right"> 
      <div className="card-feed__heading">
        <div className="card-feed__heading-left">
          <div>username</div>
          <div>1hr</div>
        </div>

        <div className="card-feed__heading-right">
          <BsThreeDots/>
        </div>
        
      </div>
      <div className="card-feed__body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore accusamus dolorem vero sit eius at illum sed tenetur laborum placeat, vitae obcaecati mollitia. Similique ab libero quo nemo magni.</p>
        <div className="card-feed__content"></div>
      </div>
      <div className="card-feed__footer">
        <button><FaRegComment/></button>
        <button><AiOutlineRetweet/></button>
        <button><AiOutlineLike/></button>
        <button><IoStatsChart/></button>
        <button><IoShareOutline/></button>
      </div>
      </div>
    </div>

    


   </div>

  </section>
  )
}

export default NewsFeed