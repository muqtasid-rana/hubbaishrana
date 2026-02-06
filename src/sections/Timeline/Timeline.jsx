import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TimelineItem from '../../components/TimelineItem/TimelineItem';
import { timeline, education } from '../../data/timeline';
import './Timeline.css';

const Timeline = () => {
    const allItems = [...timeline, ...education];

    return (
        <section id="experience" className="timeline-section section">
            <div className="container">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My Journey"
                />

                <div className="timeline-wrapper">
                    <div className="timeline">
                        {allItems.map((item, index) => (
                            <TimelineItem
                                key={item.id}
                                item={item}
                                index={index}
                                isLast={index === allItems.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
