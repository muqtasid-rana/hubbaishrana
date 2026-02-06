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
                            I consider a project successful when it delivers real results
                            and a strong return on investment for the client.
                        </p>
                    </blockquote>
                    <cite>— M.Muqtasid Rana</cite>
                </div>
            </div>
        </section>
    );
};

export default Quote;
