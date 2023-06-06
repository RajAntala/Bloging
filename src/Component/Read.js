import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../Asset/css/style.css'

function Read(){

    let [data, setData] = useState([]);
    let [active, setactive] = useState(true)

    let {id} =useParams();

    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/blog/'+id, {
            }).then(res => {
                res.json().then(record => {
                    let datarecord = [record]
                    setData(datarecord);
                    setactive(false)
                })
                .catch(err =>{
                    console.log(err);
                })
                
            }).catch(err => { console.log(err) })
        }
    },[data])



    return (
        <div>
            <section className='row justify-content-center'>
                {data.map((v,i)=>{
                    return(
                        <div className='col-md-8'>
                            <div className="form form-control">
                                <img className='img-fluid row' src={require ("../Asset/image/"+v.images)}/>
                                <h1 className='text-start ms-4'>{v.title}</h1>
                                <h3 className='text-start ms-4'>{v.category}</h3>
                                <h4 className='text-start ms-4'>{v.author}</h4>
                                <p className='text-start ms-4'>{v.des}</p>
                                <p className='text-start ms-4'>{v.s_des}</p>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}

export default Read;
