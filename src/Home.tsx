import gql from "graphql-tag";
import * as React from "react";
import { Query } from "react-apollo";
class Home extends React.Component {
    public render() {
        return (
        <div >
            <h1>Teams</h1>
            <Query query={gql`
                query{
                    Team{
                        team_key
                        name
                        players {
                            player_key
                            name
                        }             
                    }
                }
            `}>
            {({loading, error, data}) => {
                if(loading) { return (<p> Loading...</p>)};
                if(error) { return (<p>Error</p>) };
                return(
                    <ul>
                        {data.Team.map((team, i) => {
                            return(
                                <li key={i}>
                                    {team.name}
                                    <ul>
                                        {team.players.map((player, index) => {
                                            return(
                                                <li key={index}>
                                                    {player.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            );
                        })}
                    </ul>
                );
            }}
            </Query>
        </div>
    );
  }
}

export default Home;
