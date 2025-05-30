import './hackathon.css';
import tracker from '../../assets/tracker.png';

const Hackathons = () => {
    return (
        <section className="hackathon-section">
            <div>
                CULTURE ENGAGEMENT
            </div>
            <div className="hackathon-header">
                HACKATHONS
            </div>
            <div class="hackathon-cards">
                <div class="hackathon-project">
                    <div class="hackathon-img">
                        <img src={tracker} alt="trackR" width={300} height={300}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hackathons;