import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import SelectedHoroscope from '../selectedHoroscope';


const Horoscope = () => {
 const match = useRouteMatch();
    return (
    <div class="jumbotron text-center mybackpage">
        <Switch>
            <Route path ={`${match.path}/:name`}>
                <SelectedHoroscope/>
            </Route>
            <Route path={match.path}>
                <h2>Zodiac Signs:</h2>
                <br/><br/><br/><br/><br/>
                <nav class="navbar navbar-inverse">
            <div class="mydivtag container-fluid">
                <ul class="nav navbar-nav myhoroscopelist">
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Aries`}>
                            Aries
                        </Link>
                        <br/>
                        ♈︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Taurus`}>
                            Taurus
                        </Link>
                        <br/>
                        ♉︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Gemini`}>
                            Gemini
                        </Link>
                        <br/>
                        ♊︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Cancer`}>
                            Cancer
                        </Link>
                        <br/>
                        ♋︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Leo`}>
                            Leo
                        </Link>
                        <br/>
                        ♌︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Virgo`}>
                            Virgo
                        </Link>
                        <br/>
                        ♍︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Libra`}>
                            Libra
                        </Link>
                        <br/>
                        ♎︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Scorpio`}>
                            Scorpio
                        </Link>
                        <br/>
                        ♏︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Sagittarius`}>
                            Sagittarius
                        </Link>
                        <br/>
                        ♐︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Capricorn`}>
                            Capricorn
                        </Link>
                        <br/>
                        ♑︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Aquarius`}>
                            Aquarius
                        </Link>
                        <br/>
                        ♒︎
                    </li>
                    <li class="mylistitem list-group-item">
                        <Link to={`${match.path}/Pisces`}>
                            Pisces
                        </Link>
                        <br/>
                        ♓︎
                    </li>
                </ul>
            </div>
            </nav>
            </Route>
        </Switch>
    </div>
    );
};

export default Horoscope;