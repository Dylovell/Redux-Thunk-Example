import React, { Component } from 'react';
import {connect} from 'react-redux';


class Subreddit extends Component {
    constructor(){
        super()
        this.state = {
            subredditInput : ''
        }
    }

    handleChange = (e) => {
        this.setState({subredditInput:e.target.value})
    }

    handleSubmit = (e) =>{


    }

    render() {
        let isLoading = this.props.posts.length === 0
        // let mappedSubreddits = this.props.subreddits.map((el,i)=>{
        //         return(
        //             <option 
        //                 value={el} 
        //                 onClick={(e)=>{}}
        //                 key={i}
        //             >{el}</option>
        //         )
        //     }) 
        return (
            <div>
                <h1>Subreddit's</h1>

                <div>
                    <h3>Add a Subreddit</h3>
                    <input type='text' className='input' onChange={this.handleChange}/>
                    <button >Submit</button>
                </div>
                <hr/>

                <h3>Select a Sybreddit</h3>
                <select>
                    <option>something!</option>
                    {/* <mappedSubreddits/> */}
                </select>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        subreddits: state.subreddits
    }
}

export default connect(mapStateToProps)(Subreddit); 