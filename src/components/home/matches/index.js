import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './Blocks';

const MatchesHome
 = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container game">
                <Tag
                bck="#0e1731"
                size="50px"
                color="white"
                >
                   Matches 
                </Tag>
                    <Blocks />
                <Tag
                bck="red"
                size="22px"
                color="black"
                link={true}
                linkto="/the_team"
                >
                    see more match
                </Tag>

            </div>
        </div>
    );
};

export default MatchesHome
;