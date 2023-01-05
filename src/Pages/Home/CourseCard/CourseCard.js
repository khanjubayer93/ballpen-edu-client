import React from 'react';

const CourseCard = ({ course }) => {
    const { image, title, description, duration, student, language, instructor, price, rating } = course;
    return (
        <div className="card w-auto image-full h-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>{duration}</p>
                <p>{student}</p>
                <p>{language}</p>
                <p>{rating}</p>
                <p>{instructor}</p>
                <p>{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;