export const Home = () => {
  const topics = [
    { title: "SELECTION SORT", desc: "sorting by minimums", color: "#1C22A0" },
    { title: "INSERTION SORT", desc: "sorting by sliding", color: "#45E134"},
    // { title: "SINGLY LINKED LISTS", desc: "directed nodes", shadow: "shadow-[0_0_10px_#DF77F7]" },
    // { title: "SELECTION SORT", desc: "sorting by minimums", shadow: "shadow-[0_0_10px_#FFA743]" },
    // { title: "INSERTION SORT", desc: "sorting by sliding", shadow: "shadow-[0_0_10px_#FF62A1]" },
    // { title: "SINGLY LINKED LISTS", desc: "directed nodes", shadow: "shadow-[0_0_10px_#46A5FF]" },
    // { title: "SINGLY LINKED LISTS", desc: "directed nodes", shadow: "shadow-[0_0_10px_#FFDD43]" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-4">
      <div className="relative w-full px-4 flex items-center justify-center">
        <div className="absolute left-4">
            <h1
                className="font-bold dark-blue text-2xl"
                style={{ fontFamily: "Quantico" }}
            >
                CPSC 221
            </h1>
            <p 
                className="blue-gray"
                style={{ fontFamily: "Quantico" }}
            >
                intro to DSAs
            </p>
        </div>
        <img src="/ubc-logo.png" alt="UBC Logo" className="w-20" />
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full py-8">
        {topics.map((topic, i) => (
          <div
            key={i}
            className={`rounded-xl bg-white p-4 shadow-[0_0_10px_${topic.color}] card-hover flex flex-col items-center`}
          >
            <div className={`rounded-lg h-40 w-full`} style={{ backgroundColor: `${topic.color}` }} />
            <h2 className="mt-4 text-xl font-semibold text-black" style={{fontFamily: "Quantico"}}>{topic.title}</h2>
            <p className="text-m blue-gray" style={{ fontFamily: "Libre Franklin" }}>{topic.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
