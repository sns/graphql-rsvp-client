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
                        Name
                        Players{
                            Name
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
                                    {team.Name}
                                    <ul>
                                        {team.Players.map((player, index) => {
                                            return(
                                                <li key={index}>
                                                    {player.Name}
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
