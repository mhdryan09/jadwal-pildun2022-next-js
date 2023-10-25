import React from "react";

// fetch data - get matches
const getMatches = async () => {
	const response = await fetch("https://worldcupjson.net/matches");
	return response.json();
};

export default async function SectionList() {
	const matches: Match[] = await getMatches();

	return (
		<div>
			{matches.map((match, index) => (
				<div key={index}>
          <p>{match.datetime}</p>
          {match.home_team_country} vs {match.away_team_country}
        </div>
			))}
		</div>
	);
}
