import './css/Blog.css';
import Blog1 from '../images/Blog1.jpg';
import Blog2 from '../images/Blog2.jpg';
import Blog3 from '../images/Blog3.jpg';
import { Link } from 'react-router-dom';

export default function Blog(){
    return(
        <section className="section blog">

        <div className="blog-container">
            <div id="blog-content">
                <h1>Trending Blogs</h1>
                <h3>Stay Up To Date With the Latest Trends and Insights</h3>
            </div>

            <div className='blogs'>
                <div className="blog-card">
                    <img src={Blog1} className="blog-img" alt="eye"/>

                    <div className="blog-body">
                        <h2 className="blog-title"> Red Eye Remedies</h2>
                        <p className="blog-info">Many cases of red eye are harmless and respond well to home or over-the-counter treatments.</p>
                        <Link className="blog-btn" to="/blog1">Explore</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <img src={Blog2} className="blog-img" alt="eye"/>
                    <div className="blog-body">
                        <h2 className="blog-title"> Color Blindness</h2>
                        <p className="blog-info">If you have color blindness, it means you see colors differently than most people.</p>
                        <Link className="blog-btn" to="/blog4">Explore</Link>
                    </div>
                </div>

                <div className="blog-card">
                    <img src={Blog3} className="blog-img" alt="eye"/>
                    <div className="blog-body">
                        <h2 className="blog-title"> Contact Lenses</h2>
                        <p className="blog-info">A lot of people wear contact lenses to be fashionable and to beautify their eyes.</p>
                        <Link className="blog-btn" to="/blog3">Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}