const tableHeaders = [
  "simbol",
  "nume companie",
  "preț acțiune",
  "pondere BET",
  "acțiuni necesare",
  "valoare comisioane",
  "sumă necesară",
];

function Table({ distribution }) {
  const totalInvested = Object.values(distribution).reduce(
    (acc, company) => acc + company.total_investment,
    0
  );
  return (
    <section className="flex justify-center items-center px-20">
      <div className="container px-20">
        <table className="w-full border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="py-2 px-4 capitalize bg-primary text-white font-bold text-[20px] font-inter text-center"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(distribution).map(([symbol, company]) => (
              <tr className="border-b border-b-gray-300" key={symbol}>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {symbol}
                </td>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {company.name}
                </td>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {company.price_per_share} RON
                </td>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {company.bet_weight}%
                </td>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {company.number_of_shares}
                </td>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {company.commission.toFixed(2)} RON
                </td>
                <td className="text-center px-4 py-2 font-inter font-bold text-black75">
                  {company.total_investment.toFixed(2)} RON
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-t-gray-300">
              <td colSpan={tableHeaders.length} className="text-center py-2">
                <p className="font-inter font-bold text-black75">
                  Suma totală investită: {totalInvested.toFixed(2)} RON
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default Table;
