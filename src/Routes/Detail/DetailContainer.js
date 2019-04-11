import React from "react";
import DetailPresenter from "./DetailPresenter";
import { MoviesApi, TVApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    const { isMovie } = this.state;
    try {
      const { data: result } = isMovie
        ? await MoviesApi.movieDetail(parsedId)
        : await TVApi.showDetail(parsedId);

      this.setState({
        result
      });
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(result);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
