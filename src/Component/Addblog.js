import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Asset/css/style.css'

function Addblog(){

    let Nav = useNavigate();
    let [state, setState] = useState({
        images:"", category:"",author:"", des:"", s_des:""
    });

    const handleInputData =(e) =>{
        var name = e.target.name;
        var value = e.target.value;
        setState({
            ...state, [name] : value
        })
    }

    const submitData =(e) =>{
        e.preventDefault();
        fetch("http://localhost:3001/blog", {
            method : 'POST',
            body : JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res=>{console.log("data inserted");}).catch(err=>{console.log("data not found");})
    }
    

    return (
       <div>
         <form method='post' onSubmit={(e)=>submitData(e)}>
            <h2>Add Blog</h2>
            <hr/>
               <table border={1} align='center' className='form'>
                <div className='lab'>           
                    <label>Image: </label>
                    <input type="file" name='image' onChange={(e)=>handleInputData(e)}/>
                </div><br/>
                <div className='lab'>           
                    <label className='lab'>Author: </label>
                    <input type='text' name="author" onChange={(e)=>handleInputData(e)}/>
                </div><br/>
                <div className='lab'>           
                    <label>Category: </label>
                    <select name="category" onChange={(e)=>handleInputData(e)}>
                        <option>sports</option>
                        <option>news</option>
                        <option>technology</option>
                        <option>politics</option>
                    </select>
                </div><br/>
                <div className='lab'>           
                    <label>Description: </label>
                    <textarea name="des" onChange={(e)=>handleInputData(e)}/>
                </div><br/>
                <div className='lab'>           
                    <label>Second Description: </label>
                    <textarea name="s_des" onChange={(e)=>handleInputData(e)}/>
                </div>
                <br/>
               </table>
                <button type="submit" className="btn btn-primary m-2" >Add Blog</button>
                <button className="btn btn-success" onClick={()=>Nav("/blog")}>View Blog</button>
            </form>
       </div>
    );
}

export default Addblog;
