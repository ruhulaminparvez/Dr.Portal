import React from 'react';
import img1 from '../../../Assets/images/people1.png';
import img2 from '../../../Assets/images/people2.png';
import img3 from '../../../Assets/images/people3.png';
import TestimonialsCard from './TestimonialsCard';
import quote from '../../../Assets/icons/quote.svg';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: 'Winson Herry',
            from: 'California',
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img1
        },
        {
            id: 2,
            name: 'Kate Winslet',
            from: 'California',
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img2
        },
        {
            id: 3,
            name: 'John Mitchel',
            from: 'California',
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: img3
        }
    ]

    return (
        <div className='lg:px-52 mt-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className="text-lg text-cyan-400 pb-2">Testimonial</h4>
                    <h1 className="text-5xl font-bold">What Our Patients Says!</h1>
                </div>
                <figure className='w-16 lg:w-24'>
                    <img src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 py-16'>
                {
                    testimonialData.map(testimonial => <TestimonialsCard key={testimonial.id} testimonial={testimonial}></TestimonialsCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;