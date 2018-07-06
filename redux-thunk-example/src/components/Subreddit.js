import React, { Component } from 'react';
import {connect} from 'react-redux';

import rootReducer from '../ducks/reducer'


class Subreddit extends Component {
    constructor(){
        super()
        this.state = {
            subredditInput : '',
            loading: false
        }
    }

    componentDidMount(){
        this.props.selectedSubreddit
    }

    handleChange = (e) => {
        this.setState({subredditInput:e.target.value})
    }

    handleSubmit = (e) =>{
        this.props.selectedSubreddit
    }

    render() {
<<<<<<< HEAD
        // let isLoading = this.props.posts.length === 0
        // let mappedSubreddits = this.props.subreddits.map((el,i)=>{
        //         return(
        //             <option 
        //                 value={el} 
        //                 onClick={(e)=>{}}
        //                 key={i}
        //             >{el}</option>
        //         )
        //     }) 
=======
        console.log(this.props)
        // let isLoading = this.props.posts.length === 0
        let mappedSubreddits = this.props.subreddits.map((el,i)=>{
                return(
                    <option 
                        value={this.props.selectedSubreddit[i]} 
                        onChange={(e)=>{rootReducer.selectedSubreddit(e.target.value)}}
                        key={i}
                    >{el}</option>
                )
            }) 
>>>>>>> 1b2536361e45369b4d5fe45df9e3fce057a262aa
        return (
            <div>
                <h1>Subreddit's</h1>

                <div>
                    <h3>Add a Subreddit</h3>
                    <input type='text' className='input' onChange={this.handleChange}/>
                    <button >Submit</button>
                </div>
                <hr/>

                <h3>Select a Subreddit</h3>
                <select>
                    <option>something!</option>
                    {mappedSubreddits}
                    {this.props.posts}
                </select>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        subreddits: state.selectedSubreddit,
        posts: state.postsBySubreddit.items,
    }
}

export default connect(mapStateToProps, rootReducer)(Subreddit); 