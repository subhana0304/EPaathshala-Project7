import React from 'react';

const Categories = () => {

    const categories = [
        {
            "id": 1,
            "img": "job1.png",
            "title": "Account & Finance",
            "text": "300 Jobs Available"
        },
        {
            "id": 2,
            "img": "job2.png",
            "title": "Creative Design",
            "text": "100+ Jobs Available"
        },
        {
            "id": 3,
            "img": "job3.png",
            "title": "Marketing & Sales",
            "text": "150 Jobs Available"
        },
        {
            "id": 4,
            "img": "job4.png",
            "title": "Engineering Job",
            "text": "224 Jobs Available"
        }
    ]

    return (
        <div className='mx-6 md:mx-12 text-center my-12'>
            <h1 className='text-success text-3xl font-semibold mb-2'>Categories Section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam laboriosam nam nemo assumenda blanditiis eligendi quibusdam voluptatum obcaecati quia suscipit praesentium corporis, impedit dolorem tempore cupiditate a unde nostrum!</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
            {
                categories.map(category => <div key={category.id}>
                    <div className='text-left bg-slate-50 p-10 rounded space-y-3'>
                        <img src={category.img} alt="" />
                        <h5 className='font-semibold text-xl'>{category.title}</h5>
                        <p>{category.text}</p>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Categories;