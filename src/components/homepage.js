import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Home extends Component{
    render(){
        return(
            
                <div style ={{width: '100%', margin : 'auto'}}>
                    
                    <Grid className = "landing-grid">
                        
                        <Cell col={12}>
                            <div className ="myName">
                            <h1>Jethro Zhou</h1>
                            </div>
                            <img
                            src ="https://i.imgur.com/XtRX22T.png"
                            alt ="avatar"
                            className ="avatar-img"
                            />
                            <div className ="banner-text">
                                <h1>Full Stack Web Developer</h1>
                                <hr/>
                                <p>HTML/CSS | JavaScript | React.js | Node.js | Java | Vue.js | SQL </p>
                                <div className ="social-links">
                                    {/*LinkedIn */}
                                    <a href="https://www.linkedin.com/in/jethro-zhou-8107a61a2" rel="noopener noreferrer" target ="_blank">
                                        <i className = "fa fa-linkedin-square"  aria-hidden="true"/>
                                    </a>
                                    {/*Github */}
                                    <a href="https://github.com/collieflower98" rel="noopener noreferrer" target ="_blank">
                                        <i className = "fa fa-github-square"  aria-hidden="true"/>
                                    </a>
                                    {/*Facebook */}
                                    <a href="https://www.facebook.com/jethro.zhou" rel="noopener noreferrer" target ="_blank">
                                        <i className = "fa fa-facebook-square"  aria-hidden="true"/>
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            
        )
    }
}
export default Home;