import stats from '../images/stats.png';

export default function Stats(){
    return<div class="stats">
        <div id="stat-content">
            <h1>The Numbers Don't Lie</h1>
            <p>Discover the compelling data-driven insights on our website that reveal the truth behind trends, behaviors, and patterns. Join our growing list of satisfied clients and experience our test accuracy that speaks volumes about our commitment to delivering reliable results.</p>
        </div>
        <img id="stats-img" src={stats} alt= "85% satisfied customers"/>
    </div>
}