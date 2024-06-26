import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';


const TermsCondition = () => {
    const [terms, setTerms] = useState([]);
    useEffect(() => {
        fetch('terms.json')
        .then(res=>res.json())
        .then(data=>setTerms(data))
      }, []);
    return (
        <div>
             <h1 className='text-2xl font-bold text-center'>Terms and Condition</h1>

    {
        terms.map(term=><div key={term.id}>
             <h2 className='text-xl font-bold mt-2'> {term.name}</h2>
           <ul >
            <li className='list-disc text-base font-medium my-2'>
                {term?.condition1}</li>
            <li className=' text-base font-medium my-2'>
                {term?.condition2}</li>
            <li className=' text-base font-medium my-2'>
                {term?.condition3}</li>
                       </ul>
        </div>)
    }

           
           <div className='text-center'>
           <Link className='btn btn-outline mt-10 ' to="/signup">Back ti SignUp</Link>
           </div>
          
        </div>
    );
};

export default TermsCondition;