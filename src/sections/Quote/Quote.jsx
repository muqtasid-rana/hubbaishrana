import './Quote.css';

const Quote = () => {
    return (
        <section className="quote">
            <div className="quote-background">
                <div className="quote-gradient-1"></div>
                <div className="quote-gradient-2"></div>
            </div>

            <div className="container quote-container">
                <div className="quote-content">
                    <div className="quote-mark">"</div>
                    <blockquote>
                        <p>
                            Good design is not just about how it looks,
                            it's about how it works and makes people feel.
                        </p>
                    </blockquote>
                    <cite>— M.Hubbaish Rana</cite>
                </div>
            </div>
        </section>
    );
};

export default Quote;
