const OurProcess = () => {
  return (
    <div className="px-10 bg-slate-200 pt-5  mt-10">
      <h2 className="text-5xl text-center font-mono mb-5">Our Process</h2>

      <p className="text-center text-lg font-semibold text-gray-500">
        A business process begins with a mission objective and ends with
        achievement of the <br /> business objective of providing a result that
        provides customer value.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">FULL SERVICES</h2>
          <p>
            A complete suite of solutions and support to meet all your needs.
            From consulting and project management to design, implementation,
            and ongoing maintenance, we deliver a one-stop solution for your
            requirements, ensuring convenience and excellence at every step.
          </p>
          <button className="text-lg font-semibold mt-4">Read More..</button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">ENGINE REPAIR</h2>
          <p>
            Engine repair involves the diagnosis and restoration of a vehicle's
            internal combustion engine, which powers the vehicle. This process
            includes identifying and addressing issues such as mechanical
            damage, electrical faults, or other problems that affect the
            engine's performance.
          </p>
          <button className="text-lg font-semibold mt-4">Read More..</button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">24/7 SUPPORT</h2>
          <p>
            A complete suite of solutions and support to meet all your needs.
            From consulting and project management to design, implementation,
            and ongoing maintenance, we deliver a one-stop solution for your
            requirements, ensuring convenience and excellence at every step.
          </p>
          <button className="text-lg font-semibold mt-4 mb-6">Read More..</button>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
