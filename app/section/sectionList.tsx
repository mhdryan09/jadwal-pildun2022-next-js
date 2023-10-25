import React from "react";
import { groupBy } from "lodash";
import moment from "moment";

// fetch data - get matches
const getMatches = async () => {
	const response = await fetch("https://worldcupjson.net/matches");
	return response.json();
};

export default async function SectionList() {
	const matches: Match[] = await getMatches();
  // ambil format tanggal
  const getMatchDate = (item:Match) => moment(item.datetime)
  .format('YYYY-MM-DD')

  const matchesByDate = groupBy(matches, getMatchDate);

	return (
		<div>
			{/* {matches.map((match, index) => (
				<div key={index}>
          <p>{match.datetime}</p>
          {match.home_team_country} vs {match.away_team_country}
        </div>
			))} */}

      {/* ambil key baru kita mapping */}
      {Object.keys(matchesByDate).map((date, index) => (
        <div key={index}>

        </div>
      ))}
		</div>
	);
}
