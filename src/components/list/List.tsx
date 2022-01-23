// Import Packages
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDataEpisodes, fetchDataSeasons } from '../../store/fetchData';

// Import Interface
import { IGlobalState } from '../../interfaces/Store';

// Import Styled Components
import SeparatorBallStyle from '../SeparatorBall/SeparatorBallStyle';
import SubInfoStyle from '../SubInfoStyle/SubInfoStyle';
import ListStyle from './List.style';
import TabsStyle from './tabs.style';
import TitleStyle from './Title.style';

// Import Components
import Card from './card/Card';

function List() {
  // Get global state from redux
  const globalState = useSelector((state) => state) as IGlobalState;
  const dispatch = useDispatch();

  // Get Url params
  const { season, episode } = useParams();

  // Initial State of seasonAtive
  const [seasonAtive, setSeasonAtive] = useState(season || '1');

  /**
   * Compononent Did Mount
   */
  useEffect(() => {
    dispatch(fetchDataSeasons());
    dispatch(fetchDataEpisodes());
  }, []);

  if (!globalState.seasons || !globalState.episodes) return null;

  return (
    <ListStyle>
      <TabsStyle>
        {globalState.seasons.map((item) => (
          <button
            type="button"
            onClick={() => setSeasonAtive(item.number.toString())}
            key={`season-${item.number}`}
            className={seasonAtive === item.number.toString() ? 'active' : ''}
          >{`S${item.number}`}</button>
        ))}
      </TabsStyle>

      <div className="episodes-list">
        <div className="header">
          <TitleStyle>Season {seasonAtive}</TitleStyle>
          <SeparatorBallStyle />
          <SubInfoStyle>
            {`${
              globalState.seasons[parseInt(seasonAtive, 10) - 1]?.episodeOrder
            } Episodes`}
          </SubInfoStyle>
        </div>

        <div className="episodes">
          {globalState.episodes.map((ep) => {
            if (
              ep.season.toString() === seasonAtive &&
              ep.id.toString() !== episode
            )
              return (
                <Card
                  key={`ep-${ep.id}-${ep.season}`}
                  id={ep.id}
                  name={ep.name}
                  season={ep.season}
                  backgroundImage={ep.image}
                  exhibitionDate={ep.airdate}
                  epNumber={ep.number}
                />
              );
            return null;
          })}
        </div>
      </div>
    </ListStyle>
  );
}

export default List;
