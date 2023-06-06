import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../Asset/css/style.css'


const Blog =()=> {

    let [data, setData] = useState('');
    let [active, setactive] = useState(true)

    useEffect(() => {
        if (active) {
            fetch('http://localhost:3001/blog', {
            }).then(res => {
                res.json().then(record => {
                    setData(record);
                    console.log(record);
                    setactive(false)
                })
                .catch(err =>{
                    console.log(err);
                })
                
            }).catch(err => { console.log(err) })
        }
    },[data])

    const filter = async (cateItem) => {
        await fetch('http://localhost:3001/blog', {
        }).then(res => {
            res.json().then(record => {
                setactive(false);
                if (cateItem) {
                    let updateData = record.filter((v, index) => {
                        if (v.category == cateItem) {
                            return v;
                        }
                    });
                    setData(updateData)
                }
                else {
                    setData(record);
                }
            });
        }).catch(err => { console.log(err) })
    }

    console.log(data);

    return (
        <div>
            
            <div>
                <h1>Blog</h1>
                <hr/>
                <br/>
                <button className='me-4' onClick={() => filter('')}>All</button>
                <button className='me-4' onClick={() => filter('news')}>News</button>
                <button className='me-4' onClick={() => filter('sports')}>Sports</button>
                <button className='me-4' onClick={() => filter('technology')}>Technology</button>
                <button className='me-4' onClick={() => filter('politics')}>politics</button>

                <section className='row'>
                    {data?data.filter((vdata,id)=>{
                        return vdata;
                    }).map((v,i)=>{
                        return(
                          <div className='col-md-4'>
                            <div className="form-control mt-3">
                                <h1 className='text-start'>{v.title}</h1>
                                <img className='img-fluid' src={require ("../Asset/image/"+v.images)}/>
                                <h3 className='text-start ms-4'>{v.category}</h3>
                                <h4 className='text-start ms-4'>{v.author}</h4>
                                <p className='text-start ms-4'>{v.des}</p>
                                <NavLink to={'/read/'+v.id}><button className='btn btn-primary'>Read More</button></NavLink>
                            </div>
                          </div>
                        )
                    }):""}
                </section>
            </div>
        </div>
    )
}
export default Blog;
