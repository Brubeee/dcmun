
import CommitteeTabs from "./committee/CommitteeTabs";

const Committees = () => {
  return (
    <section id="committees" className="py-20 bg-diplomacy-navy/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-diplomacy-gold">Committees</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From ancient mythology to speculative futures, each committee offers unique challenges
            and opportunities for diplomatic excellence.
          </p>
        </div>

        <CommitteeTabs />
      </div>
    </section>
  );
};

export default Committees;
