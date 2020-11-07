import React, { FunctionComponent } from "react";
import { ClubCard, ClubCardProps } from "../ClubCard";

interface FeaturedClubs {
  clubsData: ClubCardProps[];
}

export const FeaturedClubs: FunctionComponent<FeaturedClubs> = ({
  clubsData,
}) => (
  <>
    {clubsData.map((clubData, idx) => (
      <div key={`c-${idx}`} className="clubCardContainer">
        <ClubCard
          title={clubData.title}
          text={clubData.text}
          imgSource={clubData.imgSource}
        />
      </div>
    ))}
  </>
);
