function Post(props){
    // console.log("key:"+props.key);
    console.log("key:"+props.tt);
    console.log("id:"+props.id);
    console.log("title:"+props.title);

    return(
        <button>
            {props.tt}
        </button>
    );
}
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    const content2 = posts.map((post) =>
        <Post
            tt={post.title}
            id={post.id}
            title={post.title} />

        /* <Post
            key={post.title}
            id={post.id}
            title={post.title} /> */
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
            <hr />
            {content2}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('example')
);



/* const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((item) =>
  <li>{item}</li>
);
 
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('example')
); */