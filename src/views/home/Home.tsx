import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataSeasons, fetchDataShow } from '../../store/fetchData';

function Home() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataShow());
    dispatch(fetchDataSeasons());
  }, []);
  console.log(globalState);
  return <div>hello</div>;
}

export default Home;
