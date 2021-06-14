import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/User/userSlice";
import { setMovies } from "../features/Movie/movieSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let originals = [];
  let trendings = [];
  let newDisneys = [];

  useEffect(() => {
    fetch(
      "https://disneyplus.blob.core.windows.net/jsoncontainer/disneyPlusMoviesData.json",
      {
        method: "get",
        headers: new Headers({
          // Your header content
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        for (var key in res.movies) {
          if (res.movies.hasOwnProperty(key)) {
            switch (res.movies[key].type) {
              case "recommend":
                recommends = [...recommends, { id: key, ...res.movies[key] }];
                break;
              case "original":
                originals = [...originals, { id: key, ...res.movies[key] }];
                break;
              case "new":
                newDisneys = [...newDisneys, { id: key, ...res.movies[key] }];
                break;
              case "trending":
                trendings = [...trendings, { id: key, ...res.movies[key] }];
                break;
            }
          }
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              trending: trendings,
              original: originals,
            })
          );
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;

  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
