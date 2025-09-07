const Conference = () => {
  return (
    <div className="w-full md:w-[90%] mx-auto px-4 py-10">
      

      {/* About Conference */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          About the Conference
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The International Conference on Recent Advances in Nanoscience and
          Nanotechnology-2025 (ICRANN-2025) aims to bring together leading
          researchers, academicians, industry experts, and policymakers from
          around the world to exchange knowledge, present cutting-edge research,
          and explore emerging trends. The conference will foster collaboration,
          promote industry-academia partnerships, and provide a platform for
          young researchers to showcase their work while addressing societal and
          environmental challenges.
        </p>
      </section>

      {/* Aim */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Aim of the ICRANN-2025
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          To provide a global platform for researchers, academicians, industry
          experts, and policymakers to share knowledge, present recent
          advancements, and explore innovative applications in nanoscience and
          nanotechnology. The conference seeks to foster interdisciplinary
          collaboration, promote sustainable solutions, and strengthen
          industry-academia linkages.
        </p>
      </section>

      {/* Objectives */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Objectives of ICRANN-2025
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
          <li>
            Provide an international platform for presenting recent research and
            advancements.
          </li>
          <li>
            Encourage young researchers and students to showcase their work and
            build networks.
          </li>
          <li>
            Address societal and environmental challenges through sustainable
            innovations.
          </li>
          <li>
            Explore future directions, emerging trends, and opportunities in
            nanoscience.
          </li>
        </ul>
      </section>

      {/* Expected Outcomes */}
      <section className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Expected Outcomes of ICRANN-2025
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
          <li>
            Enhanced global networking and long-term collaborations among
            researchers and industries.
          </li>
          <li>
            Exchange of cutting-edge knowledge and innovative ideas.
          </li>
          <li>
            Identification of emerging research areas and industrial
            opportunities.
          </li>
          <li>
            Publication of high-quality proceedings, articles, and proposals.
          </li>
          <li>
            Strengthened industry-academia linkages for technology transfer.
          </li>
          <li>
            Motivation and capacity building of young researchers.
          </li>
        </ul>
      </section>

      {/* Main Specifications */}
      <section>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
          Main Specifications
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base leading-relaxed space-y-2">
          <li>
            <strong>3rd International Conference:</strong> Recent Advances in
            Nanoscience and Nanotechnology-2025 (ICRANN-2025)
          </li>
          <li>
            <strong>Dates:</strong> 20-21st December, 2025
          </li>
          <li>
            <strong>Venue:</strong> Convention Centre, JNU, New Delhi
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Conference;
