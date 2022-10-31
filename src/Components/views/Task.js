import React, {FormEvent, useState} from 'react';
import spinner from "./Spin.gif";

const URLPost = "https://jsonplaceholder.typicode.com/posts";
const URLUser = "https://jsonplaceholder.typicode.com/users";

function delay(s){
    return new Promise((res, rej) => {
        setTimeout(res, s * 1000);
    });
}

function Task() {
    const [idPost, setIdPost] = useState("");
    const  [post, setPost] = useState("");
    const  [user, setUser] = useState("");
    const [error, setError] = useState("");
    const  [isLoading, setLoading] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        // setPost(undefined);
        setLoading(true);
        try{
            await  delay(2);
            const response = await fetch(`${URLPost}/${idPost}`);
            const dataPost = await response.json();
            const responseUser = await fetch(`${URLUser}/${idPost}`);
            const dataUser = await responseUser.json();
            setPost(dataPost);
            setUser(dataUser);
            setLoading(false);
        } catch (e)
        {
            setError("Что-то пошло не так...");
        } finally {
            setLoading(false);
        }
    }
    return <>
        <h3>Task</h3>
        <div>
            <form onSubmit={handleSubmit}>
                <input value={idPost} onChange={e => setIdPost(e.target.value) }/>

                <button disabled={isLoading}>Получить данные</button>
            </form>
        </div>
        <div>

        </div>
        {isLoading && <div><img src={spinner} alt={"spinner"}/> </div>}
        {error && <div>{error}</div>}
        <div>
            <b>{post.title}</b><br/>
            {post.body}<br/>
            <b>{user.name}</b><br/>
            {user.email}
        </div>
    </>;
}
export default Task;