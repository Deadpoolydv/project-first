const MLMSection = () => {
    return (
      <section className="w-full min-h-screen px-6 md:px-16 py-2 text-white flex flex-col justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-regular">
            MLM Software is the heart of any 
          </h2>
          <h2 className="text-4xl md:text-6xl font-regular">
            MLM Company
          </h2>
        </div>
        <div className="mt-8 w-full h-40 flex flex-col md:flex-row gap-16 mt-20 px-20">
          <div className="bg-gray-900 text-white p-6 rounded-lg flex-1">
            <p>
              BlockChain Boostup’s business philosophy is to provide excellent
              quality software to clients. Through their satisfaction, we 
              establish our position as a top blockchain MLM platform.
            </p>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-lg flex-1">
            <p>
              We create a collaborative workspace, enabling clients to share 
              feedback and monitor real-time progress, ensuring a smooth 
              development process.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default MLMSection;