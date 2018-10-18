import React from "react";
import { Container} from 'mdbreact';
import './About.css';
import { Trans, Plural } from '@lingui/macro';
const URL_ABOUT = "http://localhost/sayo/api/web/v1/beforeauths/about";

class About extends React.Component {
   constructor(props){
        super(props)
        this.state = {
            name:'Nges Brian',
            number:{
                i:1,
                ii:2,
                iii:3
            }
        }
        //console.log("testing poll");
    }

    fetchPoll(){
        fetch(URL_ABOUT, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({members:json['staff']})
        })
    }

    componentDidMount() {
       this.fetchPoll()
        console.log(this.members)
    }

    render(){
        const { name, number } = this.state;
        return (
            <Container>
                <div className="my-3">
                <br/>
                <div className="about-title mb-3"><Trans>Greetings {name } !!!!! </Trans></div> <br/>
                <div>
                    <Plural
                        value={number.i}
                        offset={1}
                        // when value == 0
                        _0="Nobody arrived"

                        // when value == 1
                        _1="Only you arrived"

                        // when value == 2
                        // value - offset = 1 -> `one` plural form
                        _2="You and two other guest arrived"

                        // when value >= 3
                        other="You and # other guests arrived"
                    />
                    <Plural
                        value={number.ii}
                        offset={1}
                        // when value == 0
                        _0="Nobody arrived"

                        // when value == 1
                        _1="Only you arrived"

                        // when value == 2
                        // value - offset = 1 -> `one` plural form
                        _2="You and two other guest arrived"

                        // when value >= 3
                        other="You and # other guests arrived"
                    />
                    <Plural
                        value={number.iii}
                        offset={1}
                        // when value == 0
                        _0="Nobody arrived"

                        // when value == 1
                        _1="Only you arrived"

                        // when value == 2
                        // value - offset = 1 -> `one` plural form
                        _2="You and two other guest arrived"

                        // when value >= 3
                        other="You and # other guests arrived"
                    />
                </div>
                    <div className="about-title mb-3"><Trans id="about.title1">About Muzikol</Trans></div>
                    <div className="about-title mb-3"><Trans id="about.title1"></Trans></div>
                    <div className="about-content">
                        <Trans id="about.muzikol">
                        At ABEBOH, we belief that our Music reflects and shapes who we are as a people. How we behave, how we reflect and how we act is affected by the music we listen. A sense of communal Identity is found and shared in Music. Therefore our music is our heritage and our culture. Through our music, we identify with our people. We belief that music is food for the soul.
                        As an artist, a producer, a DJ, an African music lover, I discovered that there was need to bring to existence a place on the Internet where we can share, maintain ,support and grow Africa music. This can be done by solving the two major problems faced by all Artist in Africa that is: the problems of Music Distribution and the the problem of making money from their craft. Muzikol therefore comes with a solution to the above problems. Muzikol is an online music Market and social Network built to meet the needs of the Africa music Lovers and Artist. Muzikol connects Musicians with music lovers to deepen their relationship and grow the market for the African Music Industry. We do this by creating opportunities to share content, sell music, sell merchandise, sell event tickets, book artist directly, chats , posting etc.
                        Purchases can be done locally using Local payment methods such as MTN Mobile Money and internationally using Master and Visa Cards. Our Motto is “Music for Life”.
                        </Trans>
                    </div>
                </div>
               
                <br/>
                <div className="about-sub-title">
                    <Trans>About ABEBOH</Trans>
                </div>
                <div className="about-content">
                    <Trans id="about.abeboh1">
                        ABEBOH is a technology company located at Mile 18 Buea - Cameroon. It is a software and hardware building company, a music industry and an educational organization, founded in 2016 by Nges Brian and Co-founded by Dr. Chry Akem. ABEBOH has as a motto 
                    </Trans>
                    <span className="about-key-word"> <Trans id="about.abeboh2">
                        "A GOAL IS A DREAM WITH A PLAN AND A DEADLINE"
                    </Trans></span>.
                    <Trans> We have a vision which is </Trans> 
                    <span className="about-key-word"> <Trans id="about.abeboh3"> 
                        to make technology available and affordable to everyone
                    </Trans></span>. 
                    <Trans id="about.abeboh4"> 
                        We make sure we go above client expectations, we believe happy client is good business and best advertisement, ABEBOH team welcomes you!!!. 
                        At ABEBOH our clients are our number ONE Priority. Our teams of well exprerienced engineers from different backgrounds and from different countries who have worked with top world technolgy companies and on different world leading technology products welcome you.
                        At ABEBOH,
                    </Trans>
                     <span className="about-key-word"><Trans> There is always a way</Trans></span>.
                    <Trans id="about.abeboh5">
                        As technonology is evolving, we evolve with it. we build all types of softwares ranging from websites, mobile applications and desktop applications. This is done with modern technologies widely accepted by developers around the world. 
                        We Belief that the satisfaction of our customers is the best way for advertisement We develop, Websites, mobile apps and desktop apps of any type and size depending on the taste of our customers and enviroment Our teams are willing to learn and quickly adapt with new technologies. 
                        We are so flexible in the way we handle our clients.
                    </Trans>
                </div>
            </Container>
        );
    }
}
export default About;
