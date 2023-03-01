import React from 'react'
import {
    Link
  } from "react-router-dom"

const BlogHome = () => {
    const posts = [
        {
            id: 1,
            title: "lorem ipsum",
            desc: "loren",
            img: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
        },
        {
            id: 2,
            title: "lorem ipsum",
            desc: "loren",
            img: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
        },
        {
            id: 3,
            title: "lorem ipsum",
            desc: "loren",
            img: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
        },
        {
            id: 4,
            title: "lorem ipsum",
            desc: "loren",
            img: "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",
        },
    ];

    return (
        <main className="blogHome">
            <div className="posts">
                {posts.map(post=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link to={`/blog/post/${post.id}`}>
                                <h1>{post.title}</h1>
                                <p>{post.desc}</p>
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default BlogHome