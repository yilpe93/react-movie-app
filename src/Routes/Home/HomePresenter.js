import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? null : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              // <span key={movie.id}>{movie.title}</span>
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movie">
            {upcoming.map(movie => (
              // <span key={movie.id}>{movie.title}</span>
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movie">
            {popular.map(movie => (
              // <span key={movie.id}>{movie.title}</span>
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;
