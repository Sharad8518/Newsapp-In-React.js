
import React, { Component } from 'react'

import Newsitem from './Newsitem';
import Spinner from './Spinner';




export default class News extends Component {

  



  
  
        
        
        
         
        
        
        
             constructor(){
             super();
           console.log("hello how are")
        
            this.state ={
        
                
             articles:[],
            loading:false
        
        
             }
            }
        
       async     componentDidMount(){
            
                console.log("cdn");
                let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=da6d944cfb2548339440bd132bfc5c57&page1";
                let data = await fetch(url);
               let persedData = await data.json()
               console.log(persedData);
               this.setState ({articles:persedData.articles})

            }
            handleNextClick = async()=>{
 
                if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))

                console.log("Next");

                let url='https://newsapi.org/v2/top-headlines?country=us&apiKey=da6d944cfb2548339440bd132bfc5c57&page=$(this.state.page+1)&pageSize=${this.props.pageSize}';

                this.setState({loading:true})
                
                let data = await fetch(url);
               let persedData = await data.json()
               console.log(persedData);
               
                 this.setState({
                    page:this.state.page+1,
                    articles:persedData.articles,
                    loading:false
                 })

            }
handlePrevClick=async()=>{
console.log("Previous");

let url ='https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da6d944cfb2548339440bd132bfc5c57&page=$(this.state.page-1)';

             this.setState({loading:true})
                let data = await fetch(url);
               let persedData = await data.json()
               console.log(persedData);
               
                 this.setState({
                  
                    page:this.state.page-1,
                    articles:persedData.articles,
                    loading:false
                })


}


    render() {
        return (



            
          <div>
<div className="container my-4 mx-4 ">

    {this.state.loading&&<Spinner/>}


<div className="row">
               {!this.state.loading && this.state.articles.map((element)=>(



<div className="col-md-4">

        <Newsitem title={element.title} description={element.description} imageUri={element.urlToImage} newsUrl={element.url} />
        </div>
               
               ))}

<div class="d-flex justify-content-between">
<button disabled={this.state.page<=1}   type="button" className="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
<button disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
</div>



</div>
           



</div>
               

</div>



            
        )
    }
}
