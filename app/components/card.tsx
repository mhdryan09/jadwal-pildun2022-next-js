/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import React from "react";

interface CardProps {
	match?: Match;
	isToday?: boolean;
}

interface TeamProps {
	team?: Team;
}

interface VersusProps {
	date?: string;
}

const Team = ({ team }: TeamProps) => {
	return (
		<div className="flex flex-col w-1/2 items-center justify-center">
			<img src={`https://api.fifa.com/api/v3/picture/flags-sq-3/${team?.country}`} className="w-[90px] h-[60px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]" alt={team?.name} />
			<p className="font-bold text-lg mt-2 text-center">{team?.name}</p>
			<p className="font-bold text-2xl text-center">{team?.goals}</p>
		</div>
	);
};

const Versus = ({date}: VersusProps) => {
	return (
		<div className="grid relative h-full py-3">
			<span className="absolute font-bold text-2xl place-self-center">VS</span>
			<span className="font-medium text-2xl place-self-end bg-black rounded-full px-3 py-1 text-white">
        {moment(date).format("HH:mm")}
      </span>
		</div>
	);
};

export default function Card({ match }: CardProps) {
	return (
		<div className="flex flex-row aspect-video border-[3px] border-black shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow">
			<Team team={match?.home_team} />
      <Versus date={match?.datetime} />
			<Team team={match?.away_team} />
		</div>
	);
}
