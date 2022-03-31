/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
          
class JoinUs extends React.Component {
   
    
 render(){
        return(
            <div>
 <div class="panel panel-default">
            <div class="panel-body">
                <h3>To Join Our Team </h3>
                <h5>Please provide your details</h5>
                
               
                
              
                <div class="form-group">
                                <input  type="text"  class="form-control" placeholder="Name" name="name">
                 </input>
                 </div>
                 <div class="form-group">
                                <input  type="text"  class="form-control" placeholder="Email" name="email">
                 </input>
                 </div>
                
                  <select class="form-control">
                            <option>Select Your Interest</option>
                            <option>Web Development</option>
                            <option>Android Application</option>
                            <option>Machine Learning</option>
                            <option>Big Data Analysis</option>
                            <option>Other</option>
                </select>
                
                             
                </div>
                <button onclick="fun()" type="Submit" class="btn btn-primary">Submit</button>
         
     </div>     
    </div>
    
            )   
}
}





