const Scns = () => {
  return (
    <div className="w-full md:w-[90%] px-4 md:px-8 py-10 mx-auto">
      {/* ===== About SCNS ===== */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          About the SCNS
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 leading-relaxed text-gray-700 text-sm md:text-base">
          <p className="mb-4">
            The <span className="font-semibold">Special Centre for Nanoscience (SCNS)</span>, 
            established in 2014, is an interdisciplinary research and teaching centre at 
            <span className="font-semibold"> Jawaharlal Nehru University (JNU)</span>.
          </p>
          <p className="mb-4">
            The Nanoscience facility houses several state-of-the-art fabrication and thin-film 
            deposition instruments, along with advanced characterization laboratories. 
            SCNS aims to advance fundamental understanding and develop innovative technologies 
            in the field through collaborative research, cutting-edge experimental facilities, 
            and high-quality academic programmes.
          </p>
          <p>
            With its diverse research interests, the centre has successfully guided over 
            <span className="font-semibold"> 50 students</span> to complete their M.Tech 
            and Ph.D. degrees in various aspects of Nanoscience and Nanoelectronics.
          </p>
        </div>
      </div>

      {/* ===== About Conference ===== */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          About the Conference
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 leading-relaxed text-gray-700 text-sm md:text-base">
          <p className="mb-4">
            The <span className="font-semibold">International Conference on Recent Advances in Nanoscience 
            and Nanotechnology-2025 (ICRANN-2025)</span> aims to bring together leading 
            researchers, academicians, industry experts, and policymakers from around the 
            world to exchange knowledge, present cutting-edge research, and explore emerging 
            trends in Nanoscience and Nanotechnology.
          </p>
          <p className="mb-4">
            The conference will foster interdisciplinary collaboration, promote 
            industry-academia partnerships, and provide a platform for young researchers 
            to showcase their work. 
          </p>
          <p>
            Emphasizing both fundamental research and practical applications, it will address 
            societal and environmental challenges, encourage sustainable innovation, and 
            strengthen global networking in the rapidly evolving field of nanotechnology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scns;
